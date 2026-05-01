import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-cpr-part-55-possession-defence',
  type: 'procedure',
  category: 'tenancy',
  title: 'CPR Part 55 — Possession Claims and Defence',
  jurisdiction: 'england-wales',
  citation: 'Civil Procedure Rules, Part 55',
  url: 'https://www.justice.gov.uk/courts/procedure-rules/civil/rules/part55',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['possession', 'evict', 'eviction', 'court order', 'court date', 'hearing', 'section 21', 'section 8', 'arrears'],
  tabs: ['legalBreakdown'],
  factSummary:
    'CPR Part 55 governs landlord possession claims. Two procedures: standard (Pt 55.III) for s.8 grounds and rent arrears claims, with a hearing; accelerated (Pt 55.II) for compliant s.21 notices, paper-only unless the defendant raises a defence requiring a hearing. Tenants may counterclaim for disrepair within possession proceedings.',
  content: `CPR Part 55 — Possession Claims (Civil Procedure Rules):

Part 55 is the procedural code for all residential possession claims in the County Court. Two streams operate:

Standard procedure (CPR 55.II — rr.55.3–55.11):
- Used for Housing Act 1988 s.8 ground claims (rent arrears, anti-social behaviour, breach of tenancy, etc.) and any contested possession claim involving disputed facts.
- Claim issued on Form N5 with Particulars of Claim on Form N119.
- Defendant must file a defence on Form N11R within 14 days of service.
- First hearing listed within 8 weeks of issue (CPR 55.5(3)).
- Mandatory and discretionary grounds applied per Sch.2 HA 1988.
- Court may adjourn (e.g., to give tenant time to clear arrears under discretionary Ground 8 if accrued post-issue).

Accelerated procedure (CPR 55.II [55.II is shared; "accelerated" is in 55.III] / Practice Direction 55A — rr.55.11–55.19):
- Used only for compliant s.21 notices on assured shorthold tenancies. Subject to the s.21 status caveat following the Renters' Rights Act 2024 (verify against current legislation).
- Claim issued on Form N5B; particulars are pre-printed.
- Defendant returns Form N11B within 14 days.
- Determined on paper without a hearing unless the defendant raises a substantive defence (e.g., deposit non-protection, prescribed-information failure, retaliatory eviction under Deregulation Act 2015 s.33, lack of HMO licence, late Gas Safety Certificate, missing How to Rent booklet).
- If a defence is raised, the case is transferred to the standard procedure.

Tenant defences and counterclaims:

1. Procedural defects — failure on any of the eight s.21 prerequisites (see test-s21-validity-test).
2. Retaliatory eviction — Deregulation Act 2015 s.33.
3. Counterclaim for disrepair — under CPR Part 20, the tenant may counterclaim within the possession proceedings for damages and an injunction under s.11 / s.9A LTA 1985. Where the counterclaim raises a substantial credit or set-off against arrears, the court may dismiss the possession claim or grant a postponed possession order.
4. Set-off — equitable set-off of disrepair damages against alleged rent arrears (British Anzani (Felixstowe) Ltd v International Marine Management (UK) Ltd [1980] QB 137).
5. Section 8 specific defences — denying the ground (e.g., disputing the arrears figure), public-law defences (Hounslow LBC v Powell), Equality Act 2010 reasonable-adjustment defences for disabled tenants.

Track allocation: small-claims track does not apply to possession claims; these run on a bespoke Pt 55 timetable.`,
  tags: ['CPR-Part-55', 'possession', 'accelerated-procedure', 'standard-procedure', 'set-off', 'counterclaim'],
};

export default doc;
