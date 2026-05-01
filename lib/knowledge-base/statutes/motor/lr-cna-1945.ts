import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-lr-cna-1945',
  type: 'statute',
  category: 'general',
  title: 'Law Reform (Contributory Negligence) Act 1945',
  jurisdiction: 'england-wales',
  citation: 'Law Reform (Contributory Negligence) Act 1945, s.1',
  url: 'https://www.legislation.gov.uk/ukpga/Geo6/8-9/28/section/1',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident', 'property-damage', 'general-civil'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'Where a person suffers damage partly through their own fault and partly through the fault of another, damages recoverable are reduced to such extent as the court thinks just and equitable having regard to the claimant\'s share in the responsibility for the damage. Replaced the common-law rule that contributory negligence was a complete defence.',
  content: `Section 1(1) of the Law Reform (Contributory Negligence) Act 1945 provides:

"Where any person suffers damage as the result partly of his own fault and partly of the fault of any other person or persons, a claim in respect of that damage shall not be defeated by reason of the fault of the person suffering the damage, but the damages recoverable in respect thereof shall be reduced to such extent as the court thinks just and equitable having regard to the claimant's share in the responsibility for the damage."

Effect: contributory negligence is no longer a complete defence (as it was at common law). Instead, the court apportions liability and reduces the claimant's damages by a percentage reflecting the claimant's own contribution to the damage.

"Fault" is defined (s.4) as "negligence, breach of statutory duty or other act or omission which gives rise to a liability in tort or would, apart from this Act, give rise to the defence of contributory negligence." It does not extend to deliberate breaches of contract that cause damage to the claimant where contributory negligence was never a defence at common law (Forsikringsaktieselskapet Vesta v Butcher [1989] AC 852).

Application in motor accidents — typical apportionments:

- Failure to wear a seatbelt where a seatbelt would have prevented the injury: 25% reduction (Froom v Butcher [1976] QB 286).
- Failure to wear a seatbelt where a seatbelt would have reduced (but not prevented) the injury: 15% reduction.
- Failure to wear a motorcycle helmet: up to 25% reduction (Capps v Miller [1989] 1 WLR 839).
- Pedestrian stepping into road without looking: 25–50% depending on facts.
- Driver speeding modestly while another commits the primary fault (e.g., emerging from junction): 10–25%.
- 50/50 apportionment where both parties commit equal-magnitude faults (e.g., both running amber lights in collision).

The reduction applies to the whole award (general and special damages). It does not affect the fact of liability, only the amount recoverable.

The Act applies in tort claims (negligence, breach of statutory duty, and analogous wrongs). Insurance claims by victims against at-fault driver insurers proceed on the same apportionment basis the at-fault driver would face in tort.`,
  tags: ['contributory-negligence', 'LR-CNA-1945', 'apportionment', 'fault', 'reduction-of-damages'],
};

export default doc;
