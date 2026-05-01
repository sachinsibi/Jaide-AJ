import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-vicarious-liability-motor',
  type: 'concept',
  category: 'motor-accident',
  title: 'Vicarious Liability (employer / driver)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['employer', 'work vehicle', 'company car', 'driving for work', 'delivery driver', 'taxi', 'on duty'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'An employer is strictly liable for the torts of an employee committed in the course of employment. In motor cases, this is engaged where the at-fault driver was driving in the course of work duties (delivery, business travel, work-provided vehicle in work use). Two-stage test: (1) is the relationship one of employment or akin to employment? (2) is the tort sufficiently connected to the employment to make liability fair?',
  eli5Summary:
    'If a delivery driver hits your car while doing their job, you can claim against their employer (the company), not just the driver. The law makes employers responsible for what their staff do at work. This often matters because employers have insurance and money to pay compensation, where individual drivers may not.',
  content: `Vicarious Liability:

One person (typically the employer) is held liable for the tort of another (typically an employee) committed in the course of the relationship. It is strict — no fault on the employer's part is required.

Two-stage test (Various Claimants v Catholic Child Welfare Society [2012] UKSC 56; refined in WM Morrison Supermarkets [2020] UKSC 12):

Stage 1 — Relationship. Employment, or akin to employment? True self-employed independent contractors generally do not engage vicarious liability. The court weighs control, integration, mutuality of obligation, who supplies equipment, and risk allocation. Modern law extends to some quasi-employment (charity volunteers, certain gig-platform workers).

Stage 2 — Close connection (Lister v Hesley Hall [2002] 1 AC 215). Was the tort sufficiently connected with authorised activities to make liability fair and just? In course of employment, or merely on the occasion of it? A "frolic of one's own" breaks the chain.

Application in motor cases:

1. Engaged: employee driving employer's vehicle on company business (delivery, sales, site visits); employee driving own vehicle on authorised company business (mileage paid); company-provided vehicle within permitted use.

2. Not engaged: pure commuting (unless the journey is itself a work duty); personal frolics (substantial deviation); prohibited use (driving while suspended, racing, deliberate criminal use for personal motives).

3. Insurance: employers carry Employers' Liability insurance (ELCIA 1969) and motor insurance for vehicles they own/control. Where vicarious liability engages, the employer's motor policy responds — claimants benefit from larger cover.

4. Procedural: plead the employer alongside the driver in suspected work-duty cases. Disclosure of the employee's contract, work schedule, and telematics tests vicarious liability.

5. Distinct routes: a keeper who knowingly permits uninsured use may face civil liability or s.143 RTA 1988 criminal liability — separate from vicarious liability for torts.`,
  tags: ['vicarious-liability', 'employer-liability', 'course-of-employment', 'close-connection-test', 'akin-to-employment'],
};

export default doc;
