import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-trespass-to-land-test',
  type: 'test',
  category: 'property-damage',
  title: 'Trespass to Land Test',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['trespass', 'unauthorised entry', 'on my land', 'over my land', 'overhanging', 'encroaching structure', 'crossed boundary'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Trespass to land is the intentional, direct, unjustified physical interference with land in another\'s possession. Three elements: (1) intentional act; (2) direct (not consequential) interference; (3) without lawful justification. Actionable per se — no proof of damage required.',
  content: `Element 1 — Intentional act. The defendant must have intended the act constituting the entry (not necessarily intended to trespass — ignorance of the boundary is no defence). Involuntary entry — being thrown onto another's land, sleepwalking — is not trespass (Conway v George Wimpey [1951] 2 KB 266).

Element 2 — Direct interference. The interference must be the immediate result of the defendant's act, not consequential. Throwing a stone over the boundary is direct trespass; water flowing under the boundary from an opened tap is more naturally indirect (nuisance/Rylands).

Forms: (a) physical entry by the person; (b) causing things to enter (planting roots, dumping, throwing objects, parking); (c) structures protruding over airspace (Anchor Brewhouse v Berkley House [1987] 38 BLR 82 — tower-crane oversail is trespass); (d) tunnelling beneath (Bocardo v Star Energy [2010] UKSC 35); (e) continued presence after permission expires or is revoked.

Element 3 — Without lawful justification. No licence, easement, statutory power, or other authority. Common authorisations: implied licence to approach the front door for ordinary purposes (revocable by clear notice); easements (right of way, right of drainage); statutory powers (utilities, emergency services).

NOT required: damage (trespass is actionable per se — nominal damages even without tangible loss); knowledge of trespass (honest belief in a right is no defence to liability, only relevant to costs/damages); continuing harm (a momentary entry creates a complete cause of action).

Standing: claimant must be in actual or constructive possession — owner-occupier, tenant, person with exclusive possession. Bare licensees lack standing.

Continuing trespass: where the defendant remains, or leaves objects on the land, every day of continuance is a fresh cause of action. Limitation does not bar damages for continuance within 6 years (LA 1980 s.2).

Remedies: damages (nominal where no loss; substantive where loss caused; "user damages" measured by reasonable hire-fee equivalent — Stadium Capital Holdings v St Marylebone Property [2010] EWCA Civ 952; aggravated/exemplary in cases of wilful or contumelious conduct); injunction (prohibitory or mandatory, including to remove encroaching structures); self-help (re-entry; reasonable removal of trespassing chattels).

Defences: lawful authority; consent; necessity (narrow); statutory authority.`,
  tags: ['trespass-to-land', 'actionable-per-se', 'direct-interference', 'encroachment', 'continuing-trespass'],
};

export default doc;
