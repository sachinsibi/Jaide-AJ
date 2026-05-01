'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { RotateCcw, Users, Loader } from 'lucide-react';
import type { IncidentCategory, AnalysisOutput, AnalysisTab } from '@/lib/types';
import { OverviewTab } from '@/components/tabs/OverviewTab';
import { LegalBreakdownTab } from '@/components/tabs/LegalBreakdownTab';
import { ELI5Tab } from '@/components/tabs/ELI5Tab';
import { ReferencesTab } from '@/components/tabs/ReferencesTab';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'legalBreakdown', label: 'Full Legal Breakdown' },
  { id: 'eli5', label: "Explain Like I'm 5" },
  { id: 'references', label: 'Links & Literature' },
] as const;

type TabState<T> =
  | { status: 'loading' }
  | { status: 'ready'; data: T }
  | { status: 'error' };

type TabsState = {
  overview: TabState<AnalysisOutput['overview']>;
  legalBreakdown: TabState<AnalysisOutput['legalBreakdown']>;
  eli5: TabState<AnalysisOutput['eli5']>;
  references: TabState<AnalysisOutput['references']>;
};

const INITIAL_STATE: TabsState = {
  overview: { status: 'loading' },
  legalBreakdown: { status: 'loading' },
  eli5: { status: 'loading' },
  references: { status: 'loading' },
};

export function AnalysisScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AnalysisTab>('overview');
  const [tabs, setTabs] = useState<TabsState>(INITIAL_STATE);
  const [caseData, setCaseData] = useState<Record<string, string>>({});
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const stored = sessionStorage.getItem('caseData');
    if (!stored) {
      router.push('/');
      return;
    }

    const parsed: Record<string, string> = JSON.parse(stored);
    setCaseData(parsed);

    const userInput = parsed.scenario ?? parsed.initial ?? '';
    const category = (parsed.category ?? 'general-civil') as IncidentCategory;

    const fetchTab = async <K extends AnalysisTab>(tab: K) => {
      const cacheKey = `analysis.${tab}`;
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        setTabs(s => ({ ...s, [tab]: { status: 'ready', data: JSON.parse(cached) } }));
        return;
      }

      try {
        const res = await fetch('/api/analysis', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userInput, category, caseData: parsed, tab }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const reader = res.body!.getReader();
        const decoder = new TextDecoder();
        let fullText = '';
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          fullText += decoder.decode(value, { stream: true });
        }

        const jsonText = fullText.trim().replace(/^```json\n?/, '').replace(/\n?```$/, '');
        const data = JSON.parse(jsonText);
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
        setTabs(s => ({ ...s, [tab]: { status: 'ready', data } }));
      } catch (err) {
        console.error(`[analysis:${tab}]`, err);
        setTabs(s => ({ ...s, [tab]: { status: 'error' } }));
      }
    };

    void Promise.all([
      fetchTab('overview'),
      fetchTab('legalBreakdown'),
      fetchTab('eli5'),
      fetchTab('references'),
    ]);
  }, [router]);

  const scenario = caseData.scenario ?? caseData.initial ?? '';
  const category = (caseData.category ?? 'general-civil') as IncidentCategory;

  const handleStartOver = () => {
    sessionStorage.clear();
    router.push('/');
  };

  const handleAccessLawyers = () => {
    router.push(`/lawyers?category=${category}`);
  };

  const renderTab = () => {
    const tabState = tabs[activeTab];
    if (tabState.status === 'loading') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.875rem', padding: '4rem 0' }}>
          <Loader style={{ width: '28px', height: '28px', color: '#D49E37', animation: 'spin 1s linear infinite' }} />
          <p style={{ color: '#6B7280', fontSize: '0.9375rem' }}>Writing this section…</p>
        </div>
      );
    }
    if (tabState.status === 'error') {
      return (
        <div style={{ padding: '3rem 0', textAlign: 'center' }}>
          <p style={{ color: '#6B7280' }}>We couldn&apos;t load this section. Try refreshing the page.</p>
        </div>
      );
    }
    switch (activeTab) {
      case 'overview':
        return <OverviewTab overview={tabState.data as AnalysisOutput['overview']} />;
      case 'legalBreakdown':
        return <LegalBreakdownTab legalBreakdown={tabState.data as AnalysisOutput['legalBreakdown']} />;
      case 'eli5':
        return <ELI5Tab eli5={tabState.data as AnalysisOutput['eli5']} />;
      case 'references':
        return <ReferencesTab references={tabState.data as AnalysisOutput['references']} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FAFBFC' }}>
      <header style={{
        position: 'sticky', top: 0, zIndex: 30, background: 'white',
        borderBottom: '1px solid rgba(7, 60, 101, 0.08)',
        boxShadow: '0 2px 8px rgba(7, 60, 101, 0.06)',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
            <span style={{ color: '#073C65', fontWeight: 800, fontSize: '1.125rem' }}>JAIDE</span>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={handleStartOver}
                style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', padding: '0.5rem 0.875rem', borderRadius: '100px', border: '1.5px solid rgba(7, 60, 101, 0.15)', background: 'white', color: '#073C65', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}
              >
                <RotateCcw style={{ width: '14px', height: '14px' }} /> Start over
              </button>
              <button
                onClick={handleAccessLawyers}
                style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', padding: '0.5rem 0.875rem', borderRadius: '100px', border: 'none', background: '#D49E37', color: 'white', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}
              >
                <Users style={{ width: '14px', height: '14px' }} /> Find a Lawyer
              </button>
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem' }}>
        {scenario && (
          <div style={{ background: 'white', borderRadius: '1.25rem', boxShadow: '0 2px 16px rgba(7, 60, 101, 0.08)', padding: '1.25rem 1.5rem', margin: '1.5rem 0' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D49E37', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Your situation</p>
            <p style={{ fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.7, fontStyle: 'italic' }}>&ldquo;{scenario}&rdquo;</p>
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', padding: '0.25rem 0 1rem', scrollbarWidth: 'none' }}>
          {TABS.map(tab => {
            const isLoading = tabs[tab.id].status === 'loading';
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.5625rem 1rem', borderRadius: '100px', border: 'none', whiteSpace: 'nowrap',
                  background: isActive ? '#073C65' : 'white',
                  color: isActive ? 'white' : '#6B7280',
                  fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'inherit',
                  boxShadow: '0 1px 4px rgba(7, 60, 101, 0.08)',
                  transition: 'all 0.2s',
                }}
              >
                {tab.label}
                {isLoading && (
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: isActive ? '#D49E37' : '#D49E37',
                    animation: 'pulse 1.4s ease-in-out infinite',
                  }} />
                )}
              </button>
            );
          })}
        </div>

        <div style={{ paddingBottom: '4rem' }}>{renderTab()}</div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
      `}</style>
    </div>
  );
}
