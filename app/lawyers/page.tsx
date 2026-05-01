'use client';

import { Suspense } from 'react';
import { LawyersScreen } from '@/components/screens/LawyersScreen';

export default function LawyersPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#FAFBFC' }} />}>
      <LawyersScreen />
    </Suspense>
  );
}
