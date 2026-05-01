import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-contributory-negligence-test',
  type: 'test',
  category: 'motor-accident',
  title: 'Contributory Negligence Apportionment Test',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Three-stage test under Law Reform (Contributory Negligence) Act 1945, s.1: (1) did the claimant fail to take reasonable care for their own safety? (2) did the failure contribute to the damage? (3) what reduction is just and equitable having regard to the claimant\'s share of responsibility? Standard tariffs apply for seatbelt / helmet failures (Froom v Butcher).',
  content: `Contributory Negligence Apportionment Test:

Where a defendant proves contributory negligence, damages otherwise recoverable are reduced under s.1 Law Reform (Contributory Negligence) Act 1945 by such percentage as the court considers just and equitable.

Stage 1 — Did the claimant fail to take reasonable care for their own safety or property? Same objective standard as the defendant; subjective inexperience is no defence. Standard reduced for children (Gough v Thorne [1966] 1 WLR 1387); modified for emergency / "agony of the moment" responses.

Stage 2 — Did the failure contribute to the damage? The conduct need not have contributed to the accident itself, only to the resulting damage (seatbelt is the paradigm — Froom v Butcher [1976] QB 286). Material contribution required, on balance of probabilities; no reduction where the failure made no difference.

Stage 3 — What reduction is just and equitable? Relative blameworthiness and causal potency.

Standard tariffs (motor cases):

- Seatbelt would have prevented injury: 25% (Froom).
- Seatbelt would have made considerable difference: 15% (Froom).
- Seatbelt would have made no difference: 0%.
- Motorcycle helmet not worn / not fastened: up to 25% (Capps v Miller [1989] 1 WLR 839).
- Cycle helmet not worn: potentially 10–25% where helmet would have made a material difference (Smith v Finch [2009] EWHC 53).
- Pedestrian crossing negligently: 20–50%, fact-dependent.
- Passenger of obviously intoxicated driver: 20%+ (Owens v Brimmell [1977] QB 859).
- Driver speeding modestly while another commits primary fault: 10–25%.
- Both drivers at fault: commonly 50/50, or 60/40 / 75/25 where one is more clearly at fault.

Caps: 100% is generally not permitted (Pitts v Hunt [1991] 1 QB 24); 0% where contributory conduct not causally material.

Procedure: defendant pleads and proves contributory negligence on the balance of probabilities; the claimant has no burden to disprove fault.`,
  tags: ['contributory-negligence-test', 'apportionment', 'LR-CNA-1945', 'seatbelt-tariff', 'just-and-equitable'],
};

export default doc;
