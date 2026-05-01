import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-county-court-disrepair-claim',
  type: 'procedure',
  category: 'tenancy',
  title: 'County Court Disrepair / Fitness Claim (CPR Part 7)',
  jurisdiction: 'england-wales',
  citation: 'Civil Procedure Rules, Part 7; CPR 26 (track allocation); Pre-Action Protocol for Housing Conditions Claims',
  url: 'https://www.justice.gov.uk/courts/procedure-rules/civil',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'The County Court is the primary route for tenant-led disrepair and unfitness claims (s.11 / s.9A LTA 1985). The claim is issued under CPR Part 7 after compliance with the Pre-Action Protocol for Housing Conditions Claims, and seeks (a) an injunction requiring works and (b) damages.',
  content: `County Court Disrepair / Fitness Claim (CPR Part 7):

This is the primary tenant-led route for relief in housing disrepair and unfitness cases. Local-authority HHSRS enforcement runs in parallel, but the County Court is the forum that orders the landlord to do the works (mandatory injunction) and pays compensation.

Procedural sequence:

1. Pre-action — Compliance with the Pre-Action Protocol for Housing Conditions Claims (England): early notification letter, letter of claim, joint single expert (typically a chartered surveyor or environmental health practitioner), schedule of works, attempt to negotiate.

2. Issue — Claim issued at the County Court Money Claims Centre (CCMCC) or relevant County Court hearing centre using Form N1. Causes of action commonly pleaded: s.11 LTA 1985, s.9A LTA 1985 (Fitness for Habitation Act 2018), s.4 Defective Premises Act 1972, breach of express or implied terms of the tenancy agreement, and (where pleaded) statutory or common law nuisance.

3. Reliefs claimed:
   (a) A mandatory injunction requiring the landlord to carry out specified works within a specified timetable (typically supported by the joint expert's schedule).
   (b) Damages for breach (general damages — loss of enjoyment, discomfort, ill-health; special damages — destroyed possessions, increased fuel costs, medical costs).
   (c) Interest under s.69 County Courts Act 1984.
   (d) Costs.

4. Track allocation (CPR 26):
   - Small Claims Track — up to £10,000 financial value (with up to £1,000 disrepair cost limit since 2013). Limited recoverable costs; suitable for low-quantum claims with no injunction required.
   - Fast Track — £10,000–£25,000.
   - Multi-track — over £25,000 or where complexity warrants (most disrepair claims with an injunction proceed here).

5. Trial — final hearing with oral evidence from the tenant, family members affected, and the expert. Judge gives judgment on liability and quantum and (if appropriate) makes the injunction.

6. Enforcement — non-compliance with an injunction is contempt of court, enforceable by committal application. Damages enforceable by the usual County Court routes (warrant of control, attachment of earnings, third-party debt order, charging order).

Cost note: Court issue fees are banded by claim value; the small-claims band is the cheapest. Recoverable costs are restricted on the small claims track. Legal aid is available for housing disrepair where the tenant qualifies financially and the case meets the merits criteria.`,
  tags: ['CPR-Part-7', 'County-Court', 'disrepair-claim', 'fitness-claim', 'injunction', 'damages', 'tenant-led'],
};

export default doc;
