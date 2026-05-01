import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-bhs-v-burchell',
  type: 'case',
  category: 'employment',
  title: 'British Home Stores v Burchell [1980] ICR 303 (EAT)',
  jurisdiction: 'england-wales',
  citation: 'British Home Stores v Burchell [1980] ICR 303 (EAT)',
  url: 'https://www.bailii.org/uk/cases/UKEAT/1978/2_77_2010.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['misconduct', 'theft', 'dishonesty', 'investigation', 'gross misconduct', 'disciplinary', 'dismissed for misconduct'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Three-part test for misconduct dismissal still binding today: the employer must (1) genuinely believe the employee committed the misconduct; (2) have reasonable grounds for that belief; and (3) have conducted a reasonable investigation in the circumstances. The tribunal does not substitute its own view of guilt — it asks whether the employer\'s belief and process were within the band of reasonable responses.',
  content: `British Home Stores v Burchell [1980] ICR 303 (Employment Appeal Tribunal).

Facts: Mrs Burchell was dismissed for alleged complicity in a staff discount fraud at BHS. The dismissal was based on a colleague's statement and Mrs Burchell's own ambiguous responses in interview. There was no direct evidence that she had committed theft. Her unfair-dismissal claim succeeded at first instance; the EAT reversed.

Held (EAT, Arnold J): The dismissal was fair. The employer had genuinely believed in misconduct, had reasonable grounds for that belief on the available evidence, and had conducted a reasonable investigation in the circumstances of a retail-fraud case where direct proof is rarely available.

The Burchell test:

Where misconduct is the reason for dismissal, the employer must establish three propositions to bring the dismissal within the band of reasonable responses:

(1) Genuine belief. The employer genuinely believed the employee was guilty of the misconduct in question. This is a question of subjective belief — what did the dismissing officer actually believe?

(2) Reasonable grounds. The employer had reasonable grounds for that belief. Not proof beyond reasonable doubt; not balance of probabilities in the strict sense — a reasonable basis in the available evidence.

(3) Reasonable investigation. At the stage when the belief was formed, the employer had carried out as much investigation into the matter as was reasonable in all the circumstances. The depth of investigation depends on the seriousness of the allegation, the complexity of the facts, and the resources of the employer.

Modern application:

- The Burchell test is the leading authority on misconduct dismissals — applied in tens of thousands of tribunal decisions.
- It dovetails with the band-of-reasonable-responses test (Iceland Frozen Foods v Jones [1983] ICR 17): tribunal must not substitute its own view of guilt or process.
- Procedural fairness must follow the ACAS Code of Practice on Disciplinary and Grievance Procedures (failure attracts up to 25% uplift in compensation).
- For very serious misconduct allegations (e.g., theft, dishonesty, criminal conduct), the depth of investigation expected rises (A v B [2003] IRLR 405 — heightened standard for career-ending allegations).
- The Burchell test does not require the employer to prove guilt to the criminal or civil standard; it requires reasonable belief.

Failure on any of the three Burchell prongs takes the dismissal outside the band of reasonable responses and renders it unfair.`,
  tags: ['Burchell-test', 'misconduct', 'three-part-test', 'reasonable-investigation', 'band-of-reasonable-responses'],
};

export default doc;
