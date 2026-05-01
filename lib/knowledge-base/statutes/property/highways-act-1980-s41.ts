import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-highways-act-1980-s41',
  type: 'statute',
  category: 'property-damage',
  title: 'Highways Act 1980, s.41 — Highway authority duty to maintain',
  jurisdiction: 'england-wales',
  citation: 'Highways Act 1980, s.41',
  url: 'https://www.legislation.gov.uk/ukpga/1980/66/section/41',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['pothole', 'road defect', 'highway', 'damaged my car on the road', 'road condition', 'council road', 'street'],
  tabs: ['overview', 'legalBreakdown', 'references'],
  factSummary:
    'A highway authority has a statutory duty under s.41 to maintain the highway maintainable at public expense. Damage caused by a failure to maintain (potholes, broken kerbs, defective drainage) gives a cause of action. The s.58 statutory defence is available if the authority took such care as in all the circumstances was reasonably required.',
  content: `Section 41(1) imposes on the highway authority a duty "to maintain the highway" maintainable at public expense, owed to any user who suffers loss as a result (Goodes v East Sussex CC [2000] UKHL 34). Scope: carriageway surface, kerbs, drainage, roadworks within the highway boundary; trees within the highway. Section 41(1A) adds a duty, so far as reasonably practicable, to keep safe passage from snow and ice.

Not covered: defective signing or lighting alone where the carriageway is sound (Gorringe v Calderdale [2004] UKHL 15); hazards on but not part of the highway (spilt fuel left by a third party) — those fall under common-law nuisance / negligence.

Section 58 statutory defence — the authority must prove it took such care as was reasonably required to secure that the relevant part was not dangerous for traffic. Factors:
(a) character of the highway and the traffic reasonably expected;
(b) standard of maintenance appropriate to that character and use;
(c) state of repair a reasonable person would have expected;
(d) whether the authority knew, or could reasonably have been expected to know, of the danger;
(e) whether adequate warning notices were displayed if the defect could not be put right.

In practice, the s.58 question turns on the authority's inspection regime — frequency, inspector qualifications, what was looked for — and any prior reports / complaints in the relevant time window.

Property-damage application: motorists whose cars are damaged by potholes, broken drains, or fallen highway trees can claim under s.41. Limitation: 6 years (LA 1980 s.2).

Procedure: Letter Before Claim to the highway authority's claims department, with photographs, dimensions, GPS location, date, and quantum. Authorities maintain dedicated highway claim handlers; the s.58 question dominates correspondence.`,
  tags: ['HA-1980', 'section-41', 'highway-authority', 'pothole', 'section-58-defence'],
};

export default doc;
