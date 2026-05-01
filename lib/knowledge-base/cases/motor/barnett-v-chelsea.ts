import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-barnett-v-chelsea',
  type: 'case',
  category: 'motor-accident',
  title: 'Barnett v Chelsea & Kensington Hospital [1969] 1 QB 428',
  jurisdiction: 'england-wales',
  citation: 'Barnett v Chelsea & Kensington Hospital Management Committee [1969] 1 QB 428',
  url: 'https://www.bailii.org/ew/cases/EWHC/QB/1968/1.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['causation', 'but for', 'caused', 'would have happened anyway', 'inevitable', 'made no difference'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Establishes the "but-for" test of factual causation: the claimant must prove on the balance of probabilities that, but for the defendant\'s breach of duty, the damage would not have occurred. If the damage would have occurred regardless, causation is not made out and the claim fails — even where breach is admitted.',
  content: `Barnett v Chelsea & Kensington Hospital Management Committee [1969] 1 QB 428.

Facts: Three night-watchmen attended a hospital casualty department complaining of vomiting after drinking tea. The on-duty doctor, without examining them, told them to go home and consult their own GPs. Mr Barnett, one of the three, died about five hours later from arsenic poisoning. The hospital admitted negligence in failing to examine the men. Mrs Barnett sued for damages.

Held (Nield J): The hospital owed a duty of care and breached it by failing to examine the patient. However, the claim failed on causation. Medical evidence established that, even if Mr Barnett had been admitted, examined, and treated immediately, he would still have died from the arsenic — there was no antidote available in time, and the prognosis at the time of presentation was hopeless. The breach therefore did not cause the death.

The "but-for" test:

"In the present case, but for the defendant's negligence, the deceased would still have died." The claimant must prove, on the balance of probabilities, that but for the defendant's wrongful act or omission, the damage complained of would not have occurred. If the damage would have happened anyway, the breach is not a cause of it.

Application in motor negligence:

1. Default test of factual causation. The claimant must prove the defendant's negligence was a cause of the damage; mere temporal coincidence is not enough.

2. Defence applications: pre-existing injury or condition (losses would have arisen regardless — causation may be reduced to an "acceleration" period); inevitable secondary collision; seatbelt that would not have changed outcome (no Froom reduction).

3. Modifications: material contribution to indivisible injury (Bonnington Castings [1956] AC 613); Fairchild [2003] 1 AC 32 (mesothelioma) — narrow exceptions, not generally available in routine motor cases.

4. Standard: balance of probabilities — the breach must more probably than not have made a material difference.`,
  tags: ['Barnett-v-Chelsea', 'but-for-test', 'factual-causation', 'balance-of-probabilities', 'inevitable-loss'],
};

export default doc;
