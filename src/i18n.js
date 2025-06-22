import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';
import translationSR from './locales/sr/translation.json';

// Resources object with translations
const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
  sr: {
    translation: translationSR,
  },
};

i18n
  // Use backend plugin for loading translations
  .use(Backend)
  // Detect user language - disabled to enforce Serbian as default
  // .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    lng: 'sr', // Force Serbian as the initial language
    fallbackLng: 'sr', // Default fallback language
    debug: false, // Set debug manually

    interpolation: {
      escapeValue: false, // Not needed for React as it escapes by default
    },

    // React settings
    react: {
      useSuspense: true,
    },
  });

export default i18n;
