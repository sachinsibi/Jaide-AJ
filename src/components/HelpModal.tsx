import React from 'react';
import { X, FileText, Users, Calendar, Target, Paperclip, Lightbulb, CheckCircle2 } from 'lucide-react';

interface HelpModalProps {
  onClose: () => void;
}

export function HelpModal({ onClose }: HelpModalProps) {
  const helpItems = [
    {
      icon: FileText,
      number: '1',
      title: 'What happened',
      description: 'Briefly describe the issue or dispute. Include the key facts and events in chronological order.',
      example: '"My landlord charged me for damages I didn\'t cause when I moved out"'
    },
    {
      icon: Users,
      number: '2',
      title: 'Who\'s involved',
      description: 'Identify the other parties: landlord, company, employer, neighbor, service provider, etc.',
      example: 'Landlord, property management company, insurance provider'
    },
    {
      icon: Calendar,
      number: '3',
      title: 'When it happened',
      description: 'Provide a timeline or mention when the situation started and any important dates.',
      example: 'Started in January 2025, lease ended February 15th'
    },
    {
      icon: Target,
      number: '4',
      title: 'What you want',
      description: 'Explain your desired outcome: refund, repair, compensation, resolution, enforcement, etc.',
      example: 'Full security deposit refund, removal of charges'
    },
    {
      icon: Paperclip,
      number: '5',
      title: 'Evidence you have',
      description: 'Mention if you have emails, contracts, photos, receipts, text messages, or other documentation.',
      example: 'Move-in inspection photos, lease agreement, email correspondence'
    }
  ];

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(7, 60, 101, 0.4)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl"
        style={{
          width: '100%',
          maxWidth: '640px',
          margin: '0 auto',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(7, 60, 101, 0.25)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Redesigned with gradient */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #073C65 0%, #0A5A8A 100%)',
            padding: '2rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div 
              className="rounded-full"
              style={{
                width: '48px',
                height: '48px',
                background: 'rgba(212, 158, 55, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Lightbulb className="text-gold" style={{ width: '24px', height: '24px' }} />
            </div>
            <h3 className="text-white" style={{ fontWeight: 700, fontSize: '1.375rem', margin: 0 }}>
              How to describe your situation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full transition-colors"
            style={{
              padding: '0.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              flexShrink: 0
            }}
            aria-label="Close"
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          >
            <X className="text-white" style={{ width: '24px', height: '24px' }} />
          </button>
        </div>

        {/* Intro Text */}
        <div style={{ padding: '1.5rem 1.5rem 0', background: '#F5FAFD' }}>
          <p className="text-grey-dark" style={{ lineHeight: '1.7', margin: 0, fontSize: '0.9375rem' }}>
            The more details you provide, the better JAIDE can help you understand your legal situation. 
            Here's what to include:
          </p>
        </div>

        {/* Content - Scrollable */}
        <div style={{ 
          padding: '1.5rem', 
          overflowY: 'auto', 
          flex: 1,
          background: '#F5FAFD'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {helpItems.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.number}
                  className="bg-white rounded-2xl"
                  style={{ 
                    padding: '1.25rem',
                    border: '1px solid rgba(7, 60, 101, 0.08)',
                    boxShadow: '0 2px 8px rgba(7, 60, 101, 0.04)'
                  }}
                >
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {/* Icon Circle */}
                    <div 
                      className="rounded-full"
                      style={{
                        flexShrink: 0,
                        width: '44px',
                        height: '44px',
                        background: 'linear-gradient(135deg, #073C65 0%, #0A5A8A 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon className="text-white" style={{ width: '20px', height: '20px' }} />
                    </div>
                    
                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span 
                          className="text-gold"
                          style={{ 
                            fontWeight: 700, 
                            fontSize: '0.875rem',
                            fontFamily: "'Inter', sans-serif"
                          }}
                        >
                          Step {item.number}
                        </span>
                        <h4 className="text-navy" style={{ fontWeight: 700, fontSize: '1.0625rem', margin: 0 }}>
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-grey-dark" style={{ lineHeight: '1.6', marginBottom: '0.75rem', fontSize: '0.875rem' }}>
                        {item.description}
                      </p>
                      
                      {/* Example */}
                      <div 
                        className="rounded-lg"
                        style={{ 
                          padding: '0.75rem',
                          background: 'rgba(212, 158, 55, 0.08)',
                          borderLeft: '3px solid #D49E37'
                        }}
                      >
                        <p style={{ fontSize: '0.8125rem', lineHeight: '1.5', margin: 0, fontStyle: 'italic' }} className="text-grey-dark">
                          <strong className="text-navy">Example:</strong> {item.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Encouragement Card */}
          <div 
            className="rounded-2xl"
            style={{ 
              marginTop: '1.5rem',
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(212, 158, 55, 0.15), rgba(212, 158, 55, 0.08))',
              border: '2px solid rgba(212, 158, 55, 0.3)'
            }}
          >
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <CheckCircle2 className="text-gold" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
              <div>
                <p className="text-navy" style={{ fontWeight: 700, marginBottom: '0.375rem', fontSize: '0.9375rem' }}>
                  Don't worry about being perfect!
                </p>
                <p className="text-grey-dark" style={{ lineHeight: '1.6', margin: 0, fontSize: '0.875rem' }}>
                  JAIDE will ask follow-up questions to get all the details needed to help you understand your situation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Redesigned */}
        <div 
          className="bg-white"
          style={{
            borderTop: '1px solid rgba(7, 60, 101, 0.1)',
            padding: '1.5rem',
            display: 'flex',
            justifyContent: 'flex-end',
            flexShrink: 0
          }}
        >
          <button
            onClick={onClose}
            className="rounded-full text-white transition-all"
            style={{
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, #D49E37 0%, #E5B85C 100%)',
              border: 'none',
              fontWeight: 600,
              fontSize: '1.0625rem',
              boxShadow: '0 4px 16px rgba(212, 158, 55, 0.25)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 158, 55, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(212, 158, 55, 0.25)';
            }}
          >
            Got it, let's start!
          </button>
        </div>
      </div>
    </div>
  );
}
