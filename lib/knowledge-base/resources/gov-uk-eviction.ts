import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-gov-uk-eviction',
  type: 'resource',
  category: 'general',
  title: 'gov.uk — Renting (tenant)',
  jurisdiction: 'england-wales',
  url: 'https://www.gov.uk/private-renting',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['references'],
  factSummary:
    'Official UK government guidance for private tenants in England: rights and responsibilities, eviction procedures, deposit protection, How to Rent guide, and links to council services. The first port of call for current procedural guidance.',
  content: `gov.uk Renting pages (https://www.gov.uk/private-renting) are the official government information source for private tenants in England. They are kept up to date with current procedural rules and notice periods, and link to the canonical "How to Rent" booklet that landlords must serve as a precondition of any valid s.21 notice.

Key sub-pages:
- Renting from a private landlord — overview of tenant rights and obligations.
- "How to Rent" booklet (current version) — the document a landlord must serve to comply with s.21 prerequisites.
- Eviction procedures — what landlords must do, what notice is required, accelerated and standard possession routes.
- Deposit protection — the three authorised schemes, the 30-day rule, and prescribed information.
- Repairs — landlord and tenant responsibilities, and routes to escalate.
- Council enforcement — how to contact Environmental Health.
- Rent increases — s.13 notice mechanics.
- Renters' Rights Act — commencement updates and transitional guidance (when published).

Adjacent gov.uk resources useful in tenancy matters:
- gov.uk/find-court-tribunal — locate the relevant County Court hearing centre.
- gov.uk/court-fees — current banded fees for County Court issue.
- gov.uk/courts-tribunals/first-tier-tribunal-property-chamber — FTT contact and forms.
- gov.uk/legal-aid — eligibility for legal aid in housing matters.

For canonical legislation, link onward to legislation.gov.uk; for case law to bailii.org.`,
  tags: ['gov-uk', 'private-renting', 'how-to-rent', 'official-guidance', 'eviction-procedures'],
};

export default doc;
