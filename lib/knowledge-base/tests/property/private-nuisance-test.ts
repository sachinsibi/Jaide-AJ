import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-private-nuisance-test',
  type: 'test',
  category: 'property-damage',
  title: 'Private Nuisance Test',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['property-damage'],
  tabs: ['legalBreakdown'],
  factSummary:
    "Private nuisance is an unreasonable interference with the claimant's use or enjoyment of land, or with a right over land. The five-element test: (1) interference with land or rights in land; (2) the claimant has a proprietary interest (Hunter v Canary Wharf — persuasive authority); (3) the interference is unreasonable on locality, character, utility, and sensitivity factors; (4) the defendant created, adopted, or continued the nuisance with knowledge; (5) the damage was reasonably foreseeable. These principles apply in Barbados as inherited common law.",
  content: `Private Nuisance — Five-Element Test (Barbados Common Law)

Element 1 — Interference with land or rights in land. Indirect physical or non-physical interference emanating from the defendant's land or activity:
(a) Encroachment: tree roots, overhanging branches, structures protruding over a boundary.
(b) Direct physical damage: vibration cracking walls, flooding, spreading fire, subsidence from extracted moisture or ground instability.
(c) Interference with use and enjoyment: noise, smell, smoke, dust, light pollution.

Nuisance is a tort against land, not the person.

Element 2 — Standing: proprietary interest in the affected land. The claimant must have a legal interest in the affected land — freehold, leasehold, or other proprietary interest. Mere occupiers without proprietary interest (lodgers, family members without a tenancy) lack standing in nuisance, though they may have a separate negligence claim for damaged chattels. (Hunter v Canary Wharf [1997] AC 655 — persuasive common law authority in Barbados.)

Element 3 — Unreasonableness. Courts weigh the following factors:
(a) Locality and character of the area — residential, agricultural, and commercial districts have different tolerances.
(b) Duration and frequency — recurrent or continuing interference is more readily unreasonable than an isolated incident.
(c) Time of day.
(d) Utility of the defendant's conduct — the reasonableness of the activity is not an absolute defence but is a balancing factor.
(e) Abnormal sensitivity — the standard is the ordinary user of land in that locality, not a hypersensitive one. Where the interference would have been actionable even for a non-sensitive use, the full loss recovers.
(f) Malice — acts done deliberately to annoy or harm are unreasonable even if the underlying activity would otherwise be reasonable. (Christie v Davey [1893] — persuasive authority in Barbados.)

Element 4 — Defendant's role. The defendant must have:
(a) created the nuisance; OR
(b) adopted or continued a nuisance they knew or ought to have known of (Sedleigh-Denfield v O'Callaghan [1940] AC 880 — persuasive authority in Barbados); OR
(c) failed to abate a natural hazard on their land posing a foreseeable risk to neighbours (Leakey v National Trust [1980] QB 485 — persuasive authority in Barbados, measured duty calibrated to defendant's means).

Element 5 — Foreseeability of damage. The type of damage must have been reasonably foreseeable as a consequence of the defendant's act or omission. (Cambridge Water Co v Eastern Counties Leather [1994] 2 AC 264 — persuasive authority in Barbados.)

Defences and limits: long-continued nuisance accepted without objection (prescription); statutory authority; consent. It is not a defence that the claimant came to the nuisance after it was established.

Continuing nuisance: each day of continuance gives a fresh cause of action. The applicable Barbados limitation period does not bar damages for the period within 6 years of the claim. (Delaware Mansions v Westminster CC [2001] UKHL 55 — persuasive authority in Barbados.)

Remedies: injunction (mandatory or prohibitory — available from the High Court of Barbados); damages (diminution in value, cost of repair, loss of enjoyment); abatement (self-help with appropriate notice, in narrow circumstances). Damages in lieu of injunction are available in exceptional cases where an injunction would be disproportionate.

Forum: claims up to BBD $10,000 (approximately USD $5,000 at the 2:1 peg) are brought in the Magistrates' Court under Cap. 116A; claims above that threshold are brought in the High Court of Barbados under Cap. 117.`,
  tags: ['private-nuisance', 'unreasonable-interference', 'standing', 'locality', 'continuing-nuisance', 'barbados'],
};

export default doc;
