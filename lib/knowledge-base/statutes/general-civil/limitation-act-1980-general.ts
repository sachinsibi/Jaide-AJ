import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-limitation-act-1980-general',
  type: 'statute',
  category: 'general-civil',
  title: 'Limitation Act 1980 — civil limitation periods overview',
  jurisdiction: 'england-wales',
  citation: 'Limitation Act 1980, ss.2, 5, 14A, 32',
  url: 'https://www.legislation.gov.uk/ukpga/1980/58/contents',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['general-civil'],
  tabs: ['overview', 'legalBreakdown', 'references'],
  factSummary:
    'The Limitation Act 1980 sets the time limits within which civil proceedings must be issued. Key periods: 6 years from accrual for tort (s.2) and contract (s.5); 1 year for defamation (s.4A); 3 years / 15-year longstop for latent damage (s.14A). Limitation is a procedural defence that must be pleaded — courts do not raise it of their own motion.',
  content: `s.2 — Tort: 6 years from the date the cause of action accrued. For damage-based torts (negligence, nuisance, misuse of private information) the cause of action accrues when damage first occurs. For torts actionable per se (trespass, harassment injunction breach) it accrues at the date of the act.

s.5 — Contract: 6 years from the date of breach, regardless of when the claimant discovered the breach.

s.4A — Defamation and malicious falsehood: 1 year from the date of first publication (as amended by the Defamation Act 2013 s.8 single publication rule).

s.14A — Latent damage in tort (not personal injury): primary period is 3 years from the date of knowledge (when the claimant knew, or ought reasonably to have known, the material facts). Longstop: 15 years from the negligent act, regardless of knowledge. Applies only to non-PI damage-based claims.

s.32 — Fraud, concealment, or mistake: time does not run until the claimant discovered, or could with reasonable diligence have discovered, the fraud, concealment, or mistake. Extends the limitation period in cases of deliberate concealment of facts relevant to the claim.

Limitation is a procedural defence: the defendant must plead it. The court will not raise it unprompted. If a defendant does not plead limitation, they waive the defence.

Accrual rules:
- Harassment (PHA 1997 s.3): 6 years from the last act of harassment.
- Continuing trespass or nuisance: each day of continuance gives a fresh cause of action. The 6-year window runs from each fresh act — older acts outside 6 years are time-barred.
- Data protection claims (DPA 2018 s.169): 6 years.

Issue vs service: proceedings are "brought" when the Claim Form is issued by the court. The Claim Form must then be served within 4 months (CPR 7.5). Issue in time but late service does not cure the limitation bar.`,
  tags: ['limitation', 'time-limits', 'accrual', 'latent-damage', 's.14A', 'LA-1980'],
};

export default doc;
