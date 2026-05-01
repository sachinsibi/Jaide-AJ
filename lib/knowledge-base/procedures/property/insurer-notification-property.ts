import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-insurer-notification-property',
  type: 'procedure',
  category: 'property-damage',
  title: 'Insurer Notification and Subrogation (property damage)',
  jurisdiction: 'england-wales',
  citation: 'Insurance Act 2015; standard buildings/contents policy terms',
  url: 'https://www.gov.uk/guidance/buildings-and-contents-insurance-claims',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['insurance', 'insurer', 'home insurance', 'buildings insurance', 'contents insurance', 'subrogation', 'policy excess'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'Where buildings or contents insurance is in play, the insured\'s primary obligation is prompt notification under the policy. The insurer typically indemnifies the insured for the loss and pursues the responsible third party in subrogation in the insured\'s name. Failure to notify promptly or to preserve evidence can prejudice the policy. Excess is recoverable from the third party as part of the consequential loss.',
  content: `Step 1 — Prompt notification. Buildings and contents policies require notification "as soon as reasonably practicable" after a notifiable event. Late notification can engage Insurance Act 2015 prejudice provisions — the insurer may decline only if it can show the delay prejudiced its position.

Step 2 — Preserve evidence. Photograph immediately. Retain damaged items until the loss adjuster inspects. Keep receipts for emergency works (drying out, boarding up, storage). Obtain at least one repair quote.

Step 3 — Loss adjuster. The insurer appoints a loss adjuster to assess cause and quantum. The adjuster acts for the insurer; the policyholder may engage their own loss assessor if the adjuster's view appears unreasonable.

Step 4 — Indemnity. The insurer pays the insured (subject to excess and policy limits). Buildings policies ordinarily pay reinstatement cost for owner-occupied homes ("new for old" cover); indemnity policies pay depreciated value only.

Step 5 — Subrogation. Once indemnified, the insurer pursues the legally responsible third party in the insured's name. Recovery first reimburses the insurer; any surplus (including the policy excess and uninsured losses) goes to the insured. The insured must cooperate — providing statements, attending court — and must not settle with the third party in a way that compromises the insurer's subrogation rights.

Step 6 — Excess and uninsured losses. The policy excess (typically £100–£500) and uninsured consequential losses (alternative accommodation, loss of business profits, professional fees outside cover) are recoverable from the responsible third party as a separate head of claim.

Step 7 — Responsible party's liability insurer. Where the responsible party carries liability cover (homeowners', public liability, motor third-party), correspondence moves to that insurer once notified; they handle and fund the defence.

Promptness and evidence preservation are paramount: late notification and disposal of damaged items are the most common ways policyholders lose cover or prejudice subrogation recovery.`,
  tags: ['insurance', 'insurer-notification', 'subrogation', 'loss-adjuster', 'policy-excess'],
};

export default doc;
