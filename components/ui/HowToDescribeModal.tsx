'use client';

import { X, Lightbulb, FileText, Users, Calendar, Target, Paperclip } from 'lucide-react';

interface HowToDescribeModalProps {
  onClose: () => void;
}

const STEPS = [
  {
    icon: FileText,
    label: 'Step 1',
    title: 'What happened',
    description: 'Briefly describe the issue or dispute. Include the key facts and events in chronological order.',
    example: '"My landlord charged me for damages I didn\'t cause when I moved out"',
  },
  {
    icon: Users,
    label: 'Step 2',
    title: 'Who\'s involved',
    description: 'Identify the other parties: landlord, company, employer, neighbor, service provider, etc.',
    example: 'Landlord, property management company, insurance provider',
  },
  {
    icon: Calendar,
    label: 'Step 3',
    title: 'When it happened',
    description: 'Provide a timeline or mention when the situation started and any important dates.',
    example: 'Started in January 2025, lease ended February 15th',
  },
  {
    icon: Target,
    label: 'Step 4',
    title: 'What you want',
    description: 'Explain your desired outcome: refund, repair, compensation, resolution, enforcement, etc.',
    example: 'Full security deposit refund, removal of charges',
  },
  {
    icon: Paperclip,
    label: 'Step 5',
    title: 'Evidence you have',
    description: 'Mention if you have emails, contracts, photos, receipts, text messages, or other documentation.',
    example: 'Move-in inspection photos, lease agreement, email correspondence',
  },
];

export function HowToDescribeModal({ onClose }: HowToDescribeModalProps) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(7, 30, 50, 0.55)',
        backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 60, padding: '1rem',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        background: 'white', borderRadius: '1.25rem',
        width: '100%', maxWidth: '680px',
        maxHeight: '90vh', display: 'flex', flexDirection: 'column',
        boxShadow: '0 20px 60px rgba(7, 60, 101, 0.25)',
        overflow: 'hidden',
      }}>
        {/* Header */}
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
            <Lightbulb style={{ width: '20px', height: '20px', color: '#D49E37' }} />
          </div>
          <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1.0625rem', flex: 1 }}>
            How to describe your situation
          </h2>
          <button
            onClick={onClose}
            style={{
              width: '32px', height: '32px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.12)',
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            aria-label="Close"
          >
            <X style={{ width: '16px', height: '16px', color: 'white' }} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>
          <p style={{ fontSize: '0.9375rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            The more details you provide, the better J.A.I.D.E. can help you understand your legal situation.
            Here&apos;s what to include:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {STEPS.map(({ icon: Icon, label, title, description, example }) => (
              <div key={label} style={{
                background: '#F9FAFB', borderRadius: '1rem',
                padding: '1.25rem', border: '1px solid rgba(7, 60, 101, 0.08)',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: '#073C65', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon style={{ width: '18px', height: '18px', color: 'white' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.375rem' }}>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#C9A84C' }}>{label}</span>
                      <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#073C65' }}>{title}</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: '1.65', marginBottom: '0.75rem' }}>
                      {description}
                    </p>
                    <div style={{
                      borderLeft: '3px solid #C9A84C',
                      paddingLeft: '0.875rem',
                      background: 'rgba(201, 168, 76, 0.06)',
                      borderRadius: '0 0.375rem 0.375rem 0',
                      padding: '0.5rem 0.75rem',
                    }}>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 700, fontStyle: 'italic', color: '#C9A84C' }}>Example: </span>
                      <span style={{ fontSize: '0.8125rem', fontStyle: 'italic', color: '#6B7280' }}>{example}</span>
                    </div>
                  </div>
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
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', color: 'white', fontWeight: 700,
            }}>✓</div>
            <div>
              <p style={{ fontWeight: 700, color: '#073C65', fontSize: '0.9375rem', marginBottom: '0.25rem' }}>
                Don&apos;t worry about being perfect!
              </p>
              <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: '1.6' }}>
                J.A.I.D.E. will ask follow-up questions to get all the details needed to help you understand your situation.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: '1rem 1.5rem', borderTop: '1px solid rgba(7, 60, 101, 0.08)',
          display: 'flex', justifyContent: 'flex-end', flexShrink: 0,
        }}>
          <button
            onClick={onClose}
            style={{
              background: '#C9A84C', color: 'white', border: 'none',
              borderRadius: '100px', padding: '0.75rem 1.75rem',
              fontWeight: 700, fontSize: '0.9375rem', cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Got it, let&apos;s start!
          </button>
        </div>
      </div>
    </div>
  );
}
