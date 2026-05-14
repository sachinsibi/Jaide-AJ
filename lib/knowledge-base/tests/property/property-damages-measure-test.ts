import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-property-damages-measure-test',
  type: 'test',
  category: 'property-damage',
  title: 'Measure of Damages for Property Damage Test',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['property-damage'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Damages put the claimant in the position they would have been in had the wrong not occurred. For damaged property the primary measures are (a) cost of reasonable repair, or (b) diminution in value. Betterment may justify a deduction; consequential losses (loss of use, hire) are recoverable if reasonably foreseeable; mitigation is required. These principles apply in Barbados as inherited common law.',
  content: `Measure of Damages for Property Damage — Test (Barbados Common Law)

Compensatory principle (Livingstone v Rawyards Coal Co (1880) — persuasive common law authority in Barbados): damages put the claimant, so far as money can do it, in the position they would have been in had the wrong not occurred.

Primary measure — choice between two heads:

(a) Cost of reasonable repair. Starting point where repair is feasible and proportionate to the loss. The cost must be reasonable; where repair would exceed the asset's market value, the claimant cannot recover the full repair cost as of right.

(b) Diminution in value. The difference between market value before and after the damage. Used where repair is impossible, disproportionate to the loss, or where the property is held for sale and the reduction in value is the real measure of loss.

The claimant generally chooses between the two, subject to reasonableness. The court may apply a diminution-in-value measure if repair was unreasonable on the facts — for example, where a dilapidated structure is rebuilt to a higher specification far exceeding its original value.

Betterment: where reasonable repair produces an asset better than the original, a deduction may be made — fact-sensitive. Where the claimant had no realistic choice but to undertake the works to stop ongoing damage or mitigate loss, no betterment deduction is appropriate.

Consequential losses (subject to remoteness — type of harm must be reasonably foreseeable — Wagon Mound No 1 [1961] — persuasive authority in Barbados):
- Loss of use of the damaged property.
- Alternative accommodation while a home is uninhabitable (amounts in BBD; the BBD is pegged at 2:1 to the USD).
- Hire of a substitute vehicle.
- Loss of business profits where the property was used commercially.
- Reasonable cost of professional services (building surveyor, structural engineer, valuer).
- Reasonable cost of preventive works to stop further damage (Delaware Mansions [2001] — persuasive authority in Barbados).
- Loss of rental income where the property is let out.

Mitigation (British Westinghouse v Underground Electric Railways [1912] — persuasive authority in Barbados): the claimant must take reasonable steps to limit the loss. Failure to mitigate caps recoverable damages at the level a reasonable claimant would have suffered. The standard is reasonableness, not perfection — ordinary decisions made in the wake of a wrong are not penalised.

Aggravated damages: available in some cases where the defendant's conduct was high-handed, oppressive, or insulting. Limited applicability in routine property-damage cases.

Exemplary damages: available only in exceptional cases involving deliberate wrongdoing for gain or oppressive conduct.

Interest: the Barbados civil courts have a discretion to award interest on damages from the date of the loss to judgment. The applicable rate should be confirmed under current Barbados court practice.

Limitation: the applicable Barbados limitation period for tort claims is generally 6 years from when the cause of action accrues. Parties should consult laws.barbados.gov.bb for current Barbados limitation provisions.`,
  tags: ['damages', 'cost-of-repair', 'diminution-in-value', 'betterment', 'mitigation', 'consequential-loss', 'barbados'],
};

export default doc;
