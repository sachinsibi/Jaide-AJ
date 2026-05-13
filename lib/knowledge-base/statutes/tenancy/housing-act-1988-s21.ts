import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-barbados-tenancy-possession-proceedings',
  type: 'statute',
  category: 'tenancy',
  title: 'Court-Ordered Possession Proceedings — Barbados Tenancy Law',
  jurisdiction: 'barbados',
  citation: 'Landlord and Tenant Act, Cap. 230; Supreme Court of Judicature Act, Cap. 117; Magistrates\' Court Act, Cap. 116A (Laws of Barbados)',
  url: 'https://laws.barbados.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['overview', 'legalBreakdown', 'eli5', 'references'],
  triggers: ['eviction', 'evict', 'possession', 'notice to quit', 'leave the property', 'end tenancy', 'terminate tenancy'],
  factSummary:
    'In Barbados, there is no equivalent to the English no-fault possession route. A landlord seeking to recover possession of residential premises must obtain a court order. Possession proceedings are brought before the Magistrates\' Court (where appropriate by value and nature) or the High Court of Barbados, and the tenant has the right to contest the claim before a judge.',
  eli5Summary:
    'In Barbados, a landlord cannot simply tell a tenant to leave and change the locks. The landlord must go to court — either the Magistrates\' Court or the High Court — and get a judge to order the tenant to leave. The tenant has the right to appear and give their side of the story before the court makes any decision.',
  content: `Court-Ordered Possession Proceedings — Barbados Tenancy Law:

Unlike England, Barbados has no statutory "no-fault" possession route whereby a landlord may recover possession merely by giving a prescribed period of notice without any ground. In Barbados, possession of residential premises requires a court order.

Requirement for a court order: a landlord who wishes to recover possession of premises occupied by a tenant under a residential tenancy must commence proceedings in the appropriate court and obtain a judgment or order for possession. Self-help eviction — changing locks, removing belongings, physically excluding the tenant without a court order — is not lawful in Barbados.

Court jurisdiction:

(a) Magistrates' Court (Cap. 116A — Magistrates' Court Act): the Magistrates' Court has civil jurisdiction for claims appropriate to its monetary limits. For tenancy matters falling within those limits, possession proceedings may be initiated there.

(b) High Court of Barbados (Cap. 117 — Supreme Court of Judicature Act): the High Court has unlimited civil jurisdiction and handles possession proceedings involving higher-value claims, more complex tenancy disputes, or where the Magistrates' Court jurisdiction is exceeded.

Grounds for possession: a landlord seeking possession before expiry of a fixed-term tenancy must establish a recognised ground, such as breach of tenancy terms (including persistent non-payment of rent) or other conduct entitling the landlord to terminate. At the end of a periodic tenancy, the landlord must serve appropriate notice to quit and, if the tenant does not vacate, obtain a court order.

Notice to quit: before commencing possession proceedings, a landlord is generally required to serve a notice to quit on the tenant, giving reasonable notice appropriate to the type of tenancy and the period of the tenancy. The common law and the relevant provisions of Cap. 230 govern the minimum notice period and form required.

Tenant's right to contest: a tenant served with a possession claim has the right to appear before the court, raise any defences (including challenges to the notice, disputes about rent arrears, or counterclaims for disrepair), and put their case before a judge determines whether a possession order is to be made.

Currency note: all monetary thresholds in Barbados Dollars (BBD). The BBD is pegged at 2:1 to the United States Dollar (USD).`,
  tags: ['possession-proceedings', 'court-order', 'Cap-230', 'Magistrates-Court', 'High-Court', 'Barbados', 'eviction'],
};

export default doc;
