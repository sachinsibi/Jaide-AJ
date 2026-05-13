import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-barbados-public-health-housing-inspection',
  type: 'procedure',
  category: 'tenancy',
  title: 'Public Health and Housing Inspection Route — Barbados',
  jurisdiction: 'barbados',
  citation: 'Applicable Barbados public health legislation; Landlord and Tenant Act, Cap. 230 (Laws of Barbados)',
  url: 'https://laws.barbados.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['overview', 'legalBreakdown'],
  triggers: [
    'damp',
    'mould',
    'mold',
    'environmental health',
    'public health',
    'unfit',
    'unsafe',
    'rats',
    'mice',
    'pest',
    'infestation',
    'inspection',
    'government',
  ],
  factSummary:
    'Where residential premises in Barbados present conditions raising public health or safety concerns, a complaint may be made to the relevant public health authority — such as the Ministry responsible for Health or an Environmental Health Officer. There is no HHSRS equivalent in Barbados; the applicable enforcement powers are those conferred by the relevant Barbados public health legislation. This route runs parallel to, not instead of, a private civil claim.',
  content: `Public Health and Housing Inspection Route — Barbados:

Barbados does not operate the Housing Health and Safety Rating System (HHSRS) used in England under the Housing Act 2004. There is no equivalent 29-hazard risk-scoring scheme or specialist housing authority in Barbados with the specific enforcement powers that English local authorities have under that Act. However, Barbados public health and housing legislation provides for government oversight of housing conditions where those conditions present public health or safety risks.

The relevant authority:

In Barbados, the relevant public health authority — which may include the Ministry responsible for Health, Environmental Health Officers (EHOs), or another competent authority designated under applicable Barbados legislation — may have powers to inspect residential premises and to require remedial action where conditions are found to present a public health risk.

Tenants who believe residential premises present a significant health or safety hazard — including severe damp and mould, structural dangers, defective sanitation, dangerous electrical installations, or serious vermin infestation — may approach the relevant public health authority to request an inspection.

Recommended steps:

Step 1 — Written complaint to the relevant public health authority.
A written complaint identifying the address of the premises and describing the conditions is the appropriate starting point. The complaint should be supported, where possible, by photographs, a description of health effects experienced, and a summary of prior correspondence with the landlord.

Step 2 — Inspection.
An Environmental Health Officer or equivalent official may inspect the premises and assess the conditions against the applicable public health and housing standards under Barbados law.

Step 3 — Enforcement action (if applicable).
If the inspector identifies conditions that breach the applicable public health or housing standards, the relevant authority may:
(a) require the landlord (formally or informally) to carry out specified remedial works within a stated period;
(b) issue a formal notice or order under the applicable statutory powers;
(c) take other enforcement steps available under Barbados public health legislation.

Step 4 — Report and evidence.
Any inspection report or official findings produced by the public health authority constitute valuable independent evidence for a civil claim. A tenant who subsequently brings proceedings before the Magistrates' Court or High Court of Barbados for disrepair or habitability defects should obtain copies of all inspection findings and official correspondence.

Relationship to civil proceedings:

The public health enforcement route is parallel to, not a substitute for, a private civil claim. Both routes may run simultaneously. A landlord who fails to comply with a public health authority requirement may also face separate civil liability to the tenant for breach of the implied duty of habitability and repair.

Note: the precise enforcement powers of the relevant Barbados public health authority depend on the applicable legislation in force. Parties seeking specific information about the enforcement regime should consult the Laws of Barbados portal at laws.barbados.gov.bb.

Currency note: all monetary amounts in Barbados Dollars (BBD). The BBD is pegged at 2:1 to the United States Dollar (USD).`,
  tags: ['public-health', 'environmental-health', 'inspection', 'Barbados', 'Cap-230', 'habitability', 'housing-standards'],
};

export default doc;
