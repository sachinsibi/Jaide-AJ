import React, { useState } from 'react';
import { AlertTriangle, Shield, FileText, Database, CheckCircle, Info } from 'lucide-react';

interface ConsentModalProps {
  onAgree: () => void;
}

export function ConsentModal({ onAgree }: ConsentModalProps) {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const scrolledToBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 50;
    if (scrolledToBottom && !hasScrolled) {
      setHasScrolled(true);
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(7, 60, 101, 0.92)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        zIndex: 50
      }}
    >
      <div 
        className="bg-white rounded-3xl"
        style={{
          width: '100%',
          maxWidth: '640px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          overflow: 'hidden'
        }}
      >
        {/* Header - Redesigned with warning gradient */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #D49E37 0%, #B8822A 100%)',
            padding: '2rem 1.5rem',
            textAlign: 'center',
            flexShrink: 0
          }}
        >
          <div 
            className="rounded-full"
            style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 1rem',
              background: 'rgba(255, 255, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
            }}
          >
            <AlertTriangle className="text-white" style={{ width: '40px', height: '40px' }} />
          </div>
          
          <h2 className="text-white" style={{ fontWeight: 800, fontSize: '1.75rem', margin: '0 0 0.5rem', lineHeight: 1.2 }}>
            Important Notice
          </h2>
          <p className="text-white" style={{ fontSize: '0.9375rem', opacity: 0.95, margin: 0 }}>
            Please read carefully before continuing
          </p>
        </div>

        {/* Content - Scrollable */}
        <div 
          onScroll={handleScroll}
          style={{ 
            padding: '2rem 1.5rem', 
            overflowY: 'auto', 
            flex: 1,
            background: '#FAFBFC'
          }}
        >
          {/* Key Points Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {/* Not Legal Advice */}
            <div 
              className="bg-white rounded-xl"
              style={{ 
                padding: '1.25rem',
                border: '2px solid rgba(220, 38, 38, 0.15)',
                boxShadow: '0 2px 8px rgba(220, 38, 38, 0.08)'
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div 
                  className="rounded-full"
                  style={{
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    background: 'rgba(220, 38, 38, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <AlertTriangle style={{ width: '20px', height: '20px', color: '#DC2626' }} />
                </div>
                <div>
                  <h4 className="text-navy" style={{ fontWeight: 700, fontSize: '1.0625rem', marginBottom: '0.375rem' }}>
                    This is NOT Legal Advice
                  </h4>
                  <p className="text-grey-dark" style={{ fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                    JAIDE provides <strong>general legal information only</strong>. We do not provide legal advice, 
                    legal representation, or replace the services of a qualified attorney.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Usage */}
            <div 
              className="bg-white rounded-xl"
              style={{ 
                padding: '1.25rem',
                border: '2px solid rgba(7, 60, 101, 0.15)',
                boxShadow: '0 2px 8px rgba(7, 60, 101, 0.08)'
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div 
                  className="rounded-full"
                  style={{
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    background: 'rgba(7, 60, 101, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Database className="text-navy" style={{ width: '20px', height: '20px' }} />
                </div>
                <div>
                  <h4 className="text-navy" style={{ fontWeight: 700, fontSize: '1.0625rem', marginBottom: '0.375rem' }}>
                    How We Use Your Information
                  </h4>
                  <p className="text-grey-dark" style={{ fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                    We use your descriptions, photos, and documents to generate personalized legal information. 
                    Your data helps us understand your situation and provide relevant resources.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy & Security */}
            <div 
              className="bg-white rounded-xl"
              style={{ 
                padding: '1.25rem',
                border: '2px solid rgba(212, 158, 55, 0.15)',
                boxShadow: '0 2px 8px rgba(212, 158, 55, 0.08)'
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div 
                  className="rounded-full"
                  style={{
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    background: 'rgba(212, 158, 55, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Shield className="text-gold" style={{ width: '20px', height: '20px' }} />
                </div>
                <div>
                  <h4 className="text-navy" style={{ fontWeight: 700, fontSize: '1.0625rem', marginBottom: '0.375rem' }}>
                    Privacy & Data Limitations
                  </h4>
                  <p className="text-grey-dark" style={{ fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                    This platform is <strong>not designed for collecting personally identifiable information (PII)</strong> or 
                    securing highly sensitive data. Avoid sharing unnecessary personal details.
                  </p>
                </div>
              </div>
            </div>

            {/* Consult Attorney */}
            <div 
              className="bg-white rounded-xl"
              style={{ 
                padding: '1.25rem',
                border: '2px solid rgba(7, 60, 101, 0.15)',
                boxShadow: '0 2px 8px rgba(7, 60, 101, 0.08)'
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div 
                  className="rounded-full"
                  style={{
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    background: 'rgba(7, 60, 101, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FileText className="text-navy" style={{ width: '20px', height: '20px' }} />
                </div>
                <div>
                  <h4 className="text-navy" style={{ fontWeight: 700, fontSize: '1.0625rem', marginBottom: '0.375rem' }}>
                    Consult a Licensed Attorney
                  </h4>
                  <p className="text-grey-dark" style={{ fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                    For personalized legal advice specific to your situation, you must consult with a 
                    licensed attorney in your jurisdiction. JAIDE can help you find one.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div 
            className="rounded-xl"
            style={{ 
              padding: '1.25rem',
              background: 'linear-gradient(135deg, rgba(7, 60, 101, 0.05), rgba(212, 158, 55, 0.05))',
              border: '1px solid rgba(7, 60, 101, 0.15)'
            }}
          >
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Info className="text-navy" style={{ width: '20px', height: '20px', flexShrink: 0, marginTop: '0.125rem' }} />
              <p className="text-grey-dark" style={{ fontSize: '0.8125rem', lineHeight: '1.6', margin: 0 }}>
                By clicking "I Understand and Agree," you acknowledge that you have read and understand these terms, 
                and you agree to use JAIDE for <strong>informational purposes only</strong>.
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          {!hasScrolled && (
            <div 
              style={{ 
                marginTop: '1rem',
                textAlign: 'center',
                animation: 'pulse 2s infinite'
              }}
            >
              <p className="text-grey-medium" style={{ fontSize: '0.75rem', margin: 0 }}>
                ↓ Scroll to read all terms ↓
              </p>
            </div>
          )}
        </div>

        {/* Footer - Agreement Button */}
        <div 
          className="bg-white"
          style={{
            borderTop: '2px solid #E6F2FA',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            flexShrink: 0
          }}
        >
          {hasScrolled && (
            <div 
              className="rounded-lg"
              style={{ 
                padding: '0.75rem',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                justifyContent: 'center'
              }}
            >
              <CheckCircle style={{ width: '16px', height: '16px', color: '#22C55E' }} />
              <span style={{ fontSize: '0.8125rem', color: '#166534', fontWeight: 600 }}>
                You've reviewed all terms
              </span>
            </div>
          )}
          
          <button
            onClick={onAgree}
            disabled={!hasScrolled}
            className="rounded-full text-white transition-all"
            style={{
              width: '100%',
              padding: '1.125rem',
              background: hasScrolled 
                ? 'linear-gradient(135deg, #073C65 0%, #0A5A8A 100%)' 
                : '#D1D5DB',
              border: 'none',
              fontWeight: 700,
              fontSize: '1.0625rem',
              boxShadow: hasScrolled ? '0 4px 16px rgba(7, 60, 101, 0.25)' : 'none',
              cursor: hasScrolled ? 'pointer' : 'not-allowed',
              opacity: hasScrolled ? 1 : 0.6
            }}
            onMouseEnter={(e) => {
              if (hasScrolled) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(7, 60, 101, 0.35)';
              }
            }}
            onMouseLeave={(e) => {
              if (hasScrolled) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(7, 60, 101, 0.25)';
              }
            }}
          >
            {hasScrolled ? 'I Understand and Agree' : 'Please read all terms first'}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
