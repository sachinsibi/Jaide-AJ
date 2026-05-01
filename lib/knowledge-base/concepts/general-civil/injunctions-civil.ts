import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-injunctions-civil',
  type: 'concept',
  category: 'general-civil',
  title: 'Injunctions in Civil Proceedings',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['injunction', 'court order', 'stop them', 'make them stop', 'restrain', 'want them to remove'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'An injunction is a court order requiring a person to stop doing something (prohibitory) or to do something (mandatory). Interim injunctions are available pending trial on the American Cyanamid test. Defamation injunctions face a very high pre-trial bar (Bonnard v Perryman). Harassment injunctions under PHA 1997 s.3 are breach-of-criminal-law-enforceable.',
  eli5Summary:
    'An injunction is a court order that tells someone to stop doing something (or to do something). If the other person ignores it, they can be held in contempt of court — and for harassment injunctions, it\'s also a criminal offence. You can ask the court for an urgent injunction even before the full case is heard, if you can show you\'re at risk of ongoing harm.',
  content: `Types of injunction:

Prohibitory injunction: orders the defendant not to do something — stop harassing the claimant, stop publishing private information, cease a nuisance. Most commonly sought.

Mandatory injunction: orders the defendant to take positive action — remove an encroaching structure, restore damaged property, delete private information. Granted more reluctantly; courts apply a stricter test at interim stage.

Quia timet injunction: granted before a wrong has occurred where there is a clear intention and real probability of the threatened wrong.

Interim injunctions (pending trial):
American Cyanamid v Ethicon [1975] UKHL 1 test:
(1) Is there a serious question to be tried? (Not "will the claimant probably win" — a much lower bar.)
(2) Would damages be an adequate remedy if the injunction is refused? (If yes, the injunction is usually refused; if the harm is irreversible or unquantifiable, it usually should be granted.)
(3) Balance of convenience: does the balance favour granting or refusing the injunction, including the status quo?
The applicant must give an undertaking in damages — if the injunction is later found to have been wrongly granted, the applicant compensates the defendant.

Defamation exception — Bonnard v Perryman [1891] 2 Ch 316: the court will not restrain publication before trial unless the defendant has no arguable defence (truth, honest opinion, or public interest). Freedom of expression under Article 10 ECHR creates a very high threshold for pre-trial injunctions in defamation cases.

Harassment injunctions (PHA 1997 s.3): granted under the statute; breach is a criminal offence (s.3A) — meaning police and the Crown Prosecution Service can prosecute for breach. This is a stronger enforcement mechanism than contempt of court alone.

Without-notice (ex parte) applications: in urgent cases (e.g., immediate risk of harassment or publication) the court can grant an injunction without the defendant being present. The applicant must make full and frank disclosure of all material facts, including those favourable to the defendant.

Final injunctions: granted at trial where the claimant establishes their cause of action. The court's discretion — damages in lieu of injunction are possible in narrow circumstances (s.50 Senior Courts Act 1981).`,
  tags: ['injunction', 'prohibitory', 'mandatory', 'American-Cyanamid', 'Bonnard-v-Perryman', 'PHA-injunction', 'interim-injunction'],
};

export default doc;
