'use client';

import { useEffect, useState } from 'react';
import { LandingScreen } from '@/components/screens/LandingScreen';
import { NoticeModal } from '@/components/ui/NoticeModal';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [noticeSeen, setNoticeSeen] = useState(false);
  const [pendingInput, setPendingInput] = useState<string | null>(null);
  const [classifying, setClassifying] = useState(false);

  useEffect(() => {
    setNoticeSeen(sessionStorage.getItem('noticeSeen') === 'true');
  }, []);

  const classify = async (input: string) => {
    setClassifying(true);
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

  const handleContinue = async (input: string) => {
    if (!noticeSeen) {
      setPendingInput(input);
      return;
    }
    await classify(input);
  };

  const handleAcknowledge = () => {
    sessionStorage.setItem('noticeSeen', 'true');
    setNoticeSeen(true);
    if (pendingInput !== null) {
      const input = pendingInput;
      setPendingInput(null);
      void classify(input);
    }
  };

  if (classifying) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#FAFBFC',
      }}>
        <p style={{ color: '#073C65', fontSize: '1rem', fontFamily: 'inherit' }}>
          Analysing your situation…
        </p>
      </div>
    );
  }

  return (
    <>
      <LandingScreen onContinue={handleContinue} />
      {pendingInput !== null && <NoticeModal onAcknowledge={handleAcknowledge} />}
    </>
  );
}
