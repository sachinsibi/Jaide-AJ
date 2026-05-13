import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-barbados-possession-defence',
  type: 'procedure',
  category: 'tenancy',
  title: 'Defence to Possession Proceedings — Barbados',
  jurisdiction: 'barbados',
  citation: 'Landlord and Tenant Act, Cap. 230; Magistrates\' Court Act, Cap. 116A; Supreme Court of Judicature Act, Cap. 117 (Laws of Barbados)',
  url: 'https://laws.barbados.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['possession', 'evict', 'eviction', 'court date', 'court hearing', 'possession claim', 'arrears', 'notice to quit', 'defend eviction'],
  factSummary:
    'When a landlord in Barbados commences possession proceedings in the Magistrates\' Court or High Court, the tenant has the right to appear, contest the claim, and raise defences. Available defences include: invalidity of the notice to quit, disputes as to rent arrears, counterclaims for disrepair or breach of quiet enjoyment, and evidence of retaliatory intent. There is no CPR Part 55 in Barbados.',
  content: `Defence to Possession Proceedings — Barbados:

In Barbados, all possession of residential premises requires a court order. There is no CPR Part 55 or accelerated possession procedure equivalent to English law. Possession proceedings are governed by the applicable rules of the Magistrates' Court (Cap. 116A) or the High Court of Barbados (Cap. 117).

When possession proceedings are served on a tenant:

A tenant served with a possession claim has the right to respond to the proceedings, file a defence, and appear before the court. The court will consider the landlord's claim and the tenant's response before making any determination.

Available defences:

1. Invalidity of the notice to quit. A possession claim that follows a notice to quit may be contested on the basis that the notice was defective — for example:
(a) the notice gave insufficient notice (less than one period of the tenancy, or less than any longer period required by Cap. 230 or the lease);
(b) the notice was not in writing;
(c) the notice did not expire at the end of a period of the tenancy;
(d) the notice was not properly served on the tenant.
A defective notice to quit may render the subsequent possession proceedings premature or invalid.

2. Disputed grounds for possession. A tenant may contest the factual basis of the landlord's claim:
(a) where possession is sought on the basis of rent arrears, the tenant may dispute the amount alleged to be outstanding, demonstrate that rent was paid, or show that lawful set-offs apply;
(b) where possession is based on alleged breach of tenancy terms, the tenant may dispute that any breach occurred or demonstrate that the breach was remedied;
(c) where possession is sought at the expiry of a fixed-term tenancy, the tenant may contest whether the term has in fact expired or whether any agreement to renew applies.

3. Counterclaim for disrepair or breach of quiet enjoyment. A tenant who has suffered disrepair, habitability defects, or interference with quiet enjoyment may counterclaim within the possession proceedings for damages and/or a remedial order. Where disrepair damages constitute a substantial credit against alleged rent arrears, this may affect the court's assessment of whether a possession order is appropriate. The court may set off damages owed by the landlord against any rent arrears, potentially reducing or eliminating the arrears that form the basis of the possession claim.

4. Retaliatory eviction. A tenant may adduce evidence that the possession proceedings are brought in bad faith — in direct retaliation for the tenant having made a legitimate complaint about housing conditions. The temporal connection between the complaint and the commencement of proceedings, together with any relevant landlord communications, may support this argument.

5. Procedural irregularities. Possession proceedings commenced without following the proper procedural requirements — including failure to commence in the correct court, failure to properly serve the claim, or other procedural defects — may be challenged on that basis.

Court process:

The claim will be listed before a judge (in the Magistrates' Court) or a judge of the High Court, as applicable. Both parties have the right to present evidence and make submissions. The court will determine whether a possession order is to be made, and on what terms (including any date for possession, any postponement of that date, or any conditions).

Where a tenant has counterclaims that are not yet ready to be determined at the possession hearing, the court may direct that those claims be heard separately or at a subsequent hearing.

The Barbados Supreme Court website is at supremecourt.gov.bb. Further information about the legal framework can be found at laws.barbados.gov.bb.`,
  tags: ['possession-defence', 'notice-to-quit', 'Magistrates-Court', 'High-Court', 'Barbados', 'Cap-230', 'counterclaim', 'set-off'],
};

export default doc;
