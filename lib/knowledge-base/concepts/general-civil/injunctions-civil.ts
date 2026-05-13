import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-injunctions-civil',
  type: 'concept',
  category: 'general-civil',
  title: 'Injunctions in Civil Proceedings',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['injunction', 'court order', 'stop them', 'make them stop', 'restrain', 'want them to remove'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'An injunction is a court order requiring a person to stop doing something (prohibitory) or to do something (mandatory). In Barbados, injunctions are granted by the High Court of Barbados as a matter of equity. Interim injunctions are available pending trial on the American Cyanamid test (persuasive authority). Defamation injunctions face a high pre-trial bar given the importance of freedom of expression.',
  eli5Summary:
    'An injunction is a court order that tells someone to stop doing something (or to do something). In Barbados, injunctions are issued by the High Court. If the other person ignores it, they can be held in contempt of court. A claimant can ask the High Court for an urgent injunction before the full case is heard, if there is a serious risk of ongoing harm.',
  content: `Types of injunction:

Prohibitory injunction: orders the defendant not to do something — stop harassing the claimant, stop publishing private information, cease a nuisance. The most commonly sought form.

Mandatory injunction: orders the defendant to take positive action — remove an encroaching structure, restore damaged property, delete private information. Granted more reluctantly; courts apply a stricter test at the interim stage.

Quia timet injunction: granted before a wrong has occurred where there is a clear intention and real probability of the threatened wrong materialising.

Forum: injunctions in Barbados civil proceedings are granted by the High Court of Barbados as an exercise of its equitable jurisdiction. The Magistrates' Court does not have the same broad power to grant injunctions in civil matters.

Interim injunctions (pending trial):
The American Cyanamid test (American Cyanamid Co v Ethicon Ltd [1975] UKHL 1 — persuasive common law authority in Barbados):
(1) Is there a serious question to be tried? This is a low threshold — not "will the claimant probably win" but whether there is a genuine issue requiring investigation.
(2) Would damages be an adequate remedy if the injunction is refused? If the harm is irreversible, not quantifiable in money, or the defendant would be unable to pay an award, damages are inadequate and an injunction is more likely appropriate.
(3) Balance of convenience: does the balance of harm favour granting or refusing the injunction, having regard to the status quo?
The applicant must give an undertaking in damages — if the injunction is later found to have been wrongly granted, the applicant compensates the defendant for any loss caused by the injunction.

Defamation exception — Bonnard v Perryman principle: common law courts are very reluctant to restrain publication before trial unless the defendant has no arguable defence. Freedom of expression creates a high threshold for pre-trial injunctions in defamation cases. This principle is applicable in Barbados as a matter of common law.

Without-notice (ex parte) applications: in urgent cases — for example, where there is an immediate risk of harm from harassment or imminent publication of private information — the High Court can grant an injunction without the defendant being present. The applicant must make full and frank disclosure of all material facts, including those favourable to the defendant.

Final injunctions: granted at trial where the claimant establishes their cause of action. The court exercises its discretion — in rare cases, damages in lieu of an injunction may be awarded instead of a restraining order.

Enforcement: a person who disobeys a court injunction is in contempt of court, which may be punishable by fine or imprisonment.`,
  tags: ['injunction', 'prohibitory', 'mandatory', 'American-Cyanamid', 'Bonnard-v-Perryman', 'High-Court-Barbados', 'interim-injunction', 'equity'],
};

export default doc;
