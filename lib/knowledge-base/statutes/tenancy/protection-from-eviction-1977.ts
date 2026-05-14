import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-barbados-tenancy-unlawful-eviction',
  type: 'statute',
  category: 'tenancy',
  title: 'Protection Against Unlawful Eviction — Barbados',
  jurisdiction: 'barbados',
  citation: 'Landlord and Tenant Act, Cap. 230; common law protections against unlawful eviction (Laws of Barbados)',
  url: 'https://laws.barbados.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['overview', 'legalBreakdown', 'eli5', 'references'],
  triggers: [
    'eviction',
    'evict',
    'lock change',
    'lockout',
    'locked out',
    'harassment',
    'harass',
    'illegal eviction',
    'unlawful eviction',
    'kicked out',
    'thrown out',
    'changed the locks',
  ],
  factSummary:
    'In Barbados, a residential tenant cannot be evicted without a court order. Self-help eviction — changing locks, removing the tenant\'s belongings, cutting off utilities, or physically excluding the tenant — is not lawful. Both civil remedies (damages, injunction) and potentially criminal liability may arise from unlawful eviction or harassment of a residential occupier.',
  eli5Summary:
    'In Barbados, a landlord cannot just throw a tenant out or change the locks. The landlord must go to court first and get a court order before the tenant can be required to leave. If a landlord tries to force a tenant out without a court order — by locking them out, removing their things, or cutting off water or electricity — this is unlawful and the tenant can take legal action.',
  content: `Protection Against Unlawful Eviction — Barbados:

Barbados law, drawing on both the Landlord and Tenant Act, Cap. 230 and the common law tradition applicable as a Commonwealth jurisdiction, provides that a residential tenant is entitled to protection against being removed from the premises without lawful authority.

Requirement for a court order: a landlord who wishes to recover possession of residential premises occupied by a tenant must obtain an order of the Magistrates' Court (Cap. 116A) or the High Court of Barbados (Cap. 117) before the tenant can be lawfully required to vacate. The court will only make such an order after considering the facts and giving the tenant an opportunity to be heard.

Unlawful eviction — what is not permitted: a landlord commits an unlawful act by:

(a) physically excluding the tenant from the premises without a court order — including by changing locks, removing doors, or otherwise preventing access;
(b) removing or disposing of the tenant's belongings without consent and without a court order;
(c) persistently harassing, intimidating, or threatening the tenant with the purpose or effect of compelling the tenant to leave;
(d) deliberately withdrawing or interfering with services — such as water, electricity, or access — that are necessary for reasonable occupation of the premises, with the purpose or effect of making the premises uninhabitable or compelling the tenant to vacate.

Civil remedies: a tenant who suffers unlawful eviction or harassment by the landlord may bring a civil claim for:
(a) damages for any loss suffered, including loss of accommodation, costs of alternative accommodation, and distress and inconvenience;
(b) an injunction requiring the landlord to restore access to and quiet enjoyment of the premises;
(c) damages for breach of the implied covenant for quiet enjoyment.

Criminal liability: conduct amounting to harassment or forcible exclusion of a residential occupier may also give rise to criminal liability under the applicable provisions of Barbados law.

Notice to quit: the proper process for a landlord who lawfully wishes to end a tenancy is to serve a valid notice to quit giving reasonable notice as required by the terms of the tenancy and the relevant provisions of Cap. 230, and thereafter — if the tenant does not vacate — to apply to the court for a possession order.`,
  tags: ['unlawful-eviction', 'harassment', 'Cap-230', 'court-order', 'Barbados', 'quiet-enjoyment', 'possession'],
};

export default doc;
