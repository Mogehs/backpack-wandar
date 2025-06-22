import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Hero from './components/Hero';
import Navbar from './components/common/Navbar';
import WhatWeDo from './components/WhatWeDo';
import WeOffer from './components/WeOffer';
// import Marquee from "./components/Marquee";
import Visible from './components/Visible';
import OurVision from './components/OurVision';
import './i18n';
import Potential from './components/Potential';
import Footer from './components/common/Footer';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import BeginSection from './components/Begin';
import ScrollToTop from './ScrollToTop';
import { Helmet } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

// Home Page Component
const HomePage = () => {
  const { t } = useTranslation();
  const { currentLang, getLocalizedUrl } = useLanguage();

  // Create alternate language URLs for SEO
  const currentUrl = window.location.origin + getLocalizedUrl(currentLang);
  const enUrl = window.location.origin + getLocalizedUrl('en');
  const deUrl = window.location.origin + getLocalizedUrl('de');
  const srUrl = window.location.origin + getLocalizedUrl('sr');

  return (
    <>
      <Helmet>
        <html lang={currentLang} />
        <title>{t('seo.home.title')} | Backpack Wander</title>
        <meta name='description' content={t('seo.home.description')} />
        <meta name='keywords' content={t('seo.home.keywords')} />
        <link rel='canonical' href={currentUrl} />
        <link rel='alternate' hreflang='en' href={enUrl} />
        <link rel='alternate' hreflang='de' href={deUrl} />
        <link rel='alternate' hreflang='sr' href={srUrl} />
        <link rel='alternate' hreflang='x-default' href={enUrl} />
      </Helmet>

      <Hero />
      <WhatWeDo />
      <WeOffer />
      {/* <Marquee /> */}
      <BeginSection />
      <Visible />
      <OurVision />
      <Potential />
      <ContactUs />
    </>
  );
};

// SEO-optimized Privacy Policy component
const LocalizedPrivacyPolicy = () => {
  const { t } = useTranslation();
  const { currentLang, getLocalizedUrl } = useLanguage();

  // Create alternate language URLs for SEO
  const currentUrl = window.location.origin + getLocalizedUrl(currentLang);
  const enUrl = window.location.origin + getLocalizedUrl('en');
  const deUrl = window.location.origin + getLocalizedUrl('de');
  const srUrl = window.location.origin + getLocalizedUrl('sr');

  return (
    <>
      <Helmet>
        <html lang={currentLang} />
        <title>{t('seo.privacy.title')} | Backpack Wander</title>
        <meta name='description' content={t('seo.privacy.description')} />
        <meta name='keywords' content={t('seo.privacy.keywords')} />
        <link rel='canonical' href={currentUrl} />
        <link rel='alternate' hreflang='en' href={enUrl} />
        <link rel='alternate' hreflang='de' href={deUrl} />
        <link rel='alternate' hreflang='sr' href={srUrl} />
        <link rel='alternate' hreflang='x-default' href={enUrl} />
      </Helmet>
      <PrivacyPolicy />
    </>
  );
};

// SEO-optimized Terms component
const LocalizedTermsAndConditions = () => {
  const { t } = useTranslation();
  const { currentLang, getLocalizedUrl } = useLanguage();

  // Create alternate language URLs for SEO
  const currentUrl = window.location.origin + getLocalizedUrl(currentLang);
  const enUrl = window.location.origin + getLocalizedUrl('en');
  const deUrl = window.location.origin + getLocalizedUrl('de');
  const srUrl = window.location.origin + getLocalizedUrl('sr');

  return (
    <>
      <Helmet>
        <html lang={currentLang} />
        <title>{t('seo.terms.title')} | Backpack Wander</title>
        <meta name='description' content={t('seo.terms.description')} />
        <meta name='keywords' content={t('seo.terms.keywords')} />
        <link rel='canonical' href={currentUrl} />
        <link rel='alternate' hreflang='en' href={enUrl} />
        <link rel='alternate' hreflang='de' href={deUrl} />
        <link rel='alternate' hreflang='sr' href={srUrl} />
        <link rel='alternate' hreflang='x-default' href={enUrl} />
      </Helmet>
      <TermsAndConditions />
    </>
  );
};

const AppContent = () => {
  return (
    <div className='max-w-[1536px] mx-auto'>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Default (English) routes */}
        <Route path='/' element={<HomePage />} />
        <Route path='/privacy-policy' element={<LocalizedPrivacyPolicy />} />
        <Route
          path='/terms-and-conditions'
          element={<LocalizedTermsAndConditions />}
        />

        {/* Localized routes for German */}
        <Route path='/de' element={<HomePage />} />
        <Route path='/de/privacy-policy' element={<LocalizedPrivacyPolicy />} />
        <Route
          path='/de/terms-and-conditions'
          element={<LocalizedTermsAndConditions />}
        />

        {/* Localized routes for Serbian */}
        <Route path='/sr' element={<HomePage />} />
        <Route path='/sr/privacy-policy' element={<LocalizedPrivacyPolicy />} />
        <Route
          path='/sr/terms-and-conditions'
          element={<LocalizedTermsAndConditions />}
        />

        {/* Redirect all other routes to the home page */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
