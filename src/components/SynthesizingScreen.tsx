import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ position: 'relative' }}>
          <Loader2 className="w-16 h-16 text-navy animate-spin" />
        </div>
        
        <h2 className="text-navy">
          Synthesizing...
        </h2>
        
        <p className="text-grey-medium" style={{ textAlign: 'center', width: '100%', maxWidth: '28rem', padding: '0 1.5rem' }}>
          Analyzing your situation and preparing personalized legal information
        </p>
      </div>
    </div>
  );
}
