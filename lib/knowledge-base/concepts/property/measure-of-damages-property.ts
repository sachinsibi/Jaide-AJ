import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-measure-of-damages-property',
  type: 'concept',
  category: 'property-damage',
  title: 'Measure of Damages for Property Damage',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['cost of repair', 'diminution', 'value', 'compensation', 'damages', 'how much', 'quantum', 'betterment', 'mitigation'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'Damages put the claimant in the position they would have been in had the wrong not occurred. The two primary measures for damaged property are cost of reasonable repair and diminution in value; consequential losses (loss of use, alternative accommodation, business interruption) are recoverable if reasonably foreseeable. Betterment may justify a deduction; mitigation is required.',
  eli5Summary:
    'When someone damages your property, the law tries to put you back to where you were — usually by paying the cost of repairing what was damaged, or paying the difference between what your property was worth before and after. You can also claim things that flow from the damage (alternative accommodation while it\'s fixed, hire of a replacement vehicle, the cost of getting a surveyor to assess it) provided they\'re reasonable. You have to take reasonable steps to limit the harm — you can\'t make things worse and expect the responsible person to pay for the extra.',
  content: `Compensatory principle (Livingstone v Rawyards Coal Co (1880)): damages put the claimant, so far as money can do, in the position they would have been in had the wrong not occurred.

Two primary measures (claimant generally chooses, subject to reasonableness):

1. Cost of reasonable repair. The starting point where repair is feasible. The cost must be reasonable. Where repair would cost more than the property is worth, the claimant cannot recover the full repair cost as of right.

2. Diminution in value. The difference between value before and after the damage. Used where repair is impossible, disproportionate to the loss, or where the property is held for sale (so the diminution is the real loss).

The claimant has a choice but the court may convert a repair-cost claim to a diminution claim where the repair was unreasonable on the facts (Dominion Mosaics v Trafalgar Trucking [1990]).

Betterment: where reasonable repair necessarily produces an asset better than the original, a deduction may be made — but it is fact-sensitive (Voaden v Champion (The Baltic Surveyor) [2002]). Where the claimant had no choice but to undertake the works to mitigate, no betterment deduction.

Consequential losses (subject to remoteness — Wagon Mound No 1):
- Loss of use of the damaged property.
- Alternative accommodation costs while a home is uninhabitable.
- Hire of a substitute vehicle.
- Loss of business profits where the property was used commercially.
- Reasonable cost of professional services (surveyor, structural engineer, valuer).
- Reasonable cost of preventive works to stop further damage (Delaware Mansions [2001]).
- Loss of rental income where the property is let.

Mitigation (British Westinghouse v Underground Electric Railways [1912]): the claimant must take reasonable steps to limit the loss. Failure to mitigate caps recoverable damages at the level a reasonable claimant would have suffered. "Reasonable" does not mean perfect — claimants are not penalised for ordinary commercial decisions in the wake of a wrong.

Aggravated damages: available where the defendant's conduct was high-handed, oppressive, or contumelious. Limited applicability in routine property cases.

Exemplary damages: rare; confined to the Rookes v Barnard [1964] categories — oppressive conduct by government servants, conduct calculated to make a profit exceeding compensation, statutory authorisation.

Interest: under s.69 County Courts Act 1984 / s.35A Senior Courts Act 1981, ordinarily 8% simple from the date of loss to judgment in non-commercial claims.`,
  tags: ['damages-measure', 'cost-of-repair', 'diminution-in-value', 'betterment', 'mitigation', 'consequential-loss'],
};

export default doc;
