import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import SidebarContact from './ui/SidebarContact';
import { useLanguage } from '../contexts/LanguageContext';

const TermsAndConditions = () => {
  const { t } = useTranslation();
  const { currentLang, getLocalizedUrl } = useLanguage();
  const [activeSection, setActiveSection] = useState('generalTerms');
  const [isSidebarContactOpen, setIsSidebarContactOpen] = useState(false);

  // Refs for sections
  const sectionRefs = {
    generalTerms: useRef(null),
    services: useRef(null),
    userObligations: useRef(null),
    liability: useRef(null),
  };

  // Create alternate language URLs for SEO
  const currentUrl = window.location.origin + getLocalizedUrl(currentLang);
  const enUrl = window.location.origin + getLocalizedUrl('en');
  const deUrl = window.location.origin + getLocalizedUrl('de');
  const srUrl = window.location.origin + getLocalizedUrl('sr');

  const handleSectionNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Setup Intersection Observer for scroll spy
  useEffect(() => {
    const observerOptions = {
      root: null, // Use viewport as root
      rootMargin: '-10% 0px -70% 0px', // Consider element in view when it's 10% from the top and not yet 70% through the bottom
      threshold: 0.1, // Fire when at least 10% of the element is in view
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all section refs
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Clean up observer when component unmounts
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const toggleSidebarContact = () => {
    setIsSidebarContactOpen(!isSidebarContactOpen);
  };
  return (
    <>
      <div className='bg-black min-h-screen animate-fadeIn'>
        <div className='bg-black-light py-32 md:py-36 lg:py-40 px-4 sm:px-6 lg:px-8 text-center rounded-b-2xl shadow-xl mb-4 md:mb-12 border-b border-green'>
          <h1 className='text-4xl sm:text-5xl font-bold mb-4 text-white'>
            {t('termsAndConditionsTitle')}
          </h1>
          <p className='text-lg sm:text-xl max-w-2xl mx-auto text-white'>
            {t('termsAndConditionsHeroSubtitle')}
          </p>
        </div>{' '}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12'>
          <div className='lg:grid lg:grid-cols-12 lg:gap-x-8'>
            <div className='hidden lg:block lg:col-span-3'>
              <div className='sticky top-24 bg-black-light rounded-lg shadow-lg p-6 border border-gray-800'>
                <h3 className='text-lg font-semibold mb-4 text-white'>
                  {t('termsAndConditions.tocTitle')}
                </h3>
                <nav className='space-y-1'>
                  <button
                    onClick={() => handleSectionNavigation('generalTerms')}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'generalTerms'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('termsAndConditions.sections.generalTerms.title')}
                  </button>{' '}
                  <button
                    onClick={() => handleSectionNavigation('services')}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'services'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('termsAndConditions.sections.services.title')}
                  </button>
                  <button
                    onClick={() => handleSectionNavigation('userObligations')}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'userObligations'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('termsAndConditions.sections.userObligations.title')}
                  </button>
                  <button
                    onClick={() => handleSectionNavigation('liability')}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'liability'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('termsAndConditions.sections.liability.title')}
                  </button>
                </nav>
              </div>
            </div>{' '}
            <div className='lg:col-span-9'>
              <div className='lg:hidden mb-8 bg-black-light rounded-lg shadow-lg p-6 border border-gray-800'>
                <h3 className='text-lg font-semibold mb-4 text-white'>
                  {t('termsAndConditions.tocTitle')}
                </h3>
                <div className='space-y-2'>
                  <button
                    onClick={() => handleSectionNavigation('generalTerms')}
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'generalTerms'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('termsAndConditions.sections.generalTerms.title')}
                  </button>{' '}
                  <button
                    onClick={() => handleSectionNavigation('services')}
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'services'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('termsAndConditions.sections.services.title')}
                  </button>
                  <button
                    onClick={() => handleSectionNavigation('userObligations')}
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'userObligations'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('termsAndConditions.sections.userObligations.title')}
                  </button>
                  <button
                    onClick={() => handleSectionNavigation('liability')}
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'liability'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('termsAndConditions.sections.liability.title')}
                  </button>
                </div>
              </div>{' '}
              <div className='bg-black-light rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 border border-gray-800'>
                <section
                  id='generalTerms'
                  className='mb-12 scroll-mt-24'
                  ref={sectionRefs.generalTerms}
                >
                  <h2 className='text-2xl sm:text-3xl font-semibold text-white mb-6'>
                    {t('termsAndConditions.sections.generalTerms.title')}
                  </h2>
                  <div className='prose prose-invert max-w-none text-gray-300 leading-relaxed'>
                    {t('termsAndConditions.sections.generalTerms.content')
                      .split('\n\n')
                      .map((paragraph, idx) => (
                        <p key={idx} className='mb-4'>
                          {paragraph.split('\n').map((line, lineIdx) => (
                            <React.Fragment key={lineIdx}>
                              {line}
                              {lineIdx < paragraph.split('\n').length - 1 && (
                                <br />
                              )}
                            </React.Fragment>
                          ))}
                        </p>
                      ))}
                  </div>
                </section>{' '}
                <section
                  id='services'
                  className='mb-12 scroll-mt-24'
                  ref={sectionRefs.services}
                >
                  <h2 className='text-2xl sm:text-3xl font-semibold text-white mb-6'>
                    {t('termsAndConditions.sections.services.title')}
                  </h2>
                  <div className='prose prose-invert max-w-none text-gray-300 leading-relaxed'>
                    {t('termsAndConditions.sections.services.content')
                      .split('\n\n')
                      .map((paragraph, idx) => (
                        <p key={idx} className='mb-4'>
                          {paragraph.split('\n').map((line, lineIdx) => (
                            <React.Fragment key={lineIdx}>
                              {line}
                              {lineIdx < paragraph.split('\n').length - 1 && (
                                <br />
                              )}
                            </React.Fragment>
                          ))}
                        </p>
                      ))}
                  </div>
                </section>{' '}
                <section
                  id='userObligations'
                  className='mb-12 scroll-mt-24'
                  ref={sectionRefs.userObligations}
                >
                  <h2 className='text-2xl sm:text-3xl font-semibold text-white mb-6'>
                    {t('termsAndConditions.sections.userObligations.title')}
                  </h2>
                  <div className='prose prose-invert max-w-none text-gray-300 leading-relaxed'>
                    {t('termsAndConditions.sections.userObligations.content')
                      .split('\n\n')
                      .map((paragraph, idx) => (
                        <p key={idx} className='mb-4'>
                          {paragraph.split('\n').map((line, lineIdx) => (
                            <React.Fragment key={lineIdx}>
                              {line}
                              {lineIdx < paragraph.split('\n').length - 1 && (
                                <br />
                              )}
                            </React.Fragment>
                          ))}
                        </p>
                      ))}
                  </div>
                </section>{' '}
                <section
                  id='liability'
                  className='mb-12 scroll-mt-24 last:mb-0'
                  ref={sectionRefs.liability}
                >
                  <h2 className='text-2xl sm:text-3xl font-semibold text-white mb-6'>
                    {t('termsAndConditions.sections.liability.title')}
                  </h2>
                  <div className='prose prose-invert max-w-none text-gray-300 leading-relaxed'>
                    {t('termsAndConditions.sections.liability.content')
                      .split('\n\n')
                      .map((paragraph, idx) => (
                        <p key={idx} className='mb-4'>
                          {paragraph.split('\n').map((line, lineIdx) => (
                            <React.Fragment key={lineIdx}>
                              {line}
                              {lineIdx < paragraph.split('\n').length - 1 && (
                                <br />
                              )}
                            </React.Fragment>
                          ))}
                        </p>
                      ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8 text-center mt-12'>
          <h2 className='text-3xl font-bold mb-4'>
            {t('termsAndConditionsCtaTitle')}
          </h2>
          <p className='text-lg max-w-xl mx-auto mb-8'>
            {t('termsAndConditionsCtaText')}
          </p>
          <button
            onClick={toggleSidebarContact}
            className='bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md'
          >
            {t('termsAndConditionsCtaButton')}
          </button>
        </div>
        <SidebarContact
          isOpen={isSidebarContactOpen}
          onClose={toggleSidebarContact}
        />
      </div>
    </>
  );
};

export default TermsAndConditions;
