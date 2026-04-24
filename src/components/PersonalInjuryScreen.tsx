import React from 'react';
import { Logo } from './Logo';
import { AlertTriangle, ExternalLink, Phone, Shield } from 'lucide-react';

interface PersonalInjuryScreenProps {
  onBack: () => void;
}

export function PersonalInjuryScreen({ onBack }: PersonalInjuryScreenProps) {
  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100%',
      background: 'linear-gradient(to bottom, #FEF2F2, #FEE2E2, white)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <header style={{ width: '100%', padding: '2rem 1.5rem 1.5rem', position: 'relative', zIndex: 10 }}>
        <Logo size="small" showText={true} />
      </header>

      {/* Main content */}
      <div style={{ 
        width: '100%',
        maxWidth: '700px',
        margin: '0 auto',
        padding: '2rem 1.5rem',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Warning Icon */}
        <div 
          className="rounded-full"
          style={{ 
            width: '80px',
            height: '80px',
            margin: '0 auto 2rem',
            background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(220, 38, 38, 0.3)'
          }}
        >
          <AlertTriangle className="text-white" style={{ width: '40px', height: '40px' }} />
        </div>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 800, marginBottom: '0.75rem', color: '#DC2626' }}>
            Personal Injury Matter Detected
          </h1>
          <p className="text-grey-dark" style={{ fontSize: '1.0625rem', lineHeight: '1.7' }}>
            We're sorry, but JAIDE does not currently support personal injury cases.
          </p>
        </div>

        {/* Info Card */}
        <div 
          className="rounded-2xl"
          style={{ 
            background: 'white',
            border: '2px solid rgba(220, 38, 38, 0.2)',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 8px 24px rgba(220, 38, 38, 0.12)'
          }}
        >
          <h3 className="text-navy" style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem' }}>
            Why Personal Injury Cases Need Specialized Support
          </h3>
          <p className="text-grey-dark" style={{ fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
            Personal injury matters involve complex medical evidence, assessment of damages for pain and suffering, 
            and often require urgent legal representation. These cases are highly specialized and require the expertise 
            of a qualified personal injury lawyer who can:
          </p>
          
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '0' }}>
            <li className="text-grey-dark" style={{ fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '0.75rem' }}>
              Assess the full extent of your injuries and potential compensation
            </li>
            <li className="text-grey-dark" style={{ fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '0.75rem' }}>
              Navigate insurance company negotiations and time-sensitive claims
            </li>
            <li className="text-grey-dark" style={{ fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '0.75rem' }}>
              Gather medical evidence and expert opinions
            </li>
            <li className="text-grey-dark" style={{ fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '0' }}>
              Represent you in court if necessary
            </li>
          </ul>
        </div>

        {/* Recommended Actions */}
        <div 
          className="rounded-2xl"
          style={{ 
            background: 'linear-gradient(135deg, rgba(7, 60, 101, 0.05), rgba(212, 158, 55, 0.05))',
            border: '1px solid rgba(7, 60, 101, 0.15)',
            padding: '1.75rem',
            marginBottom: '2rem'
          }}
        >
          <h3 className="text-navy" style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '1.25rem' }}>
            What You Should Do Next:
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Action 1 */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div 
                className="rounded-full"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(7, 60, 101, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Phone className="text-navy" style={{ width: '20px', height: '20px' }} />
              </div>
              <div>
                <h4 className="text-navy" style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '0.375rem' }}>
                  Contact a Personal Injury Lawyer
                </h4>
                <p className="text-grey-dark" style={{ fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                  Many personal injury lawyers offer free initial consultations and work on a "no win, no fee" basis.
                </p>
              </div>
            </div>

            {/* Action 2 */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div 
                className="rounded-full"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(7, 60, 101, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Shield className="text-navy" style={{ width: '20px', height: '20px' }} />
              </div>
              <div>
                <h4 className="text-navy" style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '0.375rem' }}>
                  Preserve Evidence
                </h4>
                <p className="text-grey-dark" style={{ fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                  Keep all medical records, photos of injuries, accident reports, and any correspondence related to your case.
                </p>
              </div>
            </div>

            {/* Action 3 */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div 
                className="rounded-full"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(7, 60, 101, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <ExternalLink className="text-navy" style={{ width: '20px', height: '20px' }} />
              </div>
              <div>
                <h4 className="text-navy" style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '0.375rem' }}>
                  Check Time Limits
                </h4>
                <p className="text-grey-dark" style={{ fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                  Personal injury claims often have strict time limits (statutes of limitations). Act quickly to protect your rights.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div 
          className="rounded-xl"
          style={{ 
            background: 'rgba(212, 158, 55, 0.08)',
            border: '1px solid rgba(212, 158, 55, 0.2)',
            padding: '1.25rem',
            marginBottom: '2rem'
          }}
        >
          <p className="text-grey-dark" style={{ fontSize: '0.8125rem', lineHeight: '1.6', margin: 0 }}>
            <strong className="text-navy">Need help finding a lawyer?</strong> Contact your local bar association 
            or law society for referrals to qualified personal injury attorneys in your area.
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="rounded-full transition-all"
          style={{
            width: '100%',
            padding: '1.125rem',
            background: 'linear-gradient(135deg, #073C65 0%, #0A5A8A 100%)',
            border: 'none',
            color: 'white',
            fontWeight: 700,
            fontSize: '1rem',
            boxShadow: '0 4px 16px rgba(7, 60, 101, 0.25)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(7, 60, 101, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(7, 60, 101, 0.25)';
          }}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
