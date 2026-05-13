import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-retaliatory-eviction',
  type: 'concept',
  category: 'tenancy',
  title: 'Retaliatory Eviction',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['retaliatory', 'retaliation', 'complained', 'after I complained', 'evict', 'eviction', 'punish for complaining'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'Retaliatory eviction occurs when a landlord attempts to remove or threaten a tenant in direct response to the tenant having made a legitimate complaint about housing conditions. In Barbados, common law principles treat such conduct as bad faith, relevant to possession proceedings before the Magistrates\' Court or High Court, and potentially actionable as a breach of the implied covenant for quiet enjoyment.',
  eli5Summary:
    'If a tenant in Barbados complains about a serious problem with the property — like a broken roof or unsafe electrics — the landlord cannot try to evict the tenant just because they made the complaint. Barbados common law treats this kind of retaliatory behaviour as acting in bad faith. A tenant who faces this situation can raise it as part of their defence in court.',
  content: `Retaliatory Eviction — Barbados:

Retaliatory eviction refers to a landlord seeking to remove a tenant, or to create conditions that pressure the tenant to leave, in direct response to the tenant having exercised a legal right or made a legitimate complaint — most commonly a complaint about disrepair, habitability defects, or other failures of the landlord's obligations.

Position in Barbados: Barbados does not have a specific statute equivalent to England's Deregulation Act 2015 s.33, which provided a mechanism for automatically invalidating a no-fault possession notice served within six months of a local authority improvement notice. There is no no-fault possession route in Barbados, and all possession requires a court order. Nevertheless, common law principles relevant to retaliatory conduct operate in the following ways:

(a) Bad faith in possession proceedings: where a landlord commences possession proceedings in direct response to a tenant's legitimate complaint about the condition of the premises, the court may consider the timing and circumstances of the proceedings in assessing whether the claim is brought in good faith. A judge in the Magistrates' Court or High Court of Barbados has the power to take account of the landlord's motivation in determining the outcome of possession proceedings.

(b) Breach of quiet enjoyment: where a landlord's retaliatory conduct takes the form of harassment, threats, interference with services, or other acts designed to compel the tenant to vacate, this may amount to a breach of the implied covenant for quiet enjoyment, entitling the tenant to damages and potentially an injunction.

(c) Implied covenant not to derogate from grant: the landlord is under a common law obligation not to act in a manner that substantially undermines the tenant's lawful enjoyment of the premises, including through retaliatory or punitive conduct.

Practical indicators of retaliatory intent:

- The close temporal connection between a tenant's written complaint about housing conditions and the landlord's commencement of possession proceedings.
- A pattern of landlord conduct — escalating pressure, refusal to carry out repairs, threats of eviction — following the complaint.
- Communications from the landlord explicitly linking the complaint to the decision to seek possession.

Available responses: a tenant who identifies retaliatory conduct may raise it as part of a defence to possession proceedings, counterclaim for breach of quiet enjoyment, or claim damages before the Magistrates' Court or the High Court of Barbados depending on the value and nature of the claim.`,
  tags: ['retaliatory-eviction', 'bad-faith', 'common-law', 'Barbados', 'quiet-enjoyment', 'possession', 'Cap-230'],
};

export default doc;
