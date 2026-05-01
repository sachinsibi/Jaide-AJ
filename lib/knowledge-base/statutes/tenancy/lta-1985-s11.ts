import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-lta-1985-s11',
  type: 'statute',
  category: 'tenancy',
  title: 'Landlord and Tenant Act 1985, s.11',
  jurisdiction: 'england-wales',
  citation: 'Landlord and Tenant Act 1985, s.11',
  url: 'https://www.legislation.gov.uk/ukpga/1985/70/section/11',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['overview', 'legalBreakdown', 'eli5', 'references'],
  factSummary:
    'Implies into tenancies of less than seven years a landlord covenant to keep in repair the structure and exterior of the dwelling, and to keep in repair and proper working order the installations for the supply of water, gas, electricity, sanitation, space heating, and water heating.',
  eli5Summary:
    'For most short rental homes, the law makes the landlord responsible for keeping the building itself, and the basics like heating, water, and electrics, working properly. They are not responsible for things you broke yourself.',
  content: `Section 11 of the Landlord and Tenant Act 1985 implies into any lease of a dwelling-house granted on or after 24 October 1961 for a term of less than seven years a covenant by the lessor:

(1)(a) to keep in repair the structure and exterior of the dwelling-house (including drains, gutters and external pipes);
(1)(b) to keep in repair and proper working order the installations in the dwelling-house for the supply of water, gas and electricity and for sanitation (including basins, sinks, baths and sanitary conveniences, but not other fixtures, fittings and appliances for making use of the supply of water, gas or electricity);
(1)(c) to keep in repair and proper working order the installations in the dwelling-house for space heating and heating water.

The standard of repair is determined having regard to the age, character and prospective life of the dwelling-house and the locality in which it is situated.

The covenant does not require the lessor to (a) carry out works for which the lessee is liable by virtue of his duty to use the premises in a tenant-like manner, (b) rebuild or reinstate in the case of destruction by fire, tempest, flood or other inevitable accident, or (c) keep in repair anything which the lessee is entitled to remove.

The duty arises only when the lessor has notice (actual or constructive) of the defect and a reasonable time has elapsed for repair (O'Brien v Robinson [1973] AC 912).

The covenant cannot be excluded or limited by agreement, except with the approval of the County Court (s.12).`,
  tags: ['section-11', 'LTA-1985', 'repairing-obligations', 'structure', 'installations'],
};

export default doc;
