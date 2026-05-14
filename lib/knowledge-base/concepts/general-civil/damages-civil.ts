import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-damages-civil',
  type: 'concept',
  category: 'general-civil',
  title: 'Damages in Civil Proceedings — types and structure',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['general-civil'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'Civil damages in Barbados are compensatory — their purpose is to put the claimant in the position they would have been in had the wrong not occurred. Categories include: general damages (non-pecuniary harm assessed by the court), special damages (quantified pecuniary loss), aggravated damages (where the defendant\'s conduct was particularly oppressive), and in rare cases exemplary/punitive damages. All are available from the High Court of Barbados; Magistrates\' Court jurisdiction is limited to monetary claims up to $10,000 BBD.',
  eli5Summary:
    'When a claimant wins a civil case in Barbados, the court usually awards money to put them back to where they were before the harm. This covers things that can be calculated exactly (like repair bills or lost income) and things the court has to estimate (like distress or damage to reputation). In some cases where the other side behaved particularly badly, an extra amount may be awarded — but this is rare.',
  content: `Compensatory principle: the fundamental purpose of civil damages in common law — including in Barbados — is to put the claimant in the position they would have been in had the wrong not occurred, so far as money can achieve this.

General damages: losses without a precise monetary value, assessed by the court by reference to the facts and comparable awards. Includes: distress, anxiety, and injured feelings (relevant in harassment, defamation, and privacy claims); loss of reputation; invasion of privacy (loss of control of private information); psychiatric harm (where proved). Assessed by the court in its discretion.

Special damages: quantifiable pecuniary losses that must be specifically pleaded and proved by evidence. Includes: repair costs; lost income and earnings; professional fees incurred; replacement costs; medical and treatment expenses. These must be itemised in the claim and supported by receipts or expert evidence where required.

Aggravated damages: an additional compensatory sum available where the defendant's conduct was high-handed, oppressive, malicious, or insulting, and where this conduct aggravated the claimant's distress beyond the ordinary harm of the wrong. Aggravated damages are compensatory in nature — they are not a separate punishment but reflect the additional harm caused by the manner of the defendant's conduct.

Exemplary (punitive) damages: available in narrow categories only, at common law — primarily where the defendant's conduct was calculated to make a profit exceeding any compensatory damages, or where it constituted oppressive abuse by governmental authority. These are exceptional and punitive in character, going beyond compensation.

Nominal damages: available to vindicate the claimant's legal right where the wrong is proved but no substantial loss is suffered (for example, in trespass per se or breach of a legal right without consequential harm).

Mitigation: the claimant is under a duty to take reasonable steps to limit their loss. Failure to mitigate may reduce the award to the amount a claimant acting reasonably would have suffered.

Currency: damages in Barbados civil proceedings are expressed in Barbados Dollars (BBD). The BBD is pegged at approximately 2:1 to the US Dollar.

Forum: the Magistrates' Court of Barbados handles civil money claims up to $10,000 BBD (Cap. 116A). Claims above $10,000 BBD are brought in the High Court of Barbados (Cap. 117). The High Court has jurisdiction for all civil claims including those involving injunctions or complex legal issues.

Interest: the court has discretion to award interest on damages for the period between the date of loss and the date of judgment. The applicable rate and rules should be verified under Barbados civil procedure.`,
  tags: ['damages', 'general-damages', 'special-damages', 'aggravated-damages', 'compensatory', 'Barbados', 'common-law'],
};

export default doc;
