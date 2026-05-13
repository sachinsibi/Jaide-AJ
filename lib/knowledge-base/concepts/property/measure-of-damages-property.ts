import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-measure-of-damages-property',
  type: 'concept',
  category: 'property-damage',
  title: 'Measure of Damages for Property Damage',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['cost of repair', 'diminution', 'value', 'compensation', 'damages', 'how much', 'quantum', 'betterment', 'mitigation'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'Damages put the claimant in the position they would have been in had the wrong not occurred. The two primary measures for damaged property are cost of reasonable repair and diminution in value; consequential losses (loss of use, alternative accommodation, business interruption) are recoverable if reasonably foreseeable. Betterment may justify a deduction; mitigation is required. These principles apply in Barbados as inherited common law.',
  eli5Summary:
    'When someone damages property in Barbados, the law tries to restore the affected party to their position before the damage — usually by paying the cost of repair or the difference in the property\'s value. Additional losses that flow from the damage (such as alternative accommodation while repairs are carried out, the cost of a replacement vehicle, or survey fees) can also be claimed if they are reasonable. The affected party is expected to take reasonable steps to keep the losses as low as possible.',
  content: `Compensatory principle (Livingstone v Rawyards Coal Co (1880) — persuasive common law authority applied in Barbados): damages put the claimant, so far as money can do, in the position they would have been in had the wrong not occurred. These principles apply in Barbados as inherited common law.

Two primary measures (the claimant generally chooses, subject to reasonableness):

1. Cost of reasonable repair. The starting point where repair is feasible. The cost must be reasonable. Where repair would cost more than the property is worth, the claimant cannot recover the full repair cost as of right.

2. Diminution in value. The difference between the market value of the property before and after the damage. Used where repair is impossible, disproportionate to the loss, or where the property is held for sale and the diminution is the real loss.

The claimant has a choice but the court may convert a repair-cost claim to a diminution-in-value claim where the repair was unreasonable on the facts (Dominion Mosaics v Trafalgar Trucking [1990] — persuasive authority). Where the claimant had no realistic alternative to carrying out the works in order to mitigate their loss, the repair cost will ordinarily be allowed.

Betterment: where reasonable repair necessarily produces an asset better than the original, a deduction may be made — but it is fact-sensitive (Voaden v Champion [2002] — persuasive authority). Where the claimant had no choice but to undertake the works to mitigate, no betterment deduction is appropriate.

Consequential losses (subject to remoteness — Wagon Mound No 1 [1961] — persuasive authority):
- Loss of use of the damaged property.
- Alternative accommodation costs while a home is uninhabitable (amounts in BBD; the BBD is pegged at 2:1 to the USD).
- Hire of a substitute vehicle.
- Loss of business profits where the property was used commercially.
- Reasonable cost of professional services (surveyor, structural engineer, valuer).
- Reasonable cost of preventive works to stop further damage (Delaware Mansions [2001] — persuasive authority).
- Loss of rental income where the property is let.

Mitigation (British Westinghouse v Underground Electric Railways [1912] — persuasive authority): the claimant must take reasonable steps to limit the loss. Failure to mitigate caps recoverable damages at the level a reasonable claimant would have suffered. "Reasonable" does not mean perfect — claimants are not penalised for ordinary commercial decisions made in the wake of a wrong.

Aggravated damages: available in some cases where the defendant's conduct was high-handed, oppressive, or contumelious. Limited applicability in routine property-damage cases.

Exemplary damages: rare; available only in exceptional circumstances involving oppressive conduct or deliberate wrongdoing for gain.

Interest: the courts in Barbados (Magistrates' Court for claims up to BBD $10,000; High Court for claims above that threshold) have a discretion to award interest on damages from the date of the loss to the date of judgment. The applicable rate should be confirmed under Barbados court practice.

Limitation: claims in tort are subject to the applicable Barbados limitation period, generally 6 years from when the cause of action accrues.`,
  tags: ['damages-measure', 'cost-of-repair', 'diminution-in-value', 'betterment', 'mitigation', 'consequential-loss', 'barbados'],
};

export default doc;
