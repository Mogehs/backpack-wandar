import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Visible() {
  const { t } = useTranslation();

  // Function for smooth scrolling to the contact section
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 100, // Offset to account for navbar height
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Vision and Mission section */}
      <div className='bg-black py-16 px-4 md:px-6 lg:px-8 text-white'>
        <div className='mx-auto'>
          <div className='flex flex-col md:flex-row items-start gap-8'>
            {/* Left side - Vision and Mission */}
            <div className='w-full md:w-[60%] flex flex-col gap-8'>
              {' '}
              {/* Vision */}
              <div>
                <h2 className='text-3xl md:text-5xl font-bold mb-4'>
                  {t('ourVision.vision.title')}
                </h2>
                <p className='text-lg md:text-xl text-neutral-300'>
                  {t('visible.customVision')}
                </p>
              </div>
              {/* Support message */}
              <div className='bg-neutral-900 p-6 rounded-lg my-4 text-lg'>
                <p className='text-white mb-2'>{t('visible.support.line1')}</p>
                <p className='text-white mb-2'>{t('visible.support.line2')}</p>
                <p className='text-white'>{t('visible.support.line3')}</p>
              </div>
              {/* Mission */}
              <div>
                <h2 className='text-3xl md:text-5xl font-bold mb-4'>
                  {t('ourVision.mission.title')}
                </h2>
                <p className='text-lg md:text-xl text-neutral-300'>
                  {t('visible.customMission')}
                </p>
              </div>{' '}
              <button className='bg-green hover:bg-opacity-80 text-white py-2 px-6 mt-4 rounded-md inline-block w-fit text-center transition-all'>
                {t('visible.learnMoreButton')}
              </button>
            </div>

            {/* Right side - Image */}
            <div className='w-full md:w-[40%]'>
              <img
                src='/images/vision_new.jpg'
                alt={t('ourVision.vision.imageAlt')}
                className='w-full h-auto rounded-lg object-cover'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main green section with radial gradient */}
      <div
        className='py-16 px-4 md:px-6 lg:px-8 text-white text-center my-20'
        style={{
          background: 'radial-gradient(circle, #368f67 0%, #000000 100%)',
        }}
      >
        <div className='max-w-5xl mx-auto'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8'>
            {t('visible.title')}
          </h1>

          <p className='text-lg md:text-xl lg:text-2xl mb-8 opacity-90'>
            {t('visible.paragraph1')}
          </p>

          <p className='text-lg md:text-xl lg:text-2xl mb-12 opacity-90'>
            {t('visible.paragraph2')}
          </p>

          <button
            className='bg-[#c24640] hover:bg-opacity-80 text-white py-4 px-12  rounded-md inline-block text-center transition-all text-xl font-medium'
            onClick={handleContactClick}
          >
            {t('visible.contactButton')}
          </button>
        </div>
      </div>
    </>
  );
}
