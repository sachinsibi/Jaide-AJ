import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-obrien-v-robinson',
  type: 'case',
  category: 'tenancy',
  title: 'O\'Brien v Robinson [1973] AC 912 (HL)',
  jurisdiction: 'england-wales',
  citation: 'O\'Brien v Robinson [1973] AC 912 (HL)',
  url: 'https://www.bailii.org/uk/cases/UKHL/1972/8.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['notice', 'notified', 'told the landlord', 'reported', 'inspection', 'latent defect', 'collapse', 'ceiling'],
  tabs: ['legalBreakdown'],
  factSummary:
    'A landlord\'s liability under the implied repairing covenant arises only after the landlord has notice (actual or constructive) of the defect. There is no liability for latent defects of which the landlord could not reasonably have known. The duty is then to repair within a reasonable time.',
  content: `O'Brien v Robinson [1973] AC 912 (House of Lords).

Facts: The plaintiffs were tenants of a maisonette. The bedroom ceiling collapsed on them while they were in bed, causing injury. There had been previous occasional noises from the ceiling but no defect visible on inspection. The cause of collapse was a hidden defect in the joists. The tenants sued for breach of the implied repairing covenant.

Held: The House of Lords held that the landlord was not liable. The implied covenant to repair (then under Housing Act 1961 s.32, now s.11 LTA 1985) does not impose a duty to inspect for latent defects. Liability arises only when the landlord has notice — actual or constructive — of the defect, and only then does the obligation to repair within a reasonable time begin.

Lord Diplock (in the leading speech) emphasised that this notice requirement is implicit in the very concept of a duty to "keep in repair": one cannot be in breach of a duty to repair a defect of which one is unaware and could not reasonably be aware.

Application: O'Brien establishes three operative rules under s.11 LTA 1985:

(1) Notice requirement. The tenant must put the landlord on notice of the defect (orally or in writing) before the duty to repair crystallises. Constructive notice — circumstances from which a reasonable landlord would infer the defect — also suffices.

(2) Reasonable time to repair. After notice, the landlord has a reasonable time to inspect and to carry out the repair. What is reasonable depends on the severity, urgency, and accessibility of the defect.

(3) No duty to inspect. The landlord has no general duty to enter and inspect the demised premises in search of defects (subject to express terms or particular statutory regimes such as gas safety).

Practical implication: tenants should always put complaints in writing (email, letter) and retain proof of receipt. A claim that fails on notice is a claim that fails on the threshold question.`,
  tags: ['O-Brien-v-Robinson', 'notice', 'section-11', 'latent-defect', 'reasonable-time'],
};

export default doc;
