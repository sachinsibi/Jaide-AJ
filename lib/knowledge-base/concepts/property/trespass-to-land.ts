import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-trespass-to-land',
  type: 'concept',
  category: 'property-damage',
  title: 'Trespass to Land',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['trespass', 'unauthorised entry', 'on my land', 'over my land', 'overhanging', 'crossed boundary', 'parked on my'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'Trespass to land is intentional, direct, unjustified physical interference with land in another\'s possession. It is actionable per se — no proof of damage required. Includes physical entry, causing things to enter, oversail of airspace, and continued presence after permission is revoked.',
  eli5Summary:
    'Trespass to land is when someone (or something they put there) is on your land without permission. It does not matter whether they damaged anything — the law lets you ask the court to make them leave or remove the thing, and to award compensation, even if the only "loss" is that they were there at all. Physical entry, parking on your driveway without consent, branches sawn through to your side, a builder\'s crane swinging over your garden — all are trespass.',
  content: `Trespass to land protects the claimant's exclusive possession of land against unauthorised physical interference.

Elements:

1. Intentional act. The defendant must have voluntarily done the act constituting the entry. Intention to trespass is NOT required — ignorance of the boundary is no defence.

2. Direct interference. The interference must be the immediate result of the defendant's act, not merely consequential. (Indirect interference is dealt with in nuisance.)

3. Without lawful justification. No licence, easement, statutory authority, or other right to be on the land.

Forms of trespass:
- Personal entry (walking, driving, parking).
- Causing things to enter (planting, dumping, throwing).
- Oversail — a structure protruding into the airspace of the claimant's land (Anchor Brewhouse v Berkley House [1987]: tower-crane jib; Bernstein v Skyviews [1978]: ordinary aircraft at usual altitudes is not trespass).
- Sub-surface — tunnelling or directional drilling under the claimant's land (Bocardo v Star Energy [2010] UKSC 35).
- Continuing — leaving objects on the land or remaining after permission is revoked.

Actionable per se: no proof of damage required. Nominal damages where no loss; substantive damages where loss caused; "user damages" measured by reasonable hire-fee equivalent for unauthorised use even without actual loss (Stadium Capital Holdings v St Marylebone Property [2010]).

Standing: the claimant must be in actual or constructive possession at the time — owner-occupier, tenant with exclusive possession. Bare licensees do not have standing.

Continuing trespass: where the defendant remains, or leaves objects on the land, every day of continuance is a fresh cause of action. Limitation does not bar damages for continuance within 6 years (LA 1980 s.2).

Common scenarios: encroaching structures (eaves, gutters, fences) over the boundary; builders' scaffolding, cranes, or materials placed on or over the neighbour's land without consent; parking on a private driveway.

Remedies: nominal or substantial damages; user damages; injunction (prohibitory or mandatory, including to remove encroaching structures); self-help (re-entry; reasonable removal of trespassing chattels).`,
  tags: ['trespass-to-land', 'actionable-per-se', 'oversail', 'encroachment', 'exclusive-possession'],
};

export default doc;
