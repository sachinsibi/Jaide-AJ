import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-liverpool-v-irwin',
  type: 'case',
  category: 'tenancy',
  title: 'Liverpool City Council v Irwin [1977] AC 239 (HL)',
  jurisdiction: 'barbados',
  citation: 'Liverpool City Council v Irwin [1977] AC 239 (HL)',
  url: 'https://www.bailii.org/uk/cases/UKHL/1976/1.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['common parts', 'lifts', 'stairs', 'corridor', 'lighting', 'block', 'multi-occupancy', 'common areas', 'shared areas'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. Where a residential tenancy leaves common parts of a multi-occupancy building (lifts, stairs, lighting, refuse facilities) outside any express obligation, a term is implied by necessity that the landlord will take reasonable care to keep those common parts in reasonable repair and usability.',
  content: `Liverpool City Council v Irwin [1977] AC 239 (House of Lords).

Status: persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. This is an English House of Lords decision and is not binding Barbados law; it is applied as a statement of common law principle recognised across Commonwealth jurisdictions.

Facts: the Irwins were tenants of a flat on the 15th floor of a high-rise tower block. The tenancy agreement set out the tenants' obligations but contained no express obligation on the landlord in respect of the lifts, stairs, communal lighting, or rubbish chutes — all essential to use of the flat in a multi-storey building. The lifts repeatedly broke down, the stairs were unlit, and the rubbish chutes were blocked. The tenants withheld rent in protest; the landlord sought possession; the tenants counterclaimed for breach of an implied obligation to maintain the common parts.

Held: the House of Lords held that a term must be implied into the tenancy by necessity to give business efficacy to the contract. The landlord owed an obligation to take reasonable care to keep the common parts in reasonable repair and usability. The standard is one of reasonable care, not absolute repair.

The court rejected the test of "what reasonable parties would have agreed" as the appropriate implication standard, preferring the narrower test of necessity or business efficacy. On the facts, the landlord had not breached the duty, as the failures were largely caused by tenant vandalism rather than landlord neglect.

Application in Barbados: where a residential tenancy in Barbados involves a multi-occupancy building — including apartment blocks, shared residential complexes, or buildings with common stairwells, lifts, or shared facilities — Barbados courts may apply the principle from Irwin that the landlord is under an implied obligation to take reasonable care to keep common parts in reasonable repair and usability. This obligation arises from necessity, even where the tenancy agreement is silent on the subject. The duty is one of reasonable care, not a strict guarantee. A landlord cannot be held liable where the failure results from third-party conduct outside the landlord's reasonable control.`,
  tags: ['Liverpool-v-Irwin', 'common-parts', 'implied-terms', 'necessity', 'multi-occupancy', 'Barbados', 'persuasive-authority'],
};

export default doc;
