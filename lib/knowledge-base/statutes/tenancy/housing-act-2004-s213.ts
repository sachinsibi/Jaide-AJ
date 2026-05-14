import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-barbados-tenancy-security-deposit',
  type: 'statute',
  category: 'tenancy',
  title: 'Security Deposits in Barbados Residential Tenancies',
  jurisdiction: 'barbados',
  citation: 'Landlord and Tenant Act, Cap. 230 (Laws of Barbados); general common law principles',
  url: 'https://laws.barbados.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['overview', 'legalBreakdown', 'eli5', 'references'],
  triggers: ['deposit', 'security deposit', 'bond', 'holding deposit', 'return deposit', 'keep deposit', 'deduction'],
  factSummary:
    'In Barbados, there is no statutory tenancy deposit protection scheme equivalent to those in England. Security deposits in residential tenancies are governed by the terms of the individual lease agreement and general common law principles. The deposit is held by the landlord on trust to be applied against properly evidenced tenant liabilities at the end of the tenancy, with any balance returned.',
  eli5Summary:
    'In Barbados, when a tenant pays a security deposit, there is no government scheme that holds it separately. The deposit is governed by what is written in the lease. At the end of the tenancy, the landlord can only keep money from the deposit for things the tenant genuinely owes — like unpaid rent or damage the tenant caused. Any leftover amount must be returned.',
  content: `Security Deposits in Barbados Residential Tenancies:

In Barbados, there is no statutory tenancy deposit protection scheme. Unlike England, there is no legal requirement for landlords to register or hold security deposits in an authorised government-approved scheme within a prescribed period. The rights and obligations of landlords and tenants in relation to security deposits are governed by:

(a) the express terms of the tenancy agreement or lease;
(b) the relevant provisions of the Landlord and Tenant Act, Cap. 230; and
(c) general common law principles applicable in Barbados as a Commonwealth jurisdiction.

Nature of the deposit: a security deposit is a sum of money paid by the tenant at the commencement of the tenancy, held by the landlord as security against the tenant's obligations. At common law, the deposit is held on the basis that it may be applied against legitimate claims by the landlord at the end of the tenancy, with any balance returned to the tenant.

Permitted deductions: the landlord may retain from the deposit amounts representing:
(a) unpaid rent or other amounts owed under the tenancy agreement;
(b) the reasonable cost of repairing damage caused by the tenant beyond fair wear and tear;
(c) any other amount the tenant is contractually liable to pay.

Fair wear and tear: the landlord is generally not entitled to deduct from the deposit for deterioration of the premises resulting from ordinary, reasonable use of the property consistent with normal habitation. Deductions must relate to damage or default attributable to the tenant.

Return of the deposit: where the landlord makes deductions, reasonable practice — and the general principles of Cap. 230 and common law — supports providing the tenant with an itemised account of deductions and returning any balance promptly. Failure to account for the deposit or an unjustified refusal to return the balance may give rise to a civil claim.

Dispute resolution: a tenant who disputes the landlord's retention of all or part of the deposit may bring a civil claim in the Magistrates' Court (claims up to $10,000 BBD under Cap. 116A) or the High Court of Barbados (claims above $10,000 BBD under Cap. 117) for the return of the sum withheld.

Currency note: all monetary thresholds in Barbados Dollars (BBD). The BBD is pegged at 2:1 to the United States Dollar (USD).`,
  tags: ['security-deposit', 'deposit', 'Cap-230', 'Barbados', 'fair-wear-and-tear', 'deductions'],
};

export default doc;
