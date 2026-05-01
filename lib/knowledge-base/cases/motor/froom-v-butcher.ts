import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-froom-v-butcher',
  type: 'case',
  category: 'motor-accident',
  title: 'Froom v Butcher [1976] QB 286 (CA)',
  jurisdiction: 'england-wales',
  citation: 'Froom v Butcher [1976] QB 286 (CA)',
  url: 'https://www.bailii.org/ew/cases/EWCA/Civ/1975/6.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['seatbelt', 'seat belt', 'helmet', 'contributory negligence', 'apportionment', 'reduction'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Standard tariff for contributory negligence on failure to wear a seatbelt: 25% reduction where a seatbelt would have prevented the injury entirely; 15% where it would have made a substantial difference; nil where it would have made no difference. Applied by analogy to motorcycle helmets and other safety equipment.',
  content: `Froom v Butcher [1976] QB 286 (Court of Appeal).

Facts: The claimant was a passenger in a car involved in a collision caused by the defendant's negligence. The claimant was not wearing a seatbelt. He suffered head and chest injuries that, the trial judge found, would have been substantially less severe had he been wearing a seatbelt. (Wearing seatbelts was lawful but not yet compulsory at the time.)

Held (CA): The Court of Appeal held that failure to wear a seatbelt was contributory negligence and reduced the damages. Lord Denning MR delivered the leading judgment, articulating a workable tariff to be applied as a matter of practice:

(1) Where the seatbelt would have prevented the injury altogether — 25% reduction.

(2) Where the seatbelt would have made a considerable difference, reducing but not preventing the injury — 15% reduction.

(3) Where the seatbelt would have made no difference (e.g., the injury occurred in a way the belt could not address) — no reduction.

Lord Denning emphasised that this was a tariff designed to produce consistency, not a rule that admitted no exceptions. The court should consider the actual medical evidence on whether the seatbelt would have made a difference and apply the tariff with common sense.

Application and extensions:

1. Seatbelts are now compulsory (Road Traffic Act 1988 s.14; Motor Vehicles (Wearing of Seat Belts) Regulations 1993). The Froom tariff continues to apply to civil quantification of contributory negligence.

2. Motorcycle helmets — analogous tariff applied: failure to wear, or failure to fasten correctly, may attract up to 25% reduction (Capps v Miller [1989] 1 WLR 839 — chinstrap unfastened, helmet came off in collision; 10% reduction).

3. Cycle helmets — no statutory obligation to wear; but failure may amount to contributory negligence on the same principles where the helmet would have made a material difference (Smith v Finch [2009] EWHC 53).

4. Child restraints — failure to use an appropriate child restraint, where it would have prevented or reduced injury, attracts contributory-negligence reduction against the responsible adult (parent / driver), not against the child claimant directly.

The Froom tariff is reflected in standard practice and underpins most negotiated settlement positions on contributory-negligence reductions in motor cases involving safety-equipment failure.`,
  tags: ['Froom-v-Butcher', 'seatbelt', 'contributory-negligence', 'tariff', 'apportionment-25-percent'],
};

export default doc;
