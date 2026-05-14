import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-rylands-fletcher-test',
  type: 'test',
  category: 'property-damage',
  title: 'Rylands v Fletcher Test (strict liability for escape)',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['escape', 'reservoir', 'flood', 'fire spread', 'chemical', 'water tank', 'leak from neighbour', 'rylands'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Four-element test for strict liability under the principle in Rylands v Fletcher (persuasive common law authority applied in Barbados as a Commonwealth jurisdiction): (1) accumulation on land; (2) non-natural use; (3) escape from the defendant\'s land; (4) damage of a foreseeable type (Cambridge Water — persuasive authority). No fault or negligence is required.',
  content: `Rylands v Fletcher — Four-Element Test (Barbados Common Law)

The Rylands v Fletcher principle (1868) LR 3 HL 330 is persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. It imposes strict liability (no requirement of fault or negligence) for damage caused by the escape of a dangerous accumulation from a defendant's land where the use was non-natural.

Element 1 — Accumulation on the defendant's land. The defendant brought onto, kept, or accumulated the thing on their land for their own purposes. Things that are naturally present on the land (naturally occurring rocks, native vegetation, naturally flowing water) are not within the principle; their escape or movement gives rise instead to a Sedleigh-Denfield or Leakey-style nuisance analysis.

Element 2 — Non-natural use of the land. The use must be extraordinary or unusual at the time and place in question — going beyond ordinary domestic or commercial use appropriate to the locality. Examples:

Non-natural: mass storage of water (reservoirs, large tanks); storage of chemicals in substantial quantities; accumulation of explosives or highly flammable materials; industrial-scale activities in a residential area.

Not non-natural: domestic water supply pipes; ordinary household or garden use; small-scale commercial uses consistent with local character.

The test is applied having regard to local conditions in Barbados and what constitutes ordinary land use in the relevant area.

Element 3 — Escape from the defendant's land. There must be an escape from a place over which the defendant has occupation or control to a place outside their control. There is no liability under this principle for damage caused by an accumulation that injures persons while they remain on the defendant's land — that falls under negligence or the common law duty of care.

Element 4 — Damage of a foreseeable type. The type (not necessarily the precise extent) of damage must have been reasonably foreseeable as a consequence of an escape of the relevant kind. (Cambridge Water Co v Eastern Counties Leather [1994] 2 AC 264 — persuasive authority in Barbados.) Damage of a wholly unforeseeable type is not recoverable even under the strict liability principle.

What is NOT required: fault, negligence, or breach of duty in the conduct of the activity. Liability is strict.

Defences: act of God (an extraordinary and unforeseeable natural event); act of a third-party stranger that the defendant could not reasonably have foreseen and prevented; statutory authority; consent of the claimant; default of the claimant; contributory conduct by the claimant.

Damages recoverable: physical property damage and reasonably foreseeable consequential losses. Personal injury is not recoverable under the Rylands principle. Pure economic loss is not recoverable.

Limitation: the applicable Barbados limitation period (generally 6 years from the date of escape and damage).

Forum: claims up to BBD $10,000 (approximately USD $5,000 at the 2:1 peg) are brought in the Magistrates' Court under Cap. 116A; claims above that threshold are brought in the High Court of Barbados under Cap. 117.`,
  tags: ['Rylands-Fletcher-test', 'strict-liability', 'escape', 'non-natural-use', 'foreseeability', 'barbados'],
};

export default doc;
