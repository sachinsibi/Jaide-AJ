'use client';

import { Suspense } from 'react';
import { IntakeFlow } from '@/components/screens/IntakeFlow';

export default function IntakePage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#FAFBFC' }} />}>
      <IntakeFlow />
    </Suspense>
  );
}
