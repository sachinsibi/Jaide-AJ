import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-pd-pre-action-conduct-general-civil',
  type: 'procedure',
  category: 'general-civil',
  title: 'Practice Direction on Pre-Action Conduct (general civil claims)',
  jurisdiction: 'england-wales',
  citation: 'CPR Practice Direction on Pre-Action Conduct and Protocols',
  url: 'https://www.justice.gov.uk/courts/procedure-rules/civil/rules/pd_pre-action_conduct',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['general-civil'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'Most general civil claims (harassment, defamation, data protection, privacy) have no dedicated protocol — the general PD on Pre-Action Conduct applies. The claimant must send a letter before claim, consider ADR, and give the defendant a reasonable time to respond before issuing. Non-compliance is a costs and case-management risk.',
  content: `The general Practice Direction on Pre-Action Conduct and Protocols applies where no specific protocol exists for the type of claim.

Note: defamation has its own Pre-Action Protocol (PAP for Defamation) requiring a specified Letter of Claim and a 14-day response period. Harassment and data protection claims use the general PD.

Objectives (PD 3): understand the other party's position; consider settlement; consider ADR; reduce costs; support efficient litigation if unavoidable.

Required steps (PD 6):

1. Letter before claim. Sent by the claimant, setting out: parties; factual narrative; legal basis (cause of action, relevant statute); itemised loss and supporting evidence; remedy sought; a reasonable time to respond (14 days acknowledgment; 21–90 days substantive depending on complexity).

2. Defendant's response. Accepts or disputes; identifies contested issues; provides defendant's documents; makes any counter-offer.

3. ADR. The parties must consider alternative dispute resolution before issue. Refusal to engage, without good reason, is a costs risk: Halsey v Milton Keynes General NHS Trust [2004] EWCA Civ 576; PGF II SA v OMFS Co [2013] EWCA Civ 1288 — silence in the face of an ADR invitation is itself unreasonable refusal.

4. Stocktake before issue. Reassess whether the dispute can be resolved without litigation.

Defamation PAP specifics: the Letter of Claim must identify the words complained of; the meaning alleged; why they are defamatory; the harm caused; and what remedy is sought. The defendant has 14 days to respond with a Letter of Response.

Sanctions (PD 13–16): the court may stay proceedings to allow pre-action compliance; award adverse costs; reduce costs recovery. Unreasonable refusal to engage in ADR is a standalone costs factor even on a successful claim.`,
  tags: ['pre-action-conduct', 'PD-pre-action', 'letter-before-claim', 'ADR', 'general-civil'],
};

export default doc;
