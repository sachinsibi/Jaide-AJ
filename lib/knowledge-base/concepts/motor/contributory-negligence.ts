import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-contributory-negligence',
  type: 'concept',
  category: 'motor-accident',
  title: 'Contributory Negligence',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'A statutory partial defence under Law Reform (Contributory Negligence) Act 1945, s.1: where a claimant\'s own fault contributed to the damage suffered, damages are reduced by such percentage as the court considers just and equitable having regard to the claimant\'s share of responsibility. It does not defeat the claim, only reduces recovery.',
  eli5Summary:
    'Contributory negligence means: even if the other person was at fault, you don\'t automatically get every penny if you also did something risky. If you weren\'t wearing a seatbelt and the other driver hit you, you still win — but the court might reduce your compensation, often by 15% or 25%, because the seatbelt would have helped you.',
  content: `Contributory Negligence is a partial defence in tort, statutorily provided by s.1 Law Reform (Contributory Negligence) Act 1945. It replaced the harsh common-law rule under which any contributory fault by the claimant was a complete bar to recovery.

How it works: where the claimant's damage results partly from their own fault and partly from another's, the claim is not defeated; damages are reduced "to such extent as the court thinks just and equitable having regard to the claimant's share in the responsibility for the damage." The percentage reflects relative blameworthiness and causal potency.

Two-prong structure: (1) the claimant's conduct fell below the standard of reasonable care for their own safety or property — same objective standard as the defendant (Nettleship principle); (2) the conduct contributed materially to the resulting damage — it need not have contributed to the accident itself (seatbelt is the paradigm — Froom v Butcher).

Standard reductions: seatbelt that would have prevented the injury 25%; considerable difference 15%; no difference 0%. Motorcycle helmet not worn / not fastened: up to 25%. Pedestrian crossing inattentively: 20–50%. Passenger of obviously drunk driver: 20%+. Both drivers at equal fault: 50/50.

Limits: children judged by the standard of an ordinary child of comparable age, not the adult standard; "agony of the moment" responses judged with less stringency; 100% reduction is, in principle, not open in negligence — though the boundary is contested.

Procedure: the defendant pleads and proves contributory negligence on the balance of probabilities. The claimant has no burden to disprove fault. The reduction is applied at quantification, to general and special damages alike.

Insurance/settlement: insurers routinely raise contributory negligence; understanding standard tariffs is essential to evaluate offers. A "100% offer" (no reduction) is sometimes available where the at-fault driver's conduct was clearly dominant.`,
  tags: ['contributory-negligence', 'LR-CNA-1945', 'partial-defence', 'apportionment', 'seatbelt-tariff'],
};

export default doc;
