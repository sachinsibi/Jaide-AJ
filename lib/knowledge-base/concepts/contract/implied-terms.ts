import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-implied-terms',
  type: 'concept',
  category: 'contract-service',
  title: 'Implied Terms',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'Terms not expressly agreed but read into the contract by law. Five sources: (1) statute (e.g., CRA 2015 ss.9–11, 49); (2) custom of a trade or locality; (3) prior dealings between the parties; (4) implication in fact (necessary to give business efficacy — The Moorcock); (5) implication in law (incidental to a recognised category of contract).',
  eli5Summary:
    'Even if a contract doesn\'t mention something explicitly, the law sometimes builds extra promises into it automatically. The Consumer Rights Act 2015, for example, builds in promises that goods will work and services will be done with reasonable care — so even if your receipt is silent on quality, you still have those protections.',
  content: `Implied Terms:

A contract is more than its express words. Five sources add terms.

1. Statute. The most prescriptive route. Examples: CRA 2015 ss.9–11 (consumer goods); CRA 2015 s.49 (consumer services); SGA 1979 ss.13–15 (B2B sales); SGSA 1982 (B2B services); LTA 1985 s.11 (residential tenancies); ERA 1996 (employment). Generally cannot be excluded against a consumer (CRA 2015 s.31) or in many B2B contexts (UCTA 1977).

2. Custom. A trade, locality, or market custom may be implied if reasonable, certain, notorious, and not inconsistent with express terms (Hutton v Warren (1836)). The party relying on it must prove it.

3. Previous dealings. A course of consistent prior dealings may import terms into a later silent contract (Hollier v Rambler Motors [1972] 2 QB 71; cf McCutcheon v MacBrayne [1964] 1 WLR 125 for limits).

4. Implied in fact (business efficacy / officious bystander). A term may be implied where necessary to make the contract work, or so obvious it goes without saying (The Moorcock (1889); Shirlaw v Southern Foundries [1939] 2 KB 206).

The modern test (Marks & Spencer v BNP Paribas [2015] UKSC 72; AG of Belize v Belize Telecom [2009] UKPC 10) is one of necessity, not reasonableness. Courts will not improve the bargain.

5. Implied in law. Some terms attach to a category of contract by operation of law — duties of cooperation, trust and confidence in employment (Malik v BCCI [1998] AC 20), quiet enjoyment in tenancy.

Interaction with express terms:
(a) Express terms generally prevail over implied terms in conflict.
(b) Statutory implied terms in consumer contracts cannot be overridden (CRA 2015 s.31).
(c) Entire-agreement clauses preclude collateral/extrinsic implication but do not bar statutory or in-law implication.

Implied terms matter most for consumers because they fill gaps in unread standard-form contracts.`,
  tags: ['implied-terms', 'CRA-2015', 'business-efficacy', 'officious-bystander', 'implied-in-law', 'implied-by-statute'],
};

export default doc;
