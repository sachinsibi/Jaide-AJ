import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-housing-act-2004-pt1-hhsrs',
  type: 'statute',
  category: 'tenancy',
  title: 'Housing Act 2004, Part 1 — Housing Health and Safety Rating System (HHSRS)',
  jurisdiction: 'england-wales',
  citation: 'Housing Act 2004, Pt 1 (ss.1–54)',
  url: 'https://www.legislation.gov.uk/ukpga/2004/34/part/1',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: [
    'damp',
    'mould',
    'cold',
    'hazard',
    'environmental health',
    'unfit',
    'unsafe',
    'rats',
    'mice',
    'pest',
    'fire',
    'electrical',
    'gas',
    'asbestos',
    'overcrowd',
  ],
  tabs: ['overview', 'legalBreakdown', 'references'],
  factSummary:
    'Part 1 establishes the Housing Health and Safety Rating System (HHSRS) under which local housing authorities assess 29 hazards and may serve improvement notices, prohibition orders, hazard awareness notices, or emergency remedial action notices. Authority lies with local authorities; the First-tier Tribunal (Property Chamber) sees these matters only on landlord appeal.',
  content: `Part 1 of the Housing Act 2004 (ss.1–54) replaced the older "fitness for human habitation" standard with the Housing Health and Safety Rating System (HHSRS), a risk-based assessment of 29 prescribed hazards in residential premises. The 29 hazards include damp and mould growth, excess cold, excess heat, asbestos, biocides, carbon monoxide, lead, radiation, uncombusted fuel gas, structural collapse, fire, falls, and crowding.

The HHSRS rates each hazard by likelihood and severity to produce a numerical score; scores are banded into ten bands (A–J). Band A–C scores are Category 1 hazards; Band D–J scores are Category 2 hazards.

Authority and enforcement (held by the local housing authority, not the tenant):

- s.5 — duty to take "appropriate enforcement action" where a Category 1 hazard exists.
- s.7 — power (not duty) to take action in respect of a Category 2 hazard.

Available enforcement options:
- Improvement notice (ss.11–12): requires the landlord to take specified remedial action within a specified time.
- Prohibition order (ss.20–22): prohibits use of all or part of the premises.
- Hazard awareness notice (ss.28–29): formally notifies the landlord of the hazard without requiring action.
- Emergency remedial action (s.40): the authority itself does the work where the hazard poses imminent risk, and recovers cost from the landlord.
- Demolition order or clearance area (ss.46, 289–298 HA 1985 routes).

Tenant route: a tenant who suspects a Category 1 or 2 hazard contacts the local authority's environmental health department. The authority inspects, scores, and decides which (if any) action to take.

Appeals: a landlord aggrieved by an improvement notice or prohibition order appeals to the First-tier Tribunal (Property Chamber) under s.45 / Sch.1. The FTT does not issue HHSRS notices itself — its role is appellate.

This is parallel and complementary to private tenant-led claims under s.11 LTA 1985 and s.9A LTA 1985 (Fitness for Habitation Act 2018), which proceed in the County Court.`,
  tags: ['HHSRS', 'Housing-Act-2004', 'improvement-notice', 'prohibition-order', 'category-1-hazard', 'environmental-health'],
};

export default doc;
