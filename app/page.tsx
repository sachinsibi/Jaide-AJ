'use client';

import { useEffect, useState } from 'react';
import { LandingScreen } from '@/components/screens/LandingScreen';
import { NoticeModal } from '@/components/ui/NoticeModal';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [noticeSeen, setNoticeSeen] = useState<boolean | null>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem('noticeSeen') === 'true';
    setNoticeSeen(seen);
  }, []);

  const handleAcknowledge = () => {
    sessionStorage.setItem('noticeSeen', 'true');
    setNoticeSeen(true);
  };

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

  // Avoid flash: render nothing until sessionStorage is read
  if (noticeSeen === null) return null;

  return (
    <>
      <LandingScreen onContinue={handleContinue} />
      {!noticeSeen && <NoticeModal onAcknowledge={handleAcknowledge} />}
    </>
  );
}
