import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

interface SynthesizingScreenProps {
  onComplete: () => void;
}

export function SynthesizingScreen({ onComplete }: SynthesizingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2200);
    const completeTimer = setTimeout(() => onComplete(), 2500);
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
        background: 'linear-gradient(to bottom, #E6F2FA 0%, #F5FAFD 50%, white 100%)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? 'scale(1.03)' : 'scale(1)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <Logo size="medium" showText={false} />

        <h2 style={{
          color: '#073C65',
          fontSize: '1.25rem',
          fontWeight: 700,
          textAlign: 'center',
        }}>
          Synthesising your situation...
        </h2>

        <div
          style={{
            width: '28px',
            height: '28px',
            border: '3px solid transparent',
            borderTopColor: '#D49E37',
            borderRadius: '50%',
            animation: 'arcSpin 1s linear infinite',
          }}
        />

        <p style={{
          color: '#9CA3AF',
          fontSize: '0.9375rem',
          textAlign: 'center',
        }}>
          Mapping civil law patterns...
        </p>
      </div>

      <style>{`
        @keyframes arcSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
