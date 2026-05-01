import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-quiet-enjoyment-test',
  type: 'test',
  category: 'tenancy',
  title: 'Quiet Enjoyment Breach Test',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['quiet enjoyment', 'interference', 'access', 'entered', 'visit', 'noise', 'harassment', 'derogation'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Three-stage objective test for breach of the implied covenant for quiet enjoyment: (1) substantial interference with the tenant\'s possession or enjoyment, (2) by the landlord or someone claiming under the landlord, (3) amounting to derogation from grant. Pre-existing physical conditions of the demised premises do not breach the covenant (Southwark v Mills).',
  content: `The Quiet Enjoyment Breach Test (applied by County Court judges in tenant claims for breach of the implied covenant for quiet enjoyment):

Stage 1 — Substantial interference. Was there substantial interference with the tenant's possession or enjoyment of the demised premises? The threshold is meaningful: trivial inconvenience does not breach the covenant. Examples meeting the threshold: persistent unannounced entry; persistent shouting or threats by the landlord; cutting off utilities (McCall v Abelesz [1976] QB 585); building works rendering the premises uninhabitable; persistent surveillance.

Stage 2 — Attribution. Was the interference caused by the landlord, someone claiming under the landlord (e.g., a managing agent acting in scope), or someone for whom the landlord is responsible? The covenant does not extend to third-party interference (e.g., another tenant in the building) unless the landlord has authorised, encouraged, or failed to take reasonable steps to prevent it where the landlord has the contractual or property right to act.

Stage 3 — Derogation from grant. Did the conduct amount to derogation from grant — i.e., the landlord taking back, in substance, what the tenant was granted? The covenant is prospective, not retrospective: pre-existing physical conditions of the premises at the start of the tenancy cannot breach quiet enjoyment (Southwark LBC v Mills [2001] 1 AC 1). The covenant addresses the landlord's conduct during the term, not the inherent state of the premises.

The test is objective: the question is whether the landlord's conduct, viewed objectively, substantially interfered with the tenant's reasonable enjoyment, not whether the particular tenant subjectively felt aggrieved.

Defences: lawful exercise of express rights of entry (e.g., to inspect under a properly drafted clause, with reasonable notice and at reasonable times) does not breach the covenant. Statutory rights of entry (e.g., for gas safety inspections) likewise.

Remedies: damages (general damages for loss of enjoyment and discomfort; aggravated/exemplary damages where the conduct is high-handed or oppressive — Drane v Evangelou [1978] 1 WLR 455); injunction; in serious cases, statutory damages under Housing Act 1988 ss.27–28.`,
  tags: ['quiet-enjoyment-test', 'three-stage-test', 'derogation-from-grant', 'objective-test', 'substantial-interference'],
};

export default doc;
