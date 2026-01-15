import React, { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { LandingScreen } from './components/LandingScreen';
import { SynthesizingScreen } from './components/SynthesizingScreen';
import { CategoryConfirmationScreen, IncidentCategory } from './components/CategoryConfirmationScreen';
import { PersonalInjuryScreen } from './components/PersonalInjuryScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { HomeScreen } from './components/HomeScreen';
import { PaywallModal } from './components/PaywallModal';
import { LawyerDirectory } from './components/LawyerDirectory';
import { detectIncidentCategory } from './utils/incidentDetection';

type Screen = 'splash' | 'landing' | 'synthesizing' | 'category-confirm' | 'personal-injury' | 'onboarding' | 'home' | 'lawyers';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [userInput, setUserInput] = useState('');
  const [detectedCategory, setDetectedCategory] = useState<IncidentCategory>('general-civil');
  const [confirmedCategory, setConfirmedCategory] = useState<IncidentCategory>('general-civil');
  const [caseData, setCaseData] = useState<Record<string, string>>({});
  const [showPaywall, setShowPaywall] = useState(false);
  const [hasUnlockedLawyers, setHasUnlockedLawyers] = useState(false);

  const handleSplashComplete = () => {
    setCurrentScreen('landing');
  };

  const handleLandingContinue = (input: string) => {
    setUserInput(input);
    setCurrentScreen('synthesizing');
  };

  const handleSynthesizingComplete = () => {
    // Detect incident category
    const category = detectIncidentCategory(userInput);
    setDetectedCategory(category);
    
    // If personal injury, show rejection screen
    if (category === 'personal-injury') {
      setCurrentScreen('personal-injury');
    } else {
      setCurrentScreen('category-confirm');
    }
  };

  const handleCategoryConfirm = (category: IncidentCategory) => {
    setConfirmedCategory(category);
    setCurrentScreen('onboarding');
  };

  const handleCategoryBack = () => {
    setCurrentScreen('landing');
  };

  const handlePersonalInjuryBack = () => {
    setCurrentScreen('landing');
  };

  const handleOnboardingComplete = (allAnswers: Record<string, string>) => {
    setCaseData({
      ...allAnswers,
      scenario: userInput,
      initial: userInput, // Backward compatibility
      category: confirmedCategory
    });
    setCurrentScreen('home');
  };

  const handleOnboardingBack = () => {
    setCurrentScreen('category-confirm');
  };

  const handleAccessLawyers = () => {
    if (hasUnlockedLawyers) {
      setCurrentScreen('lawyers');
    } else {
      setShowPaywall(true);
    }
  };

  const handleUnlockLawyers = () => {
    setHasUnlockedLawyers(true);
    setShowPaywall(false);
    setCurrentScreen('lawyers');
  };

  const handleLawyersBack = () => {
    setCurrentScreen('home');
  };

  const handleStartOver = () => {
    // Reset all state and go back to landing
    setCurrentScreen('landing');
    setUserInput('');
    setDetectedCategory('general-civil');
    setConfirmedCategory('general-civil');
    setCaseData({});
    setShowPaywall(false);
    setHasUnlockedLawyers(false);
  };

  return (
    <div style={{ minHeight: '100vh', width: '100%' }}>
      {currentScreen === 'splash' && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

      {currentScreen === 'landing' && (
        <LandingScreen onContinue={handleLandingContinue} />
      )}

      {currentScreen === 'synthesizing' && (
        <SynthesizingScreen onComplete={handleSynthesizingComplete} />
      )}

      {currentScreen === 'category-confirm' && (
        <CategoryConfirmationScreen
          detectedCategory={detectedCategory}
          userInput={userInput}
          onConfirm={handleCategoryConfirm}
          onBack={handleCategoryBack}
        />
      )}

      {currentScreen === 'personal-injury' && (
        <PersonalInjuryScreen onBack={handlePersonalInjuryBack} />
      )}

      {currentScreen === 'onboarding' && (
        <OnboardingScreen
          initialInput={userInput}
          category={confirmedCategory}
          onComplete={handleOnboardingComplete}
          onBack={handleOnboardingBack}
        />
      )}

      {currentScreen === 'home' && (
        <HomeScreen
          caseData={caseData}
          onAccessLawyers={handleAccessLawyers}
          onStartOver={handleStartOver}
        />
      )}

      {currentScreen === 'lawyers' && (
        <LawyerDirectory
          caseData={caseData}
          onBack={handleLawyersBack}
          onStartOver={handleStartOver}
        />
      )}

      {showPaywall && (
        <PaywallModal
          onClose={() => setShowPaywall(false)}
          onUnlock={handleUnlockLawyers}
        />
      )}
    </div>
  );
}
