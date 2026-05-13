import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-remoteness-and-mitigation-test',
  type: 'test',
  category: 'contract-service',
  title: 'Remoteness and Mitigation Test (contract damages) — Barbados',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Two-part filter on contract damages as applied in Barbados common law: remoteness (Hadley v Baxendale two-limb rule — persuasive common law authority — losses must arise naturally from the breach OR be within the parties\' reasonable contemplation at contract); and mitigation (British Westinghouse — persuasive common law authority — the claimant must take reasonable steps to reduce loss, with credit for any benefit actually gained through mitigation).',
  content: `Remoteness and Mitigation Test — Barbados contract law.

These two doctrines form part of the common law of contract as applied in Barbados and together control which losses a claimant may recover after establishing breach.

Stage 1 — Remoteness: Hadley v Baxendale (1854) 9 Ex 341 (persuasive common law authority applied in Barbados as a Commonwealth jurisdiction).

Two limbs determine whether a claimed loss is recoverable:

(a) First limb — ordinary losses arising naturally from the breach in the usual course of things. The breaching party is taken to have contemplated these losses at the time of contracting. In a Barbados consumer or commercial contract, ordinary losses typically include: the cost of repair or replacement of defective goods; the refund of the price for non-conforming goods; the reasonable cost of obtaining substitute performance; and loss of the expected benefit of the contract.

(b) Second limb — special losses within the parties' reasonable contemplation at the time of contracting because of special circumstances communicated to the breaching party. The breaching party must have had actual or constructive knowledge of those special circumstances at the time of contracting. A party who is not told of special circumstances at the time of contracting is generally not liable for the unusual or disproportionate losses that flow from them.

Calibration of the standard. The degree of foreseeability required in contract is stricter than in tort: the loss must have been a real and serious possibility, not merely a theoretical one. The type of loss must be foreseeable; the exact quantum need not be. A party who assumes responsibility for a particular type of loss (by special agreement or knowledge) may be held liable for it even if its scale was unexpected.

Stage 2 — Mitigation: British Westinghouse v Underground Electric Railways [1912] AC 673 (persuasive common law authority applied in Barbados as a Commonwealth jurisdiction).

The claimant must take all reasonable steps to reduce the loss flowing from the breach. The standard is reasonableness — what a reasonable person in the claimant's position would have done. The claimant is not required to take risky, speculative, or financially onerous steps.

(a) Failure to take reasonable steps. Losses that could have been avoided by reasonable steps are not recoverable.

(b) Credit for benefits actually received. Where the claimant has taken mitigation steps and those steps have produced a benefit that is intimately connected with the breach, the benefit must be credited against the claimed loss.

(c) Burden of proof. The burden of establishing that the claimant failed to take reasonable mitigation steps lies on the defendant.

Examples of failure to mitigate in a Barbados context. Unreasonably refusing a genuine offer to repair or replace defective goods; allowing damaged property to deteriorate when inexpensive preventive steps were available; persisting with a substitute arrangement that is far more expensive than necessary.

Examples that are not failures to mitigate. Declining an offer conditioned on onerous or one-sided terms; selecting a like-for-like replacement at a reasonable market price; taking reasonable time to assess the breach before acting.

Calculation. Recoverable loss = claimed loss minus losses that could have been reasonably avoided minus any benefits received through mitigation steps.`,
  tags: ['remoteness-test', 'mitigation-test', 'Hadley-Baxendale', 'British-Westinghouse', 'two-limb-rule', 'barbados'],
};

export default doc;
