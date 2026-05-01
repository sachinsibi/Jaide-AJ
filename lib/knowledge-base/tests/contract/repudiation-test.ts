import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-repudiation-test',
  type: 'test',
  category: 'contract-service',
  title: 'Repudiatory Breach Test (when can you terminate?)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Termination is permitted only where (a) a condition has been breached, (b) an innominate term has been breached in a way that deprives the innocent party of substantially the whole benefit of the contract (Hong Kong Fir), or (c) the breaching party has unequivocally repudiated the contract by words or conduct showing they will not perform. Mere breach of warranty gives damages only.',
  content: `Repudiatory Breach Test (when termination is permitted):

A party can terminate only on one of three grounds:

Ground 1 — Breach of a condition. A term going to the root of the contract. Breach gives an automatic right to terminate. Conditions arise from express labelling ("time of the essence"); statute (SGA 1979 conditions in B2B); or trade custom / commercial necessity.

Ground 2 — Breach of an innominate term with substantial deprivation (Hong Kong Fir [1962] 2 QB 26). The court asks whether the breach deprives the innocent party of substantially the whole benefit. Consequential test — actual gravity, not labels.

Factors: proportion of benefit lost; likelihood of further breach; cost of substitute performance; adequacy of damages; remaining contract length; breaching party's conduct.

Ground 3 — Anticipatory repudiation. Where a party indicates clearly, by words or conduct, that they will not perform a fundamental term before performance is due. The innocent party may terminate immediately. The repudiation must be unequivocal.

Critical risks:

(a) Wrongful termination is itself a repudiatory breach. A party who terminates on a basis later rejected by the court is liable.
(b) Election. The innocent party must elect within a reasonable time either to terminate or affirm. Affirmation forecloses later termination on the same breach.
(c) Damages remain available alongside termination.

Consumer interface: CRA 2015 provides statutory parallel rights — s.20 short-term right to reject (goods within 30 days) and ss.55–56 services remedies (repeat performance / price reduction). Supplement, not replace, common-law repudiation.`,
  tags: ['repudiation-test', 'Hong-Kong-Fir', 'condition', 'innominate-term', 'substantial-deprivation', 'wrongful-termination'],
};

export default doc;
