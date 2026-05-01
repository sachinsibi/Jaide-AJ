import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-fitness-habitation-2018',
  type: 'statute',
  category: 'tenancy',
  title: 'Homes (Fitness for Human Habitation) Act 2018',
  jurisdiction: 'england-wales',
  citation: 'Homes (Fitness for Human Habitation) Act 2018; LTA 1985 s.9A (as inserted)',
  url: 'https://www.legislation.gov.uk/ukpga/2018/34/contents',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['overview', 'legalBreakdown', 'eli5', 'references'],
  factSummary:
    'Inserts s.9A into the Landlord and Tenant Act 1985, requiring landlords of most residential tenancies in England to ensure the dwelling is fit for human habitation at the start of and throughout the tenancy. Gives tenants a direct cause of action without needing local authority involvement.',
  eli5Summary:
    'A 2018 law says your rented home must actually be fit to live in — not just structurally repaired. If problems like serious damp, mould, or cold make the home unhealthy, you can take the landlord to court yourself, without waiting for the council.',
  content: `The Homes (Fitness for Human Habitation) Act 2018 amends the Landlord and Tenant Act 1985 by inserting a new s.9A. It applies to most leases of dwellings in England granted on or after 20 March 2019 for a term of less than seven years (and to existing periodic tenancies from 20 March 2020).

Section 9A implies a covenant by the lessor that the dwelling:
(a) is fit for human habitation at the time the lease is granted or otherwise created or, if later, at the beginning of the term, and
(b) will remain fit for human habitation during the term.

Fitness for habitation is assessed by reference to the matters listed in s.10 LTA 1985, which incorporates the 29 hazards under the Housing Health and Safety Rating System (HHSRS), including damp and mould, excess cold, excess heat, structural collapse, fire, falls, crowding, and sanitation.

The covenant is not breached where the unfitness is attributable to (i) the tenant's own breach of duty or failure to use the premises in a tenant-like manner, (ii) acts of God, fire, storm, or flood, (iii) the tenant's own goods, or (iv) where consent for the works is required and has not been obtained despite reasonable efforts.

Crucially, s.9A gives tenants a direct route to the County Court for an injunction requiring the landlord to remedy the unfitness and/or damages, without needing the local authority to serve an improvement notice first. This is the lead statute for damp/mould cases involving health impact, working alongside s.11 (which addresses disrepair specifically).`,
  tags: ['fitness-for-habitation', 'section-9A', 'LTA-1985', 'damp', 'mould', 'HHSRS'],
};

export default doc;
