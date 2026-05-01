import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-cra-2015-rights-and-remedies',
  type: 'statute',
  category: 'contract-service',
  title: 'Consumer Rights Act 2015, ss.19–24 — Consumer rights and remedies for goods',
  jurisdiction: 'england-wales',
  citation: 'Consumer Rights Act 2015, ss.19–24',
  url: 'https://www.legislation.gov.uk/ukpga/2015/15/part/1/chapter/2/crossheading/what-statutory-rights-are-there-under-a-goods-contract',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['overview', 'legalBreakdown', 'eli5', 'references'],
  factSummary:
    'Sets out the consumer\'s tiered remedies for breach of ss.9–11: short-term right to reject within 30 days for full refund (s.22); right to repair or replacement (s.23); right to price reduction or final right to reject (s.24). After one failed repair/replacement attempt, the consumer can move to price reduction or final rejection.',
  eli5Summary:
    'When you buy faulty goods, the law gives you tiered rights. Within 30 days, you can return the item for a full refund — no questions about repair. After 30 days, the shop must first try to repair or replace it. If one repair or replacement does not solve the problem, you can demand a price reduction (up to 100%) or your money back. The shop pays for postage, labour, and any reasonable costs.',
  content: `Sections 19–24 Consumer Rights Act 2015 establish the consumer's remedy structure for breach of the implied terms in ss.9–11.

Section 19 — Hierarchy and gateway. Where the goods do not conform to the contract because of breach of s.9, 10 or 11 (or s.13 for digital content / s.18 for description on a sale by sample), the consumer has the rights described in ss.20–24.

Section 20–22 — Short-term right to reject (within 30 days):
- The consumer may reject the goods within 30 days of (a) ownership transferring, (b) delivery, and (c) (if later) the trader notifying the consumer that any installation/setup the trader is required to do has been completed.
- On rejection, the trader must give a full refund without undue delay and in any event within 14 days of the trader agreeing the consumer is entitled to it.
- The 30-day period is paused while the trader is being given time to repair/replace under s.23.
- For perishable goods, the period is the goods' reasonable expected life.

Section 23 — Right to repair or replacement (after the 30 days, or chosen instead of rejection):
- The consumer may require the trader to repair or replace the goods.
- The trader must do so within a reasonable time and without significant inconvenience, and must bear the costs (including labour, postage, etc.).
- The trader can refuse one branch (e.g., replacement) only if it is impossible or disproportionate compared to the other.

Section 24 — Right to price reduction or final right to reject:
The consumer can demand a price reduction (up to 100%) or the final right to reject the goods if:
(a) one repair or one replacement has not solved the lack of conformity; or
(b) the consumer is entitled to repair/replacement but it is impossible, disproportionate, or has not been provided within a reasonable time and without significant inconvenience.

If the consumer exercises the final right to reject after more than 6 months, the trader may make a deduction for use (subject to specified categories).

Reverse burden of proof under s.19(14): if the lack of conformity manifests within 6 months of delivery, it is presumed to have existed at delivery unless the trader proves otherwise. After 6 months, the consumer must prove the defect was inherent.`,
  tags: ['CRA-2015', 'right-to-reject', 'tiered-remedies', '30-day-rule', 'repair', 'replacement', 'price-reduction'],
};

export default doc;
