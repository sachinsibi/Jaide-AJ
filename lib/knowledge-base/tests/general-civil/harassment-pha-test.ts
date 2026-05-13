import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-harassment-pha-test',
  type: 'test',
  category: 'general-civil',
  title: 'Civil Remedy Test for Harassment-Like Conduct — Barbados',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['harassment', 'course of conduct', 'stalking', 'repeated', 'following me', 'pestering', 'repeatedly messaging', 'online harassment'],
  tabs: ['legalBreakdown'],
  factSummary:
    'The Protection from Harassment Act 1997 (England) does not apply in Barbados. Civil remedies for harassment-like conduct in Barbados are available through the common law and equity. Key elements: (1) a course of conduct on more than one occasion; (2) causing alarm or distress to the claimant; (3) the defendant knew or ought to have known their conduct was harmful. The High Court of Barbados can grant an injunction and award damages.',
  content: `The Protection from Harassment Act 1997 (England) does not apply in Barbados. Civil remedies for conduct amounting to harassment are nonetheless available in Barbados through common law and equitable principles. There is no confirmed specific Barbados harassment statute at the time of writing — laws.barbados.gov.bb should be consulted for any applicable Barbados legislation.

Element 1 — Course of conduct. A single incident, however distressing, is generally insufficient to found a civil harassment-type claim. The claimant must demonstrate repeated, targeted conduct — typically at least two related occasions. The occasions must be connected by a common purpose, target, or theme. Each further incident strengthens the claim and is relevant to the appropriate remedy and quantum.

Element 2 — Causing alarm or distress. The conduct must cause alarm, distress, or comparable harm to the claimant. Harassment encompasses bullying, stalking, repeated unwanted contact (by any medium), threatening communications, persistent social media posts, and unwanted physical approaches. The conduct must be oppressive and unacceptable judged objectively against the standard of a reasonable person. Normal social or professional interaction does not amount to civil harassment.

Element 3 — Knowledge or constructive knowledge. The defendant must have known, or a reasonable person in their position would have known, that the conduct caused or was likely to cause alarm or distress to the claimant. Ignorance of the law is no defence; the objective standard is applied.

Defence — reasonableness: a defendant may argue that their conduct was reasonable in the circumstances. However, relying on Hayes v Willoughby [2013] UKSC 17 (persuasive authority), a reasonableness defence requires a rational basis — irrational, obsessive, or disproportionate conduct cannot be characterised as reasonable even if the defendant sincerely believed in the legitimacy of their purpose.

Civil remedies available in Barbados:
- Injunction: the High Court of Barbados, exercising its equitable jurisdiction, can grant a prohibitory injunction restraining the defendant from continuing harassing conduct. An urgent without-notice application may be available where there is an immediate risk.
- Damages: a claimant who has suffered distress, anxiety, psychiatric harm, or financial loss as a result of harassing conduct may recover damages at common law. Damages for distress and anxiety are available without proof of a recognised psychiatric illness.

Criminal dimension: conduct amounting to harassment may also constitute a criminal offence under Barbados criminal law. Criminal proceedings are outside JAIDE's civil scope, but serious cases may warrant reporting to the Barbados Police Force.

Limitation: the applicable limitation period under Barbados law should be verified. For continuing conduct, each fresh act may give rise to a fresh cause of action within the limitation window.`,
  tags: ['harassment', 'civil-remedy', 'course-of-conduct', 'alarm-distress', 'injunction', 'Barbados', 'common-law'],
};

export default doc;
