import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-s21-validity-test',
  type: 'test',
  category: 'tenancy',
  title: 'Section 21 Validity Test',
  jurisdiction: 'england-wales',
  inForce: true,
  inForceNote:
    'PENDING — verify against gov.uk. Tied to Housing Act 1988 s.21; if the Renters\' Rights Act 2024 has abolished s.21, this test no longer applies to new notices and may apply only to transitional cases.',
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['section 21', 's.21', 's21', 'no-fault', 'eviction', 'evict', 'possession notice', 'two months notice'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Eight-stage validity test for a Housing Act 1988 s.21 notice: (1) deposit protected within 30 days; (2) prescribed information served (separate from protection); (3) Gas Safety Certificate served before occupation; (4) EPC provided; (5) How to Rent booklet provided; (6) HMO licensing in place where required; (7) at least 2 months\' notice on Form 6A; (8) not within first 4 months of tenancy and no s.33 retaliatory-eviction bar.',
  content: `The Section 21 Validity Test (applied by County Court judges hearing accelerated possession claims under CPR Part 55):

A s.21 notice is invalid unless ALL eight prerequisites are satisfied:

1. Deposit protected within 30 days of receipt (Housing Act 2004, s.213(1) and (3)) — held in DPS, MyDeposits, or TDS.

2. Prescribed information served on the tenant within 30 days of receipt of the deposit (HA 2004 s.213(5)–(6); SI 2007/797). This is a SEPARATE requirement from protection itself; protecting the deposit but failing to serve prescribed information is non-compliance.

3. Gas Safety Certificate (CP12) served on the tenant before they took occupation, and renewed annually thereafter (Gas Safety (Installation and Use) Regulations 1998 reg.36; Trecarrell House Ltd v Rouncefield [2020] EWCA Civ 760 — late-served pre-occupation certificate may still bar s.21 retroactively).

4. Energy Performance Certificate (EPC) provided to the tenant free of charge (Energy Performance of Buildings Regulations 2012 reg.6).

5. "How to Rent: the checklist for renting in England" booklet (the version current at grant of tenancy or relevant renewal) provided to the tenant. Hard-copy or email is acceptable; tenant must have actually received it.

6. HMO licensing in place where the dwelling is a licensable HMO (Housing Act 2004 Part 2 mandatory licensing; or any additional / selective licensing scheme adopted by the local authority under Parts 2/3).

7. At least two months' written notice on the prescribed Form 6A (s.21(1)(b) and (4)(a)).

8. Notice not served in the first four months of the original (not renewed) tenancy (Deregulation Act 2015 s.41); and no retaliatory-eviction bar in place (Deregulation Act 2015 s.33: 6-month moratorium following an improvement notice or emergency remedial action notice from the local authority).

Application: a single failure on any prerequisite renders the notice invalid. The court has no discretion to overlook non-compliance — accelerated possession is mandatory if compliant, refused if not. The landlord must serve a fresh, compliant notice once the breach is cured.

Common failure points: deposit protected late or in a non-compliant scheme; prescribed information not served (often confused with protection); Gas Safety Certificate not served before occupation; HMO licence not held; notice served too early in the tenancy.`,
  tags: ['section-21-test', 'eight-prerequisites', 'deposit', 'prescribed-information', 'gas-safety', 'EPC', 'how-to-rent'],
};

export default doc;
