import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-property-damages-measure-test',
  type: 'test',
  category: 'property-damage',
  title: 'Measure of Damages for Property Damage Test',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['property-damage'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Damages put the claimant in the position they would have been in had the wrong not occurred. For damaged property the primary measures are (a) cost of reasonable repair, or (b) diminution in value. Betterment may justify a deduction; consequential losses (loss of use, hire) are recoverable if reasonably foreseeable; mitigation is required.',
  content: `Compensatory principle (Livingstone v Rawyards Coal Co (1880) 5 App Cas 25): damages put the claimant, so far as money can do it, in the position they would have been in had the wrong not occurred.

Primary measure — choice between two heads:

(a) Cost of reasonable repair. Starting point where repair is feasible and proportionate. Cost must be reasonable; where repair exceeds the asset's value, the claimant cannot recover the full repair cost as of right.

(b) Diminution in value. The difference between value before and after. Used where repair is impossible, disproportionate, or where the property is held for sale.

The claimant generally chooses, subject to reasonableness (Dominion Mosaics v Trafalgar Trucking [1990] 2 All ER 246). The court may convert a repair-cost claim to diminution if repair was unreasonable on facts (e.g., a 200-year-old wall rebuilt to a higher specification far exceeding the original character).

Betterment: where reasonable repair produces an asset better than the original, a deduction may be made — fact-sensitive (Voaden v Champion (The Baltic Surveyor) [2002] EWCA Civ 89). Where the claimant had no choice but to undertake the works to mitigate, no betterment deduction.

Consequential losses (subject to remoteness — Wagon Mound No 1 [1961] AC 388): loss of use; alternative accommodation while a home is uninhabitable; hire of substitute vehicle; loss of business profits where the property is used commercially; reasonable cost of surveyors / structural engineers; reasonable cost of preventive works to stop further damage (Delaware Mansions [2001]); loss of rental income where the property is let.

Mitigation (British Westinghouse v Underground Electric Railways [1912] AC 673): the claimant must take reasonable steps to limit the loss. Failure to mitigate caps recoverable damages at the level a reasonable claimant would have suffered. Reasonable does NOT mean perfect — ordinary commercial decisions in the wake of a wrong are not penalised (Banco de Portugal v Waterlow [1932] AC 452).

Aggravated damages: available where conduct was high-handed, oppressive, or insulting; limited applicability in property cases.

Exemplary damages: rare; confined to the Rookes v Barnard [1964] AC 1129 categories (oppressive conduct by government servants; conduct calculated to make a profit exceeding compensation; statutory authorisation).

Interest: s.69 County Courts Act 1984 / s.35A Senior Courts Act 1981, at the court's discretion, typically 8% simple from loss to judgment for non-commercial claims.

Limitation: 6 years (LA 1980 s.2; s.14A latent-damage extension).`,
  tags: ['damages', 'cost-of-repair', 'diminution-in-value', 'betterment', 'mitigation', 'consequential-loss'],
};

export default doc;
