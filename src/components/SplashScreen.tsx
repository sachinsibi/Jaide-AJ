import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2700);
    const completeTimer = setTimeout(() => onComplete(), 3000);
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #E6F2FA 0%, #F5FAFD 50%, #FFFFFF 100%)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? 'scale(1.03)' : 'scale(1)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
        <Logo size="large" showText={false} />
        <Logo size="large" showText={true} />

        <div
          style={{
            width: '32px',
            height: '32px',
            border: '3px solid transparent',
            borderTopColor: '#D49E37',
            borderRadius: '50%',
            animation: 'arcSpin 1s linear infinite',
            marginTop: '0.5rem',
          }}
        />
      </div>

      <style>{`
        @keyframes arcSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
