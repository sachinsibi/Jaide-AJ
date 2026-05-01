import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-occupiers-liability-act-1957',
  type: 'statute',
  category: 'property-damage',
  title: 'Occupiers\' Liability Act 1957',
  jurisdiction: 'england-wales',
  citation: 'Occupiers\' Liability Act 1957',
  url: 'https://www.legislation.gov.uk/ukpga/Eliz2/5-6/31/contents',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['visitor', 'invited', 'on the premises', 'on the property', 'occupier', 'shop', 'restaurant', 'business premises'],
  tabs: ['overview', 'legalBreakdown', 'references'],
  factSummary:
    'An occupier owes a "common duty of care" to all lawful visitors: to take such care as in all the circumstances of the case is reasonable to see that the visitor will be reasonably safe in using the premises for the purposes for which they are invited or permitted to be there. The duty applies to damage to property as well as personal injury.',
  content: `Governs the duty owed by an occupier of premises to lawful visitors. "Premises" includes land, buildings, and fixed and movable structures (s.1(3)). "Occupier" is anyone with sufficient control over the state of the premises (Wheat v Lacon [1966] AC 552); there can be more than one occupier.

Section 2 — common duty of care:

s.2(1) — occupier owes the same duty to all visitors, except as extended, restricted, modified, or excluded by agreement.

s.2(2) — duty to take such care as is reasonable in all the circumstances to see that the visitor will be reasonably safe in using the premises for the purposes for which they are invited or permitted to be there.

Property damage: s.1(3)(b) extends the duty to "damage to property... of persons who are his visitors." A visitor whose belongings are damaged because the occupier failed to take reasonable care for the state of the premises has a claim under the Act.

Standard considerations (s.2(3)–(4)):
- Children — occupier must be prepared for children to be less careful than adults; allurement principle (Glasgow Corp v Taylor [1922] AC 44).
- Specialist visitors (tradespeople) expected to guard against special risks of their calling (Roles v Nathan [1963] 1 WLR 1117).
- Independent contractor defence (s.2(4)(b)) — not liable for damage caused by faulty work of a competent independent contractor if reasonable to entrust the work and the occupier took reasonable steps to verify competence.
- Warnings (s.2(4)(a)) — sufficient only if they enabled the visitor to be reasonably safe.

Exclusion of liability: s.2(1) permits exclusion by agreement, but subject to UCTA 1977 in business contexts (cannot exclude liability for death or PI; other loss subject to reasonableness) and CRA 2015 s.65 in consumer contexts (cannot exclude liability for negligently caused death or PI).

Trespassers: not covered. The Occupiers' Liability Act 1984 imposes a more limited duty to non-visitors, confined to PI not property damage.

Application: visitor's car damaged in a defective car park; coat damaged by a faulty hook in a pub; equipment damaged by structural collapse — all within s.2 calibrated to reasonable care.`,
  tags: ['OLA-1957', 'occupier', 'visitor', 'common-duty-of-care', 'property-damage'],
};

export default doc;
