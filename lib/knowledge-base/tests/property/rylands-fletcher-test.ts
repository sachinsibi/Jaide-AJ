import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-rylands-fletcher-test',
  type: 'test',
  category: 'property-damage',
  title: 'Rylands v Fletcher Test (strict liability for escape)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['escape', 'reservoir', 'flood', 'fire spread', 'chemical', 'water tank', 'leak from neighbour', 'rylands'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Five-element test for liability under the rule in Rylands v Fletcher (now a sub-species of nuisance): (1) accumulation by the defendant on their land; (2) of something likely to do mischief if it escapes; (3) for a non-natural ("extraordinary and unusual") use of the land; (4) escape; (5) damage of a foreseeable type (Cambridge Water).',
  content: `Rylands Test (post-Cambridge Water and Transco):

Element 1 — Accumulation. The defendant brought onto, kept, or accumulated the thing on their land. Things naturally on the land (rocks, native vegetation, naturally occurring water) are not within Rylands; their escape gives rise to a Sedleigh-Denfield/Leakey-style nuisance instead.

Element 2 — Likely to do mischief if it escapes. Classic examples: large quantities of water (Rylands itself); fire from non-natural sources (LMS International v Styrene Packaging [2005]); accumulated chemicals (Cambridge Water); gas; explosives; sewage. Quantity matters — domestic water in pipes is not within Rylands (Transco v Stockport MBC [2003] UKHL 61).

Element 3 — Non-natural use. The use must be "extraordinary and unusual" at the time and place in question (Transco). Domestic water supply, ordinary household waste, and normal commercial uses appropriate to the locality are NOT non-natural. Mass storage of water, storage of chemicals in quantity, or accumulation of explosives ARE non-natural. Heavy industry in an industrial estate may be ordinary; the same activity in a residential street is not.

Element 4 — Escape. From a place over which the defendant has occupation or control to a place where the defendant does not have control. No escape, no Rylands liability — only negligence/occupiers' liability operates within the defendant's premises (Read v J Lyons & Co [1947] AC 156).

Element 5 — Foreseeable type of damage. The TYPE (not the precise extent) of damage must have been reasonably foreseeable as a consequence of an escape of the relevant kind (Cambridge Water). Damage of an unforeseeable type is not recoverable.

What is NOT required: fault, negligence, or breach of duty in the conduct of the activity. Liability is strict.

Defences: Act of God; act of a stranger the defendant could not reasonably have foreseen and prevented; statutory authority; consent; default of the claimant; contributory negligence under LR(CN)A 1945.

Damages recoverable: physical property damage and consequential losses. Personal injury is NOT recoverable under Rylands (Transco). Pure economic loss is not recoverable.

Limitation: 6 years from the date of escape and damage (LA 1980 s.2).`,
  tags: ['Rylands-Fletcher-test', 'strict-liability', 'escape', 'non-natural-use', 'foreseeability'],
};

export default doc;
