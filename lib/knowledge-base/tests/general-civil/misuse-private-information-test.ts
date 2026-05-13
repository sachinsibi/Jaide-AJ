import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-misuse-private-information-test',
  type: 'test',
  category: 'general-civil',
  title: 'Misuse of Private Information Test — Barbados',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['privacy', 'private information', 'photos', 'personal information shared', 'misuse of private information', 'photographs published', 'data shared', 'image shared'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Misuse of private information is a civil claim rooted in the common law and equity, applicable in Barbados as a Commonwealth jurisdiction. The two-stage test from Campbell v MGN [2004] UKHL 22 (persuasive authority): (1) does the claimant have a reasonable expectation of privacy in the information? (2) does that expectation outweigh the defendant\'s interest in the information being disclosed or used? Remedies include damages (including for distress and loss of control) and injunction.',
  content: `Misuse of private information is a recognised civil cause of action under the common law and equity, applicable in Barbados as a Commonwealth jurisdiction. It is not dependent on any specific English statute; the claim derives from the equitable duty of confidence and the common law protection of private information developed in cases such as Campbell v MGN [2004] UKHL 22 (persuasive authority).

Stage 1 — Reasonable expectation of privacy.

Objective test: would a reasonable person in the claimant's position expect the information to be private in the context in which it was shared or obtained?

Categories of information typically engaging a reasonable expectation: medical and health information; sexual behaviour or orientation; personal relationships and family matters; location and movements in genuinely private contexts; financial details; communications shared in confidence; images taken without consent in private or sensitive situations.

Relevant factors: the nature and sensitivity of the information; the context in which it was shared or obtained (information shared in confidence in a professional relationship carries a strong expectation); whether the claimant voluntarily made comparable information public; the claimant's status (public figures retain a private sphere for matters outside their public role and do not surrender all privacy by entering public life).

Stage 2 — Balancing the claimant's privacy interest against the defendant's interest in disclosure.

Neither privacy nor freedom of expression is automatically superior. The court weighs: the gravity of the interference with privacy; the sensitivity of the information; the purpose for which the information was disclosed (public interest vs private gain or prurience); whether the information was already genuinely in the public domain; and the likely consequences of disclosure for the claimant.

Journalism and public interest: responsible communication on matters of genuine public concern may justify disclosure of information that would otherwise be private. The defendant must show that the public interest is genuine and that the intrusion was proportionate to that interest.

Remedies:
- Damages: following the framework in Gulati v MGN [2015] EWCA Civ 1291 (persuasive authority), damages are available under three heads — (a) distress caused by the intrusion; (b) distress caused by publication or threatened publication; (c) loss of control of private information as a freestanding head of damage. Financial loss is not a prerequisite.
- Injunction: the High Court of Barbados can grant a prohibitory injunction to prevent publication or further disclosure, or a mandatory injunction requiring deletion or removal. Urgent without-notice applications are available where there is an imminent risk of irreparable harm.

Distinguished from defamation: defamation concerns false statements that damage reputation. Misuse of private information concerns true private information disclosed or used without consent. Both may arise from the same publication.

Data protection: where personal data is involved, the Data Protection Act, 2019 (Barbados) may also be relevant and may provide an additional or parallel avenue for complaint or civil claim.

Limitation: the applicable limitation period under Barbados law should be verified. The general tort period is six years in most Commonwealth jurisdictions, running from the date of publication or disclosure.`,
  tags: ['misuse-of-private-information', 'reasonable-expectation-of-privacy', 'privacy', 'Campbell', 'Gulati', 'privacy-test', 'Barbados', 'common-law'],
};

export default doc;
