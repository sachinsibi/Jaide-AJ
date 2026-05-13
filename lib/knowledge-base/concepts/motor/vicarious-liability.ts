import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-vicarious-liability-motor',
  type: 'concept',
  category: 'motor-accident',
  title: 'Vicarious Liability (employer / driver)',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['employer', 'work vehicle', 'company car', 'driving for work', 'delivery driver', 'taxi', 'on duty'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'In Barbados, an employer may be strictly liable for the torts of an employee committed in the course of employment. In motor cases, this is engaged where the at-fault driver was driving in the course of work duties. Two-stage inquiry: (1) is the relationship one of employment or akin to employment? (2) is the tort sufficiently connected to the employment? These principles apply in Barbados as inherited common law.',
  eli5Summary:
    'If a delivery driver hits your car while doing their job, a claim may be brought against their employer (the company) as well as the driver. The law makes employers responsible for what their staff do at work. This often matters because employers typically have insurance and resources, where individual drivers may not.',
  content: `Vicarious Liability in Barbados Motor Claims

As a Commonwealth jurisdiction, Barbados applies the common law principles of vicarious liability. One person (typically the employer) may be held liable for the tort of another (typically an employee) committed in the course of the employment relationship. Liability is strict — no personal fault on the employer's part is required.

Two-stage inquiry (derived from principles articulated in Various Claimants v Catholic Child Welfare Society [2012] UKSC 56 and subsequent UK Supreme Court decisions — persuasive authority in Barbados):

Stage 1 — Relationship. Is the relationship one of employment, or sufficiently akin to employment? A true independent contractor generally does not engage vicarious liability. The court weighs factors including: control, integration into the business, the mutual obligations between the parties, who supplies equipment, and how risk is allocated.

Stage 2 — Sufficient connection. Was the tort sufficiently connected with the authorised activities of the employment to make it just and fair to impose liability? Conduct in the course of employment engages liability; a "frolic of one's own" — conduct purely for the employee's personal purposes and substantially outside the work context — generally does not.

Application in Barbados motor accident cases:

1. Engaged — employer liable: employee driving the employer's vehicle on company business (deliveries, sales calls, site visits); employee driving their own vehicle on authorised company business; company-owned vehicle in use within its authorised scope.

2. Not engaged — employer generally not liable: pure commuting to and from work (unless the journey is itself a work duty); substantial personal deviation from an authorised route; use of a vehicle in a way expressly prohibited by the employer.

3. Insurance relevance: employers in Barbados are required under applicable law to carry certain insurance. Where vicarious liability is established, the employer's insurance may respond, making the claim practically more recoverable.

4. Procedural approach: where the at-fault driver may have been acting in the course of employment at the time of the accident, the employer should be identified and considered as a potential defendant or co-defendant. Evidence of the driver's employment, work schedule, and the purpose of the journey is relevant.

5. Keeper liability: where the registered owner of a vehicle permitted another to use it in circumstances where the owner knew or ought to have known that the user was unlicensed or uninsured, additional civil liability may arise. Barbados road traffic and insurance legislation governs the specific obligations — consult the relevant provisions under Cap. 166 and Cap. 295.`,
  tags: ['vicarious-liability', 'employer-liability', 'course-of-employment', 'close-connection', 'Barbados'],
};

export default doc;
