import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-pre-action-protocol-housing-conditions',
  type: 'procedure',
  category: 'tenancy',
  title: 'Pre-Action Protocol for Housing Conditions Claims (England)',
  jurisdiction: 'england-wales',
  citation: 'Pre-Action Protocol for Housing Conditions Claims (England) — Civil Procedure Rules',
  url: 'https://www.justice.gov.uk/courts/procedure-rules/civil/protocol/prot_hou',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'Mandatory pre-action steps before issuing a tenant-led housing conditions claim in the County Court (disrepair under s.11 LTA 1985, unfitness under s.9A LTA 1985, statutory nuisance, and related claims). Renamed from the Housing Disrepair Protocol in 2003.',
  content: `The Pre-Action Protocol for Housing Conditions Claims (England) governs what tenants and their advisers must do before issuing a housing conditions claim in the County Court. It applies to claims arising under s.11 Landlord and Tenant Act 1985, s.9A LTA 1985 (Homes (Fitness for Human Habitation) Act 2018), s.4 Defective Premises Act 1972, contractual terms, and common law nuisance.

Required steps:

1. Early Notification Letter — Sent at the outset where the tenant has not previously notified the landlord. States the existence of the conditions complained of and asks the landlord to inspect.

2. Letter of Claim — If matters are not resolved, the tenant sends a Letter of Claim setting out: the history of the conditions, the defects, the effect on the tenant and household, details of any notification to the landlord, the proposed expert, draft expert instructions, and disclosure requested from the landlord (tenancy file, repair records, complaints, surveys, gas safety certificates).

3. Landlord's Response — Within 20 working days the landlord must respond, stating whether liability is admitted in whole or part, and providing the requested disclosure.

4. Joint Single Expert — The protocol expects a single joint expert (typically a chartered surveyor or environmental health practitioner) instructed by both parties where possible. Costs of the expert are shared until the court orders otherwise.

5. Schedule of Works — The expert produces a schedule of necessary works with priorities and a timetable.

6. Negotiation — Parties attempt to agree the works, timetable, and any compensation.

7. Issue — Only if matters are not resolved is the claim issued, typically in the County Court under CPR Part 7 (claims for damages and an injunction requiring works).

Costs and case management consequences follow non-compliance: the court may stay proceedings, order specific steps to be taken, or make adverse costs orders. The protocol is mandatory in spirit even where strict compliance is not possible (e.g., emergency injunctions), and any departure should be justified.`,
  tags: ['pre-action-protocol', 'housing-conditions', 'disrepair', 'CPR', 'County-Court'],
};

export default doc;
