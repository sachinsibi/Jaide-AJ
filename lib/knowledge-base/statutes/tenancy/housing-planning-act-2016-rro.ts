import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-housing-planning-act-2016-rro',
  type: 'statute',
  category: 'tenancy',
  title: 'Housing and Planning Act 2016, ss.40–52 — Rent Repayment Orders',
  jurisdiction: 'england-wales',
  citation: 'Housing and Planning Act 2016, ss.40–52',
  url: 'https://www.legislation.gov.uk/ukpga/2016/22/part/2/chapter/4',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['rent repayment', 'rro', 'unlicensed hmo', 'illegal eviction', 'banning order', 'breach of improvement notice'],
  tabs: ['legalBreakdown'],
  factSummary:
    'A Rent Repayment Order (RRO) requires a landlord to repay up to 12 months of rent (or housing benefit) to the tenant or local authority. RROs are available only for seven specific qualifying offences and are made by the First-tier Tribunal (Property Chamber) on application — not by the County Court.',
  content: `The Housing and Planning Act 2016, ss.40–52, expanded the Rent Repayment Order (RRO) regime introduced by the Housing Act 2004.

A First-tier Tribunal (Property Chamber) may make an RRO requiring a landlord to repay up to 12 months of rent (or, where the tenant claimed housing benefit / Universal Credit housing element, repayment to the local authority of the corresponding benefit).

Qualifying offences (s.40(3)) — an RRO is only available where the landlord has committed one of these seven offences:

(a) Violence for securing entry — Criminal Law Act 1977, s.6.
(b) Eviction or harassment of occupiers — Protection from Eviction Act 1977, s.1.
(c) Failure to comply with an improvement notice — Housing Act 2004, s.30.
(d) Failure to comply with a prohibition order — Housing Act 2004, s.32.
(e) Control or management of an unlicensed HMO — Housing Act 2004, s.72.
(f) Control or management of an unlicensed house under selective/additional licensing — Housing Act 2004, s.95.
(g) Breach of a banning order — Housing and Planning Act 2016, s.21.

Conviction is not required for offences (c)–(g): the FTT may make an RRO if satisfied beyond reasonable doubt that the offence was committed.

Procedure: the tenant (or local authority) applies to the FTT within 12 months of the offence. The application is by Form RRO1. The FTT considers the conduct of both parties, the financial circumstances of the landlord, and any conviction (s.44).

Crucially, RROs are NOT a general remedy for tenancy disputes. They are not available for s.11 disrepair, deposit-protection breaches, or breach of quiet enjoyment. Routing an RRO claim through the wrong forum (e.g., County Court) will fail; routing a disrepair claim through the FTT under the RRO heading will fail. RROs are also not the front-line route for tenant-led disrepair — that is the County Court (CPR Part 7) under s.11 / s.9A LTA 1985, with HHSRS as the parallel local-authority track.`,
  tags: ['rent-repayment-order', 'RRO', 'Housing-Planning-Act-2016', 'unlicensed-HMO', 'first-tier-tribunal'],
};

export default doc;
