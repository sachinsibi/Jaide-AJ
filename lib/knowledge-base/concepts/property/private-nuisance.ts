import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-private-nuisance',
  type: 'concept',
  category: 'property-damage',
  title: 'Private Nuisance (the tort against land)',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['property-damage'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    "Private nuisance is unreasonable interference with the use or enjoyment of land, or with rights over or in connection with land. It protects the claimant's proprietary interest in land — only owners and tenants with exclusive possession have standing to sue. Categories: encroachment, physical damage, and interference with use and enjoyment. These principles apply in Barbados as inherited common law.",
  eli5Summary:
    "Private nuisance is when something coming from a neighbour's property unreasonably affects the affected party's land — for example, tree roots cracking foundations, water flooding from an adjacent garden, or persistent noise that prevents normal use of a room. The court asks whether the interference is unreasonable in the circumstances, and what remedy would be appropriate (often damages plus an order to stop). Only the owner or tenant of the affected land can bring a nuisance claim in Barbados.",
  content: `Private nuisance is the principal tort governing unreasonable interference between neighbouring landowners. It protects the use and enjoyment of land, not the person — it is a tort against land. These principles apply in Barbados as inherited common law, consistent with Barbados's status as a Commonwealth jurisdiction.

Three categories of interference:

1. Encroachment onto the claimant's land. Tree roots, overhanging branches, structures protruding over a boundary, or substances flowing onto the land. Encroachments are typically actionable as soon as they damage or threaten the claimant's enjoyment of the land.

2. Direct physical damage to the claimant's land. Vibration cracking walls, flooding, fire spread, subsidence caused by extracted moisture or ground instability. Physical damage is the strongest category — courts treat the unreasonableness threshold as low when actual physical harm has been caused.

3. Interference with the claimant's use and enjoyment. Noise, smell, smoke, dust, light pollution. A higher threshold of unreasonableness applies — the law tolerates a degree of give and take between neighbours; only material interference is actionable.

Standing (Hunter v Canary Wharf [1997] AC 655 — persuasive authority in Barbados): the claimant must have a legal interest in the affected land — freehold, leasehold, or other proprietary interest. Mere occupiers without proprietary interest (lodgers, family members) cannot sue in nuisance.

Unreasonableness factors: locality and character of the area (residential, agricultural, commercial); duration and frequency; time of day; utility of the defendant's conduct; abnormal sensitivity of the claimant (the standard is the ordinary user, not a hypersensitive one); malice (conduct done to annoy a neighbour is unreasonable even if the underlying activity is not inherently so).

Defendant's role: the defendant must have created the nuisance, OR adopted or continued a nuisance once they knew or ought to have known of it (Sedleigh-Denfield v O'Callaghan [1940] AC 880 — persuasive authority in Barbados). The principle extends to natural hazards on the land (Leakey v National Trust [1980] QB 485 — persuasive authority) subject to a "measured duty" calibrated to the defendant's means.

Continuing nuisance (Delaware Mansions v Westminster CC [2001] UKHL 55 — persuasive authority): each day of continuance gives a fresh cause of action. The applicable Barbados limitation period does not bar damages for the period of continuance within 6 years of the claim.

Remedies: damages (cost of repair, diminution in value, loss of enjoyment); injunction (mandatory or prohibitory, available from the High Court of Barbados); abatement (self-help with appropriate notice, in narrow circumstances).

Forum: claims up to BBD $10,000 (approximately USD $5,000 at the 2:1 peg) are brought in the Magistrates' Court of Barbados under Cap. 116A; claims above that threshold are brought in the High Court of Barbados under Cap. 117.

Defences: prescription (long-continued nuisance accepted without objection); statutory authority; consent. It is not a defence that the claimant came to the nuisance.`,
  tags: ['private-nuisance', 'unreasonable-interference', 'standing', 'encroachment', 'continuing-nuisance', 'barbados'],
};

export default doc;
