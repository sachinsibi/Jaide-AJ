import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-southwark-v-mills',
  type: 'case',
  category: 'tenancy',
  title: 'Southwark LBC v Mills [2001] 1 AC 1 (HL)',
  jurisdiction: 'england-wales',
  citation: 'Southwark LBC v Mills [2001] 1 AC 1 (HL)',
  url: 'https://www.bailii.org/uk/cases/UKHL/1999/40.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: [
    'noise',
    'sound insulation',
    'soundproofing',
    'neighbour noise',
    'quiet enjoyment',
    'design defect',
    'inherent defect',
  ],
  tabs: ['legalBreakdown'],
  factSummary:
    'Sound insulation defects inherent in the original construction of a flat are not actionable as breach of the implied covenant for quiet enjoyment, nor as breach of s.11 LTA 1985. The covenant for quiet enjoyment is prospective only; it does not warrant the condition of the premises at the start of the tenancy.',
  content: `Southwark LBC v Mills [2001] 1 AC 1 (House of Lords).

Facts: Tenants of council flats in poorly soundproofed pre-war conversions complained that they could hear every footstep, conversation, and lavatory flush from neighbouring flats. The construction met the building standards of its day but fell well short of modern soundproofing. The tenants brought claims in (i) breach of the implied covenant for quiet enjoyment, (ii) breach of s.11 LTA 1985 for failure to keep the structure in repair, and (iii) nuisance.

Held (House of Lords, dismissing the tenants' claims):

(1) Quiet enjoyment is prospective. The implied covenant for quiet enjoyment is a covenant that the tenant's possession will not be interfered with during the term by the landlord or someone claiming under the landlord. It does not warrant the condition of the premises at the date of the tenancy. A tenant who takes premises in a particular state cannot complain that that pre-existing state interferes with quiet enjoyment.

(2) Section 11 requires disrepair. Section 11 LTA 1985 imposes an obligation to keep in repair, not to improve. There is no breach unless the structure has fallen into disrepair from a previously sound state. Inherent design defects, however serious, are outside s.11 (following Quick v Taff-Ely BC).

(3) Nuisance — neighbour-on-neighbour ordinary residential use cannot ground a claim against the landlord, who has no control over the neighbour's lawful use of their own property.

Application: Mills is the leading authority on:
(a) the prospective scope of the quiet enjoyment covenant — landlords are not liable for pre-existing physical conditions of the demised premises;
(b) the disrepair gateway in s.11 — confirmed by the House of Lords;
(c) the limits of nuisance liability against landlords for neighbour conduct.

For tenants in this position post-2018, the route is now s.9A LTA 1985 (Fitness for Habitation Act) — which does not require disrepair and imports the HHSRS standard, including the noise-related hazard categories.`,
  tags: ['Southwark-v-Mills', 'quiet-enjoyment', 'sound-insulation', 'inherent-defect', 'section-11'],
};

export default doc;
