import { Scale, BookOpen, Gavel, FileCheck, AlertTriangle, Lightbulb, Info, TestTube } from 'lucide-react';

interface LegalBreakdownTabProps {
  scenario: string;
  onboardingData: Record<string, string>;
}

export function LegalBreakdownTab({ scenario, onboardingData }: LegalBreakdownTabProps) {
  const generateLegalAnalysis = () => {
    const lowerScenario = (scenario || '').toLowerCase();
    let analysis = {
      doctrines: [] as string[],
      caselaw: [] as { name: string; citation: string; principle: string }[],
      legalTests: [] as { test: string; application: string }[],
      procedures: [] as string[],
      evidenceStandards: '',
      precedentPatterns: '',
      keyTerminology: [] as { term: string; definition: string }[]
    };

    // Tenancy matters
    if (lowerScenario.includes('tenant') || lowerScenario.includes('landlord') || lowerScenario.includes('rent')) {
      analysis.doctrines = [
        'Statutory repairing obligations under section 11 of the Landlord and Tenant Act 1985 apply to tenancies of less than seven years, imposing on landlords a duty to keep in repair the structure and exterior of the dwelling-house and installations for water, gas, electricity, sanitation, and heating.',
        'The implied covenant for quiet enjoyment exists at common law and prohibits the landlord from substantially interfering with the tenant\'s title to or peaceful possession of the demised premises.',
        'Protection from unlawful eviction under the Protection from Eviction Act 1977 criminalises harassment and unlawful eviction, requiring proper notice under Housing Act 1988 before possession proceedings.',
        'The implied term that premises are fit for habitation at the commencement of the tenancy (Smith v Marrable (1843)) applies to furnished lettings.',
        'The doctrine of non-derogation from grant prevents landlords from substantially interfering with the purpose for which the property was let (Browne v Flower [1911] 1 Ch 219).'
      ];
      
      analysis.caselaw = [
        { 
          name: 'Quick v Taff-Ely BC', 
          citation: '[1986] QB 809 (CA)', 
          principle: 'Section 11 Landlord and Tenant Act 1985 obligations extend to keeping installations in proper working order, not merely repairing them after defect. Condensation dampness may fall within section 11 if attributable to defective design or construction.' 
        },
        { 
          name: 'Liverpool City Council v Irwin', 
          citation: '[1977] AC 239 (HL)', 
          principle: 'Terms may be implied into tenancy agreements by necessity or to give business efficacy. Landlords of multi-occupancy buildings have implied duty to maintain common parts in reasonable repair and keep common facilities in reasonable working order.' 
        },
        { 
          name: 'Southwark LBC v Mills', 
          citation: '[1999] UKHL 40', 
          principle: 'Section 11 does not impose duty to improve premises beyond their original design standard. Sound insulation defects inherent in original construction do not breach section 11 unless installation becomes defective through disrepair.' 
        },
        { 
          name: 'Wallace v Manchester City Council', 
          citation: '[1998] 30 HLR 1111 (CA)', 
          principle: 'Damages for disrepair are assessed by reference to diminution in value of the tenancy and general inconvenience and discomfort. Awards typically modest unless substantial interference with living conditions.' 
        },
        { 
          name: 'McCall v Abelesz', 
          citation: '[1976] QB 585 (CA)', 
          principle: 'Harassment of residential occupiers causing them to give up occupation constitutes criminal offence under Protection from Eviction Act 1977. Damages may also be recovered in tort for unlawful eviction.' 
        },
        { 
          name: 'O\'Brien v Robinson', 
          citation: '[1973] AC 912 (HL)', 
          principle: 'Notice to quit must comply with Protection from Eviction Act 1977 s.5 requirements: minimum four weeks\' notice in writing, expiring at end of period of tenancy, containing prescribed information.' 
        }
      ];

      analysis.legalTests = [
        { 
          test: 'Section 11 Disrepair Test', 
          application: 'Courts examine: (1) Does the defect fall within "structure and exterior" or "installations"? (2) Is the defect attributable to disrepair as opposed to inherent design? (3) Did the landlord have notice of the defect? (4) Has reasonable time elapsed for repair? The test in Quick v Taff-Ely requires installations to work properly, not merely be in physical repair.' 
        },
        { 
          test: 'Quiet Enjoyment Breach Test', 
          application: 'Courts assess: (1) Was there substantial interference with possession or enjoyment? (2) Was the interference by the landlord or someone claiming under the landlord? (3) Did the conduct amount to derogation from grant? Minor inconveniences or lawful exercise of landlord\'s rights do not constitute breach. The test is objective: would a reasonable tenant consider the interference substantial?' 
        },
        { 
          test: 'Section 21 Validity Test', 
          application: 'For valid section 21 notice (no-fault possession), courts examine: (1) Was the deposit protected in authorised scheme within 30 days? (2) Was prescribed information provided? (3) Was the property licensed if required (HMO)? (4) Was minimum two months\' notice given? (5) Was notice served after first four months of tenancy? (6) Was an Energy Performance Certificate provided? Failure on any ground renders notice invalid.' 
        },
        { 
          test: 'Unlawful Eviction Test', 
          application: 'Established in R v Yuthiwattana (1984): (1) Did the occupier have legal right to occupy? (2) Did the landlord or agent commit acts likely to interfere with peace or comfort? (3) Was the purpose to cause occupier to give up occupation? Damages assessed under Housing Act 1988 s.27-28 by reference to diminution in landlord\'s interest (Tagro v Cafane [1991]).' 
        }
      ];

      analysis.procedures = [
        'Pre-action stage: Written notification to landlord citing specific statutory breaches under section 11 LTA 1985 or other applicable provisions. Landlord must be given notice of defect and reasonable opportunity to inspect and remedy (typically 14-30 days).',
        'Environmental Health route: Request inspection under Housing Health and Safety Rating System (HHSRS). Local authority may serve improvement notice, prohibition order, or emergency remedial action notice if Category 1 or 2 hazards identified.',
        'First-tier Tribunal (Property Chamber) applications: Rent repayment orders (Housing and Planning Act 2016), improvement orders, compensation for disrepair. No legal representation required. Tribunal fee £100-£300. Appeal to Upper Tribunal on point of law only.',
        'County Court proceedings under CPR Part 7: Claims for damages for disrepair, injunctive relief, or specific performance of repairing obligations. Track allocation depends on value and complexity. Pre-action Protocol for Housing Disrepair Cases must be followed.',
        'Possession claims follow CPR Part 55 procedure: Accelerated procedure for section 21 claims. Standard procedure for section 8 grounds. Defendant may counterclaim for disrepair. Defences include: invalidity of notice, retaliatory eviction (Deregulation Act 2015 s.33), discretionary grounds under section 8.'
      ];

      analysis.evidenceStandards = 'Civil standard: balance of probabilities (51% likelihood). Burden of proof rests on claimant to establish: (1) duty (statutory or contractual); (2) breach; (3) causation; (4) loss. Documentary evidence critical: tenancy agreement, inventory, photographs with metadata, expert reports (structural engineers, environmental health), correspondence evidencing notice, rent payment records. CPR Part 31 imposes ongoing disclosure obligations. Witness statements must comply with CPR Part 32 (truth verified by statement of truth).';

      analysis.precedentPatterns = 'County Court judges and First-tier Tribunal typically apply structured approach: (1) Identify applicable statutory or contractual duties; (2) Assess whether landlord had notice (actual or constructive); (3) Determine whether reasonable time elapsed for remedy; (4) Quantify loss using comparator method (what would rent have been if property in proper repair); (5) Apply deduction for tenant culpability if applicable. Tribunals adopt inquisitorial approach and may order their own inspections. Courts encourage ADR and impose costs sanctions for unreasonable refusal of Part 36 offers. Housing disrepair claims attract qualified one-way costs shifting protecting tenants from adverse costs in small claims.';

      analysis.keyTerminology = [
        { term: 'Section 11 LTA 1985', definition: 'Statutory implied term in tenancies of less than 7 years requiring landlord to keep in repair: (a) structure and exterior; (b) installations for water, gas, electricity, sanitation; (c) installations for space heating and water heating. Duty arises only after landlord has notice (actual or constructive) of defect.' },
        { term: 'Quiet Enjoyment', definition: 'Implied covenant (common law and Landlord and Tenant Act 1985 s.11A) prohibiting landlord from substantially interfering with tenant\'s possession. Breach requires act or omission by landlord or someone lawfully claiming under landlord that substantially interferes with tenant\'s title or enjoyment.' },
        { term: 'Section 21 Notice', definition: 'Mandatory ground for possession under Housing Act 1988 s.21 requiring no fault by tenant. Minimum 2 months\' notice. Cannot be served in first 4 months. Strict compliance required with deposit protection, prescribed information, licensing, and energy performance requirements.' },
        { term: 'Assured Shorthold Tenancy', definition: 'Default form of residential tenancy under Housing Act 1988 (as amended by Housing Act 1996). Provides security of tenure during fixed term. After fixed term expires, becomes statutory periodic tenancy unless new fixed term agreed. Landlord may recover possession under section 21 (no-fault) or section 8 (fault-based grounds).' },
        { term: 'Retaliatory Eviction', definition: 'Prohibition under Deregulation Act 2015 s.33 preventing section 21 possession where tenant has complained about disrepair and local authority has served relevant notice. Creates 6-month moratorium on section 21 proceedings.' }
      ];
    }
    // Insurance disputes
    else if (lowerScenario.includes('insurance') || lowerScenario.includes('claim')) {
      analysis.doctrines = [
        'The doctrine of utmost good faith (uberrimae fidei), historically established in Carter v Boehm (1766), imposed pre-contractual duty to disclose all material facts. This common law duty was reformed and codified by the Insurance Act 2015, replacing it with duty of fair presentation for commercial insurance.',
        'The Consumer Insurance (Disclosure and Representations) Act 2012 abolishes the duty of utmost good faith for consumer insurance, replacing it with duty to take reasonable care not to make misrepresentation. Insurers must ask clear questions; consumers need only answer honestly and with reasonable care.',
        'The implied term that insurers must process claims within reasonable time and act in good faith (Sprung v Royal Insurance [1999]). Unreasonable delay may constitute repudiatory breach entitling policyholder to damages.',
        'The principle of indemnity limits recovery to actual loss sustained. Policyholder cannot profit from insurance. Subrogation rights allow insurer to pursue third parties in name of insured after indemnity paid.',
        'The doctrine of proximate cause (causa proxima non remota spectatur) requires loss to be caused by insured peril as the dominant, effective cause. Concurrent causes and causation chains analysed using Wayne Tank principle.'
      ];

      analysis.caselaw = [
        { 
          name: 'Versloot Dredging BV v HDI Gerling', 
          citation: '[2016] UKSC 45', 
          principle: 'Fraudulent claim does not forfeit entitlement to genuine losses unless fraud is material to the claim. Collateral lie made in support of otherwise honest claim does not engage fraudulent claims rule. Overturned previous authority requiring forfeiture of entire claim for any dishonesty.' 
        },
        { 
          name: 'Bankers Insurance Co Ltd v South', 
          citation: '[2003] EWHC 380 (QB)', 
          principle: 'Burden of proof for exclusion clauses rests on insurer. Exclusions construed narrowly and contra proferentem against insurer. Insurer must demonstrate clear and unambiguous exclusion applies on facts.' 
        },
        { 
          name: 'Kosmar Villa Holidays v Trustees of Syndicate 1243', 
          citation: '[2008] EWCA Civ 147', 
          principle: 'Insurer must pay valid claims even where policyholder in breach of other policy obligations, unless breach causally connected to loss. Breach of warranty or condition precedent may discharge insurer only if relevant to risk or claim.' 
        },
        { 
          name: 'The Mercandian Continent', 
          citation: '[2001] EWCA Civ 1275', 
          principle: 'Terms described as "conditions precedent" require strict compliance before insurer\'s liability arises. Distinguish between conditions precedent to contract formation, conditions precedent to insurer\'s liability, and mere warranties. Construction depends on true intention and commercial purpose.' 
        },
        { 
          name: 'Drake Insurance plc v Provident Insurance plc', 
          citation: '[2003] EWCA Civ 1834', 
          principle: 'Material fact for disclosure purposes defined as fact that would influence judgment of prudent insurer in fixing premium or deciding whether to accept risk. Test is objective: what prudent insurer would regard as material, not what actual insurer subjectively considered material.' 
        },
        { 
          name: 'Sprung v Royal Insurance', 
          citation: '[1999] Lloyd\'s Rep IR 111', 
          principle: 'Implied term that insurer will process and pay valid claims within reasonable time. Unreasonable delay in claims handling may constitute repudiatory breach. What constitutes "reasonable time" depends on complexity of claim and circumstances.' 
        }
      ];

      analysis.legalTests = [
        { 
          test: 'Fair Presentation Test (Insurance Act 2015 s.3)', 
          application: 'For non-consumer insurance, courts examine: (1) Was disclosure made in manner reasonably clear and accessible? (2) Were material circumstances disclosed (every circumstance the insured knows or ought to know, or sufficient to put prudent insurer on notice)? (3) Was representation made with reasonable care? Remedies for breach depend on whether breach was deliberate/reckless, or innocent (ss.8-11).' 
        },
        { 
          test: 'Consumer Misrepresentation Test (CIDRA 2012)', 
          application: 'For consumer insurance: (1) Did consumer take reasonable care not to make misrepresentation? (2) Was the question asked by insurer clear and specific? (3) Was the misrepresentation qualifying (careless or deliberate/reckless)? Insurer bears burden of proving breach. Remedies proportionate: schedule to Act prescribes outcomes depending on what insurer would have done if truth known.' 
        },
        { 
          test: 'Proximate Cause Test', 
          application: 'Established in Leyland Shipping v Norwich Union [1918]: Loss must be proximately caused by insured peril. Court identifies dominant, effective cause using common sense analysis. Where multiple causes operate, apply Wayne Tank test: were causes concurrent, or was one cause merely the setting in which another operated? If peril insured against is proximate cause, insurer liable even if remote cause excluded.' 
        },
        { 
          test: 'Fraudulent Claims Test', 
          application: 'Following Versloot Dredging: (1) Was claim fraudulent (dishonest claim known to be false)? (2) Was fraud material to claim (would it affect insurer\'s liability or quantum)? (3) Was fraud collateral (lie about peripheral matter) or going to root of claim? Material fraud forfeits entire claim. Collateral fraud does not forfeit genuine loss component.' 
        }
      ];

      analysis.procedures = [
        'Claims notification: Notify insurer promptly within policy terms (typically 7-30 days). Provide initial details and preserve evidence. Insurer must acknowledge within 5 working days and provide claims handler contact (ICOBS 8.1).',
        'Insurer investigation: Insurer investigates claim, may appoint loss adjuster, engineer, or investigator. Policyholder must cooperate and provide reasonable information requested. Insurer must handle claims promptly and fairly (ICOBS 8).',
        'Insurer decision: Must be communicated clearly and promptly. If declining claim, must provide clear reasons citing policy terms and evidence. FCA DISP rules require final response within 8 weeks for complaints.',
        'Financial Ombudsman Service route: Free for consumers. Must complain to insurer first. If no resolution within 8 weeks, refer to FOS within 6 months of final response. FOS has discretion to award up to £415,000 (increased from £375,000 in 2023). Decision binding on insurer if accepted by consumer.',
        'County Court proceedings: Issue CPR Part 7 claim form. Track allocation depends on value (small claims up to £10,000). Pre-action correspondence essential. Consider Part 36 offers. Costs consequences significant in fast track and multi-track. Insurer may counterclaim for return of indemnity if fraud established.'
      ];

      analysis.evidenceStandards = 'Civil standard: balance of probabilities. Burden on claimant to prove: (1) valid policy in force; (2) loss occurred; (3) loss caused by insured peril; (4) quantum of loss. Burden shifts to insurer to prove: (a) exclusion applies; (b) warranty/condition precedent breached; (c) fraud or material misrepresentation. Documentary evidence essential: policy documents (including schedule and clauses), claims correspondence, photographs, receipts, expert reports (engineers, medical), third-party evidence. FOS operates inquisitorial system and may request documents from either party.';

      analysis.precedentPatterns = 'Courts interpret insurance contracts as commercial documents, applying ordinary rules of construction but with special considerations: (1) Ambiguities construed contra proferentem (against insurer); (2) Exclusions construed narrowly; (3) Business efficacy and reasonable expectations considered; (4) Technical terms given technical meaning unless context requires otherwise. Financial Ombudsman Service applies less legalistic approach, focusing on fair and reasonable outcome considering: relevant law, regulations, codes, and good industry practice. FOS can depart from strict legal position if unfair outcome would result. County Court judges typically follow precedent hierarchy but show reluctance to enforce harsh exclusions against consumers without clear, unambiguous wording.';

      analysis.keyTerminology = [
        { term: 'Utmost Good Faith (uberrimae fidei)', definition: 'Historical common law principle requiring parties to insurance contract to disclose all material facts. Reformed by Insurance Act 2015 (non-consumer) and Consumer Insurance (Disclosure and Representations) Act 2012 (consumer). Now replaced by duty of fair presentation and duty to take reasonable care respectively.' },
        { term: 'Material Fact', definition: 'Fact that would influence judgment of prudent insurer in deciding whether to accept risk or fixing premium. Test is objective (Drake Insurance). Applies to pre-contractual disclosure obligations. Includes every circumstance the insured knows or ought to know, or sufficient to put prudent insurer on notice.' },
        { term: 'Proximate Cause', definition: 'Dominant, effective cause of loss (causa proxima non remota spectatur - the immediate, not the remote cause, is to be regarded). If insured peril is proximate cause, insurer liable even if remote cause is excepted risk. Determined by applying common sense to facts (Leyland Shipping).' },
        { term: 'Contra Proferentem', definition: 'Principle of contractual interpretation that ambiguous terms construed against party who drafted them (typically insurer). Particularly applied to exclusion clauses. Insurer must use clear, unambiguous language if seeking to rely on exclusion.' },
        { term: 'Indemnity', definition: 'Fundamental principle of insurance law: insured may recover no more than actual loss suffered. Prevents profit from insurance. Measured differently depending on type of policy: reinstatement, market value, agreed value, or liability basis.' }
      ];
    }
    // Contract disputes
    else if (lowerScenario.includes('contract') || lowerScenario.includes('agreement')) {
      analysis.doctrines = [
        'The doctrine of offer and acceptance requires mirror-image acceptance of definite offer to create binding contract. Counter-offers destroy original offer (Hyde v Wrench (1840)). Battle of forms resolved by "last shot" doctrine or, increasingly, by identifying whether parties conducted themselves as if contract existed.',
        'Consideration must be sufficient but need not be adequate (Chappell & Co v Nestle [1960]). Past consideration is not valid consideration (Re McArdle [1951]). Consideration must move from promisee but need not move to promisor (Dunlop v Selfridge [1915]).',
        'The parol evidence rule prevents use of extrinsic evidence to contradict, vary, add to, or subtract from terms of written contract (Jacobs v Batavia [1924]). Entire agreement clauses commonly exclude representations not expressly incorporated.',
        'Terms may be implied by statute, custom, fact (to give business efficacy - The Moorcock (1889)), or law. The test for implying terms by fact is strict: necessity, not reasonableness (AG of Belize v Belize Telecom [2009]).',
        'The doctrine of fundamental breach permits termination only where breach goes to root of contract, depriving innocent party of substantially whole benefit (Hong Kong Fir Shipping v Kawasaki [1962]). Distinguish between conditions, warranties, and innominate terms.'
      ];

      analysis.caselaw = [
        { 
          name: 'Hadley v Baxendale', 
          citation: '(1854) 9 Ex 341', 
          principle: 'Damages for breach of contract limited to losses: (a) arising naturally from breach according to usual course of things; or (b) reasonably in contemplation of both parties at contract formation as probable result of breach. Remote losses not recoverable even if factually caused by breach.' 
        },
        { 
          name: 'British Westinghouse v Underground Electric Railways', 
          citation: '[1912] AC 673 (HL)', 
          principle: 'Claimant under duty to take reasonable steps to mitigate loss flowing from defendant\'s breach. Cannot recover for loss that reasonable mitigation would have avoided. Mitigation must be reasonable; claimant not required to take extraordinary measures. Burden on defendant to prove failure to mitigate.' 
        },
        { 
          name: 'Hong Kong Fir Shipping Co v Kawasaki Kisen Kaisha', 
          citation: '[1962] 2 QB 26 (CA)', 
          principle: 'Introduced category of innominate terms (intermediate terms). Whether breach of innominate term permits termination depends on gravity of consequences, not label attached to term. Only if breach deprives innocent party of substantially whole benefit of contract can party terminate.' 
        },
        { 
          name: 'Investors Compensation Scheme v West Bromwich BS', 
          citation: '[1998] 1 WLR 896 (HL)', 
          principle: 'Principles of contractual interpretation: (1) natural and ordinary meaning of words in context; (2) factual matrix known to parties excludes prior negotiations; (3) commercial common sense considered; (4) previous understanding of parties irrelevant; (5) no rigid rules, purpose is to ascertain objective intention.' 
        },
        { 
          name: 'Attorney General of Belize v Belize Telecom', 
          citation: '[2009] UKPC 10', 
          principle: 'Terms implied in fact only if necessary to give business efficacy or so obvious "goes without saying". Test is strict. Court does not improve contract or make it more reasonable. Term implied only if contract makes no sense without it, or parties would unhesitatingly agree if asked at formation.' 
        },
        { 
          name: 'Chapelton v Barry UDC', 
          citation: '[1940] 1 KB 532 (CA)', 
          principle: 'Exemption clauses must be incorporated into contract before or at time of formation. Reasonable notice required. Ticket or document must be of type reasonable person would expect to contain contractual terms. Timing crucial: clause on receipt issued after contract concluded cannot be incorporated.' 
        }
      ];

      analysis.legalTests = [
        { 
          test: 'Offer and Acceptance Test', 
          application: 'Courts examine chronology to identify offer (definite proposal capable of acceptance) and acceptance (unqualified agreement to exact terms). Invitation to treat (advertisements, displays, catalogues) distinguished from offers. Counter-offers destroy original offer. Acceptance must be communicated unless postal rule applies (instantaneous communications follow Entores v Miles Far East [1955]).' 
        },
        { 
          test: 'Consideration Test', 
          application: 'Valid consideration requires: (1) Something of value in eyes of law; (2) Movement from promisee; (3) Not past (unless within exception in Lampleigh v Braithwaite); (4) Sufficiency (some value) not adequacy (market value). Performance of existing duty may not be consideration unless exceeds existing duty (Williams v Roffey [1991]).' 
        },
        { 
          test: 'Remoteness Test (Hadley v Baxendale)', 
          application: 'Damages recoverable only if: (1) arising naturally from breach (first limb - ordinary course of things); or (2) within reasonable contemplation of both parties at contract formation (second limb - special circumstances communicated). Apply Victoria Laundry test: was loss of that type within reasonable contemplation? Precise quantum need not be contemplated, only type of loss.' 
        },
        { 
          test: 'Mitigation Test', 
          application: 'Defendant must prove claimant: (1) failed to take reasonable steps to mitigate; and (2) would have avoided loss if reasonable steps taken. Reasonableness judged objectively considering claimant\'s position. Impecuniosity no excuse. But claimant need not take extraordinary measures, incur substantial risk, or damage reputation.' 
        },
        { 
          test: 'Repudiatory Breach Test', 
          application: 'Breach permits termination only if: (1) breach of condition (term going to root of contract); or (2) breach of innominate term depriving innocent party of substantially whole benefit (Hong Kong Fir test). Mere breach of warranty gives damages only. Innocent party must elect to accept repudiation; contract continues until election made.' 
        }
      ];

      analysis.procedures = [
        'Pre-action Protocol for Debt Claims or Practice Direction on Pre-Action Conduct applies. Send letter before claim identifying: (1) parties; (2) contract; (3) breach alleged; (4) loss claimed; (5) proposed remedy. Minimum 14 days for response (straightforward) or 30 days (complex). Failure to comply may result in costs sanctions.',
        'Alternative Dispute Resolution encouraged by courts. CPR 1.4(2)(e) requires court to encourage ADR. Unreasonable refusal to mediate may attract adverse costs order (Halsey v Milton Keynes [2004]). Consider Part 36 offers with costs consequences.',
        'Issue County Court Claim Form N1 (or High Court N1 if value over £100,000 or claim involves complexity). Pay court fee (£35 to £10,000 depending on claim value). Serve on defendant within 4 months of issue.',
        'Defendant serves acknowledgment of service within 14 days, defence within 28 days (or 42 days if acknowledgment filed). Claimant may file reply. Court allocates to track: small claims (up to £10,000), fast track (£10,000-£25,000), multi-track (over £25,000).',
        'Directions issued for track allocated. Disclosure under CPR Part 31, exchange of witness statements (CPR Part 32), expert evidence if permitted (CPR Part 35), pre-trial review, trial. Judgment and enforcement if successful.'
      ];

      analysis.evidenceStandards = 'Civil standard: balance of probabilities. Burden on claimant to prove: (1) contract formation (offer, acceptance, consideration, intention to create legal relations); (2) terms (express and implied); (3) breach; (4) causation; (5) loss. Parol evidence rule restricts extrinsic evidence for interpretation. Documentary evidence critical: written contracts, correspondence evidencing agreement, invoices, delivery notes, specifications. Witness evidence for oral contracts or disputed facts. Expert evidence for technical matters (with court permission under CPR Part 35).';

      analysis.precedentPatterns = 'County Court judges apply orthodox principles of contract formation, construction, and breach. Entire agreement clauses generally upheld unless fraud or misrepresentation. Courts interpret contracts objectively using ICS v West Bromwich principles, considering factual matrix and commercial purpose. Exclusion clauses subjected to strict construction and statutory controls (Unfair Contract Terms Act 1977 for business-to-business; Consumer Rights Act 2015 for business-to-consumer). Small claims track encourages pragmatic, proportionate approach with limited formality. Fast track and multi-track apply stricter procedural requirements and case management. Part 36 offers create strong incentive to settle: claimant who fails to beat defendant\'s offer may be penalised in costs.';

      analysis.keyTerminology = [
        { term: 'Consideration', definition: 'Something of value in the eye of law given in exchange for promise. Essential element of binding contract. Must be sufficient (some value) but need not be adequate (market value). Must move from promisee. Past consideration generally invalid.' },
        { term: 'Repudiatory Breach', definition: 'Breach so serious it goes to root of contract, entitling innocent party to terminate (accept repudiation) and claim damages. Breach of condition or breach of innominate term depriving party of substantially whole benefit of contract. Innocent party may instead elect to affirm.' },
        { term: 'Remoteness', definition: 'Principle limiting damages to losses not too remote from breach. Hadley v Baxendale test: losses recoverable if (a) arising naturally; or (b) within reasonable contemplation of parties at contract formation. Applies type of loss test, not quantum.' },
        { term: 'Mitigation', definition: 'Duty on claimant to take reasonable steps to minimise loss following breach. Cannot recover for loss reasonable mitigation would have avoided. Burden on defendant to prove failure to mitigate. Standard is reasonableness, not perfection.' },
        { term: 'Entire Agreement Clause', definition: 'Contractual term providing that written contract contains entire agreement and no other representations or terms apply. Generally upheld. Excludes collateral warranties and prior representations. Does not exclude liability for fraudulent misrepresentation.' }
      ];
    }
    // Consumer matters
    else if (lowerScenario.includes('consumer') || lowerScenario.includes('product') || lowerScenario.includes('refund')) {
      analysis.doctrines = [
        'Statutory implied terms under Consumer Rights Act 2015 ss.9-11: goods must be (a) of satisfactory quality; (b) fit for particular purpose; (c) as described. These terms cannot be excluded or restricted (s.31). Apply to all consumer contracts for goods.',
        'Short-term right to reject under CRA 2015 s.22: consumer entitled to reject goods and obtain full refund within 30 days if breach of ss.9, 10, or 11. Time runs from delivery, not contract formation. Exercise of right terminates contract.',
        'Hierarchy of remedies under CRA 2015 ss.23-24: After 30 days, consumer loses absolute right to reject. Must first request repair or replacement (trader\'s choice unless disproportionate). Only after one repair or replacement can consumer reject or claim price reduction.',
        'Presumption of conformity under s.19(14): if fault appears within 6 months of delivery, goods presumed faulty at delivery unless trader proves otherwise. Burden of proof critical: within 6 months claimant proves defect, trader must prove conformity; after 6 months claimant must prove defect existed at delivery.',
        'Unfair contract terms regime under CRA 2015 Part 2: terms causing significant imbalance in parties\' rights to consumer\'s detriment are unfair and not binding. Transparent core terms on main subject matter and price excluded. Grey list in Schedule 2 indicates potentially unfair terms.'
      ];

      analysis.caselaw = [
        { 
          name: 'Bramhill v Edwards', 
          citation: '[2004] EWCA Civ 403', 
          principle: 'Satisfactory quality assessed objectively against standard reasonable person would regard as satisfactory, taking account of: (a) description; (b) price; (c) other relevant circumstances (s.9(2)). Includes fitness for common purposes, appearance, finish, freedom from minor defects, safety, durability. Higher price commands higher standard.' 
        },
        { 
          name: 'Jewson Ltd v Boyhan', 
          citation: '[2003] EWCA Civ 1030', 
          principle: 'For goods to be fit for particular purpose under s.10, consumer must make purpose known to trader (expressly or impliedly). Purpose must be specific, not merely common purpose covered by satisfactory quality. Trader must have opportunity to disclaim fitness or advise on suitability.' 
        },
        { 
          name: 'Director General of Fair Trading v First National Bank', 
          citation: '[2001] UKHL 52', 
          principle: 'Unfair terms test requires assessment of: (1) significant imbalance in rights; (2) contrary to good faith; (3) detriment to consumer. Core terms excluded if transparent and prominent. Schedule 2 grey list indicative, not exhaustive. Assessment at time of contract formation, considering all circumstances.' 
        },
        { 
          name: 'Clegg v Andersson', 
          citation: '[2003] EWCA Civ 320', 
          principle: 'Right to reject may be lost if: (a) intimated acceptance (s.35 Sale of Goods Act, now CRA s.22); (b) acted inconsistently with seller\'s ownership; (c) retained goods after reasonable opportunity to examine. But mere lapse of time without other factors does not constitute acceptance within 30-day window.' 
        },
        { 
          name: 'McDonald v Empire Garage', 
          citation: '1975 SLT 191', 
          principle: 'Minor defects may not render goods unsatisfactory if, taking contract as a whole, goods substantially conform to contract description and are usable for intended purpose. De minimis principle applies. Assessment contextual: what is minor in expensive luxury car may not be minor in economy vehicle.' 
        }
      ];

      analysis.legalTests = [
        { 
          test: 'Satisfactory Quality Test (CRA 2015 s.9)', 
          application: 'Objective standard: would reasonable person regard goods as satisfactory considering: (1) description given; (2) price paid; (3) other relevant circumstances? Court assesses: fitness for common purposes, appearance, finish, freedom from minor defects, safety, durability (s.9(3)). Higher price = higher standard. Public statements (advertising) relevant. Aesthetic defects may breach if affect fitness for purpose.' 
        },
        { 
          test: 'Fitness for Particular Purpose Test (CRA 2015 s.10)', 
          application: 'Applies where: (1) consumer makes specific purpose known to trader (expressly or by implication); (2) circumstances show consumer relies on trader\'s skill and judgment; (3) reliance is reasonable. Purpose must be sufficiently specific. Trader may disclaim fitness if done clearly before contract. Partial reliance possible (consumer partly relies on own judgment).' 
        },
        { 
          test: 'Short-term Right to Reject Test (CRA 2015 s.22)', 
          application: 'Consumer may reject and recover full refund if: (1) breach of s.9, 10, or 11; (2) within 30 days of delivery (or completion for supply of goods over time); (3) has not intimated acceptance or acted inconsistently with trader\'s ownership. Rejection terminates contract. Consumer must make available for collection but need not return at own expense unless agreed.' 
        },
        { 
          test: 'Unfair Terms Test (CRA 2015 s.62)', 
          application: 'Term unfair if: (1) contrary to requirement of good faith; (2) causes significant imbalance in rights; (3) to detriment of consumer. Excluded: terms on main subject matter or price if transparent and prominent. Assessment considers: nature of goods/services, circumstances at conclusion, other contract terms, terms of related contracts. Schedule 2 grey list provides guidance.' 
        }
      ];

      analysis.procedures = [
        'Initial complaint to retailer: Notify in writing of defect and desired remedy (repair, replacement, or refund). Within 30 days, absolute right to reject. After 30 days, must first allow one repair or replacement attempt. Keep evidence: receipt, product, packaging, photographs of defect.',
        'Retailer internal complaint procedure: Most retailers have formal complaint process. Escalate through customer services, then complaints department. Request final response letter. Typical timeframe 14-30 days.',
        'Alternative Dispute Resolution: Many sectors have certified ADR providers approved under ADR Directive. Free or low cost. Examples: Retail ADR, CEDR, ProMediate. Trader should inform consumer of ADR option. Voluntary but encouraged.',
        'Trading Standards referral: Local authority Trading Standards may investigate criminal offences under Consumer Protection from Unfair Trading Regulations 2008. Can lead to prosecution but does not provide civil remedy for consumer. Useful for evidence if civil claim follows.',
        'County Court small claims track: Claim for up to £10,000. Issue Claim Form N1, fee £35-£455. Informal procedure, no lawyers required. Limited cost recovery. Judge adopts inquisitorial role. Typical hearing 3-9 months after issue. CRA 2015 claims straightforward as statutory implied terms cannot be excluded.'
      ];

      analysis.evidenceStandards = 'Civil standard: balance of probabilities. Within 6 months of delivery: consumer proves defect exists, trader must prove goods conformed at delivery (s.19(14) presumption). After 6 months: consumer must prove goods did not conform at delivery. Evidence requirements: (1) proof of purchase (receipt, bank statement, invoice); (2) proof of defect (photographs, independent inspection report, expert evidence); (3) timeline (when defect appeared); (4) causation (defect was present at delivery, not caused by misuse). Burden shifts: claimant proves breach of statutory right; trader must prove alternative cause if relying on exclusion or exemption.';

      analysis.precedentPatterns = 'County Court judges apply CRA 2015 strictly: statutory rights cannot be contracted out. Small claims judges adopt purposive interpretation favouring consumer protection objectives. Terms purporting to exclude or restrict ss.9-11 automatically void (s.31). Unfair terms assessed using First National Bank test but with consumer-protective interpretation. Schedule 2 grey list terms (e.g., excluding liability, binding consumer but not trader, penalty clauses) heavily scrutinised. Transparent, prominent price and main subject matter terms respected. Traders cannot rely on "no refunds" policies contrary to statutory rights. Online distance sales attract additional rights under Consumer Contracts Regulations 2013 (14-day cancellation period). Courts encourage ADR and proportionate resolution given small claims cost limitations.';

      analysis.keyTerminology = [
        { term: 'Satisfactory Quality', definition: 'Statutory standard under CRA 2015 s.9: goods meet standard reasonable person would regard as satisfactory considering description, price, and circumstances. Includes: fitness for common purposes, appearance, finish, freedom from minor defects, safety, durability. Objective test. Price-sensitive standard.' },
        { term: 'Short-term Right to Reject', definition: 'Absolute right under CRA 2015 s.22 to reject goods and obtain full refund within 30 days of delivery if breach of ss.9, 10, or 11. Time period non-extendable except for hire purchase. Exercise terminates contract. Consumer must make goods available but need not return at own expense.' },
        { term: 'Final Right to Reject', definition: 'Right under CRA 2015 s.24 to reject after one repair or replacement attempt fails, or if repair/replacement impossible or disproportionate, or not completed within reasonable time. Consumer may claim: (a) refund (with deduction for use); or (b) price reduction. Terminates contract.' },
        { term: 'Grey List Terms', definition: 'Schedule 2 CRA 2015 lists 20 types of terms that may be unfair. Indicative, not exhaustive. Includes: excluding liability, binding consumer but not trader, penalties, restricting evidence, restricting legal rights. Term on list not automatically unfair but presumptively problematic.' },
        { term: '6-Month Presumption', definition: 'CRA 2015 s.19(14): if fault appears within 6 months, goods presumed faulty at delivery unless trader proves conformity. Reverses burden of proof. Critical for claims: within 6 months consumer proves defect exists; trader must prove goods were conforming. After 6 months burden fully on consumer.' }
      ];
    }
    // Motor vehicle
    else if (lowerScenario.includes('accident') || lowerScenario.includes('vehicle') || lowerScenario.includes('car')) {
      analysis.doctrines = [
        'The tort of negligence requires: (1) duty of care owed to claimant; (2) breach of that duty by falling below standard of reasonable person; (3) breach caused damage; (4) damage not too remote. Established in Donoghue v Stevenson [1932] AC 562.',
        'All road users owe duty of care to other road users and third parties reasonably foreseeable to be affected by their driving (Nettleship v Weston [1971]). Standard is objective: reasonable competent driver, not beginner or learner standard.',
        'Contributory negligence under Law Reform (Contributory Negligence) Act 1945 allows apportionment of liability where claimant partly at fault. Damages reduced to extent just and equitable having regard to claimant\'s share of responsibility.',
        'The rule in Rylands v Fletcher may apply to escape of dangerous things from land (e.g., vehicle rolling from driveway). Strict liability subject to defences of act of God, act of stranger, statutory authority, consent.',
        'Vicarious liability: employer liable for employee\'s torts committed in course of employment (Lister v Hesley Hall [2001]). Extends to close connection test. Relevant where driver acting in employment capacity.'
      ];

      analysis.caselaw = [
        { 
          name: 'Donoghue v Stevenson', 
          citation: '[1932] AC 562 (HL)', 
          principle: 'Foundational case establishing modern duty of care. Neighbour principle: duty owed to persons so closely and directly affected by acts that one ought reasonably to have them in contemplation. Applies to all road users: drivers owe duty to other drivers, pedestrians, cyclists, passengers.' 
        },
        { 
          name: 'Nettleship v Weston', 
          citation: '[1971] 2 QB 691 (CA)', 
          principle: 'Standard of care is objective: reasonable competent driver, not learner or beginner standard. Learner driver held to same standard as experienced driver. Instructor or supervisor may owe duty to third parties to prevent learner\'s negligence. Breach assessed objectively regardless of driver\'s experience or skill level.' 
        },
        { 
          name: 'Froom v Butcher', 
          citation: '[1976] QB 286 (CA)', 
          principle: 'Contributory negligence applies where claimant\'s conduct contributed to damage even if not to accident itself. Failure to wear seatbelt: 25% reduction if would have prevented injury, 15% if would have reduced injury. Failure to wear motorcycle helmet: up to 25% reduction. Apportionment just and equitable.' 
        },
        { 
          name: 'Bolton v Stone', 
          citation: '[1951] AC 850 (HL)', 
          principle: 'Defendant liable only for reasonably foreseeable risks. Test: would reasonable person in defendant\'s position have foreseen risk? Mere possibility of harm insufficient; must be real or material risk. Magnitude of risk, cost of prevention, utility of activity all relevant (Overseas Tankship v Morts Dock - The Wagon Mound).' 
        },
        { 
          name: 'Barnett v Chelsea & Kensington Hospital', 
          citation: '[1969] 1 QB 428', 
          principle: 'Causation requires "but for" test: but for defendant\'s breach, would damage have occurred? Claimant must prove breach caused damage on balance of probabilities. If damage would have occurred anyway, causation fails. Applies factual causation. Legal causation asks whether damage too remote (Wagon Mound test).' 
        },
        { 
          name: 'Baker v Willoughby', 
          citation: '[1970] AC 467 (HL)', 
          principle: 'Successive causes: claimant may recover full damages from first tortfeasor even if subsequent event contributes to loss. First tortfeasor cannot argue later event would have caused damage anyway. Controversial; later modified by Jobling v Associated Dairies [1982] which distinguished tortious from non-tortious subsequent causes.' 
        }
      ];

      analysis.legalTests = [
        { 
          test: 'Duty of Care Test (Caparo v Dickman)', 
          application: 'Three-stage test: (1) Was damage reasonably foreseeable? (2) Was there sufficient proximity between parties? (3) Is it fair, just, and reasonable to impose duty? In road traffic cases, duty almost always satisfied: drivers owe duty to all other road users. Foreseeability and proximity inherent in nature of driving.' 
        },
        { 
          test: 'Breach of Duty Test (Reasonable Driver Standard)', 
          application: 'Objective standard: would reasonable competent driver have acted thus? Court considers: (1) magnitude of risk; (2) cost/practicability of precautions; (3) utility of activity; (4) circumstances (weather, visibility, road conditions). Highway Code breaches not automatically negligent but strong evidence (Road Traffic Act 1988 s.38(7)). Speed limits, traffic signals, give-way rules highly relevant.' 
        },
        { 
          test: 'Causation Test (But-For and Remoteness)', 
          application: 'Factual causation (but-for test): would damage have occurred but for breach? Claimant must prove on balance of probabilities. Legal causation (remoteness): was damage of a type reasonably foreseeable (Wagon Mound)? Precise manner of occurrence need not be foreseeable. Thin skull rule: take victim as found (Smith v Leech Brain). Intervening acts may break chain (novus actus interveniens) if unforeseeable.' 
        },
        { 
          test: 'Contributory Negligence Test (LR(CN)A 1945)', 
          application: 'Court assesses: (1) Did claimant fail to take reasonable care for own safety? (2) Did failure contribute to damage (not necessarily to accident)? (3) What is just and equitable apportionment? Examples: failure to wear seatbelt, driving above speed limit, using mobile phone, poor visibility precautions. Apportionment ranges 0-100%. Common apportionments: 50/50 equal fault; 75/25 or 80/20 where one party primarily at fault.' 
        }
      ];

      analysis.procedures = [
        'Immediate obligations under Road Traffic Act 1988 s.170: (a) stop; (b) exchange name, address, vehicle registration; (c) if injury caused or not practicable to exchange, report to police within 24 hours. Failure criminal offence. Obtain other driver details, insurance, witnesses, photographs.',
        'Insurer notification: Notify own insurer within policy timeframe (typically 7-14 days). Provide incident details, other party information, photographs, witness details. Breach of notification clause may prejudice cover but insurer must prove prejudice (Farrell v Federated Employers Insurance [1970]).',
        'Pre-action correspondence: Letter before claim under Pre-Action Protocol for Low Value RTA Claims (adapted for property damage). Send to at-fault driver and their insurer. Details: parties, incident, liability allegation, damage description, quantum, evidence. 21 days for response typically.',
        'Negotiation period: Insurers negotiate liability and quantum. Engineer inspections, repair estimates. Aim to settle without proceedings. Consider Part 36 offers. Settlement agreements usually full and final.',
        'County Court proceedings if settlement fails: Issue Claim Form N1. Small claims track (up to £10,000) or fast track (£10,000-£25,000). Track allocation determines cost recovery. Small claims: limited costs, informal. Fast track: costs follow event, stricter procedure. Trial 3-18 months depending on track and court workload.'
      ];

      analysis.evidenceStandards = 'Civil standard: balance of probabilities. Claimant must prove: (1) duty of care (usually admitted); (2) breach (defendant driving fell below reasonable standard); (3) causation (breach caused damage); (4) quantum (value of damage). Critical evidence: (a) photographs of scene, vehicles, road conditions; (b) police report (if attended); (c) witness statements (independent preferred); (d) engineer\'s report on damage and repair costs; (e) CCTV or dashcam footage; (f) weather/visibility data; (g) vehicle repair estimates or invoices; (h) hire car invoices if applicable. Burden of proof for contributory negligence on defendant. Highway Code breaches create evidential presumption of negligence requiring explanation.';

      analysis.precedentPatterns = 'County Court judges apply standard negligence principles. Liability often admitted where Highway Code breach clear (e.g., rear-end collision, red light running, give-way failure). Disputed liability cases turn on credibility and corroborative evidence (photos, witnesses, dashcam). Contributory negligence commonly pleaded and applied: typical reductions 10-50% depending on culpability. Small claims track encourages pragmatic approach: judges may apportion 50/50 where evidence unclear rather than dismissing claim. Engineers\' reports influential on causation (which damage caused by incident versus pre-existing). Quantum based on reasonable repair costs (not necessarily cheapest quote). Betterment principle: deduction if repairs improve vehicle beyond pre-accident condition. Hire car costs scrutinised: must be reasonable and necessary.';

      analysis.keyTerminology = [
        { term: 'Duty of Care', definition: 'Legal obligation to avoid causing foreseeable harm to others. Donoghue v Stevenson neighbour principle: owe duty to persons so closely affected one ought reasonably have them in contemplation. Road users owe duty to all other road users and pedestrians.' },
        { term: 'Breach of Duty', definition: 'Falling below standard of reasonable person (objective test). In driving context: standard of reasonable competent driver (Nettleship v Weston). Highway Code breaches evidentially significant. Factors: risk magnitude, precaution cost, activity utility, circumstances.' },
        { term: 'Causation', definition: 'Link between breach and damage. Factual causation: but-for test (would damage have occurred but for breach?). Legal causation: remoteness (was damage type reasonably foreseeable - Wagon Mound test?). Both must be satisfied on balance of probabilities.' },
        { term: 'Contributory Negligence', definition: 'Partial defence reducing damages where claimant contributed to own damage. Law Reform (Contributory Negligence) Act 1945 s.1: apportionment just and equitable. Examples: not wearing seatbelt, speeding, inattention. Apportionment percentage reflects share of responsibility.' },
        { term: 'Res Ipsa Loquitur', definition: 'The thing speaks for itself. Evidential principle: where accident of type that does not normally occur without negligence, and instrumentality under defendant\'s control, negligence may be inferred. Burden shifts to defendant to provide innocent explanation. Example: vehicle crossing into oncoming traffic without explanation.' }
      ];
    }
    // General civil
    else {
      analysis.doctrines = [
        'The overriding objective under CPR 1.1 requires courts to deal with cases justly and at proportionate cost. Includes: equality of arms, saving expense, proportionality, expedition, fair allocation of resources. Parties must assist court in furthering this objective.',
        'Pre-action protocols aim to resolve disputes without litigation. Sanctions for non-compliance include: costs penalties, adverse inferences, limitation of evidence, stay of proceedings, striking out. Practice Direction on Pre-Action Conduct applies where no specific protocol.',
        'Alternative Dispute Resolution encouraged at all stages. Unreasonable refusal to engage in ADR may result in costs sanctions even for successful party (Halsey v Milton Keynes [2004]).',
        'Part 36 offers to settle create costs consequences. If claimant fails to beat defendant\'s offer, may be penalised in costs and interest even if successful. If claimant beats own offer, entitled to indemnity costs and enhanced interest.',
        'Limitation periods under Limitation Act 1980: tort claims 6 years from accrual (3 years personal injury); contract claims 6 years from breach; speciality (deed) 12 years. Time may be extended for disability, fraud, or discretion in personal injury.'
      ];

      analysis.caselaw = [
        { 
          name: 'Donoghue v Stevenson', 
          citation: '[1932] AC 562 (HL)', 
          principle: 'Foundational case establishing modern tort of negligence and duty of care. Neighbour principle: owe duty to persons so closely and directly affected by acts that one ought reasonably have them in contemplation. Applies to manufacturers and product liability but principle extends across negligence law.' 
        },
        { 
          name: 'Bolitho v City & Hackney HA', 
          citation: '[1998] AC 232 (HL)', 
          principle: 'Causation in negligence requires claimant to prove on balance of probabilities that but for defendant\'s breach, damage would not have occurred. Burden on claimant throughout. Hypothetical actions (what would have happened if duty fulfilled) assessed objectively, not on defendant\'s assertion. Applies Bolam test for professional standard.' 
        },
        { 
          name: 'Denton v TH White Ltd', 
          citation: '[2014] EWCA Civ 906', 
          principle: 'Three-stage test for relief from sanctions under CPR 3.9: (1) identify seriousness of breach; (2) why did default occur; (3) evaluate all circumstances including two considerations - need for litigation to be conducted efficiently and at proportionate cost, and need to enforce compliance with rules. Court takes strict approach to non-compliance.' 
        },
        { 
          name: 'Halsey v Milton Keynes General NHS Trust', 
          citation: '[2004] EWCA Civ 576', 
          principle: 'Courts cannot compel unwilling party to mediate (violates Article 6 ECHR). But unreasonable refusal to attempt ADR may incur costs sanctions. Factors indicating unreasonableness: nature of dispute, merits, other settlement attempts, costs, delay, whether mediation had reasonable prospect of success. Burden on unsuccessful party to show successful party acted unreasonably.' 
        },
        { 
          name: 'Three Rivers DC v Bank of England (No 3)', 
          citation: '[2003] 2 AC 1 (HL)', 
          principle: 'Statements of case must contain concise statement of facts relied on (CPR 16). Facts, not evidence. Must plead material facts, not every piece of evidence. Sufficient detail to enable opponent to know case to meet. Distinction between facts (pleaded), evidence (proved at trial), and law (submissions).' 
        }
      ];

      analysis.legalTests = [
        { 
          test: 'Balance of Probabilities Test', 
          application: 'Civil standard of proof: claimant must prove case more likely than not (>50% probability). Applies to all facts in issue. Lower than criminal standard (beyond reasonable doubt). Burden generally on claimant for primary facts; defendant for defences, contributory negligence, mitigation failure. Some facts (e.g., fraud) require cogent evidence but standard remains balance of probabilities.' 
        },
        { 
          test: 'Proportionality Test (CPR 1.1)', 
          application: 'Court considers whether: (1) steps taken proportionate to value, importance, complexity; (2) costs incurred proportionate to matters in issue; (3) case management directions proportionate. Disproportionate applications refused. Excessive costs disallowed on assessment. Track allocation ensures procedure matches claim value. Small claims informal; multi-track detailed.' 
        },
        { 
          test: 'Pre-Action Compliance Test', 
          application: 'Courts assess whether parties: (1) identified and complied with relevant protocol; (2) if no protocol, followed Practice Direction on Pre-Action Conduct; (3) exchanged sufficient information to understand issues; (4) considered ADR; (5) acted reasonably to resolve dispute. Sanctions for non-compliance: costs orders, stay of proceedings, adverse evidential inferences, striking out in extreme cases.' 
        },
        { 
          test: 'Part 36 Offers Test', 
          application: 'Formal settlement offers under CPR Part 36 create costs consequences. If claimant fails to beat defendant\'s Part 36 offer at trial: liable for defendant\'s costs from 21 days after offer. If claimant beats own Part 36 offer: entitled to indemnity costs, interest on costs, enhanced interest on damages (up to 10%). Offers must comply strictly with CPR 36.5 formalities.' 
        }
      ];

      analysis.procedures = [
        'Pre-action phase: Identify and comply with relevant Pre-Action Protocol or Practice Direction on Pre-Action Conduct. Send letter before claim. Allow reasonable time for response (14-90 days depending on protocol and complexity). Exchange documents and information. Consider ADR. Stocktake meeting if complex.',
        'Issue of proceedings: Complete Claim Form N1 (County Court or High Court depending on value/complexity). Pay court fee (£35 to £10,000 based on claim value). Particulars of Claim may be included on Form or served separately within 14 days. Serve on defendant within 4 months of issue (6 months if serving outside jurisdiction).',
        'Acknowledgment and Defence: Defendant files acknowledgment of service within 14 days of service (extends time for defence to 28 days). Defence filed within 14 days (no acknowledgment) or 28 days (if acknowledgment filed). Claimant may file reply within 14 days. Automatic transfer to defendant\'s home court if defence filed (claim under £10,000).',
        'Track allocation: Court issues allocation questionnaire. Parties complete and return (with fee if applicable) within 14 days. Court allocates to: small claims track (up to £10,000, £1,000 personal injury), fast track (£10,000-£25,000), multi-track (over £25,000 or complex). Different procedures and cost rules for each track.',
        'Case management and trial: Directions given for track. Disclosure (CPR Part 31), witness statements (CPR Part 32), expert evidence if permitted (CPR Part 35), pre-trial review, trial. Judgment, costs assessment, enforcement if successful.'
      ];

      analysis.evidenceStandards = 'Civil standard: balance of probabilities. Burden of proof generally on claimant for primary facts establishing cause of action. Burden shifts to defendant for: defences (limitation, exclusion), contributory negligence, failure to mitigate, set-off. Documentary evidence: contemporaneous documents preferred (contracts, invoices, correspondence, photographs with metadata). Witness evidence: witness statements exchanged pre-trial, witnesses attend for cross-examination. Hearsay admissible (Civil Evidence Act 1995) but weight may be reduced. Expert evidence requires court permission (CPR Part 35); expert\'s duty to court overrides duty to instructing party. Disclosure obligations under CPR Part 31: standard disclosure requires party to disclose documents on which it relies, which adversely affect its case or another party\'s case, or which support another party\'s case.';

      analysis.precedentPatterns = 'County Court and High Court judges apply orthodox legal principles depending on cause of action (contract, tort, statutory). Precedent hierarchy applies: Supreme Court binds all lower courts; Court of Appeal binds High Court and County Court; High Court decisions persuasive. Judges emphasise compliance with CPR and pre-action protocols: non-compliance attracts sanctions. Part 36 regime creates strong settlement incentives. Small claims track informal, judge-led, limited costs recovery. Fast track: costs summarily assessed, proportionality emphasised, trial limited to one day. Multi-track: detailed case management, costs assessed if not agreed, phased disclosure, split trials on liability/quantum if appropriate. ADR encouraged throughout. Denton approach to relief from sanctions: strict but not inflexible. Covid-19 accelerated remote hearings; now permanent option for many applications and trials.';

      analysis.keyTerminology = [
        { term: 'Balance of Probabilities', definition: 'Civil standard of proof. Claimant must prove case more likely true than not (>50% probability). Lower than criminal standard (beyond reasonable doubt). Burden generally on claimant for primary facts; defendant for defences and exceptions.' },
        { term: 'CPR (Civil Procedure Rules)', definition: 'Procedural code governing civil litigation in England & Wales. Came into force 1999, replacing Rules of Supreme Court. Supplemented by Practice Directions, Pre-Action Protocols, Court Guides. Overriding objective (CPR 1.1): deal with cases justly and at proportionate cost.' },
        { term: 'Part 36 Offer', definition: 'Formal settlement offer under CPR Part 36 with costs consequences. If offeree fails to beat offer at trial, pays offeror\'s costs from 21 days after offer. Strict formalities under CPR 36.5. Can be made by claimant or defendant. Creates powerful settlement incentive.' },
        { term: 'Disclosure', definition: 'Obligation under CPR Part 31 to reveal existence of relevant documents to other parties. Standard disclosure requires disclosure of: documents on which party relies, documents adversely affecting own/another\'s case, documents supporting another\'s case. Continuing obligation. Failure sanctions include adverse inferences, striking out.' },
        { term: 'Track Allocation', definition: 'Assignment of case to procedural track determining rules, costs, and formality. Small claims (up to £10,000): informal, limited costs. Fast track (£10,000-£25,000): summary costs assessment, trial limited to one day. Multi-track (over £25,000): detailed case management, costs assessed if not agreed.' }
      ];
    }

    return analysis;
  };

  const analysis = generateLegalAnalysis();

  return (
    <div>
      {/* Jurisdiction Notice */}
      <div 
        className="rounded-xl"
        style={{ 
          background: 'rgba(7, 60, 101, 0.06)',
          padding: '1rem',
          border: '1px solid rgba(7, 60, 101, 0.12)',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem'
        }}
      >
        <Info 
          style={{ 
            width: '18px', 
            height: '18px', 
            flexShrink: 0,
            marginTop: '0.125rem',
            color: '#073C65'
          }} 
        />
        <p 
          style={{ 
            fontSize: '0.8125rem', 
            color: '#073C65', 
            lineHeight: '1.6',
            fontWeight: 500
          }}
        >
          <strong>Jurisdiction:</strong> All legal principles, case law, and procedures referenced apply to <strong>England & Wales only</strong>. This is general legal information, not legal advice.
        </p>
      </div>

      {/* Legal Doctrines */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 
          className="text-navy"
          style={{ 
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <BookOpen style={{ width: '18px', height: '18px' }} className="text-gold" />
          Applicable Legal Doctrines and Principles
        </h3>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem',
          paddingLeft: '1.75rem'
        }}>
          {analysis.doctrines.map((doctrine, index) => (
            <div 
              key={index} 
              style={{ 
                paddingLeft: '1rem',
                borderLeft: '3px solid #D49E37'
              }}
            >
              <p 
                className="text-grey-dark"
                style={{ 
                  fontSize: '0.9375rem',
                  lineHeight: '1.7'
                }}
              >
                {doctrine}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Case Law */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 
          className="text-navy"
          style={{ 
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Scale style={{ width: '18px', height: '18px' }} className="text-gold" />
          Relevant Case Law (England & Wales)
        </h3>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.25rem',
          paddingLeft: '1.75rem'
        }}>
          {analysis.caselaw.map((caseitem, index) => (
            <div 
              key={index}
              className="rounded-xl"
              style={{ 
                background: 'rgba(7, 60, 101, 0.04)',
                padding: '1.25rem',
                border: '1px solid rgba(7, 60, 101, 0.1)'
              }}
            >
              <h4 
                className="text-navy"
                style={{ 
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  marginBottom: '0.375rem'
                }}
              >
                {caseitem.name}
              </h4>
              <p 
                className="text-grey-medium"
                style={{ 
                  fontSize: '0.8125rem',
                  marginBottom: '0.625rem',
                  fontStyle: 'italic'
                }}
              >
                {caseitem.citation}
              </p>
              <p 
                className="text-grey-dark"
                style={{ 
                  fontSize: '0.9375rem',
                  lineHeight: '1.7'
                }}
              >
                {caseitem.principle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Tests */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 
          className="text-navy"
          style={{ 
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <TestTube style={{ width: '18px', height: '18px' }} className="text-gold" />
          Legal Tests Applied by Courts
        </h3>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.25rem',
          paddingLeft: '1.75rem'
        }}>
          {analysis.legalTests.map((test, index) => (
            <div key={index}>
              <h4 
                className="text-navy"
                style={{ 
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}
              >
                {test.test}
              </h4>
              <p 
                className="text-grey-dark"
                style={{ 
                  fontSize: '0.875rem',
                  lineHeight: '1.7'
                }}
              >
                {test.application}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Procedural Pathways */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 
          className="text-navy"
          style={{ 
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Gavel style={{ width: '18px', height: '18px' }} className="text-gold" />
          Procedural Framework
        </h3>
        <ol style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem',
          paddingLeft: '1.75rem',
          counterReset: 'procedure-counter'
        }}>
          {analysis.procedures.map((procedure, index) => (
            <li 
              key={index} 
              style={{ 
                display: 'flex', 
                gap: '0.875rem',
                counterIncrement: 'procedure-counter'
              }}
            >
              <div 
                className="rounded-full bg-navy text-white"
                style={{
                  flexShrink: 0,
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  fontWeight: 600
                }}
              >
                {index + 1}
              </div>
              <p 
                className="text-grey-dark"
                style={{ 
                  fontSize: '0.9375rem',
                  paddingTop: '0.25rem',
                  lineHeight: '1.7'
                }}
              >
                {procedure}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Evidence Standards */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 
          className="text-navy"
          style={{ 
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <FileCheck style={{ width: '18px', height: '18px' }} className="text-gold" />
          Evidence Standards and Burden of Proof
        </h3>
        <div 
          className="rounded-xl"
          style={{ 
            background: 'rgba(7, 60, 101, 0.04)',
            padding: '1.25rem',
            border: '1px solid rgba(7, 60, 101, 0.1)',
            marginLeft: '1.75rem'
          }}
        >
          <p 
            className="text-grey-dark"
            style={{ 
              fontSize: '0.9375rem',
              lineHeight: '1.7'
            }}
          >
            {analysis.evidenceStandards}
          </p>
        </div>
      </div>

      {/* Precedent Patterns */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 
          className="text-navy"
          style={{ 
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Lightbulb style={{ width: '18px', height: '18px' }} className="text-gold" />
          Judicial Approach and Precedent Patterns
        </h3>
        <p 
          className="text-grey-dark"
          style={{ 
            fontSize: '0.9375rem',
            lineHeight: '1.7',
            paddingLeft: '1.75rem'
          }}
        >
          {analysis.precedentPatterns}
        </p>
      </div>

      {/* Key Legal Terminology */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 
          className="text-navy"
          style={{ 
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <BookOpen style={{ width: '18px', height: '18px' }} className="text-gold" />
          Legal Terminology
        </h3>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.25rem',
          paddingLeft: '1.75rem'
        }}>
          {analysis.keyTerminology.map((item, index) => (
            <div key={index}>
              <h4 
                className="text-navy"
                style={{ 
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  marginBottom: '0.375rem'
                }}
              >
                {item.term}
              </h4>
              <p 
                className="text-grey-medium"
                style={{ 
                  fontSize: '0.875rem',
                  lineHeight: '1.7'
                }}
              >
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Critical Disclaimer */}
      <div 
        className="rounded-xl"
        style={{ 
          background: 'rgba(220, 38, 38, 0.06)',
          padding: '1.25rem',
          border: '1px solid rgba(220, 38, 38, 0.15)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.875rem'
        }}
      >
        <AlertTriangle 
          className="text-red-600"
          style={{ 
            width: '20px', 
            height: '20px', 
            flexShrink: 0,
            marginTop: '0.125rem'
          }} 
        />
        <div>
          <h4 
            style={{ 
              color: '#991B1B',
              fontSize: '0.9375rem',
              fontWeight: 600,
              marginBottom: '0.5rem'
            }}
          >
            General Legal Information Only
          </h4>
          <p 
            style={{ 
              fontSize: '0.875rem', 
              color: '#7F1D1D', 
              lineHeight: '1.7' 
            }}
          >
            This legal breakdown provides <strong>general educational information</strong> about the law of England & Wales. It does <strong>NOT constitute legal advice</strong>. 
            Application of legal principles to specific facts requires professional analysis by a qualified solicitor. Case law cited illustrates general principles; whether precedents apply to particular circumstances requires expert legal assessment. This does not create a solicitor-client relationship.
          </p>
        </div>
      </div>
    </div>
  );
}
