import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
// import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationEN from "./locales/en/translation.json";
import translationDE from "./locales/de/translation.json";
import translationSR from "./locales/sr/translation.json";

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

// Get default language from build configuration or environment
const getDefaultLanguage = () => {
  // In development mode, always use English
  if (import.meta.env.DEV) {
    return "en";
  }

  // Try to get from build-time variable first
  if (typeof window !== "undefined" && window.__DEFAULT_LANGUAGE__) {
    return window.__DEFAULT_LANGUAGE__;
  }

  // Fallback: try to detect from document lang attribute
  if (typeof document !== "undefined" && document.documentElement.lang) {
    const docLang = document.documentElement.lang;
    if (["en", "de", "sr"].includes(docLang)) {
      return docLang;
    }
  }

  // Final fallback
  return "en";
};

const defaultLanguage = getDefaultLanguage();

// Force clear localStorage in development mode
if (import.meta.env.DEV) {
  console.log("Development mode detected - forcing English language");
  localStorage.removeItem("i18nextLng");
  localStorage.setItem("i18nextLng", "en");
}

i18n
  // Use backend plugin for loading translations
  .use(Backend)
  // Detect user language - disabled to enforce default language based on build
  // .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    lng: import.meta.env.DEV ? "en" : defaultLanguage, // Force English in development
    fallbackLng: "en", // Always fallback to English
    debug: import.meta.env.DEV, // Enable debug in development

    interpolation: {
      escapeValue: false, // Not needed for React as it escapes by default
    },

    // React settings
    react: {
      useSuspense: true,
    },
  });

// In development, add a global function to reset language
if (import.meta.env.DEV) {
  window.resetLanguageToEnglish = () => {
    localStorage.removeItem("i18nextLng");
    localStorage.setItem("i18nextLng", "en");
    i18n.changeLanguage("en");
    window.location.reload();
  };
  console.log(
    "Development mode: Use resetLanguageToEnglish() in console to reset language to English"
  );
  console.log(`Current language set to: ${i18n.language}`);
}

export default i18n;
