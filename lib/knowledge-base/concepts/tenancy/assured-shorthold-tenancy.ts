import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-assured-shorthold-tenancy',
  type: 'concept',
  category: 'tenancy',
  title: 'Assured Shorthold Tenancy (AST)',
  jurisdiction: 'england-wales',
  inForce: true,
  inForceNote:
    'PENDING — verify against gov.uk. Under the Renters\' Rights Act 2024, ASTs are expected to be abolished and converted to a single periodic-tenancy form. Confirm current status before relying.',
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'The default form of residential tenancy in the private rented sector in England since 28 February 1997 (Housing Act 1988, as amended by Housing Act 1996). Provides limited security of tenure during the fixed term and converts to a statutory periodic tenancy on expiry. Subject to abolition by the Renters\' Rights Act 2024.',
  eli5Summary:
    'An AST is the standard kind of rental contract for private tenants in England. It runs for a fixed period (usually 6 or 12 months) and then continues month-to-month until either the landlord or the tenant ends it properly. The deposit must be protected, and the landlord cannot just turn up and evict you — they have to follow rules.',
  content: `Assured Shorthold Tenancy (AST):

The AST is the default private-sector residential tenancy in England, introduced by the Housing Act 1988 (s.20) and made the default form by the Housing Act 1996, applying to most tenancies granted on or after 28 February 1997.

Defining features:

1. Default form. Any tenancy of a dwelling-house in England granted to an individual after 28 February 1997 by a private landlord is automatically an AST unless it falls into a statutory exception (high rents above £100,000 p.a., very low rents, business tenancies, holiday lets, lettings to students by their educational institution, lettings by resident landlords, certain Crown lettings).

2. Limited security of tenure. During the fixed term, the tenant has full security: the landlord can recover possession only on s.8 grounds (rent arrears, anti-social behaviour, breach, etc., per Sch.2 HA 1988). After the fixed term expires, the tenancy continues automatically as a "statutory periodic tenancy" (s.5 HA 1988), and the landlord may use the s.21 no-fault route subject to the eight prerequisites being satisfied.

3. Statutory protections embedded:
   - Tenancy deposit protection (HA 2004 s.213): deposit must be held in DPS, MyDeposits, or TDS within 30 days, with prescribed information served.
   - Repairing covenants (LTA 1985 s.11) and fitness covenant (LTA 1985 s.9A, post-2018).
   - Protection from eviction (PEA 1977): court order required to evict.
   - Retaliatory eviction protection (Deregulation Act 2015 s.33).
   - Rent increase mechanism via s.13 notice for periodic tenancies.

4. Possession routes:
   - s.21 — no-fault, accelerated procedure (CPR 55.III). Subject to the eight prerequisites.
   - s.8 — fault-based, on Sch.2 grounds. Mandatory grounds (e.g., Ground 8 — 2+ months' arrears) and discretionary grounds (e.g., Ground 10 — some arrears).

Status caveat: the Renters' Rights Act 2024 is expected to abolish the AST classification, making all tenancies periodic, removing the s.21 no-fault route, and reforming Sch.2 grounds. Where commencement has occurred, "AST" becomes a historic concept applicable only to transitional cases. Verify before relying on this characterisation.`,
  tags: ['AST', 'assured-shorthold-tenancy', 'Housing-Act-1988', 'periodic-tenancy', 'security-of-tenure'],
};

export default doc;
