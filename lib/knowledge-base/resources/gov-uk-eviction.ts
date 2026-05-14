import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-barbados-housing-tenancy',
  type: 'resource',
  category: 'general',
  title: 'Housing and Tenancy Resources — Barbados',
  jurisdiction: 'barbados',
  url: 'https://laws.barbados.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['references'],
  factSummary:
    'Tenancy disputes in Barbados are resolved through the civil courts — the Magistrates\' Court for smaller claims and the High Court for larger ones. The Laws of Barbados portal (laws.barbados.gov.bb) provides access to the Landlord and Tenant Act, Cap. 230 and related legislation.',
  content: `Tenancy and housing disputes in Barbados:

Governing legislation: tenancy matters in Barbados are governed principally by the Landlord and Tenant Act, Cap. 230 (Laws of Barbados) and related provisions. The full text of applicable legislation is available at the Laws of Barbados portal (https://laws.barbados.gov.bb).

Civil courts for tenancy disputes:
- Magistrates' Court (Cap. 116A): handles civil tenancy matters where the amount in dispute is up to $10,000 BBD. This includes smaller rent arrears claims, disputes about deposits, and related money claims.
- High Court of Barbados (Cap. 117): the appropriate forum for tenancy disputes involving amounts above $10,000 BBD, claims for possession, injunctions, and complex landlord and tenant matters.

Common tenancy disputes: non-payment of rent; unlawful eviction or harassment by a landlord; failure to carry out repairs and maintenance; disputes about security deposits; unlawful entry by the landlord; disputes about the terms of the tenancy agreement.

Unlawful eviction: a landlord who seeks to evict a tenant without following the proper legal process may be liable in civil proceedings. Tenants facing eviction should seek legal advice from a Barbados attorney (barbadosbar.org) as soon as possible.

Repairs: landlords have obligations under Barbados law to maintain the property in a habitable condition. Tenants with repair issues should document the problem in writing and allow the landlord a reasonable time to carry out repairs before taking further action.

Laws of Barbados portal (https://laws.barbados.gov.bb): the authoritative source for Barbados legislation, including the Landlord and Tenant Act, Cap. 230, and all subsidiary legislation relevant to housing and tenancy.

Note: gov.uk housing guidance applies only to England and has no relevance to tenancy disputes in Barbados.`,
  tags: ['tenancy', 'housing', 'landlord-tenant', 'Barbados', 'Landlord-and-Tenant-Act', 'Cap-230', 'laws-portal'],
};

export default doc;
