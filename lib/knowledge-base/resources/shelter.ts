import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-shelter',
  type: 'resource',
  category: 'general',
  title: 'Shelter England',
  jurisdiction: 'england-wales',
  url: 'https://england.shelter.org.uk',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['references'],
  factSummary:
    'Shelter is the national housing and homelessness charity in England. Its tenant-facing pages are the most accessible practical-guidance source for housing rights: eviction, disrepair, deposit protection, and homelessness.',
  content: `Shelter England (https://england.shelter.org.uk) is the principal third-sector resource for housing law and policy in England. Its tenant-facing online guidance is plain-English, regularly updated, and authoritative — many advice services and law centres link to Shelter pages as the first reference.

Key sections:
- Eviction guides — what landlords must do and tenant rights, including step-by-step possession procedures.
- Repairs and disrepair — how to ask for repairs, what to do if the landlord ignores you, environmental health routes.
- Deposit protection — checking whether a deposit is protected, and what to do if it is not.
- Homelessness — applying for help from the council, eligibility, and rights to temporary accommodation.
- Renting from a private landlord — tenancy types, rights, and obligations.
- Renters' Rights Act updates — Shelter tracks commencement and publishes accessible explainers.

Shelter also runs:
- A free national helpline (0808 800 4444).
- A face-to-face advice network across England.
- A specialist legal advice service for complex cases.

Shelter is not a substitute for tailored legal advice in litigation, but for triage, education, and practical next steps it is the highest-utility free resource in this sector.`,
  tags: ['shelter', 'tenancy-resource', 'free-advice', 'helpline', 'tenant-rights'],
};

export default doc;
