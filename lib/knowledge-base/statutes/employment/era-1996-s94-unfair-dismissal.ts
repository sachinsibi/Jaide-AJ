import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-era-1996-s94',
  type: 'statute',
  category: 'employment',
  title: 'Employment Rights Act 1996, s.94 — Right not to be unfairly dismissed',
  jurisdiction: 'england-wales',
  citation: 'Employment Rights Act 1996, s.94',
  url: 'https://www.legislation.gov.uk/ukpga/1996/18/section/94',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['employment'],
  tabs: ['overview', 'legalBreakdown', 'eli5', 'references'],
  factSummary:
    'Section 94 ERA 1996 confers on employees the right not to be unfairly dismissed by their employer. The right normally requires 2 years\' continuous service (s.108) — but several "automatically unfair" categories (whistleblowing, trade-union activity, pregnancy, asserting a statutory right) attract day-one protection regardless of service.',
  eli5Summary:
    'In England and Wales, once you have worked somewhere for two years, your employer cannot just fire you on a whim. They need a real reason and they must follow a fair process. For some types of unfair treatment — for example whistleblowing or being sacked while pregnant — you are protected from day one of the job, with no two-year qualifying period.',
  content: `Section 94 Employment Rights Act 1996 is the foundation of unfair-dismissal law in England and Wales:

"An employee has the right not to be unfairly dismissed by his employer."

Eligibility:

1. Employee status. The right belongs to "employees" (defined s.230(1) ERA 1996), not to genuine self-employed contractors. Disputed status is decided by the multi-factor test (Ready Mixed Concrete v Minister of Pensions [1968] 2 QB 497; Pimlico Plumbers v Smith [2018] UKSC 29).

2. Two years' continuous service. Section 108 ERA 1996 requires two years' continuous employment as the qualifying period for the ordinary right not to be unfairly dismissed.

3. Day-one protection — automatically unfair categories. Section 108 does NOT apply where the dismissal is "automatically unfair." These categories require no qualifying period:

(a) Pregnancy or maternity leave (s.99).
(b) Health and safety reasons (s.100).
(c) Working time rights (s.101A).
(d) Trade union membership / activity (s.152 TULRCA 1992).
(e) Whistleblowing / protected disclosures (s.103A; ERA 1996 Pt IVA).
(f) Asserting a statutory right (s.104).
(g) Family leave (s.99 — paternity, adoption, parental, dependants).
(h) Jury service (s.98B).
(i) Pension auto-enrolment (s.104D).

For "automatically unfair" reasons, the dismissal is unfair without need to consider the s.98(4) reasonableness test.

What counts as "dismissal" (s.95 ERA 1996):

(a) Termination by the employer with or without notice.
(b) Expiry of a fixed-term contract not renewed.
(c) Constructive dismissal — where the employee resigns in response to the employer's repudiatory breach.

Time limit: claims must be presented to the Employment Tribunal within 3 months less 1 day of the effective date of termination (s.111 ERA 1996), subject to ACAS Early Conciliation extension. Extension beyond strict time limit only where not reasonably practicable (s.111(2)(b)) — narrow.

Remedies (s.112 onwards): reinstatement; re-engagement; compensation (basic award + compensatory award, statutory cap on the compensatory award reviewed annually).`,
  tags: ['ERA-1996', 'section-94', 'unfair-dismissal', 'two-year-qualifying-period', 'automatically-unfair'],
};

export default doc;
