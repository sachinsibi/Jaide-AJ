import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-trespass-to-land-test',
  type: 'test',
  category: 'property-damage',
  title: 'Trespass to Land Test',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['trespass', 'unauthorised entry', 'on my land', 'over my land', 'overhanging', 'encroaching structure', 'crossed boundary'],
  tabs: ['legalBreakdown'],
  factSummary:
    "Trespass to land is the intentional, direct, unjustified physical interference with land in another's possession. Three elements: (1) intentional act; (2) direct (not consequential) interference with the land; (3) without lawful justification. Actionable per se — no proof of damage required. These principles apply in Barbados as inherited common law.",
  content: `Trespass to Land — Three-Element Test (Barbados Common Law)

Element 1 — Intentional act. The defendant must have intended the act constituting the entry (not necessarily intended to trespass — ignorance of the boundary is no defence to liability). Involuntary entry — being physically forced onto another's land, or entry during unconsciousness — is not trespass.

Element 2 — Direct interference with the land. The interference must be the immediate result of the defendant's act, not consequential. Throwing a stone over a boundary is direct trespass; water seeping gradually under a boundary from a nearby source is more naturally addressed in nuisance or under the Rylands v Fletcher principle.

Forms of trespass in Barbados:
(a) Physical entry by the person (walking, driving, parking on the land without permission).
(b) Causing things to enter the land (planting roots across a boundary, dumping materials, throwing objects).
(c) Structures protruding over airspace — crane jibs, overhanging eaves or balconies (Anchor Brewhouse v Berkley House [1987] — persuasive authority in Barbados).
(d) Sub-surface intrusion — tunnelling or drilling beneath the land without authority (Bocardo v Star Energy [2010] — persuasive authority in Barbados).
(e) Continuing presence after permission is revoked or expires.

Element 3 — Without lawful justification. No licence, easement, statutory power, or other recognised authority to be on or over the land. Common authorisations: implied licence to approach the front of a property for ordinary purposes (revocable by clear notice); formally granted easements (right of way, right of drainage); statutory powers conferred on utilities or emergency services.

NOT required: proof of damage (trespass is actionable per se — nominal damages are available even without tangible loss); knowledge that the entry constitutes a trespass (honest mistake as to the boundary is no defence to liability, though relevant to costs and quantum); continuation of harm (a momentary entry creates a complete cause of action).

Standing: the claimant must be in actual or constructive possession — owner-occupier, tenant, or person with exclusive possession. Bare licensees do not ordinarily have standing in trespass.

Continuing trespass: where the defendant remains on the land or leaves objects there, every day of continuance is a fresh cause of action. The applicable Barbados limitation period does not bar damages for continuance within 6 years of the claim.

Remedies:
- Damages: nominal where no loss; substantive where loss caused; user damages measured by the reasonable hire-fee equivalent for unauthorised use even without actual loss (Stadium Capital Holdings v St Marylebone Property [2010] — persuasive authority); aggravated or exemplary damages in cases of wilful or contumelious conduct.
- Injunction (prohibitory or mandatory, including requiring removal of encroaching structures) — available from the High Court of Barbados.
- Self-help: re-entry by the person with the right to possession; reasonable removal of trespassing objects in appropriate circumstances.

Defences: lawful authority; consent; necessity (narrow); statutory authority.

Forum: claims up to BBD $10,000 (approximately USD $5,000 at the 2:1 peg) are brought in the Magistrates' Court under Cap. 116A; claims above that threshold are brought in the High Court of Barbados under Cap. 117. Injunctive relief is sought in the High Court.`,
  tags: ['trespass-to-land', 'actionable-per-se', 'direct-interference', 'encroachment', 'continuing-trespass', 'barbados'],
};

export default doc;
