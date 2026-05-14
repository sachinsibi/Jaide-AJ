import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-insurer-notification-property',
  type: 'procedure',
  category: 'property-damage',
  title: 'Insurer Notification for Property Damage — Barbados',
  jurisdiction: 'barbados',
  citation: 'Standard buildings and contents policy terms; Financial Services Commission Act (Barbados)',
  url: 'https://www.fsc.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['insurance', 'insurer', 'home insurance', 'buildings insurance', 'contents insurance', 'subrogation', 'policy excess'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'Where buildings or contents insurance is in play in Barbados, the insured\'s primary obligation is prompt notification under the policy. The insurer typically indemnifies the insured for the loss and may pursue the responsible third party by subrogation. The Financial Services Commission (FSC) of Barbados supervises insurance companies. Disputes with insurers that cannot be resolved directly may be referred to the FSC or pursued through the civil courts.',
  content: `Insurer Notification for Property Damage — Barbados

Step 1 — Prompt notification to the insurer. Buildings and contents policies in Barbados typically require the insured to notify the insurer of a loss or potential claim "as soon as reasonably practicable" after the event. Delay in notification can, depending on the policy terms, affect the insurer's obligation to indemnify. Notification should be made promptly even where the full extent of the damage is not yet known.

Step 2 — Preserve evidence. Photographs of the damage should be taken immediately. Damaged items should be retained until an adjuster inspects. Receipts or invoices for any emergency works (drying out, boarding up, temporary repairs, storage of displaced contents) should be kept. At least one repair estimate from a qualified contractor should be obtained.

Step 3 — Loss adjuster or assessor. The insurer may appoint a loss adjuster to assess the cause and cost of the damage. The adjuster acts on behalf of the insurer. Where the insurer's assessment appears unreasonable, the insured may engage their own independent loss assessor.

Step 4 — Indemnity payment. Subject to the terms, conditions, limits, and excess of the policy, the insurer pays the insured for the covered loss. Buildings policies in Barbados may pay on a reinstatement (new for old) or indemnity (depreciated value) basis, depending on the policy terms.

Step 5 — Subrogation. Once the insurer has indemnified the insured, it may pursue the legally responsible third party in the insured's name by way of subrogation. The insured is generally required to cooperate with the insurer's subrogation proceedings — providing statements, evidence, and attending court as required. The insured should not settle directly with the responsible party in a way that would prejudice the insurer's subrogation rights without the insurer's consent.

Step 6 — Policy excess and uninsured losses. The policy excess and any uninsured consequential losses (alternative accommodation costs, business interruption losses, professional fees not covered by the policy) may be recoverable directly from the responsible third party as a separate head of claim through the civil courts.

Step 7 — Claim against the responsible party's insurer. Where the responsible party holds liability insurance (household liability, public liability, motor third-party liability), correspondence regarding the claim may be directed to that insurer once the insured has identified the responsible party's coverage.

Financial Services Commission (FSC):

Insurance companies operating in Barbados are regulated by the Financial Services Commission (fsc.gov.bb). Where a dispute arises between an insured and their insurer that cannot be resolved through the insurer's internal complaints process, the matter may be referred to the FSC. The FSC's contact details and guidance on insurance complaints are available at fsc.gov.bb.

Civil courts:

Where an insurer declines a valid claim or the parties cannot resolve a dispute about indemnity, the insured may pursue the matter in the civil courts — the Magistrates' Court of Barbados for claims up to BBD $10,000 (approximately USD $5,000 at the 2:1 peg), or the High Court of Barbados for claims above that threshold.

Practical note: amounts in this context are denominated in Barbados Dollars (BBD), which are pegged to the US Dollar at a fixed rate of 2:1 (BBD $2 = USD $1).`,
  tags: ['insurance', 'insurer-notification', 'subrogation', 'loss-adjuster', 'policy-excess', 'fsc-barbados', 'barbados'],
};

export default doc;
