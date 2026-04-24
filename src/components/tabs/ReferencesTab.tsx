import { ExternalLink, Book, Scale, Building, Bookmark, Info } from 'lucide-react';

interface ReferencesTabProps {
  scenario: string;
  onboardingData: Record<string, string>;
}

interface Reference {
  title: string;
  description: string;
  url: string;
  type: 'statute' | 'guidance' | 'agency' | 'tribunal' | 'resource' | 'caselaw';
}

export function ReferencesTab({ scenario, onboardingData }: ReferencesTabProps) {
  const generateReferences = (): Reference[] => {
    const lowerScenario = scenario.toLowerCase();
    let references: Reference[] = [];

    // Tenancy references
    if (lowerScenario.includes('tenant') || lowerScenario.includes('landlord') || lowerScenario.includes('rent')) {
      references = [
        {
          title: 'Landlord and Tenant Act 1985',
          description: 'Primary legislation governing repair obligations (section 11) and tenant rights in England & Wales',
          url: 'https://www.legislation.gov.uk/ukpga/1985/70/contents',
          type: 'statute'
        },
        {
          title: 'Housing Act 1988',
          description: 'Legislation covering assured and assured shorthold tenancies, section 21 and section 8 possession grounds',
          url: 'https://www.legislation.gov.uk/ukpga/1988/50/contents',
          type: 'statute'
        },
        {
          title: 'Protection from Eviction Act 1977',
          description: 'Statutory protection against unlawful eviction and harassment of residential occupiers',
          url: 'https://www.legislation.gov.uk/ukpga/1977/43',
          type: 'statute'
        },
        {
          title: 'Quick v Taff-Ely BC [1986] QB 809',
          description: 'Court of Appeal case on section 11 LTA 1985 repair obligations extending to keeping installations in working order',
          url: 'https://www.bailii.org/ew/cases/EWCA/Civ/1985/1.html',
          type: 'caselaw'
        },
        {
          title: 'Liverpool CC v Irwin [1977] AC 239',
          description: 'House of Lords case establishing implied terms in tenancy agreements for common parts maintenance',
          url: 'https://www.bailii.org/uk/cases/UKHL/1976/1.html',
          type: 'caselaw'
        },
        {
          title: 'First-tier Tribunal (Property Chamber)',
          description: 'Tribunal for residential tenancy disputes, rent repayment orders, and improvement notices in England',
          url: 'https://www.gov.uk/courts-tribunals/first-tier-tribunal-property-chamber',
          type: 'tribunal'
        },
        {
          title: 'CPR Part 55 - Possession Claims',
          description: 'Civil Procedure Rules governing possession claim procedure in County Courts',
          url: 'https://www.justice.gov.uk/courts/procedure-rules/civil/rules/part55',
          type: 'guidance'
        },
        {
          title: 'Shelter England - Housing Advice',
          description: 'Comprehensive free housing advice on tenant rights, eviction, disrepair, and deposit protection',
          url: 'https://england.shelter.org.uk/',
          type: 'resource'
        },
        {
          title: 'Citizens Advice - Housing',
          description: 'Free, independent advice on housing rights, eviction procedures, and tenancy disputes',
          url: 'https://www.citizensadvice.org.uk/housing/',
          type: 'resource'
        },
        {
          title: 'Housing Ombudsman Service',
          description: 'Ombudsman investigating complaints about social landlords and registered private landlords in England',
          url: 'https://www.housing-ombudsman.org.uk/',
          type: 'agency'
        }
      ];
    }
    // Insurance references
    else if (lowerScenario.includes('insurance') || lowerScenario.includes('claim')) {
      references = [
        {
          title: 'Insurance Act 2015',
          description: 'Modern framework for insurance contracts, duty of fair presentation, and remedies',
          url: 'https://www.legislation.gov.uk/ukpga/2015/4/contents',
          type: 'statute'
        },
        {
          title: 'Consumer Insurance (Disclosure and Representations) Act 2012',
          description: 'Protection for consumer insurance policyholders regarding misrepresentation',
          url: 'https://www.legislation.gov.uk/ukpga/2012/6/contents',
          type: 'statute'
        },
        {
          title: 'Financial Ombudsman Service',
          description: 'Free, independent dispute resolution for insurance and financial services complaints',
          url: 'https://www.financial-ombudsman.org.uk/',
          type: 'agency'
        },
        {
          title: 'FCA Insurance Conduct of Business Sourcebook (ICOBS)',
          description: 'Regulatory rules governing how insurers must handle claims and treat customers',
          url: 'https://www.handbook.fca.org.uk/handbook/ICOBS/',
          type: 'guidance'
        },
        {
          title: 'British Insurance Brokers\' Association',
          description: 'Professional body offering guidance on insurance disputes and finding brokers',
          url: 'https://www.biba.org.uk/',
          type: 'resource'
        },
        {
          title: 'Money Helper - Insurance Claims',
          description: 'Government-backed guidance on making and challenging insurance claims',
          url: 'https://www.moneyhelper.org.uk/en/everyday-money/insurance',
          type: 'resource'
        }
      ];
    }
    // Contract references
    else if (lowerScenario.includes('contract') || lowerScenario.includes('agreement')) {
      references = [
        {
          title: 'Civil Procedure Rules (CPR)',
          description: 'Procedural rules governing civil litigation in England & Wales',
          url: 'https://www.justice.gov.uk/courts/procedure-rules/civil',
          type: 'guidance'
        },
        {
          title: 'Practice Direction - Pre-Action Conduct',
          description: 'Requirements for letters before claim and pre-action behaviour',
          url: 'https://www.justice.gov.uk/courts/procedure-rules/civil/rules/pd_pre-action_conduct',
          type: 'guidance'
        },
        {
          title: 'GOV.UK - Make a Court Claim for Money',
          description: 'Official guidance on County Court money claims and small claims process',
          url: 'https://www.gov.uk/make-court-claim-for-money',
          type: 'resource'
        },
        {
          title: 'Money Claim Online',
          description: 'HM Courts & Tribunals Service online system for issuing money claims up to £100,000',
          url: 'https://www.gov.uk/make-money-claim',
          type: 'tribunal'
        },
        {
          title: 'Civil Mediation Council',
          description: 'Directory of accredited mediators for contract dispute resolution',
          url: 'https://www.civilmediation.org/',
          type: 'resource'
        },
        {
          title: 'Law Society - Find a Solicitor',
          description: 'Official directory to find regulated solicitors specialising in contract law',
          url: 'https://solicitors.lawsociety.org.uk/',
          type: 'resource'
        }
      ];
    }
    // Consumer references
    else if (lowerScenario.includes('consumer') || lowerScenario.includes('product') || lowerScenario.includes('refund')) {
      references = [
        {
          title: 'Consumer Rights Act 2015',
          description: 'Comprehensive consumer protection legislation covering goods, services, and digital content',
          url: 'https://www.legislation.gov.uk/ukpga/2015/15/contents',
          type: 'statute'
        },
        {
          title: 'Citizens Advice - Consumer Rights',
          description: 'Free advice on consumer rights, faulty goods, and refunds',
          url: 'https://www.citizensadvice.org.uk/consumer/',
          type: 'resource'
        },
        {
          title: 'Trading Standards - Consumer Advice',
          description: 'Local authority enforcement service for consumer protection and business compliance',
          url: 'https://www.tradingstandards.uk/consumers',
          type: 'agency'
        },
        {
          title: 'Alternative Dispute Resolution (ADR) Approved Bodies',
          description: 'Government list of approved ADR schemes for consumer disputes',
          url: 'https://www.gov.uk/government/publications/alternative-dispute-resolution-approved-bodies',
          type: 'agency'
        },
        {
          title: 'Which? - Consumer Rights',
          description: 'Consumer advocacy organisation providing guidance on statutory rights',
          url: 'https://www.which.co.uk/consumer-rights',
          type: 'resource'
        },
        {
          title: 'GOV.UK - Consumer Protection from Unfair Trading',
          description: 'Guidance on unfair business practices and consumer remedies',
          url: 'https://www.gov.uk/consumer-protection-rights',
          type: 'guidance'
        }
      ];
    }
    // Motor vehicle references
    else if (lowerScenario.includes('accident') || lowerScenario.includes('vehicle') || lowerScenario.includes('car')) {
      references = [
        {
          title: 'Road Traffic Act 1988',
          description: 'Legislation governing road traffic offences, insurance requirements, and accident procedures',
          url: 'https://www.legislation.gov.uk/ukpga/1988/52/contents',
          type: 'statute'
        },
        {
          title: 'Pre-Action Protocol for Low Value RTA Claims',
          description: 'CPR protocol for road traffic accident claims (adapted principles apply to property-only claims)',
          url: 'https://www.justice.gov.uk/courts/procedure-rules/civil/protocol/prot_rta',
          type: 'guidance'
        },
        {
          title: 'Motor Insurers\' Bureau (MIB)',
          description: 'Compensation for victims of uninsured and untraced drivers in UK',
          url: 'https://www.mib.org.uk/',
          type: 'agency'
        },
        {
          title: 'GOV.UK - Report a Road Accident',
          description: 'Official guidance on reporting accidents and exchanging details',
          url: 'https://www.gov.uk/report-driving-incident',
          type: 'resource'
        },
        {
          title: 'Citizens Advice - Car Accidents and Insurance',
          description: 'Free advice on making insurance claims and dealing with vehicle damage',
          url: 'https://www.citizensadvice.org.uk/consumer/insurance/insurance/car-insurance/',
          type: 'resource'
        },
        {
          title: 'Association of British Insurers - Code of Practice',
          description: 'Industry standards for motor insurance claims handling',
          url: 'https://www.abi.org.uk/',
          type: 'guidance'
        }
      ];
    }
    // General civil references
    else {
      references = [
        {
          title: 'Civil Procedure Rules',
          description: 'Complete procedural framework for civil litigation in England & Wales',
          url: 'https://www.justice.gov.uk/courts/procedure-rules/civil',
          type: 'guidance'
        },
        {
          title: 'HM Courts & Tribunals Service',
          description: 'Official portal for court and tribunal information, forms, and guidance',
          url: 'https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service',
          type: 'tribunal'
        },
        {
          title: 'Citizens Advice',
          description: 'Free, confidential advice on legal, debt, consumer, housing, and other problems',
          url: 'https://www.citizensadvice.org.uk/',
          type: 'resource'
        },
        {
          title: 'GOV.UK - Courts and Tribunals',
          description: 'Central government guidance on court procedures, fees, and forms',
          url: 'https://www.gov.uk/courts-tribunals',
          type: 'resource'
        },
        {
          title: 'Law Society - Find a Solicitor',
          description: 'Directory of regulated solicitors in England & Wales by location and specialism',
          url: 'https://solicitors.lawsociety.org.uk/',
          type: 'resource'
        },
        {
          title: 'Legislation.gov.uk',
          description: 'Official repository of UK legislation including all Acts and statutory instruments',
          url: 'https://www.legislation.gov.uk/',
          type: 'statute'
        },
        {
          title: 'Civil Mediation Council',
          description: 'Find accredited civil mediators for alternative dispute resolution',
          url: 'https://www.civilmediation.org/',
          type: 'resource'
        },
        {
          title: 'LawWorks - Free Legal Advice Clinics',
          description: 'Network of free legal advice clinics across England & Wales',
          url: 'https://www.lawworks.org.uk/legal-advice-individuals/find-legal-advice-clinic',
          type: 'resource'
        }
      ];
    }

    return references;
  };

  const references = generateReferences();

  const groupedReferences = {
    statute: references.filter(r => r.type === 'statute'),
    caselaw: references.filter(r => r.type === 'caselaw'),
    guidance: references.filter(r => r.type === 'guidance'),
    tribunal: references.filter(r => r.type === 'tribunal'),
    agency: references.filter(r => r.type === 'agency'),
    resource: references.filter(r => r.type === 'resource')
  };

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
          <strong>England & Wales Only:</strong> All references and links provided relate to the jurisdiction of England & Wales. These resources do not apply to Scotland, Northern Ireland, or other jurisdictions.
        </p>
      </div>

      {/* Legislation Section */}
      {groupedReferences.statute.length > 0 && (
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
            <Book style={{ width: '18px', height: '18px' }} className="text-gold" />
            Relevant Legislation (England & Wales)
          </h3>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.75rem',
            paddingLeft: '1.75rem'
          }}>
            {groupedReferences.statute.map((ref, index) => (
              <a
                key={index}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg transition-all"
                style={{
                  display: 'block',
                  padding: '1rem',
                  background: 'white',
                  border: '1px solid #E5E7EB',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#D49E37';
                  e.currentTarget.style.background = 'rgba(212, 158, 55, 0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.background = 'white';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div style={{ flex: 1 }}>
                    <h4 
                      className="text-navy"
                      style={{ 
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        marginBottom: '0.375rem'
                      }}
                    >
                      {ref.title}
                    </h4>
                    <p 
                      className="text-grey-medium"
                      style={{ 
                        fontSize: '0.875rem',
                        lineHeight: '1.6'
                      }}
                    >
                      {ref.description}
                    </p>
                  </div>
                  <ExternalLink 
                    className="text-grey-medium"
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      flexShrink: 0,
                      marginTop: '0.25rem'
                    }} 
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Case Law Section */}
      {groupedReferences.caselaw.length > 0 && (
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
            gap: '0.75rem',
            paddingLeft: '1.75rem'
          }}>
            {groupedReferences.caselaw.map((ref, index) => (
              <a
                key={index}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg transition-all"
                style={{
                  display: 'block',
                  padding: '1rem',
                  background: 'white',
                  border: '1px solid #E5E7EB',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#D49E37';
                  e.currentTarget.style.background = 'rgba(212, 158, 55, 0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.background = 'white';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div style={{ flex: 1 }}>
                    <h4 
                      className="text-navy"
                      style={{ 
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        marginBottom: '0.375rem'
                      }}
                    >
                      {ref.title}
                    </h4>
                    <p 
                      className="text-grey-medium"
                      style={{ 
                        fontSize: '0.875rem',
                        lineHeight: '1.6'
                      }}
                    >
                      {ref.description}
                    </p>
                  </div>
                  <ExternalLink 
                    className="text-grey-medium"
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      flexShrink: 0,
                      marginTop: '0.25rem'
                    }} 
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Official Guidance Section */}
      {groupedReferences.guidance.length > 0 && (
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
            Official Guidance & Protocols
          </h3>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.75rem',
            paddingLeft: '1.75rem'
          }}>
            {groupedReferences.guidance.map((ref, index) => (
              <a
                key={index}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg transition-all"
                style={{
                  display: 'block',
                  padding: '1rem',
                  background: 'white',
                  border: '1px solid #E5E7EB',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#D49E37';
                  e.currentTarget.style.background = 'rgba(212, 158, 55, 0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.background = 'white';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div style={{ flex: 1 }}>
                    <h4 
                      className="text-navy"
                      style={{ 
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        marginBottom: '0.375rem'
                      }}
                    >
                      {ref.title}
                    </h4>
                    <p 
                      className="text-grey-medium"
                      style={{ 
                        fontSize: '0.875rem',
                        lineHeight: '1.6'
                      }}
                    >
                      {ref.description}
                    </p>
                  </div>
                  <ExternalLink 
                    className="text-grey-medium"
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      flexShrink: 0,
                      marginTop: '0.25rem'
                    }} 
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Courts & Tribunals Section */}
      {groupedReferences.tribunal.length > 0 && (
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
            <Building style={{ width: '18px', height: '18px' }} className="text-gold" />
            Courts & Tribunals
          </h3>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.75rem',
            paddingLeft: '1.75rem'
          }}>
            {groupedReferences.tribunal.map((ref, index) => (
              <a
                key={index}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg transition-all"
                style={{
                  display: 'block',
                  padding: '1rem',
                  background: 'white',
                  border: '1px solid #E5E7EB',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#D49E37';
                  e.currentTarget.style.background = 'rgba(212, 158, 55, 0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.background = 'white';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div style={{ flex: 1 }}>
                    <h4 
                      className="text-navy"
                      style={{ 
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        marginBottom: '0.375rem'
                      }}
                    >
                      {ref.title}
                    </h4>
                    <p 
                      className="text-grey-medium"
                      style={{ 
                        fontSize: '0.875rem',
                        lineHeight: '1.6'
                      }}
                    >
                      {ref.description}
                    </p>
                  </div>
                  <ExternalLink 
                    className="text-grey-medium"
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      flexShrink: 0,
                      marginTop: '0.25rem'
                    }} 
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Regulatory Bodies & Ombudsmen Section */}
      {groupedReferences.agency.length > 0 && (
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
            <Building style={{ width: '18px', height: '18px' }} className="text-gold" />
            Regulatory Bodies & Ombudsmen
          </h3>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.75rem',
            paddingLeft: '1.75rem'
          }}>
            {groupedReferences.agency.map((ref, index) => (
              <a
                key={index}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg transition-all"
                style={{
                  display: 'block',
                  padding: '1rem',
                  background: 'white',
                  border: '1px solid #E5E7EB',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#D49E37';
                  e.currentTarget.style.background = 'rgba(212, 158, 55, 0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.background = 'white';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div style={{ flex: 1 }}>
                    <h4 
                      className="text-navy"
                      style={{ 
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        marginBottom: '0.375rem'
                      }}
                    >
                      {ref.title}
                    </h4>
                    <p 
                      className="text-grey-medium"
                      style={{ 
                        fontSize: '0.875rem',
                        lineHeight: '1.6'
                      }}
                    >
                      {ref.description}
                    </p>
                  </div>
                  <ExternalLink 
                    className="text-grey-medium"
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      flexShrink: 0,
                      marginTop: '0.25rem'
                    }} 
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Advice & Support Resources Section */}
      {groupedReferences.resource.length > 0 && (
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
            <Bookmark style={{ width: '18px', height: '18px' }} className="text-gold" />
            Advice & Support Resources
          </h3>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.75rem',
            paddingLeft: '1.75rem'
          }}>
            {groupedReferences.resource.map((ref, index) => (
              <a
                key={index}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg transition-all"
                style={{
                  display: 'block',
                  padding: '1rem',
                  background: 'white',
                  border: '1px solid #E5E7EB',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#D49E37';
                  e.currentTarget.style.background = 'rgba(212, 158, 55, 0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.background = 'white';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div style={{ flex: 1 }}>
                    <h4 
                      className="text-navy"
                      style={{ 
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        marginBottom: '0.375rem'
                      }}
                    >
                      {ref.title}
                    </h4>
                    <p 
                      className="text-grey-medium"
                      style={{ 
                        fontSize: '0.875rem',
                        lineHeight: '1.6'
                      }}
                    >
                      {ref.description}
                    </p>
                  </div>
                  <ExternalLink 
                    className="text-grey-medium"
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      flexShrink: 0,
                      marginTop: '0.25rem'
                    }} 
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div 
        className="rounded-xl"
        style={{ 
          background: 'rgba(59, 130, 246, 0.08)',
          padding: '1.25rem',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.875rem'
        }}
      >
        <Info 
          style={{ 
            width: '20px', 
            height: '20px', 
            flexShrink: 0,
            marginTop: '0.125rem',
            color: '#2563EB'
          }} 
        />
        <div>
          <h4 
            style={{ 
              color: '#1E40AF',
              fontSize: '0.9375rem',
              fontWeight: 600,
              marginBottom: '0.5rem'
            }}
          >
            Important Note
          </h4>
          <p 
            style={{ 
              fontSize: '0.875rem', 
              color: '#1E3A8A', 
              lineHeight: '1.7' 
            }}
          >
            These links are provided for informational purposes and represent official and reputable resources 
            for legal matters in England & Wales. Always verify you are accessing current official sources. 
            JAIDE is not affiliated with any linked organisations. Laws and procedures may change - check for updates.
          </p>
        </div>
      </div>
    </div>
  );
}
