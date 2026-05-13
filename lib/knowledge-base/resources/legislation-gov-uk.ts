import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-barbados-laws-portal',
  type: 'resource',
  category: 'general',
  title: 'Laws of Barbados Portal',
  jurisdiction: 'barbados',
  url: 'https://laws.barbados.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy', 'employment', 'contract-service', 'general-civil', 'motor-accident', 'property-damage'],
  tabs: ['references'],
  factSummary:
    'The Laws of Barbados portal (laws.barbados.gov.bb) is the official online repository for Barbados legislation, including all Chapters (Cap.) of the Laws of Barbados. Users can search for specific Acts by Cap. number or subject matter.',
  content: `The Laws of Barbados portal (https://laws.barbados.gov.bb) is the official online database of legislation of Barbados, managed by the Government of Barbados. It is the authoritative source for the text of Barbados statutes and subsidiary legislation.

What it provides:
- Full text of Acts of Parliament of Barbados, organised by Chapter (Cap.) number.
- Subsidiary legislation (regulations, rules, and orders made under Act-conferred powers).
- Revised Laws of Barbados, incorporating amendments into consolidated versions of legislation.
- Subject-matter search and Cap. number navigation for locating specific statutes.

Key statutes available (examples relevant to civil matters):
- Magistrates' Court Act, Cap. 116A — jurisdiction and procedure for the Magistrates' Court.
- Supreme Court of Judicature Act, Cap. 117 — jurisdiction and procedure for the High Court and Court of Appeal.
- Landlord and Tenant Act, Cap. 230 — landlord and tenant rights and obligations.
- Employment Rights Act, Cap. 23 — employment protections and rights.
- Data Protection Act, 2019 — data protection framework for Barbados.
- Motor Vehicles and Road Traffic Act, Cap. 295 — motor vehicle licensing and road traffic regulation.

How to use:
- Search by subject matter (for example, "landlord", "employment", "defamation") to identify the applicable Act and Cap. number.
- Navigate directly using the Cap. number where known.
- The portal provides the revised (consolidated) text of legislation.

This portal is the Barbados equivalent of legislation.gov.uk (England). legislation.gov.uk is a UK resource and has no relevance to Barbados statutory law.`,
  tags: ['laws-barbados', 'legislation', 'official-statute', 'Barbados', 'laws-portal', 'Cap-number'],
};

export default doc;
