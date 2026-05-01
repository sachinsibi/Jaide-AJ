import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-environmental-health-hhsrs',
  type: 'procedure',
  category: 'tenancy',
  title: 'Environmental Health / HHSRS Route',
  jurisdiction: 'england-wales',
  citation: 'Housing Act 2004, Pt 1; HHSRS Operating Guidance (ODPM 2006)',
  url: 'https://www.gov.uk/government/publications/housing-health-and-safety-rating-system-guidance-for-landlords-and-property-related-professionals',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'Tenant route via the local authority\'s Environmental Health team: complain in writing → officer inspects under the HHSRS → authority decides whether to serve an improvement notice, prohibition order, hazard awareness notice, or take emergency remedial action. Parallel and complementary to a private County Court claim under s.11 / s.9A LTA 1985.',
  content: `Environmental Health / HHSRS route (Housing Act 2004, Part 1):

This is the local-authority enforcement track for unfit or hazardous housing, run in parallel to (not instead of) a tenant's private claim. Authority lies with the local authority — not the tenant, and not the First-tier Tribunal (which only sees these matters on landlord appeal).

Step-by-step:

1. Tenant complains in writing to the landlord, identifying the conditions and asking for action. Keep proof of receipt — this is foundational both for the s.11 notice requirement and for s.33 retaliatory-eviction protection.

2. If the landlord does not respond adequately within 14 days, the tenant complains to the local housing authority's Environmental Health team. (Most councils have a "report a housing problem" web form.)

3. An Environmental Health Officer (EHO) inspects the dwelling and assesses each potential hazard against the 29 prescribed hazards under the HHSRS. Each hazard is scored on likelihood and severity to produce a numerical band:
   - Bands A–C → Category 1 hazard.
   - Bands D–J → Category 2 hazard.

4. The authority decides what enforcement action (if any) to take:
   - Improvement notice (HA 2004 ss.11–12): requires specified works within a specified time. Mandatory for Category 1; discretionary for Category 2.
   - Prohibition order (ss.20–22): prohibits use of all or part of the premises.
   - Hazard awareness notice (ss.28–29): formal notification, no compulsion.
   - Emergency remedial action (s.40): authority does the work itself for imminent risk; recovers cost from landlord.
   - Demolition order or clearance area (rare).

5. Service of an improvement notice or s.40 emergency notice triggers the s.33 Deregulation Act 2015 retaliatory-eviction protection — any s.21 notice given within 6 months is invalid (subject to s.34 exceptions and verification of current s.21 status).

6. Landlord appeal route: a landlord aggrieved by an improvement notice or prohibition order may appeal to the First-tier Tribunal (Property Chamber) within 21 days under HA 2004 Sch.1. The FTT may confirm, vary, or quash the notice.

This track is free to the tenant. It is parallel and complementary to a private claim in the County Court under s.11 / s.9A LTA 1985 and the Pre-Action Protocol for Housing Conditions Claims; both can run at once.`,
  tags: ['environmental-health', 'HHSRS', 'improvement-notice', 'category-1-hazard', 'local-authority'],
};

export default doc;
