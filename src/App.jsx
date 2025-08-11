import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Hero from "./components/Hero";
import Navbar from "./components/common/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import WeOffer from "./components/WeOffer";
// import Marquee from "./components/Marquee";
import Visible from "./components/Visible";
import OurVision from "./components/OurVision";
import "./i18n";
import i18n from "./i18n";
import Potential from "./components/Potential";
import Footer from "./components/common/Footer";
import ContactUs from "./components/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import BeginSection from "./components/Begin";
import ScrollToTop from "./ScrollToTop";
import { LanguageProvider } from "./contexts/LanguageContext";

// Home Page Component
const HomePage = () => {
  return (
    <>
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

// Privacy Policy component
const LocalizedPrivacyPolicy = () => {
  return <PrivacyPolicy />;
};

// Terms component
const LocalizedTermsAndConditions = () => {
  return <TermsAndConditions />;
};

const AppContent = () => {
  return (
    <div className="max-w-[1536px] mx-auto">
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Default (English) routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<LocalizedPrivacyPolicy />} />
        <Route
          path="/terms-and-conditions"
          element={<LocalizedTermsAndConditions />}
        />

        {/* Localized routes for German */}
        <Route path="/de" element={<HomePage />} />
        <Route path="/de/privacy-policy" element={<LocalizedPrivacyPolicy />} />
        <Route
          path="/de/terms-and-conditions"
          element={<LocalizedTermsAndConditions />}
        />

        {/* Localized routes for Serbian */}
        <Route path="/sr" element={<HomePage />} />
        <Route path="/sr/privacy-policy" element={<LocalizedPrivacyPolicy />} />
        <Route
          path="/sr/terms-and-conditions"
          element={<LocalizedTermsAndConditions />}
        />

        {/* Redirect all other routes to the home page */}
        <Route path="*" element={<Navigate to="/" />} />
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
