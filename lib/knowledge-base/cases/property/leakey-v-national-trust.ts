import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-leakey-v-national-trust',
  type: 'case',
  category: 'property-damage',
  title: 'Leakey v National Trust [1980] QB 485 (CA)',
  jurisdiction: 'england-wales',
  citation: 'Leakey v National Trust for Places of Historic Interest or Natural Beauty [1980] QB 485 (CA)',
  url: 'https://www.bailii.org/ew/cases/EWCA/Civ/1979/5.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['property-damage'],
  tabs: ['legalBreakdown'],
  factSummary:
    'A landowner owes a measured duty of care to neighbours to take reasonable steps to abate natural hazards on the land that pose a foreseeable risk of damage to neighbouring property. The duty takes account of the landowner\'s means and what is reasonable in the circumstances.',
  content: `Leakey v National Trust [1980] QB 485 (Court of Appeal).

Facts: The Trust owned land containing an unstable mound ("Burrow Mump"). It had been moving for years, with earth and stone falling onto claimants' adjoining gardens. The Trust knew of the instability. After a hot, dry summer caused further movement the claimants asked the Trust to take preventive action; the Trust refused, asserting it had no obligation because the hazard was natural. After a major fall, the claimants sued in nuisance.

Held: The Trust was liable. An occupier owes a measured duty of care to abate natural hazards on the land that they know, or ought to know, pose a foreseeable risk to neighbouring property.

Megaw LJ: "...the duty is a duty to do that which is reasonable in all the circumstances, and no more than what, if anything, is reasonable, to prevent or minimise the known risk of damage or injury to one's neighbour or to his property."

Doctrinal contribution:

(1) Extension of Sedleigh-Denfield to wholly natural hazards (geological instability; trees; soil slip; watercourses).

(2) The "measured duty" — calibrated to the defendant's resources, the magnitude of risk, practicability of abatement, cost, and the relative resources of claimant and defendant. NOT a strict objective duty: a public charity or impecunious individual is not held to the same standard as a wealthy commercial occupier.

(3) The defendant can be required to permit the claimant access to abate at the claimant's cost where reasonable.

Refinements: Holbeck Hall Hotel v Scarborough BC [2000] QB 836 confined the duty — applies only where the defect is patent (or ought reasonably to be discovered) and abatement is practicable within reasonable expense. Latent geological defects of unknown extent may not give rise to liability. The duty does not require exhaustive investigation; reasonable inspection suffices.

Application: trees on the defendant's land with diseased or weakened branches likely to fall on a neighbour's property — once the defendant knows or ought to know, pruning or felling must be undertaken; cliff erosion, soil slip, retaining-wall failure; accumulated combustible material; fallen leaves blocking shared drains.

Remedies: damages for loss caused; mandatory injunction to abate; declaration setting out cooperative abatement steps.`,
  tags: ['Leakey', 'natural-hazard', 'measured-duty', 'private-nuisance', 'reasonable-means'],
};

export default doc;
