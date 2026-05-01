import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-liverpool-v-irwin',
  type: 'case',
  category: 'tenancy',
  title: 'Liverpool City Council v Irwin [1977] AC 239 (HL)',
  jurisdiction: 'england-wales',
  citation: 'Liverpool City Council v Irwin [1977] AC 239 (HL)',
  url: 'https://www.bailii.org/uk/cases/UKHL/1976/1.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['common parts', 'lifts', 'stairs', 'corridor', 'lighting', 'block', 'estate', 'multi-occupancy', 'common areas'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Where a tenancy of a flat in a high-rise block leaves common parts (lifts, stairs, lighting, rubbish chutes) outside any express obligation, terms are implied by necessity that the landlord will take reasonable care to keep them in reasonable repair and usability.',
  content: `Liverpool City Council v Irwin [1977] AC 239 (House of Lords).

Facts: The Irwins were tenants of a flat on the 15th floor of a Liverpool tower block owned by the Council. The tenancy agreement set out the tenants' obligations but contained no express obligation on the Council in respect of the lifts, stairs, lighting, or rubbish chutes — all of which were essential to use of the flat in a multi-storey block. The lifts repeatedly broke down, the stairs were unlit, and the rubbish chutes were blocked. The tenants withheld rent in protest; the Council sought possession; the tenants counterclaimed for breach of an implied obligation to maintain the common parts.

Held: The House of Lords held that a term must be implied into the tenancy by necessity to give business efficacy to the contract: the landlord owed an obligation to take reasonable care to keep the common parts in reasonable repair and usability. The standard is one of reasonable care, not absolute repair — a duty to do what is reasonable in the circumstances, not a guarantee.

The House rejected the test of "what reasonable parties would have agreed" as the implication standard, preferring the narrower test of necessity / business efficacy. On the facts, the Council had not breached the duty: the failures were largely caused by tenant vandalism rather than Council neglect.

Application: Irwin is the foundational authority for landlord obligations in respect of common parts in multi-occupancy buildings — lifts, stairs, communal lighting, refuse facilities, communal heating, fire escapes. It applies even where the tenancy is silent on those parts. The duty is one of reasonable care, not strict repair. Modern claims more often proceed under s.11 LTA 1985 (which expressly extends to "any part of the building in which the lessor has an estate or interest") for tenancies granted after 15 January 1989, but Irwin remains the authority for older tenancies and for matters falling outside s.11.`,
  tags: ['Liverpool-v-Irwin', 'common-parts', 'implied-terms', 'necessity', 'multi-occupancy'],
};

export default doc;
