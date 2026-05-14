import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-barbados-tenancy-habitability',
  type: 'statute',
  category: 'tenancy',
  title: 'Implied Duty of Habitability — Barbados Residential Tenancies',
  jurisdiction: 'barbados',
  citation: 'Common law duty of habitability; Landlord and Tenant Act, Cap. 230 (Laws of Barbados)',
  url: 'https://laws.barbados.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['overview', 'legalBreakdown', 'eli5', 'references'],
  triggers: ['habitable', 'unfit', 'unsafe', 'damp', 'mould', 'mold', 'cold', 'health', 'condition'],
  factSummary:
    'Barbados common law, applied as a Commonwealth jurisdiction, implies into every residential tenancy a duty on the landlord that the premises are fit for human habitation at the commencement of the tenancy and remain so throughout. This duty is independent of disrepair and encompasses conditions that render a home harmful to health or unsafe for occupation.',
  eli5Summary:
    'Every rented home in Barbados must be fit to live in. This is a basic rule under Barbados common law — it does not need to be written in the lease. If a home has serious problems like dangerous damp, no clean water, or unsafe electricity that make it unhealthy to live in, the landlord has an obligation to deal with it.',
  content: `Implied Duty of Habitability — Barbados Residential Tenancies:

Barbados, as a Commonwealth jurisdiction with a common law heritage, recognises a well-established implied duty that landlords must ensure residential premises are fit for human habitation. This doctrine developed through English common law and is treated as persuasive authority by Barbados courts.

Scope of the duty:

(a) Fitness at commencement: at the time a residential tenancy begins, the premises must be in a condition reasonably fit for habitation. Conditions that render the property immediately unfit — absence of clean water, sewage ingress, severe structural instability — may give rise to a claim from the outset of the tenancy.

(b) Continuing fitness during the tenancy: the duty is not limited to the start of the tenancy. Where conditions deteriorate and render the premises unfit for habitation — through, for example, persistent damp and mould, failure of sanitation, infestation, or dangerous electrical installation — the landlord bears responsibility to remedy those conditions on notice.

(c) Independence from disrepair: the habitability duty is broader than a strict disrepair obligation. A property may be unfit for habitation without exhibiting structural disrepair — for example, where inherent design features cause health-threatening condensation, or where inadequate ventilation leads to harmful air quality. In Barbados, common law and the provisions of Cap. 230 together provide the framework for addressing such conditions.

What is covered: conditions likely to render residential premises unfit include severe dampness and mould growth; defective or absent sanitation; absence of a reliable clean water supply; structurally dangerous ceilings, walls, or floors; electrical installations that present a fire or electrocution hazard; infestation by vermin; and defects that prevent normal safe use of the dwelling.

Notice: the landlord's obligation to remedy habitability defects generally requires actual or constructive notice of the problem. A tenant who identifies a condition affecting habitability and communicates it in writing to the landlord places the landlord on notice, triggering the obligation to respond within a reasonable time.

Remedies: a tenant may seek a civil claim in the Magistrates' Court (up to $10,000 BBD under Cap. 116A) or the High Court of Barbados (above $10,000 BBD under Cap. 117) for damages representing the loss suffered during the period of unfitness, and/or an order requiring the landlord to carry out the necessary remedial works.

Currency note: all monetary thresholds in Barbados Dollars (BBD). The BBD is pegged at 2:1 to the United States Dollar (USD).`,
  tags: ['habitability', 'fitness-for-habitation', 'Cap-230', 'common-law', 'Barbados', 'damp', 'mould'],
};

export default doc;
