import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-trespass-to-land',
  type: 'concept',
  category: 'property-damage',
  title: 'Trespass to Land',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['trespass', 'unauthorised entry', 'on my land', 'over my land', 'overhanging', 'crossed boundary', 'parked on my'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    "Trespass to land is intentional, direct, unjustified physical interference with land in another's possession. It is actionable per se — no proof of damage required. Forms include physical entry, causing things to enter, oversail of airspace, and continued presence after permission is revoked. These principles apply in Barbados as inherited common law.",
  eli5Summary:
    "Trespass to land is when someone (or something they put there) enters or remains on land without permission. It does not matter whether they caused any damage — the law allows the person in possession of the land to seek a court order for removal and an award of compensation, even if the only harm was the unauthorised presence. Physical entry, parking on a private driveway without consent, a builder's equipment placed on the land without agreement, or a structure oversailing the boundary — all can constitute trespass in Barbados.",
  content: `Trespass to land protects the claimant's exclusive possession of land against unauthorised physical interference. These principles apply in Barbados as inherited common law, consistent with Barbados's status as a Commonwealth jurisdiction.

Elements:

1. Intentional act. The defendant must have voluntarily done the act constituting the entry. Intention to trespass is NOT required — ignorance of the boundary is no defence to liability (though it may be relevant to the level of damages or costs).

2. Direct interference. The interference must be the immediate result of the defendant's act, not merely consequential. (Indirect interference is dealt with in nuisance.)

3. Without lawful justification. No licence, easement, statutory authority, or other recognised right to be on the land.

Forms of trespass:
- Personal entry (walking, driving, parking on the land).
- Causing things to enter (planting roots across a boundary, dumping materials, throwing objects onto the land).
- Oversail — a structure protruding into the airspace of the claimant's land (for example, a crane jib or overhanging eaves: Anchor Brewhouse v Berkley House [1987] — persuasive authority in Barbados). Ordinary overflying aircraft at customary altitudes does not ordinarily constitute trespass.
- Sub-surface — tunnelling or drilling beneath the claimant's land without authority (Bocardo v Star Energy [2010] — persuasive authority in Barbados).
- Continuing trespass — leaving objects on the land or remaining after permission is revoked.

Actionable per se: no proof of damage is required. Nominal damages are awarded where there is no quantifiable loss; substantive damages where loss has been caused; user damages measured by the reasonable hire-fee equivalent for unauthorised use even without actual loss (Stadium Capital Holdings v St Marylebone Property [2010] — persuasive authority in Barbados).

Standing: the claimant must be in actual or constructive possession at the time — owner-occupier, tenant with exclusive possession. Bare licensees do not ordinarily have standing in trespass.

Continuing trespass: where the defendant remains on the land or leaves objects there, every day of continuance is a fresh cause of action. The applicable Barbados limitation period does not bar damages for continuance within 6 years of the claim.

Common scenarios in Barbados: encroaching structures (eaves, gutters, fences, walls) constructed over a boundary; builders' scaffolding, equipment, or materials placed on or overhanging a neighbour's land without consent; parking on a private driveway or yard; plantation of trees or shrubs whose roots extend onto and damage an adjacent property.

Remedies: nominal or substantial damages; user damages; injunction (prohibitory or mandatory, including requiring removal of encroaching structures — available from the High Court of Barbados); self-help (re-entry by the person with the right to possession; reasonable removal of trespassing objects in appropriate circumstances).

Forum: claims up to BBD $10,000 (approximately USD $5,000 at the 2:1 peg) are brought in the Magistrates' Court of Barbados under Cap. 116A; claims above that threshold are brought in the High Court under Cap. 117. Injunctive relief is sought in the High Court.`,
  tags: ['trespass-to-land', 'actionable-per-se', 'oversail', 'encroachment', 'exclusive-possession', 'barbados'],
};

export default doc;
