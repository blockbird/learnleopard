import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { StatsSection } from './components/StatsSection';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiesPolicy } from './pages/CookiesPolicy';

// Layout component to wrap pages with Header and Footer
const Layout = () => {
  const location = useLocation();

  // Scroll to top when navigating to a new page (like policy pages)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Child routes will render here */}
      </main>
      <Footer />
    </>
  );
};

// Component for the main landing page content
const LandingPage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <BenefitsSection />
    <StatsSection />
    <TestimonialsSection />
    <PricingSection />
    <FAQSection />
  </>
);

export const App = () => {
  // Add smooth scrolling behavior (keep this if desired for landing page sections)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen">
        <Routes>
          <Route element={<Layout />}> {/* Wrap routes in Layout */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
            {/* Add other top-level routes here if needed */}
            <Route path="*" element={<Navigate to="/" replace />} /> {/* Catch-all still redirects to home */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
