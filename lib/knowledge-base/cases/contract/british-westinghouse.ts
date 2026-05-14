import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-british-westinghouse',
  type: 'case',
  category: 'contract-service',
  title: 'British Westinghouse v Underground Electric Railways [1912] AC 673 (HL)',
  jurisdiction: 'barbados',
  citation: 'British Westinghouse Electric and Manufacturing Co Ltd v Underground Electric Railways Co of London Ltd [1912] AC 673 (House of Lords)',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. Establishes the duty to mitigate contract damages. A claimant cannot recover for losses that could reasonably have been avoided. Steps actually taken in mitigation are taken into account: a claimant who achieves a benefit through mitigation must give credit for that benefit against the claimed loss. The burden of proving failure to mitigate lies on the defendant.',
  content: `British Westinghouse v Underground Electric Railways [1912] AC 673 (House of Lords).

Status in Barbados: Persuasive common law authority. Decisions of the House of Lords (now the UK Supreme Court) are among the most persuasive common law authorities in Commonwealth Caribbean jurisdictions. The duty to mitigate is a well-established principle of the common law of contract applied in Barbados.

Facts: British Westinghouse supplied steam turbines to the defendant railway company under contract. The turbines were defective and operated inefficiently. The railway company replaced them with superior, more modern turbines from another supplier. The railway sued for breach of contract, claiming both the losses suffered while operating the defective machines and the cost of the replacement turbines.

Held (House of Lords): The railway was entitled to damages for losses during the period of deficient operation. However, the benefit obtained from the replacement turbines — which were superior to anything that could have been contracted for at the time of the original contract — had to be set against the claimed loss. The enhanced efficiency of the replacement machines was intimately connected with the breach and the steps taken to mitigate it.

Viscount Haldane LC's two principles:

(1) Duty to mitigate. The claimant must take all reasonable steps to mitigate the loss consequent on the breach. The claimant cannot recover damages for any part of the loss that flows from a failure to take such steps.

(2) Credit for benefits actually received. Where the claimant has taken steps to mitigate and those steps have produced a benefit intimately connected with the breach, the benefit must be credited against the loss claimed. The claimant cannot retain both full damages and the benefit of mitigation.

Application in Barbados. The duty to mitigate and the credit-for-benefit principle form part of the common law of contract as applied in Barbados. In any claim for breach of contract — including claims under the Sale of Goods Act, Cap. 318, claims for defective services, and claims arising from consumer transactions — the claimant's conduct following the breach is assessed against the reasonable-steps standard.

The standard is reasonableness, not perfection. A claimant is expected to take steps that a reasonable person in the same position would take; no obligation arises to take risky, speculative, or financially onerous steps.

Burden of proof. The burden of establishing that the claimant failed to take reasonable mitigation steps lies on the defendant. The claimant does not bear the burden of proving that mitigation was impossible or unreasonable.

Examples of failure to mitigate in a Barbados contract context: unreasonably refusing a genuine offer to repair or replace defective goods; allowing damaged goods to deteriorate when simple steps would have reduced the damage; accepting a needlessly expensive substitute when a like-for-like alternative was available.

Not failures to mitigate: declining an offer conditioned on onerous terms; selecting a like-for-like replacement at a reasonable price; taking reasonable time to assess the position before acting.`,
  tags: ['British-Westinghouse', 'mitigation', 'duty-to-mitigate', 'reasonable-steps', 'burden-of-proof', 'persuasive-authority', 'barbados'],
};

export default doc;
