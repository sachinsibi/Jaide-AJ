import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-misuse-private-information-test',
  type: 'test',
  category: 'general-civil',
  title: 'Misuse of Private Information Test',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['privacy', 'private information', 'photos', 'personal information shared', 'misuse of private information', 'photographs published', 'data shared', 'image shared'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Two-stage test from Campbell v MGN [2004] UKHL 22: (1) does the claimant have a reasonable expectation of privacy in the information? (2) does that expectation outweigh the defendant\'s Article 10 right to freedom of expression? Damages include distress for the intrusion, distress for publication, and loss of control of private information (Gulati [2015]).',
  content: `Stage 1 — Reasonable expectation of privacy (Campbell v MGN [2004] UKHL 22).

Objective test: would a reasonable person in the claimant's position expect the information to be private in this context?

Categories of information typically engaging a reasonable expectation: medical and health information; sexual behaviour or orientation; personal relationships; location and movements in private contexts; financial details; communications shared in confidence; images taken without consent in private or sensitive situations.

Relevant factors: the nature and sensitivity of the information; the context in which it was shared or obtained; whether the claimant voluntarily made similar information public; the claimant's status (public figures retain a private sphere for matters outside their public role).

Stage 2 — Balancing Article 8 (privacy) against Article 10 (freedom of expression).

Neither right is presumptively stronger (Re S [2004] UKHL 47). The court weighs: the gravity of the interference with privacy; the purpose of publication (public interest vs prurience); whether the information is already in the public domain; the contribution to a debate of general public interest; the likely consequences of disclosure.

Journalism / public interest: responsible journalism on matters of genuine public concern may justify publication even of private information. The defendant must show the public interest is genuine and the intrusion proportionate (s.4 DA 2013 by analogy; Reynolds factors).

Remedies: damages for (a) distress from the intrusion; (b) distress from publication; (c) loss of control of the information as a freestanding head (Gulati v MGN [2015] EWCA Civ 1291). Injunction (including urgent without-notice) to prevent publication or compel removal. Account of profits.

Distinguished from defamation: defamation concerns false statements. Misuse of private information concerns true private information disclosed without consent.

Limitation: 6 years from publication / disclosure (LA 1980 s.2).`,
  tags: ['misuse-of-private-information', 'reasonable-expectation-of-privacy', 'Article-8', 'Article-10', 'Campbell', 'privacy-test'],
};

export default doc;
