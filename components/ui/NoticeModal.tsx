'use client';

import { Shield, Info, X, Globe } from 'lucide-react';

interface NoticeModalProps {
  onAcknowledge: () => void;
}

const ITEMS = [
  {
    icon: Info,
    title: 'What J.A.I.D.E. provides',
    body: 'General information about how Barbados civil law works and what the process typically looks like for your type of dispute.',
  },
  {
    icon: X,
    title: 'What J.A.I.D.E. does NOT provide',
    body: 'Legal advice. A lawyer–client relationship. Representation. Guidance on what you personally should do in your specific situation.',
  },
  {
    icon: Globe,
    title: 'Jurisdiction',
    body: 'All information relates to the civil law of Barbados only. Nothing here applies to other jurisdictions.',
  },
];

export function NoticeModal({ onAcknowledge }: NoticeModalProps) {
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
        {/* Header — no close button: acknowledgement is mandatory */}
        <div style={{
          background: '#073C65', padding: '1.25rem 1.5rem',
          display: 'flex', alignItems: 'center', gap: '0.875rem',
          flexShrink: 0,
        }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: 'rgba(212, 158, 55, 0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Shield style={{ width: '20px', height: '20px', color: '#C9A84C' }} />
          </div>
          <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1.0625rem' }}>
            Important Notice
          </h2>
        </div>

        {/* Body */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>
          <p style={{ fontSize: '0.9375rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            J.A.I.D.E. provides general civil law information for Barbados only. It is <strong style={{ color: '#073C65' }}>not legal advice</strong>.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {ITEMS.map(({ icon: Icon, title, body }) => (
              <div key={title} style={{
                background: '#F9FAFB', borderRadius: '1rem',
                padding: '1.25rem', border: '1px solid rgba(7, 60, 101, 0.08)',
                display: 'flex', alignItems: 'flex-start', gap: '1rem',
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: '#073C65', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon style={{ width: '18px', height: '18px', color: 'white' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: '#073C65', fontSize: '0.9375rem', marginBottom: '0.375rem' }}>
                    {title}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: '1.65' }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div style={{
            marginTop: '1.25rem',
            background: 'rgba(201, 168, 76, 0.1)',
            border: '1px solid rgba(201, 168, 76, 0.3)',
            borderRadius: '1rem', padding: '1rem 1.25rem',
            display: 'flex', alignItems: 'flex-start', gap: '0.875rem',
          }}>
            <div style={{
              width: '24px', height: '24px', borderRadius: '50%',
              background: '#C9A84C', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.875rem', color: 'white', fontWeight: 700,
            }}>✓</div>
            <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: '1.6' }}>
              For legal advice, consult a <strong style={{ color: '#073C65' }}>qualified attorney</strong> admitted to practise in Barbados.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: '1rem 1.5rem', borderTop: '1px solid rgba(7, 60, 101, 0.08)',
          display: 'flex', justifyContent: 'flex-end', flexShrink: 0,
        }}>
          <button
            onClick={onAcknowledge}
            style={{
              background: '#C9A84C', color: 'white', border: 'none',
              borderRadius: '100px', padding: '0.75rem 1.75rem',
              fontWeight: 700, fontSize: '0.9375rem', cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            I Understand — Continue
          </button>
        </div>
      </div>
    </div>
  );
}
