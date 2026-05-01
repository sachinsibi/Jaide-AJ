import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-british-westinghouse',
  type: 'case',
  category: 'contract-service',
  title: 'British Westinghouse v Underground Electric Railways [1912] AC 673 (HL)',
  jurisdiction: 'england-wales',
  citation: 'British Westinghouse Electric and Manufacturing Co Ltd v Underground Electric Railways Co of London Ltd [1912] AC 673 (HL)',
  url: 'https://www.bailii.org/uk/cases/UKHL/1912/2.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Establishes the duty to mitigate. A claimant cannot recover for losses that they could reasonably have avoided. Steps actually taken in mitigation are also taken into account: a claimant who in fact mitigates must give credit for the benefit gained. The standard is reasonableness, not perfection. The burden of proving failure to mitigate lies on the defendant.',
  content: `British Westinghouse v Underground Electric Railways [1912] AC 673 (House of Lords).

Facts: British Westinghouse supplied steam turbines to the defendant railway company. The turbines were defective and inefficient. The railway company replaced them with more modern, efficient turbines from another supplier — turbines that were superior to anything available at the date of the original contract. The railway sued for breach of contract, claiming both the cost of replacement and the losses suffered while operating the defective machines.

Held: The railway was entitled to damages for the period of inefficient operation, but the cost of the new turbines was offset by the benefit of having superior machines. The court took the actual benefit of the mitigation into account against the loss claimed.

Viscount Haldane LC's two principles:

(1) Duty to mitigate. The claimant has a duty to take all reasonable steps to mitigate the loss consequent on the breach. The claimant cannot recover for any part of the damage that flows from neglect to take such steps.

(2) Credit for benefits actually received. Where the claimant has in fact taken steps to mitigate, and those steps have produced a benefit, the benefit must be set against the claimed loss to the extent it is "intimately connected" with the breach. The claimant cannot keep both the damages and the benefit.

Modern application:

Reasonableness, not perfection — what a reasonable person in the claimant's position would have done; no obligation to take risky or speculative steps.

Burden: defendant pleads and proves failure to mitigate; claimant has no burden to disprove.

Failures: refusing a reasonable repair/replacement offer; letting damaged goods deteriorate; persisting with hopeless performance; accepting a needlessly expensive substitute.

Not failures: refusing onerous-terms offers; choosing a like-for-like replacement; taking reasonable time to investigate before acting.

Applied alongside Hadley v Baxendale (remoteness gateway) and Sotiros Shipping (The Solholt) [1983] 1 Lloyd's Rep 605 (CA) — mitigation is a fact-specific limitation on damages, not a free-standing duty.`,
  tags: ['British-Westinghouse', 'mitigation', 'duty-to-mitigate', 'reasonable-steps', 'burden-of-proof'],
};

export default doc;
