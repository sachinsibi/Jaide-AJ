import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-mvit-cap-166',
  type: 'statute',
  category: 'motor-accident',
  title: 'Motor Vehicles Insurance (Third-Party Risks) Act, Cap. 166 — Compulsory Third-Party Insurance',
  jurisdiction: 'barbados',
  citation: 'Motor Vehicles Insurance (Third-Party Risks) Act, Cap. 166',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['uninsured', 'no insurance', 'without insurance', 'insurance', 'third party', 'compulsory insurance'],
  tabs: ['overview', 'legalBreakdown', 'references'],
  factSummary:
    'Cap. 166 makes third-party liability insurance compulsory for motor vehicles used on public roads in Barbados. Every owner or user of a motor vehicle on a road is required to hold a policy that covers third-party liability for death, bodily injury, and property damage. The Act is administered and enforced under the broader motor licensing regime.',
  content: `The Motor Vehicles Insurance (Third-Party Risks) Act, Cap. 166 establishes the compulsory motor insurance framework in Barbados.

Compulsory cover: no person shall use, or cause or permit another to use, a motor vehicle on a road unless there is in force a policy of insurance covering third-party liability in respect of death, bodily injury to persons, and damage to third-party property arising from the use of that vehicle on a road.

Policy requirements: a compliant policy must be issued by an insurer authorised to carry on insurance business in Barbados under the Insurance Act, Cap. 310, and must cover at minimum the classes of third-party liability specified in Cap. 166.

Insurer obligations: where a judgment is obtained against an insured in respect of a liability required to be covered by Cap. 166, the insurer is generally required to satisfy that judgment to the extent it falls within the scope of compulsory cover, even if the insurer may have grounds to avoid the policy as against its own insured.

Interaction with Insurance Act Cap. 310: the insurance industry in Barbados is regulated by the Financial Services Commission under the Insurance Act, Cap. 310. The Commission's role is primarily supervisory and regulatory; it does not operate as an adjudicative complaints body akin to a financial ombudsman. Complaints about insurer conduct may be directed to the Commission, but the scope of that process differs materially from a formal dispute-resolution body.

Where an at-fault driver is uninsured: Cap. 166 does not establish a compensation fund equivalent to the Motor Insurers' Bureau in the United Kingdom. Where the at-fault driver is uninsured, recovery is generally pursued directly against that driver through the civil courts. Practical recoverability may depend on the financial position of the uninsured driver.`,
  eli5Summary:
    'In Barbados, every driver must have third-party insurance by law. This means if a driver causes an accident, their insurance covers the damage or injury to other people. If a driver has no insurance, the other party may still be able to claim, but they would need to pursue the uninsured driver directly through the courts.',
  tags: ['Cap-166', 'compulsory-insurance', 'third-party-liability', 'motor-insurance', 'Barbados'],
};

export default doc;
