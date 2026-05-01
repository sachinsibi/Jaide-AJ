import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-private-nuisance',
  type: 'concept',
  category: 'property-damage',
  title: 'Private Nuisance (the tort against land)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['property-damage'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'Private nuisance is unreasonable interference with the use or enjoyment of land, or with rights over or in connection with land. It protects the claimant\'s proprietary interest in land — only owners and tenants have standing. Categories: encroachment, physical damage, and interference with use/enjoyment.',
  eli5Summary:
    'Private nuisance is when something coming from your neighbour\'s property unreasonably affects yours — like tree roots cracking your foundations, water flooding from their garden, or persistent loud noise that stops you using a room. The court asks whether the interference is unreasonable in the circumstances, and what would put it right (often damages plus an order to stop). Only the owner or tenant of the affected land can sue.',
  content: `Private nuisance is the principal tort governing unreasonable interference between neighbouring landowners. It protects the use and enjoyment of land, not the person — it is a tort against land.

Three categories of interference:

1. Encroachment onto the claimant's land. Tree roots, branches, structures protruding over a boundary, or substances flowing onto the land. Encroachments are typically actionable as soon as they damage or threaten the claimant's enjoyment.

2. Direct physical damage to the claimant's land. Vibration cracking walls, flooding, fire spread, subsidence caused by extracted moisture or instability. Physical damage is the strongest category — courts treat the unreasonableness threshold as low when actual physical harm has been caused.

3. Interference with the claimant's use and enjoyment. Noise, smell, smoke, dust, light pollution. A higher threshold of unreasonableness applies — the law tolerates a degree of "give and take" between neighbours; only material interference is actionable.

Standing (Hunter v Canary Wharf [1997] AC 655): the claimant must have a legal interest in the affected land — freehold, leasehold, or other proprietary interest. Mere occupiers without proprietary interest (lodgers, family members) cannot sue in nuisance.

Unreasonableness factors: locality and character (industrial vs residential); duration and frequency; time of day; utility of the defendant's conduct; abnormal sensitivity of the claimant (the standard is the ordinary user); malice (conduct done to annoy is unreasonable even if the underlying activity is not).

Defendant's role: the defendant must have created the nuisance, OR adopted/continued a nuisance once they knew or ought to have known of it (Sedleigh-Denfield v O'Callaghan [1940] AC 880). The principle extends to natural hazards on the land (Leakey v National Trust [1980] QB 485) subject to a "measured duty" calibrated to means.

Continuing nuisance (Delaware Mansions v Westminster CC [2001] UKHL 55): each day of continuance gives a fresh cause of action. Limitation does not bar damages for the period within 6 years of the claim.

Remedies: damages (cost of repair, diminution in value, loss of enjoyment); injunction (mandatory or prohibitory); abatement (self-help with notice, narrow circumstances); damages in lieu of injunction (Coventry v Lawrence [2014] UKSC 13).

Defences: prescription (20 years' continuous nuisance accepted by claimant); statutory authority; consent. NOT a defence: that the claimant came to the nuisance.`,
  tags: ['private-nuisance', 'unreasonable-interference', 'standing', 'encroachment', 'continuing-nuisance'],
};

export default doc;
