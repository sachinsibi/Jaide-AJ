import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-nmwa-and-wtr',
  type: 'statute',
  category: 'employment',
  title: 'National Minimum Wage Act 1998 and Working Time Regulations 1998',
  jurisdiction: 'england-wales',
  citation: 'National Minimum Wage Act 1998; Working Time Regulations 1998 (SI 1998/1833); ERA 1996 ss.13, 23',
  url: 'https://www.legislation.gov.uk/ukpga/1998/39/contents',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['minimum wage', 'living wage', 'underpaid', 'unpaid wages', 'overtime', 'holiday pay', 'rest breaks', 'working hours', '48 hours', 'unauthorised deduction'],
  tabs: ['legalBreakdown'],
  factSummary:
    'NMWA 1998 sets the National Minimum Wage / National Living Wage (rates by age band, set annually by the Low Pay Commission). WTR 1998 implements the Working Time Directive: 48-hour weekly average cap (opt-out available); 11-hour daily rest; 24-hour weekly rest; 5.6 weeks\' paid annual leave; rest breaks. ERA 1996 s.13 prohibits unauthorised deductions; s.23 gives the right to claim them in the Employment Tribunal.',
  content: `Two complementary regimes govern pay and hours.

National Minimum Wage Act 1998:

- Sets the National Minimum Wage / National Living Wage. Rates are reviewed annually by the Low Pay Commission and confirmed in regulations. Different rates apply by age band and for apprentices. Always check gov.uk/national-minimum-wage-rates for the current rate.

- Section 17: a worker paid below the rate has a contractual right to be paid at the prescribed rate.

- Enforcement: HMRC investigates underpayment, can issue Notices of Underpayment, recover arrears for the worker, and impose penalties. Public naming of non-compliant employers occurs.

- Worker can also claim in the Employment Tribunal under ERA 1996 s.23 (unauthorised deductions) for the shortfall.

Working Time Regulations 1998 (SI 1998/1833):

Reg.4 — 48-hour weekly limit. Average weekly working time over a 17-week reference period must not exceed 48 hours. Workers can opt out individually in writing.

Reg.10 — 11 consecutive hours' daily rest in every 24-hour period.

Reg.11 — 24-hour weekly rest in every 7 days (or 48 hours every fortnight).

Reg.12 — Rest breaks. A 20-minute break where daily working time exceeds 6 hours.

Reg.13 — Paid annual leave. 5.6 weeks (28 days for a full-time worker, including bank holidays). Holiday pay must include regular overtime, commission, and other regular elements (Bear Scotland v Fulton [2015] ICR 221; Lock v British Gas [2014]; Harpur Trust v Brazel [2022] UKSC 21).

Reg.14 — Pay in lieu on termination. Untaken statutory leave must be paid out at termination.

Worker status: WTR 1998 applies to "workers" (broader than "employees"), capturing zero-hours, agency, and many gig-economy roles (Uber BV v Aslam [2021] UKSC 5).

ERA 1996 ss.13 and 23 — Unauthorised deductions:

Section 13 prohibits an employer from making a deduction from a worker's wages unless: (a) required or authorised by statute or contract; or (b) the worker has previously consented in writing.

Section 23 gives jurisdiction to the Employment Tribunal. Time limit: 3 months less 1 day from the date of the deduction (or last in a series of deductions); a series can be linked back, but is subject to a 2-year backstop on financial recovery.

Remedy: declaration; order to repay the deducted sum.`,
  tags: ['NMWA-1998', 'WTR-1998', 'minimum-wage', 'working-time', 'holiday-pay', 'rest-breaks', 'unauthorised-deduction', 'ERA-section-13'],
};

export default doc;
