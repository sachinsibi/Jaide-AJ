'use client';

import { Suspense } from 'react';
import { AnalysisScreen } from '@/components/screens/AnalysisScreen';

export default function AnalysisPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#FAFBFC' }} />}>
      <AnalysisScreen />
    </Suspense>
  );
}
