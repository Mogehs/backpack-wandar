import React, { createContext, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Get default language from build configuration
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

  // Force default language on initial mount
  useEffect(() => {
    if (import.meta.env.DEV) {
      // In development, always force English
      console.log("LanguageContext: Forcing English in development mode");
      localStorage.removeItem("i18nextLng");
      localStorage.setItem("i18nextLng", "en");
      i18n.changeLanguage("en");
    } else {
      // In production, use the build-specific default
      localStorage.removeItem("i18nextLng");
      localStorage.setItem("i18nextLng", defaultLanguage);
      i18n.changeLanguage(defaultLanguage);
    }
  }, [i18n, defaultLanguage]);

  // Extract language from URL path if present
  useEffect(() => {
    const path = location.pathname;
    const segments = path.split("/").filter(Boolean);
    const currentLang = i18n.language; // Check if first segment is a language code
    if (segments.length > 0 && ["en", "de", "sr"].includes(segments[0])) {
      if (segments[0] !== currentLang) {
        i18n.changeLanguage(segments[0]);
      }
    } else if (currentLang !== defaultLanguage) {
      // No language in URL but user has a non-default language set
      // Here we don't redirect, we just maintain their language preference
    }
  }, [location, i18n, defaultLanguage]);

  // Change URL when language changes
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);

    const path = location.pathname;
    const segments = path.split("/").filter(Boolean);
    if (segments.length > 0 && ["en", "de", "sr"].includes(segments[0])) {
      // URL already has language prefix, update it
      const newPath = "/" + lang + path.substring(3);
      navigate(newPath);
    } else if (lang !== defaultLanguage) {
      // Default language doesn't need prefix, only add prefix for other languages
      navigate(`/${lang}${path}`);
    }
  };

  // Get current URL for other languages
  const getLocalizedUrl = (lang) => {
    const path = location.pathname;
    const segments = path.split("/").filter(Boolean);
    if (segments.length > 0 && ["en", "de", "sr"].includes(segments[0])) {
      if (lang === defaultLanguage) {
        // For default language, remove language prefix
        return "/" + segments.slice(1).join("/");
      }
      // Replace language prefix
      return "/" + lang + "/" + segments.slice(1).join("/");
    } else if (lang === defaultLanguage) {
      // Current URL has no prefix and requested is default language
      return path;
    } else {
      // Current URL has no prefix and requested is not default language
      return "/" + lang + path;
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLang: i18n.language,
        changeLanguage,
        getLocalizedUrl,
        defaultLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
