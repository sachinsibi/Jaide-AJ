# KB.md — Knowledge Base Rebuild Instructions

This document is a brief for Claude to rebuild the JAIDE knowledge base from scratch under a new architecture. Read it end-to-end before starting. Read [CLAUDE.md](CLAUDE.md) for product context.

---

## Why we're rebuilding

The current KB at [lib/knowledge-base/](lib/knowledge-base/) has three structural problems that no amount of content-editing can fix:

1. **Docs are tab-shaped, not fact-shaped.** Each category has an `*-overview` doc whose sections (`Applicable duties`, `Typical pathway`, `Timeframes`, `Costs`) mirror the Overview tab schema in [lib/llm/analyze.ts](lib/llm/analyze.ts). The model just paraphrases that doc. So errors in one source doc become errors in one tab forever, and the LLM never synthesises across primary sources.

2. **Retrieval is purely similarity-based.** Some facts must always appear (e.g., the Homes (Fitness for Human Habitation) Act 2018 for any tenancy disrepair case) regardless of whether the user's words happen to lexically match. Pure embedding ranking can't guarantee that.

3. **Docs are blobs.** Each "doc" mixes 5-8 distinct facts into one wall of text. Embedding similarity is computed against the whole blob, so a query about "section 21 prescribed information" matches the same doc as a query about "section 11 disrepair" — precision suffers.

The new KB fixes all three: atomic single-fact docs, pinned + trigger-gated retrieval, and tab-aware filtering.

---

## Scope of this work

In scope:
- New folder structure under [lib/knowledge-base/](lib/knowledge-base/)
- New `KnowledgeDocument` schema in `lib/knowledge-base/schema.ts`
- New retriever in [lib/rag/index.ts](lib/rag/index.ts) implementing pinned + trigger + tab-filtered retrieval
- Update to [lib/llm/analyze.ts](lib/llm/analyze.ts) so the prompt groups context by doc type
- Update to [scripts/build-embeddings.ts](scripts/build-embeddings.ts) for versioned embeddings
- Lint script enforcing doc invariants
- Golden test fixtures (one per category)

Out of scope:
- Changes to tab schemas in [lib/llm/analyze.ts](lib/llm/analyze.ts) (the JSON output shape stays identical)
- Changes to [app/api/analysis/route.ts](app/api/analysis/route.ts) beyond what retrieval signature changes require
- Changes to UI components

Jurisdiction: **England & Wales only**, throughout. Never include other jurisdictions.

---

## Doc schema

Create `lib/knowledge-base/schema.ts`:

```ts
import type { IncidentCategory } from '../types';

export type DocType = 'statute' | 'case' | 'test' | 'procedure' | 'concept' | 'resource';
export type Tab = 'overview' | 'legalBreakdown' | 'eli5' | 'references';

export interface KnowledgeDocument {
  id: string;
  type: DocType;
  category: IncidentCategory | 'general';
  title: string;
  jurisdiction: 'england-wales';

  // Provenance — required on every doc
  citation?: string;             // e.g., 'Landlord and Tenant Act 1985, s.11'
  url?: string;                  // legislation.gov.uk / bailii.org / official source
  inForce: boolean;              // false flips the doc out of retrieval
  inForceNote?: string;          // e.g., 'Abolished by Renters' Rights Act 2024 from [date]'
  lastVerified: string;          // ISO date 'YYYY-MM-DD'
  version: string;               // ISO date — bump when content changes; embedding key

  // Retrieval routing
  pinFor?: IncidentCategory[];   // Always retrieved for these categories (skips similarity)
  triggers?: string[];           // Lower-case substrings; if any present in case text, doc is eligible
  tabs: Tab[];                   // Which tabs may surface this doc

  // Content layers — different tabs read different fields
  factSummary: string;           // 1-2 lines; Overview reads this
  eli5Summary?: string;          // Plain English, no jargon; ELI5 reads this
  content: string;               // Full primary text; Legal Breakdown reads this

  tags: string[];
}
```

Notes:
- `pinFor` and `triggers` are mutually exclusive in spirit: if `pinFor` is set, `triggers` is ignored. A doc is either always-on or trigger-gated.
- `inForce: false` docs are **excluded from retrieval entirely**. Use `inForceNote` to record why; the doc remains in the corpus for historical reference and for the day it gets superseded by a successor doc.
- `version` is an ISO date string. The build script uses `${id}@${version}` as the embedding key so only changed docs are re-embedded.

---

## Folder structure

```
lib/knowledge-base/
  schema.ts
  registry.ts                     # combines + exposes lookups
  embeddings.json                 # built artifact (gitignored if it grows large; check current convention)

  statutes/
    tenancy/
      lta-1985-s11.ts
      fitness-for-habitation-2018.ts
      housing-act-1988-s21.ts
      housing-act-2004-s213.ts
      protection-from-eviction-1977.ts
      deregulation-2015-s33.ts
      renters-rights-2024-status.ts
    motor/
    contract/
    employment/
    property/
    general/

  cases/
    tenancy/
      quick-v-taff-ely.ts
      wallace-v-manchester.ts
      southwark-v-mills.ts
      ...
    motor/ ...
    ...

  tests/
    tenancy/
      s11-disrepair-test.ts
      s21-validity-test.ts
      quiet-enjoyment-test.ts
    ...

  procedures/
    tenancy/
      pre-action-protocol-housing-conditions.ts
      environmental-health-hhsrs-route.ts
      county-court-disrepair-claim.ts
      cpr-part-55-possession-defence.ts
      first-tier-tribunal-property-chamber.ts
    ...

  concepts/
    tenancy/
      quiet-enjoyment.ts
      retaliatory-eviction.ts
      assured-shorthold-tenancy.ts
    ...

  resources/                      # cross-category external links
    shelter.ts
    citizens-advice.ts
    gov-uk-eviction.ts
    legislation-gov-uk.ts
    bailii.ts
```

One file = one fact. **Hard cap: 400 words per doc.** If a file approaches the cap, split it. Atomicity is the whole point.

`registry.ts` exports the combined corpus and the lookup helpers (`getDocumentsByCategory`, `getDocumentById`, `getAllDocuments`) — same external interface as the current [lib/knowledge-base/index.ts](lib/knowledge-base/index.ts).

---

## Retrieval rules

Replace [lib/rag/index.ts](lib/rag/index.ts) with this logic:

```ts
export async function retrieve(
  query: string,
  category: IncidentCategory,
  tab: Tab,
  topK?: number
): Promise<KnowledgeDocument[]> {
  const all = getDocumentsByCategory(category)
    .filter(d => d.inForce)
    .filter(d => d.tabs.includes(tab));

  // 1. Pinned docs always included, no similarity check
  const pinned = all.filter(d => d.pinFor?.includes(category));

  // 2. Trigger-gated docs eligible only if any trigger term appears in query
  const lower = query.toLowerCase();
  const eligible = all.filter(d =>
    !pinned.includes(d) &&
    (!d.triggers?.length || d.triggers.some(t => lower.includes(t.toLowerCase())))
  );

  // 3. Embedding similarity ranks the rest
  const limit = topK ?? Math.max(0, eligible.length); // pass-through default
  const ranked = await embeddingRank(query, eligible, limit);

  return [...pinned, ...ranked];
}
```

Add `tab` as a parameter to the `retrieve` call in [app/api/analysis/route.ts](app/api/analysis/route.ts). Keep the existing `[rag]` log line.

`embeddingRank` is the existing `retrieveTopK` from [lib/rag/retriever.ts](lib/rag/retriever.ts) — no changes there.

### Tab → type allow-list

Enforce this when authoring docs (`tabs` field on each doc). It is *not* enforced by the retriever — the retriever trusts the `tabs` field — but it should be respected by every doc you create:

| Tab             | Permitted types                                          |
| --------------- | -------------------------------------------------------- |
| overview        | `statute`, `procedure`                                   |
| legalBreakdown  | `statute`, `case`, `test`, `procedure`, `concept`        |
| eli5            | `concept`, `statute` (must have `eli5Summary` populated) |
| references      | `statute`, `resource` (must have `url` populated)        |

---

## Prompt changes

In [lib/llm/analyze.ts](lib/llm/analyze.ts), the `knowledgeContent` joiner currently produces `[TYPE] title\ncontent` separated by `---`. Replace it with type-grouped sections so the model knows what each chunk is for:

```
=== STATUTES ===
[Landlord and Tenant Act 1985, s.11]
{factSummary or content depending on tab}

[Homes (Fitness for Human Habitation) Act 2018]
...

=== CASES ===
[Quick v Taff-Ely BC [1986] QB 809]
...

=== TESTS ===
=== PROCEDURES ===
=== CONCEPTS ===
=== RESOURCES ===
```

Per-tab content selection inside the joiner:
- Overview → `factSummary` only (keep context lean)
- Legal Breakdown → full `content`
- ELI5 → `eli5Summary` (skip docs that don't have one)
- References → `title`, `citation`, `url` only

Then update the grounding rules block in the system prompt so it can reference sections by name:
- "Every entry in `legalTests` must come from `=== TESTS ===`."
- "Every entry in `caselaw` must come from `=== CASES ===`."
- "URLs in references must come from `=== RESOURCES ===` or `=== STATUTES ===`."

This makes grounding mechanical instead of vibes-based.

---

## Build script

Update [scripts/build-embeddings.ts](scripts/build-embeddings.ts):

- Embed each doc using `${id}@${version}` as the key.
- Read existing `embeddings.json`; only re-embed entries whose key isn't present.
- Write a sorted JSON output for deterministic diffs.
- Embed the **`content`** field (not `factSummary` or `eli5Summary`) for similarity matching.

---

## Lint script

Create `scripts/lint-kb.ts` that fails CI if any doc violates:

1. Word count on `content` ≤ 400.
2. `lastVerified` within the last 12 months of today.
3. `version` is a valid ISO date.
4. If `tabs.includes('eli5')`, then `eli5Summary` is non-empty.
5. If `tabs.includes('references')`, then `url` is non-empty.
6. If `type === 'statute'` or `type === 'case'`, then `citation` is non-empty.
7. `pinFor` is empty when `triggers` is non-empty (and vice versa).
8. Doc IDs are unique across the corpus.
9. Every doc with `inForce: false` has an `inForceNote`.

Wire it into `package.json` as `npm run lint:kb`.

---

## Golden test fixtures

Create `scripts/test-retrieval.ts` and a `tests/kb-fixtures/` folder. Each fixture is a JSON file:

```json
{
  "name": "tenancy-damp-mould-with-vulnerable-occupant",
  "category": "tenancy",
  "userInput": "My flat in Manchester has had a serious damp and mould problem...",
  "caseData": { "issue": "...", "evidence": "..." },
  "expectedDocs": {
    "overview": ["statute-lta-1985-s11", "statute-fitness-habitation-2018", "procedure-environmental-health-hhsrs"],
    "legalBreakdown": ["statute-lta-1985-s11", "statute-fitness-habitation-2018", "case-quick-v-taff-ely", "test-s11-disrepair-test", "procedure-pre-action-protocol-housing-conditions"]
  }
}
```

The script runs `retrieve()` for each tab in each fixture and asserts every `expectedDocs[tab]` ID is in the retrieved set. Fails CI if not.

Author at least one fixture per category. The damp/mould scenario above is the canonical tenancy fixture — its full text is in the conversation history if needed, otherwise reconstruct from the description.

---

## Reference content to migrate

The current KB at [lib/knowledge-base/categories/](lib/knowledge-base/categories/) contains usable raw material — extract facts from it but don't carry over its structure. **Specific corrections to apply during migration:**

- **FTT / RRO / improvement notice routing is wrong** in `tenancy-overview` and `tenancy-procedure`. Improvement notices are issued by local authorities under Pt 1 Housing Act 2004; the FTT only sees them on landlord appeal. RROs (Housing & Planning Act 2016) require a specific qualifying offence (unlicensed HMO, illegal eviction, breach of banning order, breach of improvement notice). Don't put them at the front of the tenant-led pathway. The County Court is the **primary** route for tenant-led disrepair claims (injunction + damages); HHSRS/environmental health is parallel/complementary.

- **Add Homes (Fitness for Human Habitation) Act 2018** as a pinned tenancy statute. Inserts s.9A into LTA 1985; gives tenants a direct cause of action for unfit dwellings without needing council involvement. Lead statute for damp/mould cases involving health impact.

- **Add Pre-Action Protocol for Housing Conditions Claims (England)** as a tenancy procedure. (Old name "Housing Disrepair Cases" was renamed in 2003.) Mandatory before issuing disrepair proceedings.

- **Complete the s.21 validity prerequisites**. Current list misses Gas Safety Certificate and "How to Rent" booklet. Full list: deposit protected within 30 days, prescribed information served (separate requirement from protection itself), Gas Safety Certificate served before occupation, EPC provided, "How to Rent" booklet provided, HMO licensing if required, ≥2 months' notice, after first 4 months of tenancy. Don't conflate deposit-protected with prescribed-info-served — they're separate s.213 requirements.

- **Renters' Rights Act 2024 status**. Verify live commencement status from gov.uk before migrating any s.21 content. If s.21 is abolished or in transition by today's date, mark `housing-act-1988-s21.ts` with `inForce: false` (or set `inForceNote` describing the transition window) and create a successor doc for the replacement regime.

For other categories, audit similarly — but no specific known errors are flagged here.

---

## Migration order

1. Schema + registry skeleton + retriever changes against a stub corpus of 3-4 docs. Run the existing damp/mould scenario manually and verify pinned/trigger logic works.
2. Update `analyze.ts` prompt to consume the new typed grouping.
3. Update `build-embeddings.ts` for versioned keys.
4. Migrate **tenancy** category in full (estimate 25-35 atomic docs). This is the validation pass — if the schema is wrong, you find out here.
5. Add lint script + tenancy golden fixture. Run both. Fix anything they catch.
6. Migrate the other 5 categories one at a time, adding a golden fixture per category.
7. Delete the old [lib/knowledge-base/categories/](lib/knowledge-base/categories/) folder.
8. Rebuild embeddings.json from scratch (delete + regenerate, since IDs and versions all changed).

Verify after each step:
- `npm run build` passes.
- `npm run lint:kb` passes.
- Golden tests pass for migrated categories.
- A manual smoke test of the damp/mould scenario produces an Overview tab that mentions Fitness for Habitation 2018 and a Legal Breakdown tab whose `procedures` array includes the Pre-Action Protocol.

---

## Acceptance criteria

The rebuild is complete when:

- [ ] All 6 categories migrated; old `categories/` folder deleted.
- [ ] Every doc passes lint.
- [ ] Every category has at least one golden fixture; all golden tests pass.
- [ ] The Overview tab for the canonical tenancy fixture mentions the Homes (Fitness for Human Habitation) Act 2018 and does **not** route improvement notices or RROs through the FTT incorrectly.
- [ ] The Legal Breakdown tab for the canonical tenancy fixture lists the Pre-Action Protocol for Housing Conditions Claims in `procedures`.
- [ ] The s.21 validity test in the Legal Breakdown tab lists all 8 prerequisites, distinguishing deposit protection from prescribed information service.
- [ ] `embeddings.json` rebuild is incremental (changing one doc re-embeds only that doc).
- [ ] No regressions in the other tab schemas — JSON output shape from [lib/llm/analyze.ts](lib/llm/analyze.ts) unchanged.

---

## Open questions to flag back before starting

- Renters' Rights Act 2024 commencement status as of today's date — if you can't confirm from gov.uk, ask the user before deciding how to handle s.21 docs.
- Whether `embeddings.json` should be gitignored once it grows past the current 41 entries — check the current convention with the user.
- Whether the resources folder should be category-scoped or kept flat (current proposal: flat, since most resources span categories).
