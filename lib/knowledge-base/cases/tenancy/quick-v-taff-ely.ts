import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-quick-v-taff-ely',
  type: 'case',
  category: 'tenancy',
  title: 'Quick v Taff-Ely BC [1986] QB 809 (CA)',
  jurisdiction: 'england-wales',
  citation: 'Quick v Taff-Ely BC [1986] QB 809 (CA)',
  url: 'https://www.bailii.org/ew/cases/EWCA/Civ/1985/8.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['damp', 'mould', 'condensation', 'disrepair', 'section 11', 'repair', 'cold', 'wet'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Section 11 LTA 1985 obligations attach to disrepair, not to inherent design defects. Condensation dampness arising solely from poor original design (single glazing, no insulation), without any element of physical disrepair to the structure, is not actionable under s.11.',
  content: `Quick v Taff-Ely BC [1986] QB 809 (Court of Appeal).

Facts: The tenant of a council house suffered severe condensation dampness caused by inadequate insulation, single-glazed metal-framed windows, and inefficient heating — all features of the original design. The walls, plaster, and decoration were extensively damaged, but the underlying structure was not in disrepair.

Held: The Court of Appeal held that s.11 LTA 1985 is concerned with disrepair, not with making premises fit or upgrading them to modern standards. For an obligation to repair to arise, there must first be damage to or deterioration of the thing to be repaired. Where condensation arises from inherent design defects without any physical deterioration of the structure or installations, s.11 does not bite.

The court drew a distinction between:
(a) installations that have deteriorated and require repair — within s.11; and
(b) original design features that perform poorly but are not damaged — outside s.11.

Application: Quick is the leading authority limiting s.11 in damp and condensation cases. Tenants whose damp arises from inherent design (rather than disrepair) generally now bring claims under the Homes (Fitness for Human Habitation) Act 2018 (s.9A LTA 1985), which imports the broader HHSRS standard and is not constrained by the disrepair gateway.

Note: Quick must be read alongside Staves v Leeds City Council (1992) 29 EG 119 (plaster falling away from walls is disrepair) and Issa v Hackney LBC [1997] 1 WLR 956 (limits on tort recovery for inherent defects).`,
  tags: ['Quick-v-Taff-Ely', 'section-11', 'condensation', 'disrepair', 'inherent-defect'],
};

export default doc;
