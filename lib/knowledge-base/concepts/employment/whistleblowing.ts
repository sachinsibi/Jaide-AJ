import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-whistleblowing',
  type: 'concept',
  category: 'employment',
  title: 'Whistleblowing / Protected Disclosures (ERA 1996 Pt IVA)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['whistleblowing', 'whistleblower', 'protected disclosure', 'public interest', 'wrongdoing', 'pidoa', 'reported wrongdoing'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'Workers who make a "qualifying disclosure" of specified categories of wrongdoing in the public interest are protected from dismissal (automatically unfair under s.103A) and detriment short of dismissal (s.47B). No qualifying period; uncapped compensation. Disclosure must be in the public interest and reasonably believed to tend to show one of the listed types of wrongdoing.',
  eli5Summary:
    'If you raise concerns about something you reasonably believe is wrong — like illegal activity, danger to health and safety, or financial wrongdoing — and you do so in the public interest, the law protects you. Your employer cannot dismiss you, demote you, withhold opportunities, or otherwise punish you for blowing the whistle. There\'s no minimum service requirement, and compensation is not capped.',
  content: `Whistleblowing / Protected Disclosures (Employment Rights Act 1996 Pt IVA, inserted by the Public Interest Disclosure Act 1998):

A worker who makes a "qualifying disclosure" about wrongdoing is protected from:
- Dismissal (automatically unfair — s.103A ERA 1996); and
- Detriment short of dismissal (s.47B ERA 1996) — e.g., disciplinary action, demotion, denial of promotion, isolation, withholding training, performance management.

Elements of a qualifying disclosure (s.43B ERA 1996):

(1) Disclosure of information. Not a mere allegation or expression of concern; the worker must disclose facts.

(2) Reasonable belief. The worker must reasonably believe the disclosure tends to show one of the categories of wrongdoing.

(3) Public interest. The worker must reasonably believe the disclosure is made in the public interest. Personal grievances about the worker's own employment do not generally satisfy this — though a personal grievance can carry a public-interest element where it concerns wider issues (Chesterton Global v Nurmohamed [2017] EWCA Civ 979).

(4) Categories of wrongdoing (s.43B(1)):
(a) Criminal offence;
(b) Failure to comply with a legal obligation;
(c) Miscarriage of justice;
(d) Endangerment of health and safety;
(e) Damage to the environment;
(f) Deliberate concealment of any of the above.

Routes of disclosure (ss.43C–43H ERA 1996):

(a) Internal — to the employer or another responsible person — broadest protection.
(b) Legal adviser — protected.
(c) Prescribed regulator (e.g., FCA, HSE, ICO; full list at gov.uk/whistleblowing) — protected if the worker reasonably believes the matter is within that regulator's remit and the information is substantially true.
(d) Wider disclosure (e.g., to the press) — protected only in narrow circumstances: reasonable belief in truth, no personal gain, prior internal raising or victimisation feared, and the disclosure is reasonable in all the circumstances.

Tribunal claims: automatic unfair dismissal (s.103A) — no qualifying period, uncapped compensation. Detriment claim (s.47B) — covers detriment by employer or co-workers (Timis v Osipov [2018] EWCA Civ 2321).

Burden: claimant proves disclosure and detriment/dismissal; employer must show the disclosure was not the principal reason for the treatment.

Settlement: s.43J voids any term purporting to prevent a protected disclosure; settlement-agreement confidentiality clauses must carve out whistleblowing rights.

Best practice: document the disclosure (date, recipient, content, response); use internal channels first where safe; keep a personal copy of evidence.`,
  tags: ['whistleblowing', 'protected-disclosure', 'ERA-section-43B', 'PIDA-1998', 'public-interest', 'automatic-unfair-dismissal'],
};

export default doc;
