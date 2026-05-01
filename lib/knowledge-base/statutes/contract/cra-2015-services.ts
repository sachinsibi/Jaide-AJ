import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-cra-2015-services',
  type: 'statute',
  category: 'contract-service',
  title: 'Consumer Rights Act 2015, ss.49–56 — Services',
  jurisdiction: 'england-wales',
  citation: 'Consumer Rights Act 2015, ss.49–56',
  url: 'https://www.legislation.gov.uk/ukpga/2015/15/part/1/chapter/4',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['service', 'tradesman', 'tradesperson', 'plumber', 'electrician', 'builder', 'contractor', 'cleaner', 'haircut', 'hairdresser', 'mechanic', 'workmanship', 'repair work', 'installation'],
  tabs: ['overview', 'legalBreakdown', 'eli5', 'references'],
  factSummary:
    'Implies into every consumer contract for services that the trader will perform with reasonable care and skill (s.49); that information given becomes a binding term (s.50); that where no price is fixed the consumer pays a reasonable price (s.51); and that performance is within a reasonable time (s.52). Remedies are repeat performance (s.55) and price reduction (s.56) where these terms are breached.',
  eli5Summary:
    'When you pay a tradesperson, plumber, hairdresser, mechanic, or any service business, the law gives you four automatic rights: (1) the work must be done with reasonable care and skill; (2) anything they told you about it becomes part of the deal; (3) you only have to pay a reasonable price if no price was fixed; (4) the work must be done in a reasonable time. If they fall short you can ask them to redo it, and if they cannot or will not, you can pay less.',
  content: `Sections 49–56 Consumer Rights Act 2015 govern consumer contracts for services. Unlike goods, services have no equivalent of the 30-day right to reject; remedies are tiered around redoing the work or paying less for it.

Section 49 — Reasonable care and skill. Every service contract has an implied term that the trader will perform the service with reasonable care and skill. The standard is that of a reasonably competent provider of that service; specialist trades (Gas Safe, NICEIC electrician) attract a correspondingly specialist standard.

Section 50 — Information about trader or service binding. Anything said or written to the consumer that the consumer takes into account when deciding to enter the contract, or in making a decision about the service after entering it, is a binding term of the contract. Captures verbal promises, marketing claims, quotations, and stated timetables.

Section 51 — Reasonable price. Where the contract does not fix the price, and there is no agreed mechanism for fixing it, the consumer must pay a reasonable price. Limits ad-hoc invoicing.

Section 52 — Reasonable time. Where the contract does not fix a time for performance, and there is no agreed mechanism for fixing one, the service must be performed within a reasonable time.

Section 54 — Liability cannot be excluded against a consumer. A term that would exclude or restrict liability for breach of s.49 is not binding (s.57).

Section 55 — Right to require repeat performance. Where s.49 or s.50 is breached, the consumer may require the trader to repeat performance to bring it into conformity, in a reasonable time and without significant inconvenience to the consumer, at the trader's cost. Not available where impossible.

Section 56 — Right to price reduction. The consumer may require an appropriate reduction in price (up to 100% refund) where:
(a) repeat performance is impossible; or
(b) the consumer requires repeat performance but the trader fails to do it in a reasonable time without significant inconvenience.

Damages remain available concurrently in tort/contract for any consequential loss (s.54(7)).`,
  tags: ['CRA-2015', 'services', 'reasonable-care-and-skill', 'reasonable-time', 'reasonable-price', 'repeat-performance', 'price-reduction'],
};

export default doc;
