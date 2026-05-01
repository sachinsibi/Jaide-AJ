'use client';

import { LandingScreen } from '@/components/screens/LandingScreen';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleContinue = async (input: string) => {
    sessionStorage.setItem('userInput', input);

    const res = await fetch('/api/classify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userInput: input }),
    });

    const { category } = await res.json();

    if (category === 'personal-injury') {
      router.push('/personal-injury');
    } else {
      router.push(`/intake?category=${category}&step=confirm`);
    }
  };

  return <LandingScreen onContinue={handleContinue} />;
}
