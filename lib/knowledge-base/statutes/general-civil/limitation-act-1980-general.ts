import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-barbados-general-civil-limitation',
  type: 'statute',
  category: 'general-civil',
  title: 'Limitation Periods for Civil Claims — Barbados',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['general-civil'],
  tabs: ['overview', 'legalBreakdown', 'references'],
  factSummary:
    'Barbados has its own limitation legislation governing the time within which civil proceedings must be commenced. The general period for tort and contract claims is consistent with six years from accrual of the cause of action, in line with Commonwealth norms. Defamation may attract a shorter limitation period. Exact periods and exceptions should be verified under the applicable Barbados Limitation of Actions Act or equivalent legislation.',
  content: `The Limitation Act 1980 (England) does not apply in Barbados. Barbados has its own limitation legislation — the applicable Barbados Limitation of Actions Act or equivalent statute — which governs the time limits within which civil proceedings must be commenced in Barbados courts.

General principles applicable in Barbados:

Tort claims (general): consistent with Commonwealth limitation norms, the general period for bringing a tort claim is six years from the date the cause of action accrued. The cause of action typically accrues when the damage first occurs or, for torts actionable without proof of damage, when the act complained of takes place.

Contract claims: the general limitation period for contract claims is six years from the date of breach, regardless of when the claimant discovered the breach.

Defamation: defamation claims may attract a shorter limitation period than the general tort period. The specific period under Barbados law should be verified at laws.barbados.gov.bb. Claimants should act promptly once they become aware of a defamatory publication.

Latent damage: where damage is latent (not immediately discoverable), Barbados law may provide for the limitation period to run from the date of knowledge rather than the date the damage first occurred. The applicable rules should be verified under Barbados legislation.

Data protection claims: claims under the Data Protection Act, 2019 (Barbados) are subject to the limitation periods applicable to civil claims of that type under Barbados law.

Accrual rules:
- For continuing wrongs (such as continuing nuisance or repeated harassment), each fresh act may give rise to a fresh cause of action. Acts outside the limitation window are time-barred, but more recent acts within the window remain actionable.
- Limitation runs continuously unless suspended by operation of law (for example, where the claimant lacked legal capacity at the relevant time).

Limitation as a procedural defence: limitation is a defence that must be raised by the defendant. The court does not raise it of its own motion. A defendant who fails to plead limitation at the appropriate stage may be taken to have waived it.

Proceedings are commenced when the claim form or originating process is filed with the relevant Barbados court — the Magistrates' Court or the High Court of Barbados depending on the value and nature of the claim.

Note: the precise limitation periods applicable to specific causes of action in Barbados should be verified under the applicable Barbados Limitation of Actions Act or equivalent legislation at laws.barbados.gov.bb.`,
  tags: ['limitation', 'time-limits', 'accrual', 'Barbados', 'tort', 'contract', 'defamation-limitation'],
};

export default doc;
