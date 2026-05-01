import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-protection-from-harassment-act-1997',
  type: 'statute',
  category: 'general-civil',
  title: 'Protection from Harassment Act 1997 — civil cause of action',
  jurisdiction: 'england-wales',
  citation: 'Protection from Harassment Act 1997, ss.1, 3, 3A, 7',
  url: 'https://www.legislation.gov.uk/ukpga/1997/40/contents',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['harassment', 'stalking', 'course of conduct', 'pestering', 'following me', 'repeatedly contacting', 'repeated messages', 'online harassment'],
  tabs: ['overview', 'legalBreakdown', 'references'],
  factSummary:
    'The Protection from Harassment Act 1997 creates a civil cause of action (s.3) allowing claimants to obtain damages (including for anxiety) and an injunction. The tort requires a "course of conduct" — at least two related occasions — which the defendant knew or ought to have known amounts to harassment.',
  content: `s.1(1) — Prohibition: a person must not pursue a course of conduct which amounts to harassment of another, and which they know or ought to know amounts to harassment.

s.1(2) — Objective standard: the defendant "ought to know" if a reasonable person in possession of the same information would think the course of conduct amounted to harassment.

s.7(3) — Course of conduct: conduct on at least two occasions. The occasions must be related. No minimum time gap between them is specified. A single incident, however distressing, is not sufficient.

s.7(4) — "Harassment" includes alarming the person or causing them distress. The conduct must be oppressive and unacceptable by an objective standard.

s.3 — Civil remedy: the claimant may bring civil proceedings seeking: (a) damages, including for anxiety caused by the harassment and any financial loss; (b) an injunction restraining the defendant from conduct that amounts to harassment.

s.3A — Breach of injunction: a criminal offence, punishable by up to 5 years' imprisonment (indictment). This makes a civil injunction unusually powerful.

Defences (s.1(3)): (a) preventing or detecting crime; (b) pursued under any enactment or rule of law; (c) pursuit of the course of conduct was reasonable in the particular circumstances.

Reasonableness: Hayes v Willoughby [2013] UKSC 17 — the defendant must have a rational basis for the belief that their conduct was reasonable; irrational or obsessive conduct cannot be "reasonable" under s.1(3)(c).

Interim injunctions: available urgently, including without notice to the defendant, where there is an immediate risk of further harassment.

Limitation: 6 years from the last act of harassment (LA 1980 s.2).

Workplace harassment: vicarious liability applies — employers may be liable for harassment by employees (Majrowski v Guy's and St Thomas's NHS Trust [2006] UKHL 34).

Damages: anxiety and distress are recoverable without proof of a recognised psychiatric illness.`,
  tags: ['harassment', 'PHA-1997', 'course-of-conduct', 'injunction', 'civil-remedy', 'stalking'],
};

export default doc;
