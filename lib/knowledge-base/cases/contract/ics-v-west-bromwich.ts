import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-ics-v-west-bromwich',
  type: 'case',
  category: 'contract-service',
  title: 'Investors Compensation Scheme v West Bromwich BS [1998] 1 WLR 896 (HL)',
  jurisdiction: 'england-wales',
  citation: 'Investors Compensation Scheme Ltd v West Bromwich Building Society [1998] 1 WLR 896 (HL)',
  url: 'https://www.bailii.org/uk/cases/UKHL/1997/28.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['interpretation', 'meaning', 'ambiguous', 'contract terms', 'plain meaning', 'context', 'commercial sense'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Modern principles of contractual interpretation. The meaning of a contract is what the document would convey to a reasonable person having all the background knowledge reasonably available to the parties at the time of contract. Ordinary natural meaning may yield to commercial common sense where it produces an absurd result.',
  content: `Investors Compensation Scheme v West Bromwich BS [1998] 1 WLR 896 (House of Lords).

Facts: Investors had been mis-sold home income plans by financial advisers. They assigned their claims to the ICS but the assignment language was ambiguous. The question was whether a particular class of claim had been assigned. The case turned on construction of the assignment.

Held (HL): the assignment was construed in favour of the ICS on a purposive reading. Lord Hoffmann took the opportunity to restate the modern English principles of contractual interpretation.

Lord Hoffmann's five principles:

(1) Interpretation = the meaning the document would convey to a reasonable person with the background knowledge reasonably available to the parties at the time of contract.

(2) "Background" includes anything affecting how a reasonable person would understand the language, excluding prior negotiations and subjective intent (refined by Chartbrook v Persimmon [2009] UKHL 38 and Arnold v Britton [2015] UKSC 36).

(3) Subjective intent and prior negotiations are excluded on policy grounds.

(4) Document-meaning differs from word-meaning. Words are dictionary/grammar; the document is what the parties using those words against the background would reasonably have meant.

(5) Where natural meaning yields an absurd commercial result, a different meaning may be inferred — but where wording is clear, commercial common sense cannot rewrite a bad bargain (Arnold v Britton; Wood v Capita [2017] UKSC 24).

Application:
- Plain meaning prevails where unambiguous.
- For genuine ambiguity, interpret by context, commercial purpose, and parties' background knowledge.
- Subjective evidence of intent is inadmissible.
- Consumer ambiguity is construed against the trader (CRA 2015 s.69 contra proferentem).
- Entire-agreement clauses exclude collateral/implied terms but not the interpretive process itself.`,
  tags: ['ICS-v-West-Bromwich', 'contractual-interpretation', 'reasonable-person', 'commercial-common-sense', 'background-knowledge'],
};

export default doc;
