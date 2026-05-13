import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-barbados-pre-claim-housing-disrepair',
  type: 'procedure',
  category: 'tenancy',
  title: 'Pre-Claim Steps for Housing Disrepair — Barbados',
  jurisdiction: 'barbados',
  citation: 'Landlord and Tenant Act, Cap. 230 (Laws of Barbados); common law',
  url: 'https://laws.barbados.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['overview', 'legalBreakdown'],
  triggers: ['disrepair', 'repair', 'housing conditions', 'complaint', 'letter to landlord', 'pre-claim', 'notice of disrepair'],
  factSummary:
    'Before commencing civil proceedings in Barbados for housing disrepair or habitability defects, a tenant should follow a sequence of pre-claim steps: written notice to the landlord identifying the defects, a reasonable period for the landlord to respond and remedy, gathering of evidence, and (where applicable) approaching the relevant public health authority. These steps establish notice, preserve evidence, and demonstrate good faith.',
  content: `Pre-Claim Steps for Housing Disrepair — Barbados:

Barbados does not have a formal Pre-Action Protocol equivalent to the English Civil Procedure Rules housing conditions protocol. However, courts in Barbados — consistent with civil procedure principles applicable as a Commonwealth jurisdiction — expect parties to make reasonable efforts to resolve disputes before commencing proceedings. Following a structured pre-claim sequence benefits the tenant by establishing notice and demonstrating good faith; it also gives the court a clear record of the landlord's response (or lack thereof).

Recommended pre-claim sequence:

Step 1 — Written notice of disrepair to the landlord.
The tenant (or the tenant's representative) sends a written notice to the landlord identifying:
(a) the specific defects or conditions complained of, described with sufficient particularity;
(b) the location of each defect;
(c) the effect of each defect on the tenant and household (e.g., health effects, inability to use part of the property);
(d) the date from which the tenant became aware of the condition;
(e) a request that the landlord inspect and carry out the necessary repairs or remedial works within a stated reasonable period.
Written notice should be sent in a form that creates a clear record — by registered post, courier, or email with delivery confirmation. The date of service is the date from which the landlord is on notice, and the landlord's obligation to remedy crystallises from that point.

Step 2 — Reasonable period for the landlord to respond.
The landlord should be given a reasonable opportunity to inspect and carry out repairs. What is reasonable depends on the severity and urgency of the defects:
- Emergency or serious conditions (no water supply, sewage ingress, structural danger, dangerous electrics) warrant a short period — typically days, not weeks.
- Serious but non-emergency conditions (persistent damp, failing heating) may allow two to four weeks.
- Less urgent defects may allow a longer reasonable period.
Where the landlord acknowledges the defects and provides a credible timetable for remedial works, the tenant should consider whether to allow that timetable before commencing proceedings.

Step 3 — Evidence gathering.
During the pre-claim period, evidence should be gathered and preserved:
(a) dated photographs and video of each defect;
(b) a written record of how the conditions affect daily life and health;
(c) copies of all correspondence with the landlord;
(d) any medical records or reports linking the conditions to health effects on the tenant or household;
(e) any relevant terms of the lease.

Step 4 — Approach the relevant public health authority (where appropriate).
Where the conditions raise a public health or safety concern, a complaint may be made to the relevant public health authority in Barbados — such as the Ministry responsible for Health or an Environmental Health Officer. An inspection and any resulting report or requirement for remedial action provides additional evidence of the defects and the landlord's obligations.

Step 5 — Letter of claim.
If the landlord fails to respond adequately or to carry out the repairs within the stated period, a formal letter of claim is sent setting out:
(a) the basis of the claim (breach of implied duty of habitability and repair under Cap. 230 and common law);
(b) the remedies sought (an order for works to be carried out and/or damages in BBD);
(c) a final deadline for the landlord's substantive response before proceedings are commenced.

Step 6 — Commencement of proceedings.
If the matter is not resolved following the above steps, the tenant may commence civil proceedings in the Magistrates' Court (for claims up to $10,000 BBD under Cap. 116A) or the High Court of Barbados (for claims above $10,000 BBD under Cap. 117). The pre-claim correspondence and evidence will be presented to support the claim.

Currency note: all monetary thresholds in Barbados Dollars (BBD). The BBD is pegged at 2:1 to the United States Dollar (USD).`,
  tags: ['pre-claim', 'housing-disrepair', 'notice', 'Cap-230', 'Barbados', 'evidence', 'Magistrates-Court', 'High-Court'],
};

export default doc;
