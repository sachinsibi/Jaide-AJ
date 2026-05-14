import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-contributory-negligence-test',
  type: 'test',
  category: 'motor-accident',
  title: 'Contributory Negligence Apportionment Test',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Three-stage test under Barbados common law apportionment: (1) did the claimant fail to take reasonable care? (2) did that failure contribute to the damage? (3) what reduction is just and equitable having regard to relative fault? The defendant bears the burden of proving contributory negligence on the balance of probabilities.',
  content: `Contributory Negligence Apportionment Test (Barbados):

As a Commonwealth jurisdiction, Barbados applies the apportionment approach to contributory negligence. Where a defendant proves the claimant's own negligence contributed to the damage, the court reduces damages by such proportion as is just and equitable having regard to the claimant's share of responsibility.

Stage 1 — Did the claimant fail to take reasonable care for their own safety or property? The same objective standard of the reasonable person applies. Failure to observe applicable road traffic rules under Cap. 295 (e.g., failing to wear a seatbelt where required, speeding, running a signal) may constitute failure to take reasonable care.

Stage 2 — Did the failure contribute to the damage? The claimant's conduct need not have caused the accident itself — it is sufficient that it contributed to the resulting damage. For example, failure to wear a seatbelt may not have caused a collision, but may have contributed to the extent of injury or damage suffered. Material contribution to the damage is required; a failure that made no difference to the outcome does not reduce the award.

Stage 3 — What reduction is just and equitable? The court assesses the relative blameworthiness and causal contribution of each party and arrives at a percentage apportionment. Courts in Commonwealth jurisdictions commonly apportion fault 50/50 where both parties were equally careless, and 60/40, 70/30, or higher where one party bears the primary fault.

Burden of proof: the burden lies entirely on the defendant to establish that the claimant was contributorily negligent. The claimant has no burden to disprove contributory negligence.

Effect: a finding of contributory negligence reduces but does not eliminate the claimant's damages. A 30% finding reduces a $10,000 claim to $7,000. The defendant's own liability is not affected — only the quantum of the award changes.

Application in red-light cases: a claimant who had a green light and was proceeding normally faces a very high threshold for contributory negligence. The defendant insurer must show that the claimant drove in a manner that fell below the reasonable driver standard and contributed to the damage sustained.`,
  tags: ['contributory-negligence-test', 'apportionment', 'fault', 'Barbados', 'Commonwealth-law', 'just-and-equitable'],
};

export default doc;
