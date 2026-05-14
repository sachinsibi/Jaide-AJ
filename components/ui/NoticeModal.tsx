'use client';

import { useRef, useState, useEffect } from 'react';
import { AlertTriangle, Database, Shield, FileText, CheckCircle } from 'lucide-react';

interface NoticeModalProps {
  onAcknowledge: () => void;
}

const ITEMS = [
  {
    icon: AlertTriangle,
    title: 'This is NOT Legal Advice',
    body: 'J.A.I.D.E. provides general legal information only. We do not provide legal advice, legal representation, or replace the services of a qualified attorney.',
    iconBg: 'rgba(239, 68, 68, 0.1)',
    iconColor: '#EF4444',
  },
  {
    icon: Database,
    title: 'How We Use Your Information',
    body: 'We use your descriptions, photos, and documents to generate personalised legal information. Your data helps us understand your situation and provide relevant resources.',
    iconBg: 'rgba(59, 130, 246, 0.1)',
    iconColor: '#3B82F6',
  },
  {
    icon: Shield,
    title: 'Privacy & Data Limitations',
    body: 'This platform is not designed for collecting personally identifiable information (PII) or securing highly sensitive data. Avoid sharing unnecessary personal details.',
    iconBg: 'rgba(245, 158, 11, 0.1)',
    iconColor: '#F59E0B',
  },
  {
    icon: FileText,
    title: 'Consult a Licensed Attorney',
    body: 'For personalised legal advice specific to your situation, you must consult with a licensed attorney in your jurisdiction. J.A.I.D.E. can help you find one.',
    iconBg: 'rgba(7, 60, 101, 0.1)',
    iconColor: '#073C65',
  },
];

export function NoticeModal({ onAcknowledge }: NoticeModalProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [hasReviewed, setHasReviewed] = useState(false);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (el.scrollHeight <= el.clientHeight) {
      setHasReviewed(true);
    }
  }, []);

  const handleScroll = () => {
    if (hasReviewed) return;
    const el = bodyRef.current;
    if (!el) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 40) {
      setHasReviewed(true);
    }
  };

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(7, 30, 50, 0.6)',
      backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 70, padding: '1rem',
    }}>
      <div style={{
        background: 'white', borderRadius: '1.25rem',
        width: '100%', maxWidth: '640px',
        maxHeight: '90vh', display: 'flex', flexDirection: 'column',
        boxShadow: '0 20px 60px rgba(7, 60, 101, 0.3)',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          background: '#C9A84C', padding: '1.75rem 1.5rem 1.5rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem',
          flexShrink: 0,
        }}>
          <div style={{
            width: '52px', height: '52px', borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <AlertTriangle style={{ width: '24px', height: '24px', color: 'white' }} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.25rem' }}>
              Important Notice
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem' }}>
              Please read carefully before continuing.
            </p>
          </div>
        </div>

        {/* Body */}
        <div
          ref={bodyRef}
          onScroll={handleScroll}
          style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {ITEMS.map(({ icon: Icon, title, body, iconBg, iconColor }) => (
              <div key={title} style={{
                background: 'white', borderRadius: '1rem',
                padding: '1.125rem 1.25rem',
                border: '1px solid rgba(7, 60, 101, 0.08)',
                display: 'flex', alignItems: 'flex-start', gap: '1rem',
                boxShadow: '0 1px 4px rgba(7, 60, 101, 0.06)',
              }}>
                <div style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  background: iconBg, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon style={{ width: '18px', height: '18px', color: iconColor }} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: '#073C65', fontSize: '0.9375rem', marginBottom: '0.3rem' }}>
                    {title}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: '1.65' }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}

            {/* Acknowledgment text */}
            <div style={{
              background: '#F9FAFB', borderRadius: '1rem',
              padding: '1rem 1.25rem',
              border: '1px solid rgba(7, 60, 101, 0.08)',
              display: 'flex', alignItems: 'flex-start', gap: '0.875rem',
            }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: 'rgba(7, 60, 101, 0.08)', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 700 }}>i</span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: '#6B7280', lineHeight: '1.65' }}>
                By clicking &ldquo;I Understand and Agree,&rdquo; you acknowledge that you have read and
                understand these terms, and you agree to use J.A.I.D.E. for{' '}
                <strong style={{ color: '#073C65' }}>informational purposes only</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid rgba(7, 60, 101, 0.08)',
          display: 'flex', flexDirection: 'column', gap: '0.625rem',
          flexShrink: 0,
        }}>
          {hasReviewed && (
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              background: '#D1FAE5', borderRadius: '0.75rem', padding: '0.625rem 1rem',
              animation: 'fadeSlideIn 0.3s ease',
            }}>
              <CheckCircle style={{ width: '16px', height: '16px', color: '#059669' }} />
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#065F46' }}>
                You&apos;ve reviewed all terms
              </span>
            </div>
          )}

          <button
            onClick={hasReviewed ? onAcknowledge : undefined}
            style={{
              width: '100%', border: 'none', borderRadius: '100px',
              padding: '0.875rem 1.75rem',
              background: hasReviewed ? '#073C65' : '#E5E7EB',
              color: hasReviewed ? 'white' : '#9CA3AF',
              fontWeight: 700, fontSize: '0.9375rem',
              cursor: hasReviewed ? 'pointer' : 'not-allowed',
              fontFamily: 'inherit',
              transition: 'background 0.25s, color 0.25s',
            }}
          >
            {hasReviewed ? 'I Understand and Agree' : 'Please read all terms first'}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
