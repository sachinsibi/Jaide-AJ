import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-remoteness-and-mitigation-test',
  type: 'test',
  category: 'contract-service',
  title: 'Remoteness and Mitigation Test (contract damages)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Two-part filter on contract damages: remoteness (Hadley v Baxendale two-limb rule — losses must arise naturally from the breach OR be in the parties\' reasonable contemplation at contract); and mitigation (British Westinghouse — claimant must take reasonable steps to reduce loss, with credit given for benefits of mitigation actually achieved).',
  content: `Remoteness and Mitigation Test:

These two doctrines together control which losses a claimant can recover after proving breach.

Stage 1 — Remoteness (Hadley v Baxendale (1854) 9 Ex 341). Two limbs:

(a) First limb — ordinary losses arising naturally from the breach in the usual course of things. The defendant is taken to have these in mind.

(b) Second limb — special losses within the parties' reasonable contemplation at contract because of special facts communicated. Requires actual or constructive knowledge of those facts.

Refinements: foreseeability is stricter than in tort (The Heron II [1969] 1 AC 350 — "serious possibility"); type of loss must be foreseeable, exact quantum need not (Victoria Laundry v Newman [1949] 2 KB 528); assumption of responsibility (Transfield Shipping (The Achilleas) [2008] UKHL 48) may exclude unusual or open-ended liability.

Stage 2 — Mitigation (British Westinghouse [1912] AC 673). Claimant must take reasonable steps to mitigate; cannot recover for avoidable losses.

(a) Failure to mitigate — reasonable, not perfect, steps.
(b) Credit for benefits actually received — set off against claimed loss where intimately connected.
(c) Burden — defendant pleads and proves; claimant has no burden to disprove.

Failures: refusing reasonable repair/replacement; letting damaged goods deteriorate; persisting hopelessly; needlessly expensive substitutes.
Not failures: refusing onerous offers; like-for-like replacement; reasonable investigation time.

Quantum: claimed loss − avoidable extra loss − mitigation benefit = recoverable.`,
  tags: ['remoteness-test', 'mitigation-test', 'Hadley-Baxendale', 'British-Westinghouse', 'two-limb-rule'],
};

export default doc;
