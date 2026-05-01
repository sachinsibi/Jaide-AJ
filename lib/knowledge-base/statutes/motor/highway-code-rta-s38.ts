import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-highway-code-rta-s38',
  type: 'statute',
  category: 'motor-accident',
  title: 'Road Traffic Act 1988, s.38(7) — Highway Code as evidence',
  jurisdiction: 'england-wales',
  citation: 'Road Traffic Act 1988, s.38(7)',
  url: 'https://www.legislation.gov.uk/ukpga/1988/52/section/38',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['highway code', 'rule', 'speeding', 'mobile phone', 'red light', 'amber light', 'overtaking', 'tailgating', 'lane discipline'],
  tabs: ['legalBreakdown'],
  factSummary:
    'A failure to observe a Highway Code provision is not in itself an offence and does not of itself make a person liable to civil proceedings, but may be relied upon as tending to establish or to negative liability in any proceedings, civil or criminal.',
  content: `Section 38(7) of the Road Traffic Act 1988 provides:

"A failure on the part of a person to observe a provision of the Highway Code shall not of itself render that person liable to criminal proceedings of any kind but any such failure may in any proceedings (whether civil or criminal, and including proceedings for an offence under the Traffic Acts) be relied upon by any party to the proceedings as tending to establish or negative any liability which is in question in those proceedings."

Effect in civil claims:

1. The Highway Code is not, of itself, a source of legal duty. A driver who breaches a Highway Code provision is not automatically negligent.

2. But Highway Code breach is admissible evidence — and powerful evidence — in establishing or negativing the breach element of a negligence claim. Courts give significant weight to documented Highway Code rules because the Code captures the consensus of safe driving practice.

3. The probative effect varies with the rule:
   - Rules expressed as "MUST" / "MUST NOT" reflect underlying statutory or regulatory obligations (speed limits, red lights, mobile phone use, no insurance). Breach is also a criminal offence; in civil proceedings the breach is highly indicative of negligence.
   - Rules expressed as "should" / "should not" / "do" / "do not" are advisory. Breach is evidence but does not establish negligence on its own; the court considers the circumstances.

4. Highway Code breaches commonly cited in motor civil claims:
   - Speeding (Rule 124 and the relevant TSRGD speed limit signage).
   - Use of mobile phone while driving (Rule 149; offence under RVLR).
   - Failure to give way at junctions (Rules 170, 211).
   - Tailgating / failure to keep proper distance (Rule 126: at least 2 seconds; doubled in wet conditions).
   - Failure to wear a seatbelt (Rule 99; offence under s.14 RTA 1988).
   - Failure to use a child restraint (Rule 102).
   - Lane discipline / overtaking on the inside (Rules 137, 268).

5. Evidential procedure: a party relying on a Highway Code rule pleads the rule, identifies the conduct said to breach it, and relates it to the standard of the reasonable driver. The court takes judicial notice of the Code; printed extracts may be exhibited.

This statute is the bridge between the Highway Code (regulatory and educational document) and the common-law standard of care in negligence.`,
  tags: ['highway-code', 'RTA-1988', 'section-38', 'breach-as-evidence', 'standard-of-care'],
};

export default doc;
