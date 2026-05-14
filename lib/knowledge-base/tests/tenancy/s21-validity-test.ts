import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-possession-proceedings-test',
  type: 'test',
  category: 'tenancy',
  title: 'Possession Proceedings Test — Barbados',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['eviction', 'evict', 'possession', 'notice to quit', 'court order', 'leave the property', 'terminate tenancy', 'end tenancy'],
  tabs: ['legalBreakdown'],
  factSummary:
    'In Barbados, a landlord seeking possession of residential premises must satisfy a four-stage test: (1) valid grounds or basis for seeking possession; (2) proper notice to quit served in accordance with the tenancy terms and Cap. 230; (3) court proceedings commenced in the appropriate court (Magistrates\' Court or High Court); (4) a possession order obtained from the court after the tenant has had an opportunity to be heard.',
  content: `Possession Proceedings Test — Barbados Residential Tenancies:

There is no equivalent to the English s.21 no-fault possession route in Barbados. All possession of residential premises requires a court order, obtained through proceedings before the Magistrates' Court (Cap. 116A) or the High Court of Barbados (Cap. 117). The following four-stage assessment applies.

Stage 1 — Grounds or basis for possession. Does the landlord have a valid basis for seeking to recover possession?

For possession before the expiry of a fixed-term tenancy: the landlord must establish a ground for early termination, typically a breach of the tenancy terms — such as persistent non-payment of rent, serious damage to the property, or other conduct entitling the landlord to treat the tenancy as forfeited or terminated. The particular grounds available depend on the terms of the lease and the applicable provisions of Cap. 230.

For possession at or after the end of a tenancy: at the expiry of a fixed term, the landlord may seek possession on the basis that the term has ended. For a periodic tenancy, the landlord must first serve a valid notice to quit to bring the tenancy to an end, and if the tenant does not vacate, may then commence possession proceedings.

Stage 2 — Valid notice to quit (where required). Has a valid notice to quit been served on the tenant?

For periodic tenancies, common law requires notice of at least one full period of the tenancy (e.g., one month's notice for a monthly tenancy). Cap. 230 and the lease may specify longer notice. The notice must:
(a) be in writing;
(b) identify the premises;
(c) state the date on which possession is required, which must correspond to the end of a period of the tenancy; and
(d) be served on the tenant in accordance with any notice provisions in the lease or the applicable provisions of Cap. 230.

Failure to serve a valid notice to quit — or premature service — may render subsequent possession proceedings defective.

Stage 3 — Court proceedings in the correct forum. Have proceedings been commenced in the appropriate court?

(a) Magistrates' Court (Cap. 116A): appropriate for possession claims and related money claims within the Magistrates' Court civil jurisdiction. The tenant must be served with the claim and given an opportunity to respond and attend the hearing.

(b) High Court of Barbados (Cap. 117): appropriate for possession claims involving amounts or legal issues exceeding the Magistrates' Court jurisdiction, or where the complexity of the case warrants it.

A landlord who evicts a tenant without obtaining a court order — by changing locks, removing belongings, cutting off services, or physically excluding the tenant — acts unlawfully, regardless of the merits of the underlying possession claim.

Stage 4 — Court order for possession. Has the court made a possession order after hearing the parties?

The tenant has the right to appear before the court, contest the grounds for possession, raise any defences (including counterclaims for disrepair, breach of quiet enjoyment, or retaliatory eviction), and put their case to the judge. A possession order takes effect only if the court is satisfied that the grounds and procedure are made out and the tenant has had an opportunity to be heard.

Tenant defences available:
(a) Invalidity of the notice to quit — wrong period, wrong form, or failure to comply with Cap. 230 or lease requirements.
(b) Dispute as to the grounds — e.g., denial of rent arrears, or evidence that the alleged breach has been remedied.
(c) Counterclaim for disrepair — a tenant may counterclaim within possession proceedings for damages and remedial orders arising from the landlord's breach of repairing or habitability obligations.
(d) Retaliatory intent — evidence that possession proceedings are brought in bad faith in direct response to the tenant's legitimate complaint about housing conditions.

Currency note: all monetary thresholds in Barbados Dollars (BBD). The BBD is pegged at 2:1 to the United States Dollar (USD).`,
  tags: ['possession-proceedings-test', 'notice-to-quit', 'court-order', 'Barbados', 'Cap-230', 'Magistrates-Court', 'High-Court'],
};

export default doc;
