import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-froom-v-butcher',
  type: 'case',
  category: 'motor-accident',
  title: 'Froom v Butcher [1976] QB 286 (CA)',
  jurisdiction: 'barbados',
  citation: 'Froom v Butcher [1976] QB 286 (CA)',
  url: 'https://www.bailii.org/ew/cases/EWCA/Civ/1975/6.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['seatbelt', 'seat belt', 'helmet', 'contributory negligence', 'apportionment', 'reduction'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. Establishes a practical tariff for contributory negligence arising from failure to wear a seatbelt: 25% reduction where a seatbelt would have prevented the injury entirely; 15% where it would have made a substantial difference; nil where it would have made no difference.',
  content: `Froom v Butcher [1976] QB 286 (Court of Appeal).

Facts: The claimant was a passenger in a car involved in a collision caused by the defendant's negligence. The claimant was not wearing a seatbelt. He suffered head and chest injuries that, the trial judge found, would have been substantially less severe had he been wearing a seatbelt.

Held (CA): The Court of Appeal held that failure to wear a seatbelt was contributory negligence and reduced the damages. Lord Denning MR articulated a practical tariff to be applied consistently:

(1) Where the seatbelt would have prevented the injury altogether — 25% reduction.

(2) Where the seatbelt would have made a considerable difference, reducing but not preventing the injury — 15% reduction.

(3) Where the seatbelt would have made no difference (e.g., the injury occurred in a way the belt could not address) — no reduction.

Lord Denning emphasised that this was a tariff designed to produce consistency, not a rule that admitted no exceptions. The court should consider the actual medical evidence on whether the seatbelt would have made a difference and apply the tariff with common sense.

Application in Barbados: Froom v Butcher is persuasive common law authority applicable in Barbados as a Commonwealth jurisdiction. Where a claimant failed to wear a seatbelt and road traffic law or regulations in Barbados required or encouraged seatbelt use, the Barbados courts may apply similar apportionment principles. The actual effect on quantum depends on the medical evidence about what difference the seatbelt would have made.

Extensions by analogy: the same principle — that failure to use available safety equipment may constitute contributory negligence reducing recovery in proportion to the difference that equipment would have made — applies to motorcycle helmets and other safety devices where their use is required or would be expected of the reasonable driver or passenger.

Note on persuasive status: Froom v Butcher is an English Court of Appeal decision. It is not binding on Barbados courts but is treated as a highly persuasive statement of common law principles on the intersection of safety-equipment failure and contributory negligence apportionment, widely applied in Commonwealth jurisdictions.`,
  tags: ['Froom-v-Butcher', 'seatbelt', 'contributory-negligence', 'tariff', 'apportionment', 'Barbados'],
};

export default doc;
