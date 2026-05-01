import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-cra-2015-goods-quality',
  type: 'statute',
  category: 'contract-service',
  title: 'Consumer Rights Act 2015, ss.9–11 — Implied terms in contracts for goods',
  jurisdiction: 'england-wales',
  citation: 'Consumer Rights Act 2015, ss.9, 10 and 11',
  url: 'https://www.legislation.gov.uk/ukpga/2015/15/part/1/chapter/2',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['overview', 'legalBreakdown', 'eli5', 'references'],
  factSummary:
    'Sections 9–11 imply into every consumer contract for the supply of goods three statutory terms: that the goods are of satisfactory quality (s.9), fit for any particular purpose made known to the trader (s.10), and as described (s.11). These terms cannot be excluded or restricted against a consumer (s.31).',
  eli5Summary:
    'When you buy something from a shop or trader, the law builds three promises into the deal automatically: the item must be of decent quality, must do the particular job you said you needed it for, and must match how it was described. These rights are yours by law — the shop cannot remove them in the small print.',
  content: `Sections 9, 10, and 11 of the Consumer Rights Act 2015 imply three statutory terms into every contract for the supply of goods between a trader and a consumer. They apply to new goods, second-hand goods, and digital content supplied on a tangible medium.

Section 9 — Satisfactory quality. The goods must be of satisfactory quality. The standard is that which a reasonable person would regard as satisfactory, taking account of (a) any description of the goods, (b) the price (if relevant), and (c) all other relevant circumstances (s.9(2)). The aspects of quality include fitness for all the purposes for which goods of that kind are commonly supplied, appearance and finish, freedom from minor defects, safety, and durability (s.9(3)).

A defect specifically drawn to the consumer's attention before the contract, or that the consumer should reasonably have noticed on examination, is excluded (s.9(4)).

Section 10 — Fit for particular purpose. Where the consumer has made known to the trader (expressly or by implication) any particular purpose for which the goods are being bought, there is an implied term that the goods are reasonably fit for that purpose. Engaged where the consumer's stated purpose goes beyond the goods' common purpose (e.g., "I need this paint for outdoor use").

Section 11 — As described. Where goods are supplied by reference to a description, the goods must match that description. Includes information given orally, in advertising, on packaging, in the contract, or about the model on display.

Cannot be excluded against a consumer. Section 31 prevents any term in a consumer contract that would exclude or restrict liability for breach of ss.9, 10, or 11. Such a term is not binding on the consumer.

Reverse burden of proof. Section 19(14): if goods do not conform to the contract within six months of delivery, they are presumed not to have conformed at delivery, unless the trader proves otherwise (or the lack of conformity is incompatible with that presumption).`,
  tags: ['CRA-2015', 'satisfactory-quality', 'fit-for-purpose', 'as-described', 'section-9', 'section-10', 'section-11'],
};

export default doc;
