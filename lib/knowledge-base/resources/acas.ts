import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-acas',
  type: 'resource',
  category: 'employment',
  title: 'ACAS — Advisory, Conciliation and Arbitration Service',
  jurisdiction: 'england-wales',
  url: 'https://www.acas.org.uk',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['employment'],
  tabs: ['references'],
  factSummary:
    'ACAS is the independent statutory body for workplace dispute resolution. It provides free advice (helpline 0300 123 1100), the mandatory Early Conciliation service before any Employment Tribunal claim, the Code of Practice on Disciplinary and Grievance Procedures (uplift / reduction up to 25% on tribunal compensation), and a comprehensive online guidance library.',
  content: `ACAS (https://www.acas.org.uk) is the principal practical resource for employment law in England and Wales. It is funded by government as an independent statutory body and serves both employees and employers.

Key services:

- Helpline (0300 123 1100). Free, confidential phone advice for employees, employers, and HR. Open Mon–Fri (extended hours posted on the site).

- Early Conciliation. Mandatory pre-tribunal step (s.18A ETA 1996). Free, conciliated settlement attempts before any ET claim. Most claims settle at this stage.

- Code of Practice on Disciplinary and Grievance Procedures (2015). Statutory Code; failure to follow may result in up to 25% uplift / reduction in tribunal compensation under TULRCA 1992 s.207A. The Code sets the minimum standards for fair workplace procedures.

- Online guidance. Plain-English explainers of every major employment topic — dismissal, redundancy, discrimination, holiday pay, working time, family leave, settlement agreements, restructuring, formal disputes. Updated regularly.

- Templates and forms. Standardised letters, policies, and procedures used by tens of thousands of employers — particularly useful for small employers without HR support.

- Training. Paid training courses for HR / managers; some free online learning.

- Workplace mediation. Neutral mediator for ongoing employment disputes between named individuals (paid service) — alternative to disciplinary or formal grievance processes.

- Arbitration. The ACAS Arbitration Scheme provides a binding determination as an alternative to tribunal — relatively rare in practice.

Adjacent resources:

- gov.uk/employment-tribunals — for filing and managing tribunal claims.
- Equality and Human Rights Commission (equalityhumanrights.com) — for discrimination guidance.
- Working Families (workingfamilies.org.uk) — flexible-working and parental rights.
- Citizens Advice (citizensadvice.org.uk/work) — broader employee rights advice.
- Trade unions — for organised workplace representation.

ACAS does NOT enforce employment law — it conciliates. For a binding determination, claimants must use the Employment Tribunal (or, less commonly, ACAS arbitration). For statutory pay enforcement (NMW), HMRC enforces.

Strategic value: pursuing employment matters without engaging ACAS — both for advice and for Early Conciliation — is unusual and generally counter-productive. ACAS conciliation is free, neutral, and resolves the substantial majority of notifications without tribunal proceedings.`,
  tags: ['ACAS', 'Early-Conciliation', 'Code-of-Practice', 'helpline', 'workplace-mediation', 'employment-resource'],
};

export default doc;
