import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-contributory-negligence',
  type: 'concept',
  category: 'motor-accident',
  title: 'Contributory Negligence',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'In Barbados, where a claimant\'s own fault contributed to the damage suffered, damages are reduced by such percentage as the court considers just and equitable having regard to the claimant\'s share of responsibility. The apportionment principle is part of Barbados law as a Commonwealth jurisdiction; the historical rule that contributory negligence was a complete bar to recovery has been abolished by statute. The defence does not defeat the claim — it only reduces recovery.',
  eli5Summary:
    'Contributory negligence means: even if the other person was at fault, compensation may be reduced if you also did something risky. If you weren\'t wearing a seatbelt and the other driver hit you, the claim still succeeds — but the court might reduce the award, often by 15% or 25%, because the seatbelt would have reduced the harm.',
  content: `Contributory Negligence in Barbados

As a Commonwealth jurisdiction, Barbados applies the modern apportionment approach to contributory negligence. The historical common law rule under which any contributory fault by the claimant operated as a complete bar to recovery has been displaced by statute in Barbados, following the approach taken across Commonwealth jurisdictions in the mid-twentieth century.

How it works: where the claimant's damage results partly from their own fault and partly from another's fault, the claim is not defeated; damages are reduced by such proportion as the court considers just and equitable having regard to the claimant's share of responsibility for the damage. The percentage reflects both relative blameworthiness and causal contribution.

Two-prong structure:
(1) The claimant's conduct fell below the standard of reasonable care for their own safety or property — the same objective standard as is applied to defendants (Nettleship v Weston [1971] 2 QB 691, persuasive in Barbados).
(2) That conduct contributed materially to the resulting damage — not necessarily to the accident itself. The seatbelt scenario is the paradigm (Froom v Butcher [1976] QB 286, CA, persuasive in Barbados): failure to wear a seatbelt may not have caused the accident, but may have contributed to the extent of injury suffered.

Standard reductions (based on persuasive English authority, applied by analogy in Commonwealth jurisdictions):
- Seatbelt failure that would have prevented injury entirely: 25%
- Seatbelt failure that would have made a considerable difference: 15%
- Seatbelt failure that would have made no difference: 0%
- Motorcycle helmet not worn or not properly fastened: up to 25%
- Pedestrian crossing inattentively: 20–50%
- Passenger of obviously impaired driver: 20%+
- Both parties equally at fault: 50/50

These figures are derived from persuasive English case law. Barbados courts may arrive at different apportionments based on the specific facts and evidence.

Limits: children are judged by the standard of an ordinary child of comparable age, not the adult standard. The "agony of the moment" doctrine may reduce the weight given to split-second responses.

Procedure: the defendant bears the burden of proving contributory negligence on the balance of probabilities. The claimant has no burden to disprove it. The reduction is applied to the total damages award.`,
  tags: ['contributory-negligence', 'apportionment', 'partial-defence', 'seatbelt-tariff', 'Barbados', 'Commonwealth-law'],
};

export default doc;
