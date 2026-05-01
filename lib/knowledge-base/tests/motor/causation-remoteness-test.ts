import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-causation-remoteness-test',
  type: 'test',
  category: 'motor-accident',
  title: 'Causation and Remoteness Test',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Two-stage gateway: factual causation (but-for test, Barnett v Chelsea — would damage have occurred but for the breach?) plus legal causation / remoteness (Wagon Mound — was the kind of damage reasonably foreseeable?). Modified by: thin-skull rule (extent of damage need not be foreseeable); intervening acts (novus actus); successive causes.',
  content: `Causation and Remoteness Test:

The claimant must prove (1) factual causation and (2) that the damage is not too remote. Both are required; satisfaction of duty and breach is not sufficient.

Stage 1 — Factual causation: the "but-for" test (Barnett v Chelsea [1969] 1 QB 428). Would the damage have occurred but for the breach? Balance of probabilities. If yes, causation fails — even with admitted breach.

Refinements: material contribution to indivisible injury (Bonnington Castings [1956] AC 613) — rare in motor cases. Loss-of-chance claims generally not recoverable (Gregg v Scott [2005] UKHL 2). Successive causes — original tortfeasor remains liable for original damage (Baker v Willoughby); second non-tortious illness may end future-loss liability (Jobling).

Stage 2 — Legal causation / remoteness: reasonable foreseeability of the kind of damage (Wagon Mound No 1 [1961] AC 388). The mechanism need not be foreseeable; the kind must.

Refinements: type vs extent — kind must be foreseeable, precise extent need not (Hughes v Lord Advocate [1963] AC 837). Thin-skull rule — defendant takes claimant as found (Smith v Leech Brain [1962] 2 QB 405). Novus actus interveniens — a free, deliberate, informed third-party (or claimant) act may break the chain if sufficiently unforeseeable.

Application in motor cases:

1. Direct collision damage — causation usually obvious, remoteness rarely contested.
2. Pre-existing condition exacerbated — thin-skull rule applies.
3. Knock-on losses (lost contract, missed flight) — foreseeability of the kind of economic loss must be argued; routine inconvenience, hire, loss of use, and recovery costs are normally recoverable; speculative commercial losses may be too remote.
4. Subsequent medical complications — thin-skull supports recovery for unusual but causally connected complications.
5. Claimant's own subsequent conduct (refusing reasonable treatment, unreasonable repairs) — failure to mitigate, or in extreme cases novus actus.`,
  tags: ['causation', 'but-for', 'remoteness', 'foreseeability', 'thin-skull', 'novus-actus'],
};

export default doc;
