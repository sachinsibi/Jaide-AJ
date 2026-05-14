import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-barbados-uninsured-driver-claim',
  type: 'procedure',
  category: 'motor-accident',
  title: 'Claims Against Uninsured or Untraced Drivers in Barbados',
  jurisdiction: 'barbados',
  citation: 'Motor Vehicles Insurance (Third-Party Risks) Act, Cap. 166 (Barbados)',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['uninsured', 'untraced', 'no insurance', 'hit and run', 'fled the scene', 'unidentified driver'],
  tabs: ['legalBreakdown', 'references'],
  factSummary:
    'Barbados does not operate a compensation fund equivalent to the Motor Insurers\' Bureau (MIB) in the United Kingdom. Where the at-fault driver is uninsured or untraced, recovery depends on the civil courts and the practical recoverability from the at-fault driver directly. Compulsory insurance under Cap. 166 is meant to ensure an insurer is available in most cases.',
  content: `Claims where the at-fault driver is uninsured or untraced in Barbados

Compulsory insurance framework: Cap. 166 requires all motor vehicles used on public roads in Barbados to carry third-party liability insurance. In the majority of road traffic accidents, an at-fault driver should have insurance, and the claim is pursued through that insurer.

Where the at-fault driver is uninsured: Barbados does not have a statutory compensation fund equivalent to the Motor Insurers' Bureau (MIB) established in the United Kingdom. Where an at-fault driver is identified but uninsured, the claim is brought against that driver personally in the civil courts (Magistrates' Court for amounts up to $10,000 BBD, High Court for larger amounts). The practical enforceability of any judgment depends on the financial position of the uninsured driver.

Where the at-fault driver is untraced (hit-and-run): where the at-fault driver cannot be identified and there is no insurer to pursue, the civil courts cannot provide a remedy against an unknown party. In the absence of a statutory compensation fund in Barbados, a claimant in this situation may have limited practical options. The claimant's own comprehensive insurance policy, if held, may provide a route to claim for their own vehicle damage.

Steps where the at-fault driver is uninsured:
1. Confirm the position with the at-fault driver's insurer (if any documents were exchanged at the scene).
2. Report the matter to the police and obtain a police reference.
3. Consider whether the at-fault driver has any assets against which a judgment could be enforced.
4. Issue civil proceedings in the appropriate court and obtain judgment.
5. Enforce the judgment through available court mechanisms.

Own insurance: where the claimant holds a comprehensive policy covering their own vehicle, a claim under that policy may be the most practical route to recovery for vehicle damage, with the insurer potentially pursuing the at-fault driver in subrogation.`,
  tags: ['uninsured-driver', 'untraced-driver', 'hit-and-run', 'Cap-166', 'Barbados', 'civil-claim'],
};

export default doc;
