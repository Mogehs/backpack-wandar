import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SidebarContact from './ui/SidebarContact';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const { currentLang, getLocalizedUrl } = useLanguage();
  const [activeSection, setActiveSection] = useState('generalStatement');
  const [isSidebarContactOpen, setIsSidebarContactOpen] = useState(false);

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

  const toggleSidebarContact = () => {
    setIsSidebarContactOpen(!isSidebarContactOpen);
  };
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
      <div className='bg-black min-h-screen animate-fadeIn'>
        <div className='bg-black-light py-32 md:py-36 lg:py-40 px-4 sm:px-6 lg:px-8 text-center rounded-b-2xl shadow-xl mb-4 md:mb-12 border-b border-green'>
          <h1 className='text-4xl sm:text-5xl font-bold mb-4 text-white'>
            {t('privacyPolicyTitle')}
          </h1>
          <p className='text-lg sm:text-xl max-w-2xl mx-auto text-white'>
            {t('privacyPolicyHeroSubtitle')}
          </p>
        </div>{' '}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12'>
          <div className='lg:grid lg:grid-cols-12 lg:gap-x-8'>
            <div className='hidden lg:block lg:col-span-3'>
              <div className='sticky top-24 bg-black-light rounded-lg shadow-lg p-6 border border-gray-800'>
                <h3 className='text-lg font-semibold mb-4 text-white'>
                  {t('privacyPolicy.tocTitle')}
                </h3>
                <nav className='space-y-1'>
                  <button
                    onClick={() => handleSectionNavigation('generalStatement')}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'generalStatement'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('privacyPolicy.sections.generalStatement.title')}
                  </button>{' '}
                  <button
                    onClick={() => handleSectionNavigation('responsibleEntity')}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'responsibleEntity'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('privacyPolicy.sections.responsibleEntity.title')}
                  </button>
                  <button
                    onClick={() => handleSectionNavigation('useOfData')}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'useOfData'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('privacyPolicy.sections.useOfData.title')}
                  </button>
                  <button
                    onClick={() => handleSectionNavigation('yourRights')}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'yourRights'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('privacyPolicy.sections.yourRights.title')}
                  </button>
                </nav>
              </div>
            </div>{' '}
            <div className='lg:col-span-9'>
              <div className='lg:hidden mb-8 bg-black-light rounded-lg shadow-lg p-6 border border-gray-800'>
                <h3 className='text-lg font-semibold mb-4 text-white'>
                  {t('privacyPolicy.tocTitle')}
                </h3>
                <div className='space-y-2'>
                  <button
                    onClick={() => handleSectionNavigation('generalStatement')}
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'generalStatement'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('privacyPolicy.sections.generalStatement.title')}
                  </button>{' '}
                  <button
                    onClick={() => handleSectionNavigation('responsibleEntity')}
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'responsibleEntity'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('privacyPolicy.sections.responsibleEntity.title')}
                  </button>
                  <button
                    onClick={() => handleSectionNavigation('useOfData')}
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'useOfData'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('privacyPolicy.sections.useOfData.title')}
                  </button>
                  <button
                    onClick={() => handleSectionNavigation('yourRights')}
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-sm ${
                      activeSection === 'yourRights'
                        ? 'bg-green bg-opacity-20 text-white font-medium'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {t('privacyPolicy.sections.yourRights.title')}
                  </button>
                </div>
              </div>{' '}
              <div className='bg-black-light rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 border border-gray-800'>
                <section id='generalStatement' className='mb-12 scroll-mt-24'>
                  <h2 className='text-2xl sm:text-3xl font-semibold text-white mb-6'>
                    {t('privacyPolicy.sections.generalStatement.title')}
                  </h2>
                  <div className='prose prose-invert max-w-none text-gray-300 leading-relaxed'>
                    {t('privacyPolicy.sections.generalStatement.content')
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
                <section id='responsibleEntity' className='mb-12 scroll-mt-24'>
                  <h2 className='text-2xl sm:text-3xl font-semibold text-white mb-6'>
                    {t('privacyPolicy.sections.responsibleEntity.title')}
                  </h2>
                  <div className='prose prose-invert max-w-none text-gray-300 leading-relaxed'>
                    {t('privacyPolicy.sections.responsibleEntity.content')
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
                <section id='useOfData' className='mb-12 scroll-mt-24'>
                  <h2 className='text-2xl sm:text-3xl font-semibold text-white mb-6'>
                    {t('privacyPolicy.sections.useOfData.title')}
                  </h2>
                  <div className='prose prose-invert max-w-none text-gray-300 leading-relaxed'>
                    {t('privacyPolicy.sections.useOfData.content')
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
                  id='yourRights'
                  className='mb-12 scroll-mt-24 last:mb-0'
                >
                  <h2 className='text-2xl sm:text-3xl font-semibold text-white mb-6'>
                    {t('privacyPolicy.sections.yourRights.title')}
                  </h2>
                  <div className='prose prose-invert max-w-none text-gray-300 leading-relaxed'>
                    {t('privacyPolicy.sections.yourRights.content')
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
        </div>{' '}
        <div className='bg-black-light text-white py-16 px-4 sm:px-6 lg:px-8 text-center mt-12 border-t border-gray-800'>
          <h2 className='text-3xl font-bold mb-4'>
            {t('privacyPolicyCtaTitle')}
          </h2>
          <p className='text-lg max-w-xl mx-auto mb-8 text-gray-300'>
            {t('privacyPolicyCtaText')}
          </p>
          <button
            onClick={toggleSidebarContact}
            className='bg-green hover:bg-opacity-80 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md'
          >
            {t('privacyPolicyCtaButton')}
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

export default PrivacyPolicy;
