import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-implied-terms',
  type: 'concept',
  category: 'contract-service',
  title: 'Implied Terms — Barbados Contract Law',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'Terms not expressly agreed but read into a contract by operation of law. Five sources operate in Barbados: (1) statute — including the Sale of Goods Act, Cap. 318 (quality, fitness, description) and any relevant Barbados consumer protection provisions; (2) trade custom; (3) prior dealings between the parties; (4) implication in fact — where necessary to give the contract business efficacy or so obvious it goes without saying; and (5) implication in law — terms that attach to a recognised category of contract as a matter of law.',
  eli5Summary:
    'Even if a contract does not mention something explicitly, the law sometimes builds extra obligations into it automatically. In Barbados, the Sale of Goods Act, Cap. 318 builds in promises that goods sold in the course of business must be of satisfactory quality and fit for purpose. The common law adds that service providers must exercise reasonable care and skill. These protections exist regardless of what the small print of a receipt says.',
  content: `Implied Terms — Barbados contract law.

A contract is more than its express words. In Barbados, as under the general common law applicable in Commonwealth jurisdictions, terms may be implied into a contract from five sources.

1. Statute. The most prescriptive route. The Sale of Goods Act, Cap. 318 of the Laws of Barbados implies into contracts for the sale of goods terms as to title, description, satisfactory quality, and fitness for purpose. Any relevant Barbados consumer protection provisions may similarly imply terms into consumer contracts for goods and services. Statutory implied terms cannot generally be excluded or restricted in consumer contracts. Consult laws.barbados.gov.bb for the current provisions.

2. Trade custom or locality. A term reflecting an established practice of a particular trade, industry, or locality may be implied if the custom is reasonable, certain, generally known in the relevant sector, and not inconsistent with the express terms of the contract. The party relying on a custom must prove its existence and the parties' awareness of it.

3. Previous dealings. Where parties have dealt with each other consistently on a particular basis in earlier transactions, a court may imply that the same terms apply to a later, similar transaction between them, even if those terms are not expressly reproduced.

4. Implication in fact — business efficacy and the officious bystander.

Business efficacy test (The Moorcock (1889), persuasive common law authority): a term is implied where it is necessary to give the contract business efficacy — that is, without it, the contract would be commercially unworkable. The test is one of necessity, not of mere reasonableness or convenience.

Officious bystander test (Shirlaw v Southern Foundries [1939], persuasive common law authority): a term is implied where, if a bystander had suggested it to both parties at the moment of contracting, both would have agreed to it as so obvious that it goes without saying.

The modern formulation (consistent with Commonwealth Privy Council authority including AG of Belize v Belize Telecom [2009] UKPC 10 — persuasive authority): the question is whether the term is necessary to give the contract the meaning and effect the parties must reasonably be taken to have intended. Courts do not imply terms merely because they would improve the contract or make it fairer.

5. Implication in law. Certain terms attach to a recognised category of contract as a matter of law, independently of the parties' intentions. Examples applicable in Barbados: the implied term of reasonable care and skill in contracts for services (common law); the implied term of co-operation between contracting parties; and, in the context of employment, implied terms of trust and confidence.

Interaction with express terms.
(a) Express terms generally take precedence over implied terms where they conflict.
(b) Statutory implied terms under Cap. 318 and any applicable Barbados consumer protection provisions cannot be excluded or restricted in consumer contracts.
(c) Entire-agreement clauses may limit the scope for implying collateral or extrinsic terms, but do not prevent the operation of statutory implied terms or terms implied in law.

Practical significance in Barbados. Implied terms are particularly important in consumer transactions where standard-form contracts and receipts may be silent on quality, fitness, and care. The protections implied by Cap. 318 and the common law operate as a matter of law, filling gaps in what parties have expressly agreed.`,
  tags: ['implied-terms', 'Cap-318', 'business-efficacy', 'officious-bystander', 'implied-in-law', 'implied-by-statute', 'barbados'],
};

export default doc;
