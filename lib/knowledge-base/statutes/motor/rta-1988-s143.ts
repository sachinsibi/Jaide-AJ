import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-rta-1988-s143',
  type: 'statute',
  category: 'motor-accident',
  title: 'Road Traffic Act 1988, s.143 — Compulsory insurance offence',
  jurisdiction: 'england-wales',
  citation: 'Road Traffic Act 1988, ss.143 and 145',
  url: 'https://www.legislation.gov.uk/ukpga/1988/52/section/143',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['uninsured', 'no insurance', 'without insurance', 'lapsed insurance', 'mib', 'invalid insurance'],
  tabs: ['legalBreakdown', 'references'],
  factSummary:
    'It is a criminal offence to use, or to cause or permit another to use, a motor vehicle on a road or public place without a policy of insurance complying with the minimum requirements set by s.145 (third-party cover for death, personal injury, and damage to property up to at least £1,200,000).',
  content: `Section 143 of the Road Traffic Act 1988 makes it a criminal offence to use, or cause or permit another person to use, a motor vehicle on a road or public place without a policy of insurance (or security) in force complying with the requirements of Part VI of the Act.

Defence (s.143(3)): it is a defence for an employee charged under s.143 to prove that the vehicle did not belong to them, that they were not paying the cost of the insurance, that they were using the vehicle in the course of their employment, and that they neither knew nor had reason to believe insurance was not in force.

Penalty: summary conviction; fine up to level 5 on the standard scale; mandatory endorsement (6–8 penalty points) and discretionary disqualification (Sch.2 RTOA 1988). Police may seize and remove the vehicle (s.165A).

Section 145 — minimum policy requirements. To comply with Part VI a policy must:
(a) be issued by an authorised insurer;
(b) insure such persons or classes of person as specified in respect of liability that may be incurred to others in respect of the death of or bodily injury to any person, or damage to property, caused by, or arising out of, the use of the vehicle on a road or public place;
(c) cover at least £1,200,000 for damage to property arising out of any one accident, and (in respect of personal injury) cover liability without monetary limit.

Civil interaction:

1. Driving uninsured does not, of itself, prove negligence — civil liability still rests on breach of duty and causation. But it removes the principal route to recovery (the at-fault driver's insurer).

2. Where the at-fault driver is uninsured (or untraced), a victim may claim against the Motor Insurers' Bureau (MIB) under the Uninsured Drivers' Agreement or Untraced Drivers' Agreement. The MIB stands behind the compulsory insurance regime.

3. Where the policy is technically void (e.g., misrepresentation), s.151 RTA 1988 may still require the insurer to satisfy a third-party judgment.`,
  tags: ['RTA-1988', 'section-143', 'compulsory-insurance', 'section-145', 'minimum-cover', 'MIB'],
};

export default doc;
