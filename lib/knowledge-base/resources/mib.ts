import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-mib',
  type: 'resource',
  category: 'motor-accident',
  title: 'Motor Insurers\' Bureau (MIB)',
  jurisdiction: 'england-wales',
  url: 'https://www.mib.org.uk',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['references'],
  factSummary:
    'The Motor Insurers\' Bureau is the body that compensates victims of uninsured and untraced drivers in the UK. It also operates the Motor Insurance Database (askMID.com) where the public can verify whether a vehicle is insured.',
  content: `The Motor Insurers' Bureau (MIB) (https://www.mib.org.uk) is a private body funded by levy on motor insurers. It backstops the compulsory third-party motor insurance regime under Part VI of the Road Traffic Act 1988 by compensating victims of:

- Uninsured drivers (Uninsured Drivers' Agreement, UDA).
- Untraced / hit-and-run drivers (Untraced Drivers' Agreement, UTA).
- Foreign-registered vehicles in some scenarios (via Green Card / EU bureau system arrangements).

Key services and pages:

- Make a claim — online claim portal for UDA and UTA claims, with separate forms for personal injury and property damage.
- Time limits — strict deadlines apply. UDA: notify within 14 days of issuing proceedings (current practice; check the live Agreement). UTA: 9 months for property damage; longer for PI. Late notification can forfeit the claim.
- Eligibility guides — explanations of who qualifies, exclusions (knowingly uninsured / stolen vehicle, etc.), and excess.
- askMID.com — Motor Insurance Database lookup. The public can check (with the registration plate, owner consent in some cases, and a small fee for some queries) whether a vehicle has insurance in force.
- Stolen and recovered vehicle data.

The MIB website is the primary reference for current versions of the UDA and UTA, current excess amounts, and current property-damage compensation caps. Always check the live Agreement before pleading or correspondence.

Limitations:

- The MIB is a payer of last resort. Where the at-fault driver is identified and insured (even if the insurer disputes coverage), the right route is s.151 RTA 1988 against the insurer, not the MIB.
- Property damage under the UTA carries a £300 excess and is only available where personal injury was also caused by the unidentified driver.
- The MIB has internal review and arbitration processes for disputed decisions; judicial review is technically available but rare.`,
  tags: ['MIB', 'motor-insurers-bureau', 'uninsured', 'untraced', 'askMID', 'compensation-of-last-resort'],
};

export default doc;
