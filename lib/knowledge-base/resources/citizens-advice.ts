import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-citizens-advice',
  type: 'resource',
  category: 'general',
  title: 'Citizens Advice',
  jurisdiction: 'england-wales',
  url: 'https://www.citizensadvice.org.uk',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy', 'employment', 'contract-service', 'general-civil', 'motor-accident', 'property-damage'],
  tabs: ['references'],
  factSummary:
    'Citizens Advice provides free, independent, confidential advice across the full breadth of civil law: housing, employment, consumer, debt, family, benefits, and immigration. Both online (citizensadvice.org.uk) and in person at local CABx.',
  content: `Citizens Advice (https://www.citizensadvice.org.uk) is the largest free legal-information network in England and Wales. It operates as a federation of independent local Citizens Advice Bureaux (CABx) backed by a national charity that publishes online guidance.

Online guidance areas relevant across civil categories:
- Housing — tenancy rights, eviction, deposits, disrepair, homelessness.
- Work — pay, holidays, dismissal, redundancy, discrimination, whistleblowing.
- Consumer — faulty goods, services, refunds, contracts, scams.
- Debt and money — managing debt, county court judgments, bailiffs, bankruptcy.
- Family — relationships, children, divorce, domestic abuse.
- Immigration — visas, asylum, settlement, citizenship.
- Benefits — Universal Credit, housing benefit, ESA, PIP, appeals.
- Health — NHS rights, complaints, mental health.
- Law and courts — small claims, mediation, court fees, legal aid.

Channels:
- Adviceline (England) 0800 144 8848; Wales 0800 702 2020.
- Webchat through the website during opening hours.
- Email and in-person via local CABx (location finder on the website).
- Specialist support via Money Advice Service, Pension Wise, etc.

Limits: Citizens Advice provides information and assisted self-help, not litigation representation. For court representation, the user should be referred to a solicitor (legal aid where eligible), Law Centre, or pro bono scheme.`,
  tags: ['citizens-advice', 'free-advice', 'cross-category', 'CAB', 'helpline'],
};

export default doc;
