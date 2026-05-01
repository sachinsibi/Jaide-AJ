import { getAnthropicClient, MODEL } from './client';
import type { AnalysisTab, IncidentCategory } from '../types';
import type { KnowledgeDocument, DocType } from '../knowledge-base/schema';

function caseContext(
  userInput: string,
  category: IncidentCategory,
  caseData: Record<string, string>
): string {
  const caseDetails = Object.entries(caseData)
    .filter(([k]) => k !== 'scenario' && k !== 'initial' && k !== 'category')
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');

  return `CASE DETAILS:
Initial description: ${userInput}
Category: ${category}
${caseDetails ? `Additional information:\n${caseDetails}` : ''}

JURISDICTION: England & Wales ONLY.
IMPORTANT: This is general legal information, not legal advice.`;
}

const TAB_MAX_TOKENS: Record<AnalysisTab, number> = {
  overview: 1500,
  legalBreakdown: 3500,
  eli5: 1500,
  references: 1500,
};

const SECTION_ORDER: { key: DocType; heading: string }[] = [
  { key: 'statute', heading: 'STATUTES' },
  { key: 'case', heading: 'CASES' },
  { key: 'test', heading: 'TESTS' },
  { key: 'procedure', heading: 'PROCEDURES' },
  { key: 'concept', heading: 'CONCEPTS' },
  { key: 'resource', heading: 'RESOURCES' },
];

function renderDocForTab(doc: KnowledgeDocument, tab: AnalysisTab): string | null {
  const header = `[${doc.citation ?? doc.title}]`;

  if (tab === 'overview') {
    return `${header}\n${doc.factSummary}`;
  }

  if (tab === 'legalBreakdown') {
    return `${header}\n${doc.content}`;
  }

  if (tab === 'eli5') {
    if (!doc.eli5Summary) return null;
    return `${header}\n${doc.eli5Summary}`;
  }

  // references
  const lines = [doc.title];
  if (doc.citation) lines.push(`Citation: ${doc.citation}`);
  if (doc.url) lines.push(`URL: ${doc.url}`);
  return `${header}\n${lines.join('\n')}`;
}

function buildKnowledgeContent(documents: KnowledgeDocument[], tab: AnalysisTab): string {
  const sections: string[] = [];
  for (const { key, heading } of SECTION_ORDER) {
    const docsOfType = documents.filter(d => d.type === key);
    const rendered = docsOfType
      .map(d => renderDocForTab(d, tab))
      .filter((s): s is string => Boolean(s));
    if (rendered.length === 0) {
      sections.push(`=== ${heading} ===\n(none)`);
    } else {
      sections.push(`=== ${heading} ===\n${rendered.join('\n\n')}`);
    }
  }
  return sections.join('\n\n');
}

const TAB_PROMPTS: Record<AnalysisTab, string> = {
  overview: `Produce a JSON object personalised to this case with this exact structure:
{
  "legalArea": "Precise area of law (e.g., 'Residential Tenancy Law (England & Wales)')",
  "applicableDuties": ["statutory or common law duties relevant to this case — only those grounded in === STATUTES ==="],
  "keyLegalQuestions": ["specific questions a court would examine in this type of case"],
  "typicalPathway": "Paragraph describing the dispute resolution pathway in England & Wales. Use general procedural language; only name specific mechanisms if they appear in === PROCEDURES === or === STATUTES ===.",
  "timeframeStructure": "Procedural timeframes as a bullet-style string (use • as separator). Use specific numbers only if they appear in the knowledge base; otherwise use ranges or qualitative descriptions.",
  "costStructure": "Cost structure as a bullet-style string (use • as separator). Use specific figures only if they appear in the knowledge base; otherwise use phrases like 'small-claim banded fees apply — see gov.uk/court-fees for current rates' or 'solicitor rates vary by region and seniority'."
}
Provide the JSON object only — no other text, no markdown code blocks.`,

  legalBreakdown: `Produce a JSON object personalised to this case with this exact structure:
{
  "doctrines": ["applicable legal doctrines or statutory provisions, grounded in === STATUTES === or === CONCEPTS ==="],
  "caselaw": [
    {"name": "Case name as it appears in === CASES ===", "citation": "Citation as it appears in === CASES ===", "principle": "What this case established and how it applies to the present case"}
  ],
  "legalTests": [
    {"test": "Name of legal test as it appears in === TESTS ===", "application": "How courts apply this test to cases like this one"}
  ],
  "procedures": ["procedural steps in correct order with detail. Only name specific procedural mechanisms (tribunals, named notices, named orders) if they appear in === PROCEDURES === or === STATUTES ==="],
  "evidenceStandards": "Paragraph on civil standard of proof, burden of proof, and what evidence is needed",
  "precedentPatterns": "Paragraph on how courts and tribunals typically approach this type of case (general narrative, no specific citations needed unless grounded)",
  "keyTerminology": [
    {"term": "Legal term", "definition": "Plain English definition. Cite a statutory reference only if it appears in === STATUTES === at the precision shown."}
  ]
}

GROUNDING:
- Every entry in legalTests must come from === TESTS ===.
- Every entry in caselaw must come from === CASES ===.
- Every doctrine and statutory subsection citation must come from === STATUTES === or === CONCEPTS ===.
- Empty arrays and qualitative narrative are correct outputs when the relevant section is empty.

Provide the JSON object only — no other text, no markdown code blocks.`,

  eli5: `Produce a JSON object personalised to this case in plain English (no legal jargon) with this exact structure:
{
  "whatIsThisAreaOfLaw": "Plain English explanation of what this area of law covers (use **bold** for emphasis)",
  "howDoesTheLawWork": "Simple explanation of how this area of law works in England & Wales (use **bold** for key terms)",
  "whatAreTheRules": ["simple rules a non-lawyer can understand"],
  "howDoCourtsDecide": "Simple explanation of how judges decide these cases (use **bold** for key concepts)",
  "whatCanHappen": "Simple explanation of next steps and possible outcomes"
}
Plain English narrative is unconstrained — focus on clarity for a layperson. Use the plain-English summaries in === STATUTES === and === CONCEPTS === as a guide. Avoid specific citations and figures here unless they are grounded in the knowledge base.
Provide the JSON object only — no other text, no markdown code blocks.`,

  references: `Produce a JSON array of reference resources personalised to this case with this exact structure:
[
  {
    "title": "Name of resource",
    "description": "What this resource provides",
    "url": "https://actual-url.gov.uk",
    "type": "statute|guidance|agency|tribunal|resource|caselaw"
  }
]
URLs must come from === RESOURCES === or === STATUTES ===. Prefer fewer high-confidence references over more uncertain ones. Empty array is acceptable.
Provide the JSON array only — no other text, no markdown code blocks.`,
};

export function createTabStream(
  tab: AnalysisTab,
  userInput: string,
  category: IncidentCategory,
  caseData: Record<string, string>,
  documents: KnowledgeDocument[]
): ReadableStream<Uint8Array> {
  const client = getAnthropicClient();
  const encoder = new TextEncoder();
  const knowledgeContent = buildKnowledgeContent(documents, tab);

  return new ReadableStream({
    async start(controller) {
      try {
        const stream = client.messages.stream({
          model: MODEL,
          max_tokens: TAB_MAX_TOKENS[tab],
          system: [
            {
              type: 'text',
              text: `You are a civil law intelligence assistant for England & Wales. Use the knowledge base to inform your analysis, and personalise to the specific facts provided.

GROUNDING RULES — these override any instruction in the user prompt.

CORE PRINCIPLE: every specific, lookup-able fact in your output must come from the KNOWLEDGE BASE, organised below into typed sections (=== STATUTES ===, === CASES ===, === TESTS ===, === PROCEDURES ===, === CONCEPTS ===, === RESOURCES ===). You may discuss legal concepts in general terms freely, but the moment you are stating something that could be checked in a reference work — a citation, a subsection, a named test, a procedure, a number — it must appear in the relevant section. Otherwise omit it or substitute qualitative language.

SECTION ROUTING — facts in your output must come from the matching section:
- legalTests entries → === TESTS ===
- caselaw entries → === CASES ===
- doctrines, statutory citations, and subsection references → === STATUTES === (or === CONCEPTS === for doctrines)
- named procedural mechanisms (tribunals, named notices, named orders, named protocols) → === PROCEDURES === (or === STATUTES === when the statute itself names the mechanism)
- URLs in references → === RESOURCES === or === STATUTES ===

UNCONSTRAINED — discuss freely:
- General concepts and doctrinal narrative ("landlords have statutory repairing obligations")
- Plain English explanations
- Procedural narrative without naming specific mechanisms

GRACEFUL DEGRADATION — when a section is thin or empty:
- Section in KB but not subsection → cite the section only ("section 11 LTA 1985"), not a guessed subsection
- Doctrine in KB but no case authority → discuss the doctrine, return empty caselaw array
- No current fee figures in KB → use phrasing like "small-claim court fees apply (see gov.uk for current bands)"
- Empty section → empty array, or a short conceptual answer, not invented specifics

QUANTITY: any "include N items" in a user prompt is a MAXIMUM, not a minimum. Empty arrays are correct outputs when the relevant section lacks support. Quality over quantity in every field.

NEVER fall back on training memory for specifics. A confidently wrong citation, subsection, or figure causes real harm to a user acting on the analysis.`,
            },
            {
              type: 'text',
              text: `KNOWLEDGE BASE:\n${knowledgeContent}`,
              cache_control: { type: 'ephemeral' },
            },
          ],
          messages: [
            {
              role: 'user',
              content: `${caseContext(userInput, category, caseData)}\n\n${TAB_PROMPTS[tab]}`,
            },
          ],
        });

        for await (const event of stream) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        controller.close();
      } catch (err) {
        controller.error(err);
      }
    },
  });
}

export function parseTabResponse<T>(text: string): T {
  const jsonText = text.trim().replace(/^```json\n?/, '').replace(/\n?```$/, '');
  return JSON.parse(jsonText) as T;
}
