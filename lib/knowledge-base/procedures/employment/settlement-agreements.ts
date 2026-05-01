import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-settlement-agreements',
  type: 'procedure',
  category: 'employment',
  title: 'Settlement Agreements (s.203 ERA 1996)',
  jurisdiction: 'england-wales',
  citation: 'Employment Rights Act 1996, s.203(3); Equality Act 2010, s.147',
  url: 'https://www.acas.org.uk/settlement-agreements',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['settlement agreement', 'compromise agreement', 'pilon', 'severance', 'exit package', 'protected conversation', 'without prejudice'],
  tabs: ['legalBreakdown'],
  factSummary:
    'A settlement agreement is a written, legally binding contract waiving employment claims in exchange for consideration (usually a lump sum and/or a reference). To validly waive statutory employment rights it must comply with s.203(3) ERA 1996 / s.147 EA 2010: in writing; relate to the particular complaint; the employee must have received independent legal advice from a relevant adviser with insurance; the adviser is identified; and it states the statutory conditions are satisfied.',
  content: `Settlement Agreements (formerly "compromise agreements"):

Statutory waiver requirements (s.203(3) ERA 1996; mirrored in s.147 EA 2010 for discrimination claims):

(a) The agreement must be in writing.

(b) It must relate to the particular complaint or proceedings — generic waivers are ineffective.

(c) The employee must have received independent legal advice from a "relevant independent adviser" — typically a solicitor, but barristers, certified trade-union officials, and certain advice-centre workers also qualify.

(d) The adviser must be identified in the agreement.

(e) The adviser must hold professional-indemnity insurance covering the advice given.

(f) The agreement must state that the conditions regulating settlement agreements are satisfied.

Failure on any element renders the waiver of statutory rights void, even if the contract is otherwise binding under common law.

Practical structure of a typical settlement agreement:

- Termination date / agreed reason.
- Payment in lieu of notice (PILON), holiday accrued, contractual notice.
- Ex-gratia / compensation payment (the first £30,000 of a true compensation payment for loss of employment is tax-free under s.401 ITEPA 2003, subject to PENP rules).
- Schedule of waived claims (specific, including the relevant statute / cause).
- Any agreed reference (often appended).
- Confidentiality / non-disparagement clauses (subject to whistleblowing protections).
- Restrictive covenants (post-termination restrictions) — re-affirmation or new.
- Return of property / accounts.
- Tax indemnities.
- Adviser's certificate signed by the legal adviser.

Employer typically contributes £350–£750 + VAT toward the employee's legal advice cost.

Pre-termination / "protected conversation" (s.111A ERA 1996):

An employer can hold a "protected conversation" with an employee about a settlement, and the conversation is generally inadmissible in unfair-dismissal proceedings. Protection does NOT extend to:
(a) discrimination claims (still admissible);
(b) automatically-unfair dismissal (whistleblowing etc.);
(c) "improper behaviour" (undue pressure; threats to dismiss without process).

Without prejudice rule (common law): communications genuinely aimed at settlement are inadmissible regardless of s.111A, where there is an existing dispute.

Strategic note: settlement agreements are very common in employment — most disputes settle without ever reaching ET. Employees should not sign without taking the funded independent advice; the adviser will scrutinise the financial offer, the waived claims, the reference, and the restrictive covenants.`,
  tags: ['settlement-agreement', 'compromise-agreement', 'ERA-section-203', 'protected-conversation', 's111A', 'PILON', 'tax-treatment'],
};

export default doc;
