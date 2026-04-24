import React from 'react';

interface ConsentModalProps {
  onAgree: () => void;
  onCancel?: () => void;
}

export function ConsentModal({ onAgree, onCancel }: ConsentModalProps) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(7, 60, 101, 0.45)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        zIndex: 50,
      }}
      onClick={onCancel}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          background: 'white',
          borderRadius: '1.5rem',
          padding: '2rem 1.75rem 1.75rem',
          boxShadow: '0 20px 60px rgba(7, 60, 101, 0.2)',
          textAlign: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{
          color: '#073C65',
          fontSize: '1.375rem',
          fontWeight: 700,
          marginBottom: '1rem',
          lineHeight: 1.3,
        }}>
          Before You Continue
        </h2>

        <p style={{
          color: '#6B7280',
          fontSize: '0.9375rem',
          lineHeight: 1.7,
          marginBottom: '1.5rem',
        }}>
          JAIDE uses the information, photos, and documents you provide to generate general civil law information.
          We do not provide legal advice, make legal determinations, or replace a qualified lawyer.
        </p>

        {/* Gold divider */}
        <div style={{ height: '1px', background: '#D49E37', opacity: 0.5, marginBottom: '1.5rem' }} />

        <button
          onClick={onAgree}
          style={{
            width: '100%',
            padding: '1rem',
            borderRadius: '100px',
            border: 'none',
            background: '#073C65',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            marginBottom: '0.875rem',
            fontFamily: 'inherit',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#0A5A8A'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#073C65'; }}
        >
          I Understand and Agree
        </button>

        <button
          onClick={onCancel}
          style={{
            background: 'none',
            border: 'none',
            color: '#9CA3AF',
            fontSize: '0.9375rem',
            cursor: 'pointer',
            fontFamily: 'inherit',
            padding: '0.25rem',
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
