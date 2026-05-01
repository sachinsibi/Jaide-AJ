import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-damages-civil',
  type: 'concept',
  category: 'general-civil',
  title: 'Damages in Civil Proceedings — types and structure',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['general-civil'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'Civil damages are compensatory — their purpose is to put the claimant in the position they would have been in had the wrong not occurred. Categories: general damages (non-pecuniary, assessed by the court), special damages (quantified pecuniary loss), aggravated damages (where defendant\'s conduct was oppressive), exemplary damages (Rookes v Barnard categories only, rare), nominal damages (vindication), and user damages (unauthorised use).',
  eli5Summary:
    'When you win a civil case, the court usually awards you money to put you back to where you were before. This covers things you can calculate exactly (like repair bills) and things the court has to estimate (like distress or loss of reputation). In some cases where the other side behaved particularly badly, the court can add extra to punish them — but this is rare.',
  content: `Compensatory principle (Livingstone v Rawyards Coal Co (1880) 5 App Cas 25): damages aim to put the claimant in the position they would have been in had the wrong not occurred, so far as money can do it.

General damages: losses without a precise monetary value, assessed by the court by reference to comparable awards. Includes: physical pain and suffering; psychiatric injury; distress, anxiety, and injured feelings (harassment, defamation, privacy); loss of reputation; loss of amenity; invasion of privacy (loss of control of information — Gulati v MGN [2015]).

Special damages: quantifiable pecuniary losses pleaded specifically and proved by evidence. Includes: repair costs; lost income; professional fees; replacement costs; medical expenses. Must be itemised and supported by receipts or expert evidence.

Aggravated damages: an additional compensatory sum where the defendant's conduct was high-handed, oppressive, insulting, or malicious, and this aggravated the claimant's distress. They are compensatory (not punitive) and add to general damages.

Exemplary (punitive) damages: available only in the Rookes v Barnard [1964] AC 1129 categories — (1) oppressive conduct by government servants; (2) conduct calculated to make a profit exceeding compensatory damages; (3) expressly authorised by statute. Rare. Punitive rather than compensatory.

Nominal damages: vindicate the claimant's right where the wrong is proved but no loss is suffered (e.g., trespass per se, breach of privacy where information not yet published).

User damages: the reasonable fee that would have been payable for the defendant's unauthorised use (e.g., continued trespass, use of private information for commercial purposes).

Mitigation: the claimant must take reasonable steps to limit the loss. Failure to mitigate reduces the award to what a reasonable claimant would have suffered.

Interest: s.69 County Courts Act 1984 / s.35A Senior Courts Act 1981, at the court's discretion, typically 8% simple from the date of loss to judgment.`,
  tags: ['damages', 'general-damages', 'special-damages', 'aggravated-damages', 'exemplary-damages', 'nominal-damages', 'Rookes-v-Barnard'],
};

export default doc;
