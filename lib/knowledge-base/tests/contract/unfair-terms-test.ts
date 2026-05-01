import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-unfair-terms-test',
  type: 'test',
  category: 'contract-service',
  title: 'CRA 2015 Unfair Terms Test',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['unfair term', 'small print', 'exclusion clause', 'penalty', 'cancellation fee', 'standard terms', 'good faith', 'imbalance'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Test under CRA 2015 s.62: a term in a consumer contract is unfair if, contrary to the requirement of good faith, it causes a significant imbalance in the parties\' rights and obligations to the consumer\'s detriment. If unfair, the term is not binding (s.62(1)). Subject to a transparency exclusion for main subject-matter and price (s.64).',
  content: `CRA 2015 Unfair Terms Test:

Stage 1 — Gateway. Trader-consumer contract or consumer notice. Both standard-form and bespoke terms in scope.

Stage 2 — s.64 transparency exclusion. Fairness test does NOT apply to (a) the main subject matter or (b) price-vs-value, BUT only where the term is transparent (plain language, legible) and prominent. Buried, opaque, or surprising main-subject/price terms are reviewable.

Stage 3 — Fairness test (s.62(4)): "contrary to the requirement of good faith, [causes] a significant imbalance to the consumer's detriment." Three components considered together (DGFT v First National Bank [2001] UKHL 52):

(a) Significant imbalance — term tilts rights significantly in trader's favour. Compare with vs without.
(b) Contrary to good faith — fair and open dealing. Openness: clear, legible, no concealed pitfalls. Fair dealing: no exploitation of consumer's necessity, inexperience, or weak bargaining position.
(c) Detriment to consumer — must work against the consumer.

Stage 4 — Schedule 2 grey list: 20 indicative categories — disproportionate cancellation fees; one-sided binding; unilateral variation; automatic renewal with onerous notice; restrictions on remedies; retention of sums on cancellation; hidden interest/charges; onerous indemnities. Appearance on the list is a red flag, not automatic unfairness.

Stage 5 — Effect (ss.62(1), 67). Unfair term is not binding; the rest continues if practicable. Operates by force of law, not by consumer election.

Special protections regardless of fairness:
- s.65 — exclusion of liability for negligence death/PI is not binding.
- s.31 — exclusion of CRA implied terms (ss.9–11, 17, 49) is not binding.

Public enforcement: CMA and named regulators can seek injunctions against unfair terms in standard contracts (Sch.3).`,
  tags: ['unfair-terms-test', 'CRA-section-62', 'good-faith', 'significant-imbalance', 'transparency', 'grey-list'],
};

export default doc;
