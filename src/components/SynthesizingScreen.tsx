import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

interface SynthesizingScreenProps {
  onComplete: () => void;
}

export function SynthesizingScreen({ onComplete }: SynthesizingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #E6F2FA, white)',
        transition: 'all 0.5s',
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? 'scale(1.05)' : 'scale(1)'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <Logo size="large" showText={true} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#D49E37',
              animation: 'pulse 1.2s ease-in-out infinite',
            }}
          />
          <h2 className="text-navy" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            Synthesizing...
          </h2>
          <p className="text-grey-medium" style={{ textAlign: 'center', maxWidth: '28rem', padding: '0 1.5rem' }}>
            Analyzing your situation and preparing personalized legal information
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.6); }
        }
      `}</style>
    </div>
  );
}
