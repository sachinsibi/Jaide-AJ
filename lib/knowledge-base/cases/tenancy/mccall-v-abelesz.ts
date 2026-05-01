import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-mccall-v-abelesz',
  type: 'case',
  category: 'tenancy',
  title: 'McCall v Abelesz [1976] QB 585 (CA)',
  jurisdiction: 'england-wales',
  citation: 'McCall v Abelesz [1976] QB 585 (CA)',
  url: 'https://www.bailii.org/ew/cases/EWCA/Civ/1976/2.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['harassment', 'harass', 'utilities', 'cut off', 'gas', 'electricity', 'water', 'illegal eviction', 'forcing out'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Cutting off gas and electricity to force a tenant out is conduct calculated to interfere with the peace and comfort of the residential occupier and amounts to the offence of harassment under the Protection from Eviction Act 1977, s.1. The 1977 Act does not, however, give a direct civil cause of action — civil remedies lie in tort (nuisance, trespass) and contract (breach of quiet enjoyment).',
  content: `McCall v Abelesz [1976] QB 585 (Court of Appeal).

Facts: A landlord, wishing to recover possession from a statutory tenant whom he could not lawfully evict, cut off the gas and electricity supplies to the flat. The tenant sued for damages.

Held: The Court of Appeal held that withholding services such as gas and electricity, where calculated to cause the residential occupier to give up occupation, constituted the criminal offence of harassment under the Rent Act 1965 s.30 (now reproduced in materially identical form as Protection from Eviction Act 1977, s.1).

However, the Court further held that the Act did not, in itself, create a private right of action for damages. The tenant's civil remedies arose from established heads:
- Breach of the implied covenant for quiet enjoyment;
- Nuisance, where the conduct interferes with the use and enjoyment of land;
- Breach of contract, where the landlord supplies services as part of the tenancy;
- Trespass to the person or to the premises in some cases.

Application: McCall established two propositions still good law:

(1) Withdrawal or withholding of essential services (gas, electricity, water, heating) by a landlord, calculated to drive the tenant out, is itself a criminal offence under PEA 1977 s.1. Local authority Tenancy Relations Officers prosecute these offences; the CPS rarely does.

(2) The civil claim is not a free-standing statutory tort. It must be framed in quiet enjoyment / nuisance / contract / trespass. The principal civil remedy is now in damages under Housing Act 1988 ss.27–28 (where the conduct is conduct calculated to make the occupier give up the premises), which provides the substantial-damages mechanism (difference in landlord's interest with vs without the occupier in possession) that Parliament inserted to fill the McCall gap.

McCall therefore explains the historic structure of harassment liability in England & Wales: criminal under PEA 1977, civil under common law / contract, supplemented by statutory civil damages under HA 1988 ss.27–28.`,
  tags: ['McCall-v-Abelesz', 'harassment', 'utilities-cut-off', 'PEA-1977', 'quiet-enjoyment'],
};

export default doc;
