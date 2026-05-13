import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-obrien-v-robinson',
  type: 'case',
  category: 'tenancy',
  title: "O'Brien v Robinson [1973] AC 912 (HL)",
  jurisdiction: 'barbados',
  citation: "O'Brien v Robinson [1973] AC 912 (HL)",
  url: 'https://www.bailii.org/uk/cases/UKHL/1972/8.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['notice', 'notified', 'told the landlord', 'reported', 'inspection', 'latent defect', 'collapse', 'ceiling', 'hidden defect'],
  tabs: ['legalBreakdown'],
  factSummary:
    "Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. A landlord's liability under the implied duty to repair arises only after the landlord has actual or constructive notice of the defect. There is no liability for latent defects of which the landlord could not reasonably have known, and no general duty to inspect.",
  content: `O'Brien v Robinson [1973] AC 912 (House of Lords).

Status: persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. This is an English House of Lords decision and is not binding Barbados law; it is applied as a statement of common law principle recognised across Commonwealth jurisdictions.

Facts: the plaintiffs were tenants of a maisonette. The bedroom ceiling collapsed on them while they were in bed, causing injury. There had been occasional noises from the ceiling but no visible defect on inspection. The cause of the collapse was a hidden defect in the joists. The tenants sued for breach of the implied repairing covenant.

Held: the House of Lords held that the landlord was not liable. The implied covenant to repair does not impose a duty to inspect for latent defects. Liability arises only when the landlord has notice — actual or constructive — of the defect, and only then does the obligation to repair within a reasonable time begin. Lord Diplock emphasised that liability cannot arise for a defect of which the landlord was unaware and could not reasonably have been aware.

Application in Barbados: the notice principle from O'Brien v Robinson is applied in Barbados as part of the common law governing landlord repairing obligations. In a Barbados context:

(a) Notice requirement: the common law implied duty of habitability and repair under Barbados law crystallises upon the landlord having actual or constructive notice of the defect. A tenant must communicate the defect — preferably in writing and with proof of delivery — to place the landlord on notice. Constructive notice arises from circumstances from which a reasonable landlord would infer the existence of the defect.

(b) Reasonable time to repair: once on notice, the landlord has a reasonable time within which to inspect and carry out the repair. What constitutes a reasonable time depends on the nature, severity, and urgency of the defect — emergency conditions (no water, dangerous electrics, sewage ingress) require a prompt response.

(c) No duty to inspect: a landlord under Barbados common law does not have a general implied obligation to enter and inspect the demised premises in search of latent defects in the absence of notice.

Practical implication: for any disrepair or habitability claim in Barbados, the sequence of notice and the landlord's response is foundational. A claim may fail if the landlord was not put on notice and could not reasonably have known of the defect.`,
  tags: ["O'Brien-v-Robinson", 'notice', 'latent-defect', 'reasonable-time', 'Barbados', 'persuasive-authority', 'repair'],
};

export default doc;
