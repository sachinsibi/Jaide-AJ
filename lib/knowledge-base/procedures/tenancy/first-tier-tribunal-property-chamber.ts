import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-first-tier-tribunal-property-chamber',
  type: 'procedure',
  category: 'tenancy',
  title: 'First-tier Tribunal (Property Chamber) — Residential Property',
  jurisdiction: 'england-wales',
  citation: 'Tribunals, Courts and Enforcement Act 2007; Tribunal Procedure (First-tier Tribunal) (Property Chamber) Rules 2013 (SI 2013/1169)',
  url: 'https://www.gov.uk/courts-tribunals/first-tier-tribunal-property-chamber',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: [
    'tribunal',
    'first-tier',
    'rent repayment',
    'rro',
    'service charge',
    'lease extension',
    'leasehold',
    'improvement notice appeal',
    'banning order',
  ],
  tabs: ['legalBreakdown'],
  factSummary:
    'The FTT (Property Chamber) is a specialist tribunal with a defined jurisdiction: rent repayment orders, leasehold service charge / management disputes, lease extension valuations, banning orders, and appeals against improvement notices and prohibition orders. It is NOT the front-line forum for tenant-led disrepair (that is the County Court). Improvement notices are issued by the local authority, not the FTT.',
  content: `First-tier Tribunal (Property Chamber) — Residential Property:

The FTT (Property Chamber) is a specialist tribunal whose jurisdiction is defined by statute. Its caseload is technical and bounded; it is essential not to misroute tenant claims into it that belong elsewhere.

Jurisdiction (key heads):

1. Rent Repayment Orders (Housing and Planning Act 2016, ss.40–52). Tenant or local authority applies to recover up to 12 months' rent / housing benefit where the landlord has committed one of seven qualifying offences (unlicensed HMO, illegal eviction, breach of improvement notice, breach of banning order, etc.). RROs are the FTT's most common housing matter for tenants.

2. Leasehold service charge and management disputes (Landlord and Tenant Act 1985, s.27A; Commonhold and Leasehold Reform Act 2002).

3. Lease extension and right-to-buy valuations (Leasehold Reform Act 1967; Leasehold Reform, Housing and Urban Development Act 1993).

4. Banning orders (Housing and Planning Act 2016, s.16).

5. Appeals against:
   - Improvement notices and prohibition orders (Housing Act 2004, Sch.1) — landlord appeal against a local authority enforcement notice.
   - Civil penalty notices (Housing and Planning Act 2016, s.126 and Sch.9).
   - Selective and additional licensing decisions.

What the FTT does NOT do:

- It does NOT issue improvement notices itself. Improvement notices are issued by the local authority's Environmental Health team under HA 2004 Pt 1; the FTT only sees them on landlord appeal.
- It does NOT hear tenant-led disrepair claims under s.11 / s.9A LTA 1985. Those proceed in the County Court under CPR Part 7.
- It does NOT order the landlord to do works at the request of the tenant (that is a County Court mandatory injunction).
- It does NOT decide possession claims (CPR Part 55, County Court).

Procedure: applications by paper form (specific to the application type), payable application fee (typically £100; £300 for some matters), case-management directions, hearing, written decision. No costs orders save in limited circumstances (rule 13). Appeals lie to the Upper Tribunal (Lands Chamber).

Practical implication: a tenant whose primary complaint is damp, mould, or disrepair routes via Environmental Health (council) and, in parallel, a County Court Pre-Action Protocol claim — not the FTT.`,
  tags: ['first-tier-tribunal', 'property-chamber', 'jurisdiction', 'rent-repayment-order', 'service-charge', 'appeals'],
};

export default doc;
