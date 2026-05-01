import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-housing-act-1988-s21',
  type: 'statute',
  category: 'tenancy',
  title: 'Housing Act 1988, s.21 — Notice of no-fault possession',
  jurisdiction: 'england-wales',
  citation: 'Housing Act 1988, s.21',
  url: 'https://www.legislation.gov.uk/ukpga/1988/50/section/21',
  inForce: true,
  inForceNote:
    'PENDING — verify against gov.uk before relying on this. The Renters\' Rights Act 2024 is expected to abolish s.21 no-fault possession; commencement status as of this doc\'s lastVerified is unconfirmed and may have changed.',
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['section 21', 's.21', 's21', 'no-fault', 'eviction', 'evict', 'notice to quit', 'possession'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Section 21 Housing Act 1988 enables a landlord of an assured shorthold tenancy to recover possession after the fixed term without proving fault, provided strict prerequisites are met (deposit protection, prescribed information served, Gas Safety Certificate, EPC, How to Rent booklet, HMO licensing where required, ≥2 months\' notice, after first 4 months of tenancy).',
  content: `Section 21 Housing Act 1988 provides a "no-fault" route to possession of an assured shorthold tenancy (AST). The landlord need not allege any breach by the tenant; instead the court must make a possession order if the prescribed procedural and statutory prerequisites are met.

Eight prerequisites for a valid s.21 notice (each independent — failure on any one renders the notice invalid):

1. Deposit protected within 30 days of receipt in an authorised tenancy deposit scheme (Housing Act 2004 s.213(1) and (3)).

2. Prescribed information served on the tenant within 30 days of receipt of the deposit (Housing Act 2004 s.213(5) and (6); SI 2007/797). This is a separate requirement from protection itself — protection without prescribed-information service is non-compliance.

3. Gas Safety Certificate (CP12) provided to the tenant before they take occupation, and renewed annually (Gas Safety (Installation and Use) Regulations 1998 reg.36; Trecarrell House Ltd v Rouncefield [2020] EWCA Civ 760).

4. Energy Performance Certificate (EPC) provided to the tenant free of charge (Energy Performance of Buildings (England and Wales) Regulations 2012 reg.6).

5. "How to Rent: the checklist for renting in England" booklet (current version) provided to the tenant.

6. HMO licensing in place where the dwelling is a licensable HMO (Housing Act 2004 Pt 2 / Pt 3, and any additional/selective licensing scheme adopted by the local authority).

7. Minimum two months' notice given, in writing, on the prescribed Form 6A.

8. Notice not served in the first four months of the original tenancy (Deregulation Act 2015 s.41); and any retaliatory-eviction moratorium under Deregulation Act 2015 s.33 not in force.

Status caveat: this doc reflects the s.21 regime as understood at the lastVerified date. The Renters' Rights Act 2024 is expected to abolish s.21 and migrate ASTs to a new periodic-tenancy regime; verify current commencement status on legislation.gov.uk and gov.uk before advising any tenant or landlord on a live notice.`,
  tags: ['section-21', 'Housing-Act-1988', 'no-fault-possession', 'AST', 'prescribed-information'],
};

export default doc;
