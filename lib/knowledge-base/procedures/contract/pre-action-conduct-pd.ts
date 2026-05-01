import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-pre-action-conduct-pd-contract',
  type: 'procedure',
  category: 'contract-service',
  title: 'Pre-Action Conduct PD — Letter Before Claim (consumer / contract)',
  jurisdiction: 'england-wales',
  citation: 'CPR Practice Direction on Pre-Action Conduct and Protocols',
  url: 'https://www.justice.gov.uk/courts/procedure-rules/civil/rules/pd_pre-action_conduct',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'For consumer and contract disputes there is no specific protocol; the general Practice Direction on Pre-Action Conduct and Protocols applies. The claimant must send a clear letter before claim setting out the basis of the claim, the loss, and a reasonable response period (typically 14 days for an acknowledgment and 14–30 days for a substantive response). Non-compliance is a costs and case-management consideration.',
  content: `Practice Direction on Pre-Action Conduct and Protocols:

For most consumer / contract disputes there is no dedicated protocol (unlike housing or personal injury). The general Practice Direction sets out conduct expected of parties before issuing a County Court claim.

Underlying objectives (PD 3):
(a) Understand each other's positions.
(b) Make decisions about how to proceed.
(c) Try to settle without proceedings.
(d) Consider a form of ADR.
(e) Support efficient management of proceedings if litigation is unavoidable.
(f) Reduce costs.

Required steps (PD 6):

1. Letter before claim from the claimant. Sets out concisely:
   - The factual basis of the claim.
   - The legal basis (cause of action — breach of contract, breach of CRA s.9 / s.49, etc.).
   - The remedy sought (specified sum, repair, replacement, refund, damages).
   - A list of essential documents the claimant relies on.
   - A reasonable period for the defendant to respond.

2. Defendant's response. Within a reasonable time (typically 14 days for a simple consumer claim; 30 days for more complex; up to 90 days for very complex commercial). The response should:
   - Confirm whether the claim is accepted in whole or in part.
   - Identify what is in dispute and why.
   - Provide documents the defendant relies on.
   - Make any counter-offer.

3. ADR consideration. The parties should consider mediation, ombudsman schemes, or other ADR before issuing. PD 9: parties may be required to give evidence of why ADR was not used.

4. Pre-action disclosure. Parties exchange documents necessary for the other to understand the position.

5. Stocktake. Before issuing, the claimant reviews the position and confirms that proceedings remain necessary and proportionate.

Sanctions for non-compliance (PD 13–16):

The court may, at its discretion:
- Stay proceedings until the steps are taken.
- Impose costs orders against a non-compliant party.
- Take non-compliance into account when allocating costs at the end of the case.
- Treat unjustified refusal to engage in ADR as a cost-relevant factor (Halsey v Milton Keynes [2004] EWCA Civ 576; PGF II SA v OMFS [2013] EWCA Civ 1288).

For consumer claims under £10,000 (small claims track), the protocol expectations are calibrated — extensive disclosure is not expected — but a clear letter before claim is still required, and unreasonable refusal to engage with consumer ADR (e.g., a sectoral ombudsman the trader is required to participate in) is a serious cost concern.`,
  tags: ['pre-action-conduct', 'PD-pre-action', 'letter-before-claim', 'consumer-claim', 'ADR'],
};

export default doc;
