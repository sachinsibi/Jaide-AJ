import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-pd-pre-action-conduct-property',
  type: 'procedure',
  category: 'property-damage',
  title: 'Practice Direction on Pre-Action Conduct (property damage claims)',
  jurisdiction: 'england-wales',
  citation: 'CPR Practice Direction on Pre-Action Conduct and Protocols',
  url: 'https://www.justice.gov.uk/courts/procedure-rules/civil/rules/pd_pre-action_conduct',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['property-damage'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'Property-damage claims (negligence, nuisance, trespass, Rylands) have no dedicated pre-action protocol. The general Practice Direction on Pre-Action Conduct and Protocols applies. The claimant must send a clear letter before claim setting out the legal basis, evidence, and quantum, and must consider ADR. Non-compliance is a costs and case-management consideration.',
  content: `No dedicated protocol applies (unlike Housing Disrepair, RTA-PI, or Construction TCC). The general Practice Direction sets the steps expected before issuing a County Court claim.

Objectives (PD 3): understand positions; consider settlement; consider ADR; reduce costs; support efficient litigation if unavoidable.

Required steps (PD 6):

1. Letter before claim. Sent by the claimant, setting out:
   - Parties: claimant (with proprietary interest — Hunter v Canary Wharf), defendant(s).
   - Factual narrative: dates, location, mechanism of damage.
   - Legal basis: negligence; private nuisance (locality/character; continuing or one-off; standing); Rylands v Fletcher (accumulation/non-natural use/escape); trespass to land; breach of statute (DPA 1972 s.4; Highways Act 1980 s.41; Party Wall etc. Act 1996 s.7(2)).
   - Damage and quantum, itemised: repair cost with quotes; diminution with valuation; consequential losses (alternative accommodation, hire, business interruption, surveyor/engineer fees); s.69 interest.
   - Documents enclosed: photographs with metadata, expert report, repair quotes, weather records.
   - Reasonable response period: 14 days acknowledgment; 21–90 days substantive depending on complexity.

2. Defendant's response. Accepts the claim in whole or in part; identifies disputed issues; provides defendant's documents; makes any counter-offer.

3. Pre-action disclosure: insurance details, expert reports, internal correspondence, planning/permit records, highway-authority inspection logs (s.41 claims).

4. ADR: mediation through Civil Mediation Council; insurer negotiation; surveyor-led resolution under PWA 1996 (mandatory for notifiable works). Refusal to engage is a costs concern (Halsey v Milton Keynes [2004]; PGF II SA v OMFS [2013]).

5. Stocktake before issue.

Sanctions (PD 13–16): stay of proceedings; adverse costs orders; non-compliance considered on costs allocation; refusal to engage in ADR a cost-relevant factor.

Notes: insurer-driven claims often run as subrogated proceedings in the policyholder's name; insurers are bound by the same protocol expectations. Highway-authority claims (s.41) — dedicated claims teams; s.58 defence dominates. Party Wall disputes — the s.10 surveyor procedure is the proper route for notifiable works; court is a last-resort appeal route.`,
  tags: ['pre-action-conduct', 'PD-pre-action', 'property-damage', 'letter-before-claim', 'ADR'],
};

export default doc;
