# JAIDE

JAIDE is a civil law intelligence platform for England & Wales. It helps people understand their legal position after something goes wrong — for free — and connects them with lawyers when they need one.

**The flow is: triage → educate → refer.**

JAIDE handles civil matters only. Personal injury claims are out of scope by design.

---

## Stack

- **Next.js 15** (App Router) — frontend + backend in one deployment
- **Claude API** (Anthropic) — LLM-based case classification and legal analysis generation
- **Voyage AI** — embeddings for RAG retrieval over the knowledge base
- **Tailwind CSS** + shadcn/ui — styling

---

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

Copy `.env.local.example` to `.env.local` and add your API keys:

```
ANTHROPIC_API_KEY=
VOYAGE_API_KEY=
```

---

## Routes

| Route | Description |
|---|---|
| `/` | Landing screen |
| `/intake` | Category confirmation + onboarding wizard |
| `/analysis` | 4-tab legal analysis (Overview, Legal Breakdown, ELI5, References) |
| `/lawyers` | Lawyer referral directory |
| `/personal-injury` | Out-of-scope rejection screen |

---

## Knowledge base

Legal content lives in `lib/knowledge-base/` — structured documents covering 6 civil law categories: tenancy, motor accident, contract/service, employment, property damage, and general civil.

```bash
npm run lint:kb          # Validate all KB documents
npm run build:embeddings # Rebuild embeddings.json
npm run test:retrieval   # Run golden retrieval fixtures
```

---

## Jurisdiction

All legal analysis is scoped to **England & Wales only**.
