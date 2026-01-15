import React from 'react';
import { X, Lock, Check, Shield, Zap, Users } from 'lucide-react';

interface PaywallModalProps {
  onClose: () => void;
  onUnlock: () => void;
}

export function PaywallModal({ onClose, onUnlock }: PaywallModalProps) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div 
        className="rounded-2xl w-full relative"
        style={{
          maxWidth: '480px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'white',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full transition-all"
          style={{
            padding: '0.5rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <X className="text-grey-dark" style={{ width: '24px', height: '24px' }} />
        </button>

        {/* Content */}
        <div style={{ padding: '2.5rem 2rem 2rem' }}>
          {/* Lock Icon */}
          <div 
            className="rounded-full mx-auto"
            style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, rgba(212, 158, 55, 0.15), rgba(212, 158, 55, 0.08))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}
          >
            <Lock className="text-gold" style={{ width: '40px', height: '40px' }} />
          </div>

          {/* Title */}
          <h2 
            className="text-navy text-center"
            style={{ 
              fontSize: '1.75rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
              lineHeight: '1.2'
            }}
          >
            Connect with Lawyers
          </h2>
          <p 
            className="text-grey-dark text-center"
            style={{ 
              fontSize: '0.9375rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}
          >
            Get direct access to qualified lawyers who specialize in your type of case
          </p>

          {/* Features */}
          <div style={{ marginBottom: '2rem' }}>
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1rem',
                marginBottom: '1rem'
              }}
            >
              <div 
                className="rounded-full"
                style={{ 
                  width: '24px', 
                  height: '24px', 
                  background: '#D49E37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Check className="text-white" style={{ width: '14px', height: '14px' }} />
              </div>
              <div style={{ flex: 1 }}>
                <p 
                  className="text-navy"
                  style={{ 
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    marginBottom: '0.25rem'
                  }}
                >
                  Browse Qualified Lawyers
                </p>
                <p 
                  className="text-grey-medium"
                  style={{ 
                    fontSize: '0.875rem',
                    lineHeight: '1.5'
                  }}
                >
                  Access profiles of licensed lawyers specializing in your case type
                </p>
              </div>
            </div>

            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1rem',
                marginBottom: '1rem'
              }}
            >
              <div 
                className="rounded-full"
                style={{ 
                  width: '24px', 
                  height: '24px', 
                  background: '#D49E37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Check className="text-white" style={{ width: '14px', height: '14px' }} />
              </div>
              <div style={{ flex: 1 }}>
                <p 
                  className="text-navy"
                  style={{ 
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    marginBottom: '0.25rem'
                  }}
                >
                  Your Case Brief Included
                </p>
                <p 
                  className="text-grey-medium"
                  style={{ 
                    fontSize: '0.875rem',
                    lineHeight: '1.5'
                  }}
                >
                  Share your AI-generated brief with lawyers for faster review
                </p>
              </div>
            </div>

            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1rem',
                marginBottom: '1rem'
              }}
            >
              <div 
                className="rounded-full"
                style={{ 
                  width: '24px', 
                  height: '24px', 
                  background: '#D49E37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Check className="text-white" style={{ width: '14px', height: '14px' }} />
              </div>
              <div style={{ flex: 1 }}>
                <p 
                  className="text-navy"
                  style={{ 
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    marginBottom: '0.25rem'
                  }}
                >
                  Direct Communication
                </p>
                <p 
                  className="text-grey-medium"
                  style={{ 
                    fontSize: '0.875rem',
                    lineHeight: '1.5'
                  }}
                >
                  Message lawyers and schedule consultations directly
                </p>
              </div>
            </div>

            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1rem'
              }}
            >
              <div 
                className="rounded-full"
                style={{ 
                  width: '24px', 
                  height: '24px', 
                  background: '#D49E37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Check className="text-white" style={{ width: '14px', height: '14px' }} />
              </div>
              <div style={{ flex: 1 }}>
                <p 
                  className="text-navy"
                  style={{ 
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    marginBottom: '0.25rem'
                  }}
                >
                  Transparent Pricing
                </p>
                <p 
                  className="text-grey-medium"
                  style={{ 
                    fontSize: '0.875rem',
                    lineHeight: '1.5'
                  }}
                >
                  See rates and availability before you commit
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div 
            className="rounded-xl"
            style={{ 
              background: 'linear-gradient(135deg, rgba(7, 60, 101, 0.03), rgba(212, 158, 55, 0.03))',
              border: '2px solid rgba(212, 158, 55, 0.2)',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span 
                className="text-navy"
                style={{ 
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  lineHeight: 1
                }}
              >
                $29.99
              </span>
              <span 
                className="text-grey-medium"
                style={{ 
                  fontSize: '1rem',
                  textDecoration: 'line-through'
                }}
              >
                $49.99
              </span>
            </div>
            <p 
              className="text-center text-gold"
              style={{ 
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '0.75rem'
              }}
            >
              40% off launch special
            </p>
            <div 
              className="rounded-lg text-center"
              style={{ 
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '0.75rem',
                fontSize: '0.875rem'
              }}
            >
              <span className="text-grey-dark">One-time payment • Unlimited access</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '1.5rem',
              marginBottom: '1.5rem',
              padding: '1rem',
              background: '#F8F9FA',
              borderRadius: '0.75rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield className="text-grey-dark" style={{ width: '18px', height: '18px' }} />
              <span className="text-grey-dark" style={{ fontSize: '0.8125rem' }}>Secure</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Zap className="text-grey-dark" style={{ width: '18px', height: '18px' }} />
              <span className="text-grey-dark" style={{ fontSize: '0.8125rem' }}>Instant Access</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users className="text-grey-dark" style={{ width: '18px', height: '18px' }} />
              <span className="text-grey-dark" style={{ fontSize: '0.8125rem' }}>15+ Lawyers</span>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={onUnlock}
              className="w-full rounded-full transition-all"
              style={{
                padding: '1rem',
                fontSize: '1rem',
                fontWeight: 600,
                background: '#D49E37',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(212, 158, 55, 0.3)',
                letterSpacing: '0.01em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E0B24E';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(212, 158, 55, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#D49E37';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 158, 55, 0.3)';
              }}
            >
              Unlock Lawyer Directory
            </button>
            
            <button
              onClick={onClose}
              className="w-full rounded-full transition-all"
              style={{
                padding: '1rem',
                fontSize: '0.9375rem',
                fontWeight: 500,
                background: 'transparent',
                border: '2px solid #E5E7EB',
                color: '#6B7280',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D1D5DB';
                e.currentTarget.style.background = '#F9FAFB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Maybe Later
            </button>
          </div>

          {/* Footer note */}
          <p 
            className="text-center text-grey-medium"
            style={{ 
              fontSize: '0.75rem',
              marginTop: '1.25rem',
              lineHeight: '1.5'
            }}
          >
            Secure payment via Stripe • Cancel anytime • Money-back guarantee
          </p>
        </div>
      </div>
    </div>
  );
}
