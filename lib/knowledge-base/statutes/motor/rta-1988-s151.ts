import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-rta-1988-s151',
  type: 'statute',
  category: 'motor-accident',
  title: 'Road Traffic Act 1988, s.151 — Insurer\'s duty to satisfy third-party judgments',
  jurisdiction: 'england-wales',
  citation: 'Road Traffic Act 1988, ss.151–152',
  url: 'https://www.legislation.gov.uk/ukpga/1988/52/section/151',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['insurer dispute', 'insurer refused', 'policy void', 'misrepresentation', 'third party rights', 'judgment'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Where a third-party judgment is obtained against an insured driver in respect of a liability required to be covered by a s.145 policy, the insurer must pay the judgment to the third party — even where the insurer would otherwise be entitled to avoid the policy against its own insured (e.g., for misrepresentation), subject only to specified statutory exclusions.',
  content: `Section 151 Road Traffic Act 1988 protects the third-party victim of a road traffic accident against the consequences of disputes between the at-fault driver and their insurer.

Trigger: a judgment obtained against any person in respect of a liability that is required to be covered by a policy of insurance under s.145 (compulsory third-party cover).

Insurer's obligation (s.151(5)): the insurer must pay to the person in whose favour the judgment was given:

(a) any sum payable under the judgment in respect of the liability, including any sum awarded by way of interest on that sum; and

(b) any amount payable in respect of costs.

This obligation arises notwithstanding that the insurer may be entitled to avoid or cancel, or may have avoided or cancelled, the policy as against its own insured (e.g., on grounds of material non-disclosure or misrepresentation under the Consumer Insurance (Disclosure and Representations) Act 2012, or breach of policy condition).

Statutory exclusions to s.151 obligation (s.151(2)–(4)):

- The judgment must relate to a liability the policy was required to cover. Excluded use cases (private vehicle used commercially, deliberate criminal use, etc.) may fall outside.
- The third party must have given the insurer notice of the proceedings before or within 7 days of issue (s.152(1)(a)).
- The judgment must not have been wholly satisfied within 7 days of being given.
- Proceedings to recover the sum must be commenced within the time prescribed.

Recovery (s.151(8)): where the insurer pays under s.151 in circumstances where it would have been entitled to avoid the policy against its insured, it may recover the amount from the insured.

Notification trap: a third-party claimant who fails to notify the insurer within 7 days of issuing proceedings against the at-fault driver may forfeit the s.151 protection. Pre-action correspondence to the insurer is essential and should be confirmed in writing.

Where the at-fault driver is uninsured outright, s.151 has no insurer to bind; recovery is via the Motor Insurers' Bureau (Uninsured Drivers' Agreement).`,
  tags: ['RTA-1988', 'section-151', 'third-party-rights', 'insurer-obligation', 'judgment-satisfaction'],
};

export default doc;
