import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-mib',
  type: 'resource',
  category: 'motor-accident',
  title: 'No Motor Insurers\' Bureau Equivalent in Barbados',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['references'],
  factSummary:
    'Barbados does not have a Motor Insurers\' Bureau or equivalent compensation fund for victims of uninsured or untraced drivers. Where the at-fault driver is uninsured, recovery is pursued directly against that driver through the civil courts.',
  content: `Barbados does not operate a statutory compensation fund equivalent to the Motor Insurers' Bureau (MIB) in the United Kingdom. There is no backstop fund that compensates victims of uninsured or untraced drivers as a matter of public scheme.

Where the at-fault driver is uninsured: the claimant's recourse is a direct civil claim against the at-fault driver personally in the Magistrates' Court or High Court of Barbados depending on the amount claimed. Practical recoverability depends on the financial position of the uninsured driver.

Where own comprehensive cover exists: a party with comprehensive motor insurance may claim on their own policy for vehicle damage, with the insurer seeking to recover from the at-fault driver in subrogation.

The Financial Services Commission of Barbados regulates the insurance sector but does not operate a compensation fund of this type.`,
  tags: ['no-MIB', 'uninsured', 'Barbados', 'motor-accident', 'compensation'],
};

export default doc;
