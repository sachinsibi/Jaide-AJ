import React, { useState } from 'react';
import { Menu, Download, Save, Users, X, Briefcase } from 'lucide-react';

interface FloatingActionButtonProps {
  onExport: () => void;
  onSave: () => void;
  onFindLawyers: () => void;
}

export function FloatingActionButton({ onExport, onSave, onFindLawyers }: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(7, 60, 101, 0.2)',
            backdropFilter: 'blur(4px)',
            zIndex: 40,
            transition: 'opacity 0.2s'
          }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Bottom Sheet */}
      {isOpen && (
        <div 
          className="bg-white rounded-t-3xl"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            boxShadow: '0 8px 24px rgba(7, 60, 101, 0.16)',
            zIndex: 50,
            padding: '2rem',
            animation: 'slideUp 0.3s ease-out'
          }}
        >
          <div style={{ width: '100%', maxWidth: '672px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h3 className="text-navy">Actions</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-pale-blue rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-navy" />
              </button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* Find a Lawyer - Prominent CTA */}
              <button
                onClick={() => {
                  onFindLawyers();
                  setIsOpen(false);
                }}
                className="rounded-2xl transition-all"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem 1rem',
                  textAlign: 'left',
                  background: 'linear-gradient(135deg, #D49E37, #E0B24E)',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(212, 158, 55, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(212, 158, 55, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 158, 55, 0.3)';
                }}
              >
                <div 
                  className="rounded-full" 
                  style={{ 
                    width: '56px', 
                    height: '56px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.25)',
                    flexShrink: 0
                  }}
                >
                  <Briefcase className="text-white" style={{ width: '28px', height: '28px' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p className="text-white" style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Find a Lawyer
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                    Connect with qualified legal professionals
                  </p>
                </div>
                <div
                  className="rounded-full"
                  style={{
                    width: '32px',
                    height: '32px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <span className="text-white" style={{ fontSize: '1.25rem', fontWeight: 600 }}>→</span>
                </div>
              </button>

              {/* Export */}
              <button
                onClick={() => {
                  onExport();
                  setIsOpen(false);
                }}
                className="rounded-2xl hover:bg-pale-blue transition-colors"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  textAlign: 'left',
                  background: 'white',
                  border: '1px solid #E5E7EB',
                  cursor: 'pointer'
                }}
              >
                <div className="bg-navy/10 rounded-full" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Download className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <p className="text-navy" style={{ fontWeight: 600 }}>Export Summary</p>
                  <p className="text-grey-medium" style={{ fontSize: '0.875rem' }}>Download as PDF</p>
                </div>
              </button>

              {/* Save */}
              <button
                onClick={() => {
                  onSave();
                  setIsOpen(false);
                }}
                className="rounded-2xl hover:bg-pale-blue transition-colors"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  textAlign: 'left',
                  background: 'white',
                  border: '1px solid #E5E7EB',
                  cursor: 'pointer'
                }}
              >
                <div className="bg-navy/10 rounded-full" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Save className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <p className="text-navy" style={{ fontWeight: 600 }}>Save Progress</p>
                  <p className="text-grey-medium" style={{ fontSize: '0.875rem' }}>Save for later</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full transition-all"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '64px',
          height: '64px',
          background: isOpen ? '#6B7280' : 'linear-gradient(135deg, #D49E37, #E0B24E)',
          boxShadow: '0 8px 24px rgba(7, 60, 101, 0.16)',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer'
        }}
        aria-label="Open actions menu"
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(212, 158, 55, 0.3)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(7, 60, 101, 0.16)';
          }
        }}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <Menu className="w-7 h-7 text-white" />
        )}
      </button>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
