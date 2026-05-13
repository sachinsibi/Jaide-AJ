import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-barbados-tenancy-fitness-standards',
  type: 'statute',
  category: 'tenancy',
  title: 'Habitability and Fitness Standards — Barbados Residential Tenancies',
  jurisdiction: 'barbados',
  citation: 'Common law; Landlord and Tenant Act, Cap. 230; applicable Barbados public health legislation (Laws of Barbados)',
  url: 'https://laws.barbados.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['overview', 'legalBreakdown', 'references'],
  triggers: [
    'damp',
    'mould',
    'mold',
    'cold',
    'hazard',
    'environmental health',
    'unfit',
    'unsafe',
    'rats',
    'mice',
    'pest',
    'fire',
    'electrical',
    'infestation',
    'overcrowded',
    'overcrowding',
  ],
  factSummary:
    'Barbados has no equivalent to England\'s Housing Health and Safety Rating System (HHSRS). Habitability and fitness standards for residential premises in Barbados are governed by common law implied duties, the relevant provisions of Cap. 230, and applicable Barbados public health legislation. Where a dwelling presents serious health or safety hazards, the relevant public health authority may have powers to require remedial action.',
  content: `Habitability and Fitness Standards — Barbados Residential Tenancies:

Barbados does not operate the Housing Health and Safety Rating System (HHSRS) used in England under the Housing Act 2004. There is no equivalent 29-hazard risk-scoring scheme administered by a local housing authority, and there is no First-tier Tribunal (Property Chamber) in Barbados. Instead, habitability and fitness standards for residential premises in Barbados are addressed through three overlapping frameworks:

1. Common law implied duty of habitability: Barbados common law, as a Commonwealth jurisdiction, recognises an implied landlord obligation that residential premises are fit for human habitation. This duty is not limited to structural disrepair; it extends to conditions that render the dwelling harmful to the health or safety of occupants. Relevant hazards include serious damp and mould, defective sanitation, the absence of clean water, dangerous electrical installations, structural instability, and vermin infestation.

2. Landlord and Tenant Act, Cap. 230: the primary Barbados tenancy legislation provides the framework within which habitability obligations are enforced and disputes resolved. Where a premises falls short of an acceptable standard of habitation, the relevant provisions of Cap. 230 — together with common law — provide the basis for a civil claim.

3. Public health and housing legislation: Barbados has public health legislation that may empower the relevant government authority (such as the Ministry responsible for Health or an Environmental Health Officer) to inspect residential premises and, where serious health or safety hazards are identified, to require the owner or landlord to take remedial action. A tenant who considers that the condition of residential premises poses a significant public health risk may approach the relevant public health authority to request an inspection.

Conditions likely to engage habitability and fitness concerns include: persistent and severe dampness or mould causing health risks; failure of sanitation facilities; absence of or contamination of water supply; infestation by vermin or insects; structural defects creating a risk of collapse or serious injury; electrical installations in a dangerous condition; and serious overcrowding.

Private civil route: in addition to any public health enforcement route, a tenant may bring a civil claim before the Magistrates' Court (claims up to $10,000 BBD under Cap. 116A) or the High Court of Barbados (claims above $10,000 BBD under Cap. 117) seeking damages and/or an order requiring the landlord to remedy the conditions.

Currency note: all monetary thresholds in Barbados Dollars (BBD). The BBD is pegged at 2:1 to the United States Dollar (USD).`,
  tags: ['fitness-standards', 'habitability', 'public-health', 'Cap-230', 'Barbados', 'damp', 'mould', 'environmental-health'],
};

export default doc;
