import React from 'react';
import { Lock } from 'lucide-react';

interface PaywallModalProps {
  onClose: () => void;
  onUnlock: () => void;
}

export function PaywallModal({ onClose, onUnlock }: PaywallModalProps) {
  const features = [
    'Matched lawyers for your specific civil issue',
    'Transparent hourly rates',
    'Verified reviews from real users',
    'Your case brief sent automatically',
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(7, 60, 101, 0.3)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      {/* Card wrapper — extra top padding for the overlapping icon */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '380px', paddingTop: '36px' }} onClick={(e) => e.stopPropagation()}>

        {/* Gold lock circle — overlaps top edge of card */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: '#D49E37',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          boxShadow: '0 4px 16px rgba(212, 158, 55, 0.4)',
        }}>
          <Lock style={{ width: '32px', height: '32px', color: 'white' }} />
        </div>

        {/* Card */}
        <div style={{
          background: 'white',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(7, 60, 101, 0.18)',
        }}>
          {/* Gold top border */}
          <div style={{ height: '4px', background: '#D49E37' }} />

          <div style={{ padding: '3rem 1.75rem 1.75rem', textAlign: 'center' }}>
            <h2 style={{
              color: '#073C65',
              fontSize: '1.625rem',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}>
              Unlock Lawyer Catalogue
            </h2>

            {/* Feature list */}
            <div style={{ textAlign: 'left', marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {features.map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#D49E37', fontSize: '1rem', lineHeight: 1.5, flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#374151', fontSize: '0.9375rem', lineHeight: 1.5 }}>{feature}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <p style={{ marginBottom: '1.25rem' }}>
              <span style={{ color: '#D49E37', fontSize: '1.5rem', fontWeight: 800 }}>BBD $75</span>
              <span style={{ color: '#9CA3AF', fontSize: '0.9375rem', marginLeft: '0.375rem' }}>/ one-time</span>
            </p>

            {/* Unlock button */}
            <button
              onClick={onUnlock}
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '100px',
                border: 'none',
                background: '#D49E37',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                marginBottom: '1rem',
                fontFamily: 'inherit',
                boxShadow: '0 4px 14px rgba(212, 158, 55, 0.4)',
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#C4901F'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#D49E37'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Unlock Access
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: '#9CA3AF',
                fontSize: '0.9375rem',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              No thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
