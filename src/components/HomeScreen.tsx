import React, { useState } from 'react';
import { Logo } from './Logo';
import { User, Save, Download, Search, Zap, X } from 'lucide-react';
import { OverviewTab } from './tabs/OverviewTab';
import { LegalBreakdownTab } from './tabs/LegalBreakdownTab';
import { ELI5Tab } from './tabs/ELI5Tab';
import { ReferencesTab } from './tabs/ReferencesTab';

interface HomeScreenProps {
  caseData: Record<string, string>;
  onAccessLawyers: () => void;
  onStartOver?: () => void;
}

const TABS = [
  { id: 'overview',    label: 'Overview' },
  { id: 'legal',       label: 'Full Legal Breakdown' },
  { id: 'eli5',        label: "Explain Like I'm 5" },
  { id: 'references',  label: 'Links & Literature' },
] as const;

type TabId = typeof TABS[number]['id'];

export function HomeScreen({ caseData, onAccessLawyers, onStartOver }: HomeScreenProps) {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const scenario = caseData.scenario || caseData.initial || '';

  const renderTab = () => {
    switch (activeTab) {
      case 'overview':    return <OverviewTab scenario={scenario} onboardingData={caseData} />;
      case 'legal':       return <LegalBreakdownTab scenario={scenario} onboardingData={caseData} />;
      case 'eli5':        return <ELI5Tab scenario={scenario} onboardingData={caseData} />;
      case 'references':  return <ReferencesTab scenario={scenario} onboardingData={caseData} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#FAFBFC', position: 'relative' }}>
      {/* Sticky header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        width: '100%',
        background: 'white',
        borderBottom: '1px solid rgba(7, 60, 101, 0.07)',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Logo size="small" showText={true} />
        <button
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: '#F3F4F6',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={() => alert('Profile — coming soon')}
          aria-label="Profile"
        >
          <User style={{ width: '18px', height: '18px', color: '#6B7280' }} />
        </button>
      </header>

      {/* Scrollable content */}
      <div style={{ width: '100%', maxWidth: '720px', margin: '0 auto', padding: '1.5rem 1.25rem 6rem' }}>

        {/* Scenario label + card */}
        <p style={{
          fontSize: '0.6875rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#9CA3AF',
          marginBottom: '0.625rem',
        }}>
          Your Scenario
        </p>
        <div style={{
          background: 'white',
          borderRadius: '1rem',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          boxShadow: '0 1px 8px rgba(7, 60, 101, 0.06)',
          fontSize: '0.9375rem',
          color: '#374151',
          lineHeight: 1.6,
        }}>
          {scenario || 'Dispute regarding a civil matter.'}
        </div>

        {/* Horizontal tab pills */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          overflowX: 'auto',
          paddingBottom: '0.25rem',
          marginBottom: '1.5rem',
          scrollbarWidth: 'none',
        }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flexShrink: 0,
                padding: '0.5rem 1.125rem',
                borderRadius: '100px',
                border: activeTab === tab.id ? 'none' : '1.5px solid #E5E7EB',
                background: activeTab === tab.id ? '#073C65' : 'white',
                color: activeTab === tab.id ? 'white' : '#374151',
                fontSize: '0.875rem',
                fontWeight: activeTab === tab.id ? 600 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontFamily: 'inherit',
                transition: 'background 0.15s, color 0.15s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div key={activeTab}>
          {renderTab()}
        </div>
      </div>

      {/* FAB — gold lightning bolt */}
      <button
        onClick={() => setShowBottomSheet(true)}
        style={{
          position: 'fixed',
          bottom: '1.75rem',
          right: '1.5rem',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#D49E37',
          border: 'none',
          boxShadow: '0 4px 16px rgba(212, 158, 55, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 30,
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 158, 55, 0.55)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(212, 158, 55, 0.45)';
        }}
        aria-label="Actions"
      >
        <Zap style={{ width: '24px', height: '24px', color: 'white', fill: 'white' }} />
      </button>

      {/* Bottom sheet overlay */}
      {showBottomSheet && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
          onClick={() => setShowBottomSheet(false)}
        >
          {/* Scrim */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(7, 60, 101, 0.25)',
            backdropFilter: 'blur(2px)',
          }} />

          {/* Sheet */}
          <div
            style={{
              position: 'relative',
              background: 'white',
              borderRadius: '1.5rem 1.5rem 0 0',
              padding: '1.25rem 1.5rem 2.5rem',
              boxShadow: '0 -4px 24px rgba(7, 60, 101, 0.12)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle */}
            <div style={{
              width: '36px',
              height: '4px',
              borderRadius: '2px',
              background: '#D1D5DB',
              margin: '0 auto 1.25rem',
            }} />

            <div style={{ display: 'flex', gap: '0.875rem' }}>
              {/* Save */}
              <button
                onClick={() => { alert('Save Progress — coming soon'); setShowBottomSheet(false); }}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '1.25rem 0.75rem',
                  background: 'white',
                  border: '1.5px solid #E5E7EB',
                  borderRadius: '1rem',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                <Save style={{ width: '24px', height: '24px', color: '#073C65' }} />
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#073C65', textAlign: 'center', lineHeight: 1.3 }}>
                  Save<br />Progress
                </span>
              </button>

              {/* Export */}
              <button
                onClick={() => { alert('Export Summary — coming soon'); setShowBottomSheet(false); }}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '1.25rem 0.75rem',
                  background: 'white',
                  border: '1.5px solid #E5E7EB',
                  borderRadius: '1rem',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                <Download style={{ width: '24px', height: '24px', color: '#073C65' }} />
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#073C65', textAlign: 'center', lineHeight: 1.3 }}>
                  Export<br />Summary
                </span>
              </button>

              {/* Find a Lawyer */}
              <button
                onClick={() => { onAccessLawyers(); setShowBottomSheet(false); }}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '1.25rem 0.75rem',
                  background: '#D49E37',
                  border: 'none',
                  borderRadius: '1rem',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  boxShadow: '0 2px 10px rgba(212, 158, 55, 0.35)',
                }}
              >
                <Search style={{ width: '24px', height: '24px', color: 'white' }} />
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'white', textAlign: 'center', lineHeight: 1.3 }}>
                  Find a<br />Lawyer
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
