import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-hong-kong-fir',
  type: 'case',
  category: 'contract-service',
  title: 'Hong Kong Fir Shipping v Kawasaki [1962] 2 QB 26 (CA)',
  jurisdiction: 'england-wales',
  citation: 'Hong Kong Fir Shipping Co Ltd v Kawasaki Kisen Kaisha Ltd [1962] 2 QB 26 (CA)',
  url: 'https://www.bailii.org/ew/cases/EWCA/Civ/1961/7.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Established the category of "innominate" (intermediate) terms. Whether a breach justifies termination depends on the gravity of its consequences, not on a label attached to the term. Termination is permitted only where the breach deprives the innocent party of substantially the whole benefit of the contract.',
  content: `Hong Kong Fir Shipping v Kawasaki Kisen Kaisha [1962] 2 QB 26 (Court of Appeal).

Facts: Charterers hired a vessel for a 24-month time charter. The contract required the vessel to be "in every way fitted for ordinary cargo service." The engines were unreliable and the engine-room crew incompetent. Numerous breakdowns delayed the vessel for about 20 weeks of the first seven months of charter. The charterers purported to terminate. The shipowners sued for wrongful repudiation, arguing that despite the breaches the vessel remained capable of fulfilling the bulk of the charter.

Held (CA): the charterers had not been entitled to terminate. The breach, although significant, did not deprive them of substantially the whole benefit of a 24-month charter. The remedy lay in damages, not termination.

Diplock LJ's framework:

Contractual terms can be of three kinds:
(1) Conditions — going to the root of the contract; breach gives an automatic right to terminate.
(2) Warranties — minor terms; breach gives damages only.
(3) Innominate (intermediate) terms — terms that may be breached in trivial or serious ways. The remedy depends on the consequences of the actual breach, not on a label.

Test for an innominate-term breach permitting termination: does the breach "deprive the innocent party of substantially the whole benefit which it was the intention of the parties as expressed in the contract that they should obtain"?

Modern application:

Characterisation: courts examine the parties' language and context. Time-of-the-essence clauses signal conditions. Otherwise terms are often treated as innominate.

Consumer-context interaction:
- Goods (CRA 2015 ss.9–11) — the consumer's 30-day right to reject is a statutory parallel; no need to show Hong Kong Fir "substantial deprivation" within that window.
- Services (CRA 2015 s.49) — no equivalent right to reject; remedies are repeat performance / price reduction. Hong Kong Fir still applies for common-law repudiation outside the statute.

Wrongful termination is itself a repudiatory breach, exposing the terminating party to damages — exercise with care.`,
  tags: ['Hong-Kong-Fir', 'innominate-terms', 'repudiatory-breach', 'condition-warranty-innominate', 'substantial-deprivation'],
};

export default doc;
