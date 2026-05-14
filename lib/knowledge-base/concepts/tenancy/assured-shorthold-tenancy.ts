import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-barbados-residential-tenancy',
  type: 'concept',
  category: 'tenancy',
  title: 'Residential Tenancy in Barbados — Types and Key Features',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['legalBreakdown', 'eli5'],
  triggers: ['tenancy', 'lease', 'rental agreement', 'renting', 'periodic tenancy', 'fixed term', 'tenant rights'],
  factSummary:
    'Barbados residential tenancies are governed by the Landlord and Tenant Act, Cap. 230 and common law. There is no "assured shorthold tenancy" or statutory periodic tenancy form specific to Barbados. Tenancies are typically either periodic (running from period to period) or fixed-term. Tenants have rights under Cap. 230 and common law to quiet enjoyment, habitable premises, and protection against unlawful eviction.',
  eli5Summary:
    'In Barbados, renting a home is governed by Cap. 230 — the Landlord and Tenant Act. There are no special types of tenancy like the "assured shorthold tenancy" used in England. Most people rent on a monthly or yearly basis (periodic tenancy) or under a fixed-term lease. The law gives tenants the right to live peacefully in the property, have it kept in a fit condition, and not be removed without a court order.',
  content: `Residential Tenancy in Barbados — Types and Key Features:

There is no "assured shorthold tenancy" (AST) or similar statutory tenancy form specific to Barbados. Barbados residential tenancies are governed by the Landlord and Tenant Act, Cap. 230 and the common law applicable as a Commonwealth jurisdiction.

Types of residential tenancy:

1. Periodic tenancy: a tenancy that runs from period to period — typically weekly, monthly, or yearly — corresponding to the period for which rent is paid. A monthly tenancy runs indefinitely month to month until properly ended by a notice to quit. At common law, the minimum notice required to end a periodic tenancy is one period of the tenancy (e.g., one month's notice for a monthly tenancy). Cap. 230 or the lease terms may specify longer notice.

2. Fixed-term tenancy: a tenancy for a defined period set out in the lease (e.g., one year or two years). The tenancy ends on the expiry of the fixed term without the need for a notice to quit, unless the parties agree otherwise or the lease contains a renewal clause. If the tenant remains in occupation after the fixed term expires and the landlord continues to accept rent, the tenancy may convert to a periodic tenancy at common law.

Key features and tenant rights under Barbados law:

(a) Quiet enjoyment: every residential tenancy in Barbados carries an implied covenant that the tenant will enjoy peaceful possession of the premises without substantial interference by the landlord or anyone claiming under the landlord.

(b) Fitness and repair: the landlord is under an implied common law duty to deliver premises fit for habitation and to maintain the structure and essential installations in a reasonable state of repair on notice of any defect.

(c) Security deposits: there is no statutory deposit protection scheme in Barbados. Security deposits are governed by the lease terms and common law, with the landlord entitled to deduct only for legitimate losses attributable to the tenant.

(d) Possession and eviction: a landlord cannot evict a residential tenant without a court order. Proceedings are commenced in the Magistrates' Court (Cap. 116A) or the High Court of Barbados (Cap. 117), depending on the nature and value of the claim. There is no equivalent to the English no-fault possession route.

(e) Rent: rent is set by the agreement between the parties. Any variation of rent is generally subject to the notice requirements and terms of the lease or the applicable provisions of Cap. 230.

Currency note: all monetary amounts in Barbados Dollars (BBD). The BBD is pegged at 2:1 to the United States Dollar (USD).`,
  tags: ['residential-tenancy', 'periodic-tenancy', 'fixed-term', 'Cap-230', 'Barbados', 'tenant-rights'],
};

export default doc;
