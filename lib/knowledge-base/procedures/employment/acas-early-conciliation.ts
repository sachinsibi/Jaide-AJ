import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-acas-early-conciliation',
  type: 'procedure',
  category: 'employment',
  title: 'ACAS Early Conciliation (mandatory pre-tribunal step)',
  jurisdiction: 'england-wales',
  citation: 'Employment Tribunals Act 1996, s.18A; Early Conciliation Rules of Procedure',
  url: 'https://www.acas.org.uk/early-conciliation',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['employment'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'Mandatory step before issuing an Employment Tribunal claim. Notify ACAS via the EC notification form; ACAS contacts the employer and attempts conciliated settlement. Period up to 6 weeks (extendable by 14 days). The limitation clock pauses during EC. ACAS issues a certificate enabling tribunal issue, whether or not settlement reached.',
  content: `ACAS Early Conciliation (EC) is a mandatory pre-claim step under s.18A Employment Tribunals Act 1996. A prospective claimant must notify ACAS before presenting a claim to the Employment Tribunal — failure to do so renders the claim inadmissible.

Process:

1. Notification. The prospective claimant submits an EC notification form (online at acas.org.uk, by post, or by phone). Free.

2. Conciliator allocated. ACAS allocates a conciliator within a few working days. The conciliator contacts the prospective respondent (the employer) to explain EC and gauge willingness to engage.

3. Conciliation period. Up to 6 weeks from the date of notification, extendable by 14 days where there is reasonable prospect of agreement and both parties consent.

4. Outcome:
   (a) Settlement reached — recorded on a COT3 agreement signed by both parties. The COT3 is a statutory binding settlement that prevents the claimant bringing tribunal proceedings on the same matter.
   (b) No settlement — ACAS issues an EC Certificate. The certificate carries a unique reference number. The claimant must include this number on the ET1 claim form.
   (c) Either party declines to engage — ACAS terminates and issues the certificate.

5. Limitation effect. The limitation period is paused during EC (the "stop the clock" rule under s.207B ERA 1996). Calculate as follows:
- Original limitation: 3 months less 1 day from the relevant act.
- Day A = the date EC notification was received by ACAS (clock stops).
- Day B = the date the EC certificate was deemed received (clock restarts).
- The claimant has at least one month from Day B to present the ET1, or the original limitation if longer.

Strategic considerations:

- Early Conciliation is non-binding — the conciliator does not advise on merits or impose settlement.
- Most settlements involve a financial payment plus an agreed reference and/or non-disparagement clause.
- COT3 settlements are confidential and generally cover all employment-tribunal claims arising from the matters notified — read the wording carefully.
- Solicitor representation is helpful but not required.
- If the employer refuses to engage, the claimant simply receives the certificate and proceeds to tribunal.

Cost: free to both parties. ACAS is funded by government as an independent statutory body.`,
  tags: ['ACAS', 'Early-Conciliation', 'EC-certificate', 'COT3', 'mandatory-pre-claim', 'limitation-pause'],
};

export default doc;
