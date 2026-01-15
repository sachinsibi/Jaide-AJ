import { Scale, BookOpen, Gavel, AlertTriangle, Info, HelpCircle } from 'lucide-react';

interface OverviewTabProps {
  scenario: string;
  onboardingData: Record<string, string>;
}

export function OverviewTab({ scenario, onboardingData }: OverviewTabProps) {
  const caseData = onboardingData;
  
  const generateLegalIssueSpotting = () => {
    const lowerScenario = scenario.toLowerCase();
    
    let legalArea = '';
    let applicableDuties: string[] = [];
    let keyLegalQuestions: string[] = [];
    let typicalPathway = '';
    let timeframeStructure = '';
    let costStructure = '';
    
    if (lowerScenario.includes('tenant') || lowerScenario.includes('landlord') || lowerScenario.includes('rent')) {
      legalArea = 'Residential Tenancy Law (England & Wales)';
      applicableDuties = [
        'Statutory repairing obligations under section 11 of the Landlord and Tenant Act 1985',
        'Implied covenant for quiet enjoyment (common law principle)',
        'Protection from unlawful eviction under Protection from Eviction Act 1977',
        'Compliance with tenancy deposit protection requirements under Housing Act 2004 s.213',
        'Housing Health and Safety Rating System (HHSRS) compliance obligations'
      ];
      keyLegalQuestions = [
        'Has the landlord complied with section 11 LTA 1985 repairing obligations?',
        'Was proper statutory notice served in accordance with Housing Act 1988 requirements?',
        'Has there been a breach of the implied covenant for quiet enjoyment?',
        'Was the tenancy deposit protected within the statutory 30-day period?',
        'Does the property contain Category 1 or Category 2 hazards under HHSRS?',
        'Has the landlord fulfilled duties to provide prescribed information?'
      ];
      typicalPathway = 'Residential tenancy disputes in England & Wales typically follow: (1) Written notification to landlord citing statutory obligations; (2) Environmental Health inspection request (if disrepair); (3) Application to First-tier Tribunal (Property Chamber) for rent repayment orders, improvement notices, or compensation; (4) Alternatively, County Court proceedings under CPR Part 7 for damages or injunctive relief; (5) Possession claims defended under CPR Part 55.';
      timeframeStructure = 'Pre-action phase: 14-30 days for landlord response to statutory notice • Environmental Health inspection: 5-15 working days • First-tier Tribunal application to hearing: 8-16 weeks • County Court small claims allocation: 3-9 months • Fast track allocation: 9-18 months';
      costStructure = 'First-tier Tribunal fees: £100-£300 • County Court filing (claim value dependent): £35-£455 • Solicitor costs (London): £150-£350/hour • Solicitor costs (regional): £100-£250/hour • Expert disrepair report: £300-£800 • Barrister (if required): £500-£2,000 per day';
    } else if (lowerScenario.includes('insurance') || lowerScenario.includes('claim')) {
      legalArea = 'Insurance Contract Law (England & Wales)';
      applicableDuties = [
        'Insurer duty of utmost good faith under common law (modified by Insurance Act 2015)',
        'Duty of fair presentation under section 3 of the Insurance Act 2015',
        'FCA ICOBS rules requiring fair claims handling and timely responses',
        'Insurer duty to pay valid claims within reasonable time (implied contractual term)',
        'Consumer duty under Consumer Insurance (Disclosure and Representations) Act 2012'
      ];
      keyLegalQuestions = [
        'Did the policyholder make a fair presentation of the risk under Insurance Act 2015 s.3?',
        'Has the insurer complied with ICOBS requirements for claims acknowledgment and response?',
        'Does the policy exclusion clause apply on its true construction?',
        'Has the insurer breached the implied duty to process claims within reasonable time?',
        'Is there material misrepresentation that would entitle the insurer to avoid the policy?',
        'Has the claim been handled fairly under FCA DISP rules?'
      ];
      typicalPathway = 'Insurance disputes in England & Wales follow: (1) Formal complaint to insurer in writing; (2) Insurer final response within 8 weeks (DISP 1.6); (3) Referral to Financial Ombudsman Service within 6 months of final response; (4) FOS investigation and determination (free for consumers); (5) If dissatisfied with FOS outcome or claim exceeds jurisdiction, County Court proceedings under CPR Part 7.';
      timeframeStructure = 'Insurer acknowledgment: 5 working days (ICOBS) • Final response deadline: 8 weeks (DISP) • FOS referral window: 6 months from final response • FOS investigation: 3-6 months average • County Court allocation: 6-12 months to trial';
      costStructure = 'Financial Ombudsman Service: Free to consumers • Legal advice consultation: £150-£300 • County Court filing: £35-£455 • Solicitor hourly rates: £150-£400/hour • Expert reports (engineering/medical): £500-£2,500 • Counsel fees (if required): £750-£3,000';
    } else if (lowerScenario.includes('contract') || lowerScenario.includes('agreement')) {
      legalArea = 'Contract Law (England & Wales)';
      applicableDuties = [
        'Duty to perform contractual obligations in accordance with express terms',
        'Implied terms of reasonableness and good faith (context-dependent)',
        'Duty to mitigate loss upon breach (British Westinghouse principle)',
        'Compliance with CPR Pre-Action Conduct Practice Direction',
        'Duty not to repudiate contract without lawful justification'
      ];
      keyLegalQuestions = [
        'Was there valid offer, acceptance, and consideration to form a binding contract?',
        'Has there been a breach of contract going to the root of the agreement?',
        'Are the damages claimed too remote under the Hadley v Baxendale test?',
        'Has the claimant taken reasonable steps to mitigate loss?',
        'Does the contract contain an enforceable entire agreement clause?',
        'Would the court imply terms to give the contract business efficacy?'
      ];
      typicalPathway = 'Contract disputes in England & Wales proceed: (1) Letter before claim under Practice Direction on Pre-Action Conduct (14-day minimum response); (2) Negotiations and potential ADR/mediation; (3) Issue of County Court Claim Form N1; (4) Track allocation: small claims (up to £10,000), fast track (£10,000-£25,000), or multi-track (over £25,000); (5) Directions hearing and disclosure; (6) Trial or settlement via Part 36 offer.';
      timeframeStructure = 'Pre-action phase: 14-30 days (straightforward matters) • Claim acknowledgment: 14 days from service • Defence deadline: 28 days from service • Small claims hearing: 3-9 months • Fast track trial: 9-18 months • Multi-track trial: 18-36 months';
      costStructure = 'Court fees (claim value): £35 (under £300) to £10,000 (over £200,000) • Solicitor costs: £150-£400/hour • Mediation: £600-£2,500 per day • Barrister (fast track): £1,500-£5,000 • Expert witness: £800-£3,000 • Small claims: limited cost recovery';
    } else if (lowerScenario.includes('consumer') || lowerScenario.includes('product') || lowerScenario.includes('refund')) {
      legalArea = 'Consumer Rights Law (England & Wales)';
      applicableDuties = [
        'Statutory duty to supply goods of satisfactory quality under Consumer Rights Act 2015 s.9',
        'Duty to ensure goods are fit for particular purpose under CRA 2015 s.10',
        'Duty to supply goods as described under CRA 2015 s.11',
        'Prohibition on unfair contract terms under CRA 2015 ss.62-63',
        'Trader duty to act in accordance with CPRs 2008 (fair trading)'
      ];
      keyLegalQuestions = [
        'Do the goods meet the statutory standard of "satisfactory quality" under CRA 2015 s.9?',
        'Were the goods fit for any particular purpose made known to the seller (s.10)?',
        'Was the fault present at the time of delivery (6-month presumption under s.19(14))?',
        'Has the consumer exercised the short-term right to reject within 30 days (s.22)?',
        'Are the contract terms unfair within the meaning of CRA 2015 Part 2?',
        'Has the retailer complied with the hierarchy of remedies (reject, repair, replace, reduce price)?'
      ];
      typicalPathway = 'Consumer disputes in England & Wales follow: (1) Notification to retailer invoking Consumer Rights Act 2015 remedies; (2) Retailer internal complaint procedure (14-30 days); (3) Referral to certified Alternative Dispute Resolution provider (sector-specific); (4) County Court small claims track proceedings (up to £10,000); (5) Trading Standards criminal referral for serious unfair trading.';
      timeframeStructure = 'Short-term right to reject: 30 days from delivery • Retailer response: 14-30 days typical • ADR resolution: 6-12 weeks average • Small claims allocation: 3-9 months • Trading Standards investigation: 8-16 weeks';
      costStructure = 'ADR schemes: Free or nominal fee • Trading Standards: Free public service • Court filing (small claims): £35-£455 • Legal advice: £100-£250 per hour • Limited cost recovery in small claims track';
    } else if (lowerScenario.includes('accident') || lowerScenario.includes('vehicle') || lowerScenario.includes('car')) {
      legalArea = 'Negligence and Road Traffic Law (England & Wales)';
      applicableDuties = [
        'Common law duty of care owed by all road users (Donoghue v Stevenson principle)',
        'Statutory duty to exchange details under Road Traffic Act 1988 s.170',
        'Duty to report accident to police within 24 hours if details not exchanged (RTA 1988)',
        'Duty to notify insurer within policy timeframe (typically 7-14 days)',
        'Compliance with Pre-Action Protocol for low value RTA claims (adapted for property damage)'
      ];
      keyLegalQuestions = [
        'Did the defendant owe a duty of care to the claimant?',
        'Did the defendant breach the standard of the reasonable driver?',
        'Did the breach cause the damage (factual and legal causation)?',
        'Is there contributory negligence reducing damages under Law Reform (Contributory Negligence) Act 1945?',
        'Are the claimed losses reasonably foreseeable and not too remote?',
        'Has the claimant complied with pre-action protocol requirements?'
      ];
      typicalPathway = 'Motor accident property damage claims in England & Wales proceed: (1) Immediate exchange of details (RTA 1988 s.170); (2) Notification to own and third-party insurers; (3) Letter before claim to at-fault driver/insurer; (4) Negotiation period (typically 21-90 days); (5) County Court small claims track if settlement fails; (6) Allocation hearing and directions; (7) Trial or settlement.';
      timeframeStructure = 'Police reporting: 24 hours if required • Insurer notification: 7-14 days (policy terms) • Pre-action response: 21 days typical • Small claims allocation: 3-9 months • Fast track (over £10k): 9-18 months';
      costStructure = 'Engineer inspection: £200-£600 • Court filing: £35-£455 • Solicitor costs: £150-£300/hour • Small claims: no cost recovery except court fees • Expert witness report: £300-£1,000';
    } else {
      legalArea = 'General Civil Dispute (England & Wales)';
      applicableDuties = [
        'Common law duties arising from the nature of the relationship',
        'Compliance with Civil Procedure Rules overriding objective (CPR 1.1)',
        'Pre-action protocol obligations or Practice Direction on Pre-Action Conduct',
        'Duty to engage in Alternative Dispute Resolution where appropriate',
        'Ongoing disclosure obligations under CPR Part 31'
      ];
      keyLegalQuestions = [
        'What is the legal basis of the claim (tort, contract, statutory duty)?',
        'Has the claimant established the elements of the cause of action?',
        'Is the claim statute-barred under the Limitation Act 1980?',
        'Has the claimant complied with relevant pre-action protocol?',
        'Are damages quantifiable and not too remote?',
        'Would the court exercise discretion to grant the remedy sought?'
      ];
      typicalPathway = 'Civil disputes in England & Wales follow: (1) Pre-action correspondence under relevant protocol or Practice Direction; (2) Consideration of ADR/mediation; (3) Issue of claim form; (4) Service and acknowledgment; (5) Defence filing; (6) Track allocation (small claims, fast, or multi-track); (7) Case management and disclosure; (8) Trial or settlement.';
      timeframeStructure = 'Pre-action phase: 14-90 days (protocol dependent) • Acknowledgment of service: 14 days • Defence: 28 days from service • Allocation: 2-4 weeks • Small claims trial: 3-9 months • Fast track: 9-18 months • Multi-track: 18-36 months';
      costStructure = 'Court fees: £35-£10,000 (claim value dependent) • Solicitor costs: £150-£400/hour • Mediation: £600-£2,000 per party • Barrister: £1,000-£5,000+ • Expert: £500-£3,000 • Costs recovery depends on track allocation';
    }

    return { 
      legalArea, 
      applicableDuties, 
      keyLegalQuestions, 
      typicalPathway,
      timeframeStructure,
      costStructure
    };
  };

  const { 
    legalArea, 
    applicableDuties, 
    keyLegalQuestions, 
    typicalPathway,
    timeframeStructure,
    costStructure
  } = generateLegalIssueSpotting();

  return (
    <div>
      {/* Jurisdiction Notice */}
      <div 
        className="rounded-xl"
        style={{ 
          background: 'rgba(7, 60, 101, 0.06)',
          padding: '1rem',
          border: '1px solid rgba(7, 60, 101, 0.12)',
          marginBottom: '2rem',
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
          <strong>Jurisdiction:</strong> All legal analysis relates to the law of <strong>England & Wales only</strong>. This does not apply to Scotland, Northern Ireland, or other jurisdictions.
        </p>
      </div>

      {/* Legal Area Classification */}
      <div style={{ marginBottom: '2rem' }}>
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
          Legal Area Classification
        </h3>
        <div 
          className="rounded-xl"
          style={{ 
            background: 'rgba(212, 158, 55, 0.06)',
            padding: '1.25rem',
            border: '1px solid rgba(212, 158, 55, 0.15)',
            marginLeft: '1.75rem'
          }}
        >
          <p 
            className="text-navy"
            style={{ 
              fontSize: '0.9375rem',
              lineHeight: '1.7',
              fontWeight: 600
            }}
          >
            {legalArea}
          </p>
        </div>
      </div>

      {/* Applicable Legal Duties */}
      <div style={{ marginBottom: '2rem' }}>
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
          Applicable Legal Duties and Obligations
        </h3>
        <ul style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.875rem',
          paddingLeft: '1.75rem'
        }}>
          {applicableDuties.map((duty, index) => (
            <li 
              key={index} 
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '0.75rem'
              }}
            >
              <div 
                style={{ 
                  width: '6px', 
                  height: '6px', 
                  borderRadius: '50%', 
                  background: '#D49E37', 
                  flexShrink: 0, 
                  marginTop: '0.625rem'
                }} 
              />
              <span 
                className="text-grey-dark"
                style={{ 
                  fontSize: '0.9375rem',
                  lineHeight: '1.7'
                }}
              >
                {duty}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Legal Questions */}
      <div style={{ marginBottom: '2rem' }}>
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
          <HelpCircle style={{ width: '18px', height: '18px' }} className="text-gold" />
          Key Legal Questions Courts Typically Examine
        </h3>
        <ul style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.875rem',
          paddingLeft: '1.75rem'
        }}>
          {keyLegalQuestions.map((question, index) => (
            <li 
              key={index} 
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '0.75rem'
              }}
            >
              <div 
                style={{ 
                  width: '6px', 
                  height: '6px', 
                  borderRadius: '50%', 
                  background: '#073C65', 
                  flexShrink: 0, 
                  marginTop: '0.625rem'
                }} 
              />
              <span 
                className="text-grey-dark"
                style={{ 
                  fontSize: '0.9375rem',
                  lineHeight: '1.7',
                  fontStyle: 'italic'
                }}
              >
                {question}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Typical Dispute Pathway */}
      <div style={{ marginBottom: '2rem' }}>
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
          Typical Dispute Resolution Pathway in England & Wales
        </h3>
        <p 
          className="text-grey-dark"
          style={{ 
            fontSize: '0.9375rem',
            lineHeight: '1.7',
            paddingLeft: '1.75rem'
          }}
        >
          {typicalPathway}
        </p>
      </div>

      {/* Timeframe Structure */}
      <div style={{ marginBottom: '2rem' }}>
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
          Typical Procedural Timeframes
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
            {timeframeStructure}
          </p>
        </div>
        <p 
          className="text-grey-medium"
          style={{ 
            fontSize: '0.8125rem',
            lineHeight: '1.6',
            paddingLeft: '1.75rem',
            marginTop: '0.5rem',
            fontStyle: 'italic'
          }}
        >
          Timeframes are indicative based on typical patterns in England & Wales. Actual duration varies significantly based on complexity, court workload, and case-specific factors.
        </p>
      </div>

      {/* Cost Structure */}
      <div style={{ marginBottom: '2rem' }}>
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
          Indicative Cost Structure (England & Wales)
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
            {costStructure}
          </p>
        </div>
        <p 
          className="text-grey-medium"
          style={{ 
            fontSize: '0.8125rem',
            lineHeight: '1.6',
            paddingLeft: '1.75rem',
            marginTop: '0.5rem',
            fontStyle: 'italic'
          }}
        >
          Cost ranges are indicative only. Actual costs depend on case complexity, location, choice of representation, and track allocation.
        </p>
      </div>

      {/* Disclaimer */}
      <div 
        className="rounded-xl"
        style={{ 
          background: 'rgba(245, 158, 11, 0.08)',
          padding: '1.25rem',
          border: '1px solid rgba(245, 158, 11, 0.2)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.875rem'
        }}
      >
        <AlertTriangle 
          style={{ 
            width: '20px', 
            height: '20px', 
            flexShrink: 0,
            marginTop: '0.125rem',
            color: '#D97706'
          }} 
        />
        <div>
          <h4 
            style={{ 
              color: '#92400e',
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
              color: '#92400e', 
              lineHeight: '1.7' 
            }}
          >
            This overview provides <strong>general legal information</strong> about the law of England & Wales. It is <strong>not legal advice</strong> and does not create a solicitor-client relationship. Application of legal principles to specific facts requires professional legal analysis by a qualified solicitor.
          </p>
        </div>
      </div>
    </div>
  );
}
