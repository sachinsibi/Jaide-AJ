import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { Loader2 } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2700); // Start fade at 2.7s

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000); // Complete at 3s

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-white via-pale-blue-light to-white transition-all duration-500 ${
        fadeOut ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <Logo size="large" showText={true} />
        
        {/* Spinning loading icon */}
        <Loader2 className="w-8 h-8 text-gold animate-spin" />
      </div>
    </div>
  );
}