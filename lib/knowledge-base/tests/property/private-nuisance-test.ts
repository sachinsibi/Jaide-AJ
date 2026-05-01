import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-private-nuisance-test',
  type: 'test',
  category: 'property-damage',
  title: 'Private Nuisance Test',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['property-damage'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Private nuisance is an unreasonable interference with the claimant\'s use or enjoyment of land, or with a right over land. The five-element test: (1) interference; (2) with the claimant\'s use or enjoyment of, or right in, land; (3) the claimant has a proprietary interest (Hunter); (4) the interference is unreasonable on the locality / character / utility / sensitivity factors; (5) the defendant created, adopted, or continued the nuisance with knowledge.',
  content: `Element 1 — Interference. Indirect physical or non-physical interference emanating from the defendant's land or activity: (a) encroachment (tree roots, branches, structures protruding); (b) direct physical damage (vibration cracking walls, flooding, spreading fire, subsidence from extracted moisture); (c) interference with use and enjoyment (noise, smell, smoke, dust, light pollution).

Element 2 — Affecting the claimant's land or rights in or over land. Nuisance is a tort against land, not the person.

Element 3 — Standing (Hunter v Canary Wharf [1997] AC 655). The claimant must have a legal interest in the affected land — freehold, leasehold, or other proprietary interest. Mere occupiers (lodgers, family members without tenancy) lack standing in nuisance, though they may have a separate negligence claim for damaged chattels.

Element 4 — Unreasonableness. Courts weigh: (a) locality and character (Sturges v Bridgman (1879); planning permission does not authorise nuisance but may inform character — Coventry v Lawrence [2014] UKSC 13); (b) duration and frequency (recurrent or continuing interference more readily unreasonable than isolated incidents); (c) time of day; (d) utility of the defendant's conduct (reasonable user is not an absolute defence); (e) abnormal sensitivity — the standard is the ordinary user, but where the interference would have been a nuisance even to a non-sensitive use, the claim succeeds and full loss recovers (Network Rail v Morris [2004]); (f) malice — acts done to annoy or harm are unreasonable even if the underlying activity is not (Christie v Davey [1893] 1 Ch 316).

Element 5 — Defendant's role. The defendant must have created the nuisance, OR adopted or continued one they knew or ought to have known of (Sedleigh-Denfield v O'Callaghan [1940] AC 880; Leakey v National Trust [1980] for natural hazards).

Defences and limits: prescription (20 years' continuous nuisance acceptable to claimant); statutory authority; consent; contributory acts. NOT a defence: claimant came to the nuisance.

Remedies: injunction (mandatory or prohibitory); damages (diminution in value, cost of repair, loss of enjoyment); abatement (self-help, with notice). Damages in lieu of injunction under s.50 Senior Courts Act 1981 in narrow circumstances (Coventry v Lawrence).`,
  tags: ['private-nuisance', 'unreasonable-interference', 'standing', 'locality', 'continuing-nuisance'],
};

export default doc;
