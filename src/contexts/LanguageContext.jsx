import React, { createContext, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Extract language from URL path if present
  useEffect(() => {
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    const currentLang = i18n.language; // Check if first segment is a language code
    if (segments.length > 0 && ['en', 'de', 'sr'].includes(segments[0])) {
      if (segments[0] !== currentLang) {
        i18n.changeLanguage(segments[0]);
      }
    } else if (currentLang !== 'sr') {
      // No language in URL but user has a non-default language set
      // Here we don't redirect, we just maintain their language preference
    }
  }, [location, i18n]);

  // Change URL when language changes
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);

    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    if (segments.length > 0 && ['en', 'de', 'sr'].includes(segments[0])) {
      // URL already has language prefix, update it
      const newPath = '/' + lang + path.substring(3);
      navigate(newPath);
    } else if (lang !== 'sr') {
      // Serbian is default, only add prefix for other languages
      navigate(`/${lang}${path}`);
    }
  };

  // Get current URL for other languages
  const getLocalizedUrl = (lang) => {
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    if (segments.length > 0 && ['en', 'de', 'sr'].includes(segments[0])) {
      if (lang === 'sr') {
        // For Serbian, remove language prefix
        return '/' + segments.slice(1).join('/');
      }
      // Replace language prefix
      return '/' + lang + '/' + segments.slice(1).join('/');
    } else if (lang === 'sr') {
      // Current URL has no prefix and requested is Serbian
      return path;
    } else {
      // Current URL has no prefix and requested is not Serbian
      return '/' + lang + path;
    }
  };

  return (
    <LanguageContext.Provider
      value={{ currentLang: i18n.language, changeLanguage, getLocalizedUrl }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
