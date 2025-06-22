import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const { changeLanguage: changeLanguageWithUrl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    changeLanguageWithUrl(lng);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Available languages
  const languages = [
    {
      code: 'en',
      label: t('languageSwitcher.en'),
      flag: '/images/flags/en.svg',
    },
    {
      code: 'de',
      label: t('languageSwitcher.de'),
      flag: '/images/flags/de.svg',
    },
    {
      code: 'sr',
      label: t('languageSwitcher.sr'),
      flag: '/images/flags/sr.svg',
    },
  ];

  // Get current language label
  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        className='flex items-center gap-2 px-3 py-2 text-sm rounded bg-white text-black hover:bg-gray-100'
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={currentLanguage.flag}
          alt={`${currentLanguage.label} flag`}
          className='w-6 h-4 object-cover'
        />
        {currentLanguage.label}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`h-4 w-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg z-10'>
          <ul className='py-1'>
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    i18n.language === lang.code
                      ? 'bg-green text-white'
                      : 'text-black hover:bg-gray-100'
                  } flex items-center gap-2`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  <img
                    src={lang.flag}
                    alt={`${lang.label} flag`}
                    className='w-6 h-4 object-cover'
                  />
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
