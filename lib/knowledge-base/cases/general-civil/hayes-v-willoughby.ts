import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-hayes-v-willoughby',
  type: 'case',
  category: 'general-civil',
  title: 'Hayes v Willoughby [2013] UKSC 17',
  jurisdiction: 'england-wales',
  citation: '[2013] UKSC 17',
  url: 'https://www.bailii.org/uk/cases/UKSC/2013/17.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['harassment', 'course of conduct', 'stalking', 'repeated contact', 'repeatedly messaging', 'pestering'],
  tabs: ['legalBreakdown'],
  factSummary:
    'The Supreme Court held that the s.1(3)(c) PHA 1997 defence of "reasonable" course of conduct imports a rationality requirement. A defendant whose conduct is irrational or obsessive cannot rely on the reasonableness defence even if they subjectively believed they had a legitimate purpose.',
  content: `Facts: Willoughby (former employer) pursued Hayes (former employee) persistently with allegations of fraud, contacting multiple authorities and third parties over many years. Hayes sought an injunction. Willoughby argued his conduct was reasonable because he genuinely believed Hayes was guilty of fraud.

Held (Lord Sumption): the s.1(3)(c) reasonableness defence requires that the course of conduct was rational, not merely sincere. A person who has lost the ability to make a dispassionate judgment about whether their conduct is reasonable — because of obsession, fixation, or irrational grievance — cannot rely on the defence.

Key principles:

1. Rationality requirement: the court asks not merely whether the defendant subjectively believed their conduct was reasonable, but whether there was a rational basis for that belief. Irrational or obsessive pursuit of a grievance cannot be reasonable.

2. Objective standard: s.1(2) already requires an objective assessment ("ought to know" test). The reasonableness defence mirrors this — the reasonableness is judged objectively, not by what the defendant believed.

3. Proportionality: even where an initial concern was legitimate, the manner and persistence of the conduct can become disproportionate and therefore unreasonable.

4. Sincere belief is insufficient: the defendant's good faith in pursuing the course of conduct is relevant to the court's assessment but does not by itself make the conduct reasonable.

Application: where a defendant persists in contacting a claimant, their employer, regulatory bodies, and third parties despite multiple complaints and requests to stop, the defence of reasonableness is unlikely to succeed. The pattern of conduct itself evidences irrationality.

Significance for online harassment: where a defendant sends repeated messages, posts, or complaints claiming a legitimate grievance, Hayes v Willoughby provides the legal basis for holding the conduct unreasonable and irrational.`,
  tags: ['harassment', 'PHA-1997', 'reasonableness-defence', 'course-of-conduct', 'Hayes-v-Willoughby'],
};

export default doc;
