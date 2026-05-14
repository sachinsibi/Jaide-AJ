import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-barbados-insurer-notification-and-negotiation',
  type: 'procedure',
  category: 'motor-accident',
  title: 'Insurer Notification and Negotiation — Barbados Motor Accident Claims',
  jurisdiction: 'barbados',
  citation: 'Motor Vehicles Insurance (Third-Party Risks) Act, Cap. 166; Insurance Act, Cap. 310 (Barbados)',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'The starting point for most motor accident disputes in Barbados is the insurance framework. A person involved in a road traffic incident has two primary options: notifying their own insurer and allowing them to pursue recovery, or making a direct claim against the at-fault driver\'s third-party insurer. Where an insurer disputes liability or challenges the amount claimed, the matter may be escalated through complaint to the Financial Services Commission or through civil court proceedings.',
  content: `Insurer notification and negotiation — the typical sequence in Barbados motor accident claims

Step 1 — Post-accident steps: following an accident, the driver should stop, exchange details, and report to the police as required by road traffic law. Photographs of the scene, vehicles, and damage should be taken at the earliest opportunity. Witness details should be obtained where possible.

Step 2 — Notify own insurer: insurance policies typically require notification within a specified period — often as soon as reasonably practicable or within a defined number of days. Late notification may breach a policy condition. The notification should include: the date, time, and location of the accident; the details of the other vehicle and driver; a factual account; photographic evidence; and the police reference number where available. An admission of liability at the scene or in correspondence should be avoided, as most policies require the insurer to handle liability questions.

Step 3 — Options for recovery:
(a) Through own comprehensive insurer — the insurer pays for vehicle repair or write-off (subject to the policy excess) and pursues the at-fault driver's insurer in subrogation. The claimant recovers the excess separately from the at-fault party.
(b) Direct claim against the at-fault driver's third-party insurer — where the claimant has third-party-only cover, or wishes to protect their no-claims discount, a direct claim is made against the insurer of the at-fault driver.

Step 4 — Liability assessment: the insurers investigate liability. This typically involves review of the police report, photographs, witness accounts, and any other evidence. The at-fault insurer may accept liability, partially accept it (raising contributory negligence), or deny it.

Step 5 — Quantum (valuation of loss): a claims handler or independent engineer assesses vehicle damage and determines whether repair or write-off is appropriate. Other heads of loss (alternative transport, consequential losses) are also assessed.

Step 6 — Escalation where the insurer disputes:
Where the insurer disputes liability or the amount claimed, the options include:
- Continued negotiation with supporting evidence.
- A complaint to the Financial Services Commission of Barbados under the Insurance Act, Cap. 310. The FSC regulates the insurance sector and can investigate insurer conduct, though its role is primarily supervisory rather than adjudicative.
- Civil court proceedings in the Magistrates' Court (claims up to $10,000 BBD) or the High Court of Barbados (claims above that threshold).

Barbados does not currently operate a statutory Financial Ombudsman Service equivalent to those found in the United Kingdom and some other Commonwealth jurisdictions. The FSC is the relevant regulatory body, but for binding dispute resolution on quantum or liability, the civil courts are the formal pathway.`,
  tags: ['insurer-notification', 'Cap-166', 'FSC', 'Insurance-Act-Cap-310', 'motor-claim', 'Barbados', 'subrogation'],
};

export default doc;
