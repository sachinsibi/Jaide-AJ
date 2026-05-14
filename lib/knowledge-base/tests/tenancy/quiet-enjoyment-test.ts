import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-quiet-enjoyment-test',
  type: 'test',
  category: 'tenancy',
  title: 'Quiet Enjoyment Breach Test — Barbados',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['quiet enjoyment', 'interference', 'access', 'entered', 'visit', 'noise', 'harassment', 'derogation', 'disturbing'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Three-stage test for breach of the implied covenant for quiet enjoyment in Barbados residential tenancies: (1) substantial interference with the tenant\'s possession or enjoyment, (2) caused by the landlord or someone acting under the landlord\'s authority, (3) amounting to derogation from grant during the tenancy. Pre-existing physical conditions at the start of the tenancy do not breach the covenant.',
  content: `Quiet Enjoyment Breach Test — Barbados Residential Tenancies:

The implied covenant for quiet enjoyment is part of Barbados common law, applied as a Commonwealth jurisdiction. The following three-stage test is applied in assessing whether a breach of the covenant has occurred.

Stage 1 — Substantial interference. Was there substantial interference with the tenant's possession or enjoyment of the demised premises? The threshold is meaningful: trivial or minor inconvenience does not breach the covenant. The assessment is objective — whether the conduct, viewed objectively, substantially interfered with the tenant's reasonable enjoyment of the premises. Examples of conduct likely to meet the threshold: persistent unannounced entry into the premises; persistent threats, intimidation, or verbal harassment directed at the tenant; deliberate cutting off or interference with utilities such as water or electricity (McCall v Abelesz [1976] QB 585, persuasive common law authority); building or renovation works that render the premises uninhabitable; persistent surveillance.

Stage 2 — Attribution to the landlord. Was the interference caused by the landlord, someone acting under the landlord's authority (such as a managing agent or contractor within the scope of their engagement), or someone for whom the landlord is responsible? The covenant does not extend to independent third parties — such as neighbouring tenants — over whom the landlord has no contractual or property control, unless the landlord has authorised, encouraged, or unreasonably failed to prevent the conduct when having the means to do so.

Stage 3 — Derogation from grant. Did the conduct amount to derogation from grant — that is, did the landlord substantially take back, by conduct, what was granted to the tenant under the tenancy? The covenant is prospective, not retrospective: it addresses the landlord's acts and conduct during the term, not the physical condition of the premises as they existed when the tenancy was granted. Pre-existing conditions present at the start of the tenancy are not themselves a breach of quiet enjoyment (Southwark LBC v Mills [2001] 1 AC 1, persuasive common law authority applied in Barbados).

Defences: the lawful exercise of express rights of entry contained in the tenancy agreement — exercised with reasonable notice and at reasonable times — does not constitute a breach. Entry in genuine emergency circumstances likewise.

Remedies available in Barbados:
- General damages for loss of enjoyment, distress, and inconvenience.
- Aggravated damages where the landlord's conduct has been high-handed or oppressive.
- An injunction from the Magistrates' Court (Cap. 116A) or the High Court of Barbados (Cap. 117) to restrain further interference.
- Where the conduct also amounts to harassment or unlawful exclusion, additional civil and potentially criminal remedies may arise.

Currency note: all monetary amounts in Barbados Dollars (BBD). The BBD is pegged at 2:1 to the United States Dollar (USD).`,
  tags: ['quiet-enjoyment-test', 'three-stage-test', 'derogation-from-grant', 'objective-test', 'Barbados', 'substantial-interference'],
};

export default doc;
