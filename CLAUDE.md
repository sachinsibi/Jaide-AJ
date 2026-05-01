# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Current (Vite — legacy, being migrated)
```bash
npm install       # Install dependencies (node_modules not committed)
npm run dev       # Start Vite dev server at http://localhost:3000
npm run build     # Production build
```

### Target (Next.js — new architecture)
```bash
npm install
npm run dev       # Next.js dev server at http://localhost:3000
npm run build
npm start         # Serve production build
```

No test runner or linter is configured yet.

---

## What JAIDE Is

JAIDE is a civil law intelligence platform for England & Wales. Its purpose is to close the gap between "something bad happened to me" and "I understand my legal position well enough to act." It is free to use and monetises via a paywall ($75 BBD) that unlocks a lawyer referral directory.

**The flow is: triage → educate → refer.**

JAIDE handles only civil matters. Personal injury is deliberately rejected — it is out of scope by design, not a bug.

**Jurisdiction constraint:** Every legal analysis is scoped to **England & Wales only**. Never add content for other jurisdictions without explicit instruction.

---

## Target Architecture (Next.js + RAG)

The app is being migrated from a Vite SPA with keyword-based classification and hardcoded legal content to a **Next.js App Router** application with LLM-based classification and RAG-driven analysis.

### Why Next.js

The current Vite SPA has no router, no backend, and no persistence — a page refresh destroys all state. The planned backend (LLM API calls, knowledge base, RAG queries, lawyer matching) needs a server. Next.js App Router collapses frontend and backend into one deployment, and its file-based routing replaces the `currentScreen` state machine with real, shareable URLs.

### Route Structure

```
app/
  page.tsx                  # Splash + Landing (/ )
  intake/
    page.tsx                # Category confirm + onboarding wizard (/intake)
  analysis/
    page.tsx                # HomeScreen with 4 tabs (/analysis)
  lawyers/
    page.tsx                # Lawyer directory (/lawyers)
  personal-injury/
    page.tsx                # Rejection screen (/personal-injury)
  api/
    classify/
      route.ts              # POST — LLM classification of user input
    analysis/
      route.ts              # POST — RAG query + analysis generation
    lawyers/
      route.ts              # GET  — lawyer matching by category
```

### Application State

State that currently lives in `App.tsx` moves to:
- **URL search params** — current step, confirmed category
- **Session storage** — `userInput`, `caseData` (intake answers), persists across refresh
- **Server** — analysis results cached per session to avoid redundant LLM calls

### Classification (`app/api/classify/route.ts`)

Replaces `src/utils/incidentDetection.ts`. A POST endpoint that calls the Claude API with a structured prompt:

```
Input:  { userInput: string }
Output: { category: IncidentCategory, confidence: 'high' | 'medium' | 'low', reasoning: string }
```

The prompt describes all 7 categories with clear distinguishing criteria. The LLM understands context — "neck pain after a car crash" is a motor accident, not personal injury. Personal injury only fires when the user's **primary legal claim** is for bodily harm compensation, not when injury is merely mentioned.

### Knowledge Base (`lib/knowledge-base/`)

The hardcoded legal content currently buried in the four tab components is extracted into a structured corpus of documents. Each document has:

```ts
{
  id: string
  category: IncidentCategory | 'general'
  type: 'doctrine' | 'case-law' | 'statute' | 'procedure' | 'reference'
  title: string
  content: string          // The legal text
  jurisdiction: 'england-wales'
  tags: string[]           // e.g. ['section-11', 'LTA-1985', 'repairing-obligations']
}
```

One file per category under `lib/knowledge-base/categories/`:
```
lib/knowledge-base/
  categories/
    tenancy.ts
    motor-accident.ts
    contract-service.ts
    employment.ts
    property-damage.ts
    general-civil.ts
  index.ts                 # Exports combined corpus + lookup helpers
```

### RAG Layer (`lib/rag/`)

```
lib/rag/
  embeddings.ts            # Generate + cache embeddings via Voyage AI (Anthropic's recommended embeddings partner)
  retriever.ts             # Cosine similarity search over the knowledge base
  index.ts                 # retrieve(query, topK, filters) → Document[]
```

On analysis request:
1. Embed the user's full context: initial input + all intake answers concatenated
2. Retrieve top-K documents filtered by confirmed category
3. Pass retrieved documents + user context to Claude as the generation prompt
4. Claude produces personalised analysis for each of the 4 tabs

This replaces the `if/else` keyword branches in `OverviewTab`, `LegalBreakdownTab`, `ELI5Tab`, and `ReferencesTab`. Those components become thin renderers of LLM output.

### LLM Client (`lib/llm/`)

```
lib/llm/
  client.ts                # Anthropic SDK singleton, prompt caching configured
  classify.ts              # Classification prompt + response parser
  analyze.ts               # Analysis generation prompt (4-tab output as structured JSON)
```

**Model selection:**
- Both classification and analysis generation → `claude-sonnet-4-20250514`.
- Using one model simplifies the client during testing. Revisit splitting classification to `claude-haiku-4-5-20251001` at scale if cost becomes a concern.

**Prompt caching:** Enable on the knowledge base documents passed as context in the analysis route. These are static and will be the same across many calls, so cache hit rates will be high and will substantially reduce the effective cost. The model is referenced only in `lib/llm/client.ts` — switching is a one-line change.

### Folder Structure (full)

```
app/                        # Next.js App Router pages + API routes
lib/
  knowledge-base/           # Structured legal corpus
  rag/                      # Embedding + retrieval
  llm/                      # Claude API client + prompts
  types.ts                  # Shared types (IncidentCategory, CaseData, Document, etc.)
components/
  screens/                  # Migrated screen components (LandingScreen, OnboardingScreen, etc.)
  tabs/                     # Tab renderers (now render LLM output, not hardcoded content)
  ui/                       # shadcn/ui component library (already present, mostly unused)
```

---

## Current (Legacy) Architecture

> The following describes the Vite codebase being migrated. Keep this for reference until migration is complete.

### Screen State Machine (`App.tsx`)

Navigation driven by a `currentScreen` state variable:

```
splash → landing → synthesizing → category-confirm → onboarding → home → lawyers
                                → personal-injury (dead end, back to landing)
```

`App.tsx` owns all state: `userInput`, `detectedCategory`, `confirmedCategory`, `caseData`, `showPaywall`, `hasUnlockedLawyers`.

### Classification (`src/utils/incidentDetection.ts`)

Keyword-based. Personal injury keywords checked first as a hard override. All other categories scored by keyword count; highest wins. **Root cause of misclassification bugs** — context-free substring matching means words like `pain`, `repair`, `service` override the correct category.

### Analysis Output (`src/components/tabs/`)

All legal content hardcoded. Tabs branch on `scenario.toLowerCase().includes(keyword)`. Intake answers in `caseData` are passed as `onboardingData` to each tab but are not used — every user in the same category sees identical content.

### Design System

Inline `style={{}}` objects are primary. Tailwind utility classes used secondarily. Brand colours:
- Navy: `#073C65`
- Gold: `#C9A84C`
- Background: `#FAFBFC`

`src/components/ui/` contains a full shadcn/ui library, largely unused in screen components.
