
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { StatsSection } from './components/StatsSection';

export const App = () => {
  // Add smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <HashRouter>
      <div className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main>
                <HeroSection />
                <FeaturesSection />
                <BenefitsSection />
                <StatsSection />
                <TestimonialsSection />
                <PricingSection />
                <FAQSection />
              </main>
              <Footer />
            </>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
};
