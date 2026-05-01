import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-bramhill-v-edwards',
  type: 'case',
  category: 'contract-service',
  title: 'Bramhill v Edwards [2004] EWCA Civ 403',
  jurisdiction: 'england-wales',
  citation: 'Bramhill v Edwards [2004] EWCA Civ 403',
  url: 'https://www.bailii.org/ew/cases/EWCA/Civ/2004/403.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Confirms that "satisfactory quality" is assessed objectively against what a reasonable person would regard as satisfactory in light of the description, the price, and all relevant circumstances. The age and price of second-hand goods, and any defects highlighted to the buyer, are integral to the standard.',
  content: `Bramhill v Edwards [2004] EWCA Civ 403 (Court of Appeal).

Facts: Mr Edwards bought a second-hand American RV (motorhome) from Mr Bramhill, who imported it from the United States. The RV was 102 inches wide — wider than the 100-inch maximum then permitted on UK roads. Mr Edwards brought a claim under s.14 Sale of Goods Act 1979 (the predecessor to CRA 2015 s.9 — same "satisfactory quality" test). He argued the vehicle was unmerchantable / unsatisfactory because it could not be lawfully driven on UK roads.

Held (CA): the claim failed. The vehicle was of satisfactory quality under s.14. Although technically over-width, RVs of this width were widely used on UK roads, the issue was tolerated in practice, and the buyer was an experienced RV owner who knew or could reasonably have discovered the position. The seller had not concealed the width. A reasonable person, taking into account description (American import RV), price (consistent with that market), and circumstances, would have regarded the vehicle as satisfactory.

Held: a key factor in the assessment is what a reasonable person, knowing what the buyer knew or ought to have known, would have considered satisfactory.

Modern application (under CRA 2015 s.9):

The "reasonable person" standard. Section 9(2) CRA 2015 carries Bramhill forward: satisfactory quality is what a reasonable person would regard as satisfactory taking account of any description, the price (if relevant), and all other relevant circumstances.

Aspects of quality (s.9(3)): fitness for all purposes for which goods of that kind are commonly supplied, appearance and finish, freedom from minor defects, safety, and durability.

Defects highlighted to the buyer (s.9(4)(a)): a matter making the quality unsatisfactory cannot be relied on if specifically drawn to the buyer's attention before contract.

Examination defects (s.9(4)(b)): where the buyer examines goods before contract, defects which that examination ought to have revealed cannot be relied on.

Relevance of price: a reasonable person expects more from a £20,000 product than a £2,000 product. This calibrates the standard but does not remove it: even cheap goods must be safe and fit for ordinary use.

Second-hand goods: the standard is recalibrated by age, price, and the obvious wear of a used product. Wear consistent with age and use is not a defect; concealed defects and unsafe condition still are.

Bramhill is the leading reasoned application of the statutory satisfactory-quality standard and is regularly cited in CRA s.9 disputes.`,
  tags: ['Bramhill-v-Edwards', 'satisfactory-quality', 'reasonable-person', 'second-hand-goods', 'CRA-section-9'],
};

export default doc;
