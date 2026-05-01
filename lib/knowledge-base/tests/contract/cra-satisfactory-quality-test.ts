import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-cra-satisfactory-quality-test',
  type: 'test',
  category: 'contract-service',
  title: 'CRA 2015 Satisfactory Quality Test',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Test under CRA 2015 s.9: would a reasonable person regard the goods as satisfactory, taking into account description, price, and all other relevant circumstances? Aspects considered: fitness for common purposes; appearance/finish; freedom from minor defects; safety; durability. Defects pointed out before contract or visible on examination are excluded.',
  content: `CRA 2015 Satisfactory Quality Test:

The standard is set by s.9 Consumer Rights Act 2015 and applies to every consumer contract for the supply of goods. The test is objective.

Stage 1 — Comparator (s.9(2)): would a reasonable person, knowing the description, price, and circumstances, consider the goods satisfactory?

Stage 2 — Aspects of quality (s.9(3)):
(a) Fitness for all common purposes (distinct from s.10 "particular purpose").
(b) Appearance and finish, calibrated to price.
(c) Freedom from minor defects.
(d) Safety in normal use.
(e) Durability for a reasonable period.

Stage 3 — Calibrate to circumstances:
- Description — high-end branding raises the standard; "sold as seen" lowers it.
- Price — £20 goods lower bar than £2,000; price never eliminates basic safety/core fitness.
- Second-hand — age-consistent wear is not a defect; concealed/unsafe faults are (Bramhill v Edwards [2004] EWCA Civ 403).
- Public statements — trader, manufacturer, or advertising claims count (s.9(5)).

Stage 4 — Exclusions (s.9(4)):
(a) Defects specifically drawn to the consumer's attention before contract.
(b) Examination defects — those a pre-contract examination should have revealed.

Reverse burden (s.19(14)): faults appearing within 6 months of delivery are presumed pre-existing unless the trader proves otherwise. After 6 months the consumer bears the burden.

Linked tests:
- Section 10 — fit for any particular purpose made known to the trader and relied upon.
- Section 11 — as described (oral, written, advertised, or sample).

Remedy gateway: breach of s.9/10/11 opens the tiered remedies under ss.20–24 (short-term right to reject; repair/replacement; price reduction; final right to reject).`,
  tags: ['CRA-section-9-test', 'satisfactory-quality', 'reasonable-person', 'aspects-of-quality', 'reverse-burden'],
};

export default doc;
