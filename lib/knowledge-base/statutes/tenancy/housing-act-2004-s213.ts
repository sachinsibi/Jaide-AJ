import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-housing-act-2004-s213',
  type: 'statute',
  category: 'tenancy',
  title: 'Housing Act 2004, s.213 — Tenancy deposit protection',
  jurisdiction: 'england-wales',
  citation: 'Housing Act 2004, s.213',
  url: 'https://www.legislation.gov.uk/ukpga/2004/34/section/213',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['deposit', 'tdp', 'dps', 'mydeposits', 'tds', 'protection', 'prescribed information'],
  tabs: ['legalBreakdown', 'references'],
  factSummary:
    'Where a deposit is taken under an AST, the landlord must protect it in an authorised scheme within 30 days of receipt and serve the prescribed information on the tenant. Non-compliance bars s.21 possession and exposes the landlord to a court order for 1–3× the deposit (Housing Act 2004 s.214).',
  content: `Section 213 of the Housing Act 2004 imposes two distinct duties on a landlord of an assured shorthold tenancy who takes a deposit:

(1) Protection duty (s.213(1) and (3)): the deposit must be held in an authorised tenancy deposit scheme — Deposit Protection Service (DPS), MyDeposits, or Tenancy Deposit Scheme (TDS) — within 30 days of receipt by the landlord or agent.

(2) Information duty (s.213(5) and (6)): within the same 30-day window, the landlord must give the tenant (and any "relevant person" who paid the deposit) the prescribed information about the deposit, the scheme, and how to recover it. The prescribed contents are set out in the Housing (Tenancy Deposits) (Prescribed Information) Order 2007 (SI 2007/797), and include the scheme contact details, the deposit amount, the property address, the circumstances in which deductions may be made, and the procedure for resolving disputes.

These are independent obligations: protecting the deposit but failing to serve prescribed information (and vice versa) is non-compliance.

Consequences (s.214): the tenant may apply to the County Court. If the court is satisfied the deposit was not protected or the information not provided, it must either order return of the deposit (or its payment into a scheme) and order the landlord to pay the tenant a sum of between one and three times the amount of the deposit. The 1–3× sanction is mandatory once the breach is established (Superstrike Ltd v Rodrigues [2013] EWCA Civ 669; Charalambous v Ng [2014] EWCA Civ 1604).

Section 215 bars the landlord from serving a valid s.21 notice while the deposit is unprotected or while prescribed information remains unserved. Curing the breach (returning the deposit, or protecting it and serving information) lifts the bar prospectively but does not extinguish the s.214 sanction for the period of breach.`,
  tags: ['deposit-protection', 'section-213', 'Housing-Act-2004', 'prescribed-information', 'tenancy-deposit-scheme'],
};

export default doc;
