import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-cra-2015-unfair-terms',
  type: 'statute',
  category: 'contract-service',
  title: 'Consumer Rights Act 2015, ss.61–76 — Unfair contract terms',
  jurisdiction: 'england-wales',
  citation: 'Consumer Rights Act 2015, Pt 2 (ss.61–76)',
  url: 'https://www.legislation.gov.uk/ukpga/2015/15/part/2',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['unfair term', 'small print', 'exclusion clause', 'limitation of liability', 'cancellation fee', 'penalty', 'standard terms', 'terms and conditions', 'disproportionate', 'returns policy', 'refund policy', 'store policy', 'manager discretion', 'no refund', 'shop policy'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Part 2 CRA 2015 controls unfair terms in consumer contracts. A term is unfair if, contrary to the requirement of good faith, it causes a significant imbalance in the parties\' rights and obligations to the detriment of the consumer (s.62). Unfair terms are not binding on the consumer. Schedule 2 contains an indicative grey list of terms likely to be regarded as unfair.',
  content: `Part 2 of the Consumer Rights Act 2015 (ss.61–76) replaces the Unfair Terms in Consumer Contracts Regulations 1999 and the consumer aspects of the Unfair Contract Terms Act 1977. It applies to all consumer contracts and consumer notices.

Section 62 — Fairness test. A term is unfair if, contrary to the requirement of good faith, it causes a significant imbalance in the parties' rights and obligations to the detriment of the consumer. The test is applied taking into account the nature of the subject matter, all the circumstances at conclusion of the contract, and the other terms.

Effect of unfairness (s.62(1)): an unfair term in a consumer contract is not binding on the consumer. The contract continues to bind both parties to the extent practicable without the offending term.

Section 64 — Transparency exclusion. The fairness test does not apply to a term to the extent that:
(a) it specifies the main subject matter of the contract; or
(b) the assessment is of the appropriateness of the price payable as against the goods or services supplied.
This exclusion only applies if the term is transparent and prominent (s.64(2)). A buried, opaque, or surprising price term is reviewable for fairness.

Section 65 — Liability for negligence cannot be excluded. A term excluding or restricting liability for death or personal injury caused by negligence is not binding (and is treated as not having been agreed). For other heads of loss, exclusion is reviewable under s.62.

Section 67 — Effect on rest of contract. The contract continues so far as practicable without the unfair term.

Section 68 — Transparency requirement. A trader must ensure written terms are transparent — expressed in plain and intelligible language and, in the case of written terms, legible. Ambiguity is construed against the trader (s.69, contra proferentem).

Schedule 2 — Indicative grey list. Schedule 2 lists 20 categories of term that may be regarded as unfair, including: terms permitting unilateral cancellation; disproportionate cancellation fees; terms binding the consumer where the trader is not bound; terms allowing the trader to vary unilaterally; automatic-renewal terms with unreasonable notice periods; restrictions on legal remedies.

Enforcement (Sch.3): the Competition and Markets Authority and named regulators may seek injunctions against unfair terms in standard-form consumer contracts.`,
  tags: ['CRA-2015', 'unfair-terms', 'fairness-test', 'good-faith', 'significant-imbalance', 'grey-list', 'transparency'],
};

export default doc;
