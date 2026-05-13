import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-barbados-tenancy-retaliatory-eviction',
  type: 'statute',
  category: 'tenancy',
  title: 'Retaliatory Eviction Protection — Barbados Common Law',
  jurisdiction: 'barbados',
  citation: 'Common law; Landlord and Tenant Act, Cap. 230 (Laws of Barbados)',
  url: 'https://laws.barbados.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['overview', 'legalBreakdown', 'eli5', 'references'],
  triggers: ['retaliatory', 'retaliation', 'complained', 'complaint', 'evict', 'eviction', 'after I complained'],
  factSummary:
    'Barbados common law provides protections against a landlord who attempts to evict or punish a tenant in direct retaliation for the tenant having made a legitimate complaint about the condition of the premises. Such conduct may be raised as bad faith in possession proceedings and may give rise to a claim for breach of the implied covenant for quiet enjoyment.',
  eli5Summary:
    'If a tenant complains to their landlord about serious problems with the home, the landlord cannot punish the tenant for making that complaint by trying to evict them or making life difficult. Barbados common law treats this kind of landlord behaviour as acting in bad faith, and a tenant facing this situation can raise it before the court.',
  content: `Retaliatory Eviction Protection — Barbados Common Law:

In Barbados there is no statutory provision equivalent to England's Deregulation Act 2015 s.33, which specifically invalidated a no-fault possession notice served in response to a tenant's disrepair complaint. However, the general principles of Barbados common law — applied as a Commonwealth jurisdiction — provide a framework within which retaliatory conduct by landlords can be challenged.

The concept of retaliatory eviction: retaliatory eviction refers to a landlord taking action to remove or threaten a tenant, or to withdraw tenancy benefits, in direct response to the tenant having lawfully exercised a right or made a legitimate complaint — typically a complaint about the condition or safety of the premises.

Common law protections available in Barbados:

(a) Bad faith in possession proceedings: where a landlord commences possession proceedings in direct retaliation for a tenant's legitimate complaint about housing conditions, the court may take the timing and surrounding circumstances into account in determining whether the proceedings are brought in good faith, particularly where the landlord's conduct suggests an improper motive.

(b) Breach of quiet enjoyment: conduct by a landlord — such as issuing threats, interfering with services, or creating a hostile environment — in response to a tenant's complaint may amount to a breach of the implied covenant for quiet enjoyment, giving rise to civil remedies including damages and injunctive relief.

(c) Implied covenant not to derogate from grant: a landlord is not permitted to act in a manner that substantially undermines the tenant's lawful enjoyment of the premises, including by retaliatory acts directed at persuading the tenant to abandon a complaint or vacate the property.

Evidence of retaliatory intent: the temporal connection between a tenant's complaint and the landlord's responsive action is relevant evidence of improper motive. Where possession proceedings are commenced shortly after a tenant has reported disrepair or made a formal complaint, this sequence may inform the court's assessment of the proceedings.

Available remedies: a tenant faced with retaliatory conduct may raise the matter as a defence or counterclaim in possession proceedings before the Magistrates' Court or High Court, claim damages for breach of quiet enjoyment, or seek an injunction where landlord conduct amounts to harassment or unlawful interference with occupation.`,
  tags: ['retaliatory-eviction', 'Cap-230', 'common-law', 'bad-faith', 'Barbados', 'quiet-enjoyment', 'possession'],
};

export default doc;
