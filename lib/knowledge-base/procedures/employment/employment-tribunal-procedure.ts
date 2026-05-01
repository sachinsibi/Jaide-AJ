import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-employment-tribunal',
  type: 'procedure',
  category: 'employment',
  title: 'Employment Tribunal Procedure',
  jurisdiction: 'england-wales',
  citation: 'Employment Tribunals Act 1996; Employment Tribunals Rules of Procedure 2013 (Sch.1 to SI 2013/1237)',
  url: 'https://www.gov.uk/employment-tribunals',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['employment'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'After ACAS Early Conciliation, claimant presents Form ET1 within the statutory time limit. Employer responds on Form ET3 within 28 days. Case management at preliminary hearing; full merits hearing 6–18 months later. Costs not normally awarded unless conduct unreasonable. No tribunal issue fee. Appeals to the Employment Appeal Tribunal on point of law.',
  content: `Employment Tribunal Procedure:

Stage 1 — ACAS EC. Mandatory pre-claim step (separate doc). Claimant must obtain an EC certificate and quote it on the ET1.

Stage 2 — Issue (Form ET1). The claim form sets out:
- Claimant and respondent details.
- Type of claim (unfair dismissal, discrimination, unpaid wages, etc.).
- Brief grounds — facts, dates, what the claimant says happened.
- Remedy sought.
- ACAS EC certificate number.

Time limits: 3 months less 1 day from the act complained of, paused during EC (s.207B ERA 1996).

No issue fee — fees were abolished in R (UNISON) v Lord Chancellor [2017] UKSC 51.

Stage 3 — Response (Form ET3). Respondent has 28 days from the date the ET1 was sent to file an ET3. Failure may result in default judgment.

Stage 4 — Preliminary hearing. Case management directions; possible determination of preliminary issues (e.g., jurisdiction, time limit, employee status); strike-out applications.

Stage 5 — Disclosure and witness statements. Standard disclosure of relevant documents; exchange of written witness statements.

Stage 6 — Full merits hearing. Tribunal composition:
- Employment Judge alone for most unfair dismissal and unauthorised deduction claims.
- Panel of three (Employment Judge + two lay members) for discrimination and certain other claims.

Hearings are typically held in person; remote/hybrid hearings increasingly common. No formal rules of evidence — fairness and relevance govern. Cross-examination of witnesses; opening / closing submissions.

Stage 7 — Judgment. Issued in writing, normally within weeks. Liability and remedy may be addressed together or at separate hearings.

Stage 8 — Remedy. For unfair dismissal:
- Reinstatement / re-engagement (rare in practice).
- Basic award (calculated like statutory redundancy pay).
- Compensatory award (loss of earnings to date and future loss, capped at the lower of 12 months' pay or the statutory cap, reviewed annually).
- ACAS Code uplift / reduction (up to ±25%).
- Polkey reduction (0–100%).
- Contributory fault reduction (s.123(6) ERA 1996).

For discrimination: uncapped — Vento bands + financial loss + aggravated damages.

Stage 9 — Costs. Unlike civil courts, Employment Tribunals do not award costs as a default. Costs may be awarded only where a party has acted vexatiously, abusively, disruptively, or otherwise unreasonably (Rule 76).

Stage 10 — Appeal. To the Employment Appeal Tribunal (EAT) within 42 days. Limited to errors of law. Onward appeal to Court of Appeal and (rarely) Supreme Court.`,
  tags: ['Employment-Tribunal', 'ET1', 'ET3', 'ET-procedure', 'no-fees', 'EAT-appeal', 'remedy'],
};

export default doc;
