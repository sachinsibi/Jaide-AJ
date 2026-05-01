import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-harassment-pha-test',
  type: 'test',
  category: 'general-civil',
  title: 'Harassment Test (Protection from Harassment Act 1997)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['harassment', 'course of conduct', 'stalking', 'repeated', 'following me', 'pestering', 'repeatedly messaging', 'online harassment'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Three-element civil test under PHA 1997: (1) course of conduct on at least two related occasions; (2) amounting to harassment (conduct associated with causing alarm or distress, oppressive and unacceptable by objective standard); (3) defendant knew or ought to have known it amounted to harassment. Remedies: damages (including anxiety) and injunction.',
  content: `Element 1 — Course of conduct on at least two occasions (s.7(3) PHA 1997). The occasions must be related — linked by a common purpose, target, or theme. No minimum gap between them is required. A single incident, however serious, does not satisfy this element. Each further occasion strengthens the claim and may go to quantum.

Element 2 — Amounts to harassment. Conduct associated with causing alarm or distress to the target. Harassment is not defined exhaustively; it encompasses bullying, stalking, repeated unwanted contact, threatening messages, persistent social media posts, and unwanted physical approaches. The conduct must be oppressive and unacceptable judged objectively. Normal social or professional contact does not amount to harassment.

Element 3 — Defendant knew or ought to have known the conduct amounted to harassment (s.1(1)(b) PHA 1997). Objective standard: a reasonable person in possession of the same information as the defendant would think the conduct amounted to harassment (s.1(2)). Ignorance of the law or subjective belief in a legitimate purpose is not a defence if the conduct was objectively harassing.

Defences (s.1(3)): (a) prevention or detection of crime; (b) conduct under legislative authority; (c) pursuit of the course of conduct was reasonable in the circumstances. Reasonableness requires a rational basis — irrational or obsessive grievance cannot be reasonable (Hayes v Willoughby [2013] UKSC 17).

Remedies (s.3 PHA 1997):
- Damages: including damages for anxiety, financial loss, and any distress caused. No need to prove recognised psychiatric injury — alarm and distress suffice.
- Injunction: restraining the defendant from conduct amounting to harassment. Breach of injunction is a criminal offence (s.3A) — unusually powerful enforcement.
- Interim injunction: available on an urgent basis, without notice, where there is an immediate risk of further harassment.

Limitation: 6 years from the last act of harassment (LA 1980 s.2).`,
  tags: ['harassment', 'PHA-1997', 'course-of-conduct', 'alarm-distress', 'injunction', 'civil-harassment'],
};

export default doc;
