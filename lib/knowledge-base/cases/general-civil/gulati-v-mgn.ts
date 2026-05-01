import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-gulati-v-mgn',
  type: 'case',
  category: 'general-civil',
  title: 'Gulati v MGN Ltd [2015] EWCA Civ 1291',
  jurisdiction: 'england-wales',
  citation: '[2015] EWCA Civ 1291',
  url: 'https://www.bailii.org/ew/cases/EWCA/Civ/2015/1291.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['privacy', 'compensation', 'damages privacy', 'misuse of private information', 'phone hacking', 'how much can I claim'],
  tabs: ['legalBreakdown'],
  factSummary:
    'The Court of Appeal confirmed the damages framework for misuse of private information. Three heads: (1) distress from the intrusion itself; (2) distress from publication; (3) loss of control of private information as a head of damage in its own right, even without publication. Substantial awards are available for serious and repeated breaches.',
  content: `Facts: multiple celebrities sued Mirror Group Newspapers for unlawful phone hacking over many years. The trial judge awarded substantial damages (ranging from £72,500 to £1.2m). MGN appealed, arguing the awards were excessive and that "loss of control" was not a valid head of damage.

Held (Court of Appeal, Mann J affirmed): the damages framework was correct.

Three heads of damage for misuse of private information:

1. Distress caused by the intrusion: the act of accessing or obtaining private information without consent is itself harmful — the violation of autonomy and dignity, even if the claimant does not know the intrusion has occurred until later.

2. Distress caused by publication or threatened publication: further distress where private information is disseminated, including ongoing anxiety about further exposure.

3. Loss of control of private information: this is a separate, freestanding head of damage. The claimant has lost the ability to control who knows their private information and when — a harm in its own right, independent of measurable consequences.

Quantum factors: volume of intrusions; nature of information accessed (more intimate information warrants more); extent of dissemination; whether the claimant knew of the intrusion at the time; consequences in the claimant's life.

No requirement for financial loss: non-material harm — distress, indignity, loss of autonomy — is fully compensable without proof of economic loss.

Aggravated damages: available where the defendant's conduct was systematic, deliberate, and concealed — as in commercial phone hacking.

Application in data breach and privacy claims: Gulati's heads of damage are applied in UK GDPR compensation claims under Art.82 and DPA 2018 s.169, providing a framework for quantifying non-material damage from unlawful data processing.`,
  tags: ['misuse-of-private-information', 'privacy-damages', 'loss-of-control', 'Gulati', 'phone-hacking', 'quantum'],
};

export default doc;
