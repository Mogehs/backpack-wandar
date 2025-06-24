import React from 'react';
import { useTranslation } from 'react-i18next';
import TextWithLineBreaks from './ui/TextWithLineBreaks';

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
              {/* Vision */}{' '}
              <div>
                <h2 className='text-3xl md:text-5xl font-bold mb-4'>
                  {t('ourVision.vision.title')}
                </h2>
                <TextWithLineBreaks
                  text={t('visible.customVision')}
                  className='text-lg md:text-xl text-neutral-300'
                />
              </div>{' '}
              {/* Support message */}
              <div
                className='p-6 rounded-lg my-4 text-lg'
                style={{
                  background:
                    'radial-gradient(circle, #368f67 0%, #000000 100%)',
                }}
              >
                {' '}
                <TextWithLineBreaks
                  text={t('visible.support.line1')}
                  className='text-white mb-2'
                />
                <TextWithLineBreaks
                  text={t('visible.support.line2')}
                  className='text-white mb-2'
                />
                <TextWithLineBreaks
                  text={t('visible.support.line3')}
                  className='text-white'
                />
              </div>
              {/* Mission */}{' '}
              <div>
                <h2 className='text-3xl md:text-5xl font-bold mb-4'>
                  {t('ourVision.mission.title')}
                </h2>
                <TextWithLineBreaks
                  text={t('visible.customMission')}
                  className='text-lg md:text-xl text-neutral-300'
                />
              </div>{' '}
              <button
                className='bg-green hover:bg-[#2a7a54] text-white py-2 px-6 mt-4 rounded-md inline-block w-fit text-center transition-all duration-300 cursor-pointer'
                onClick={handleContactClick}
              >
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
        className='py-16 px-4 md:px-6 lg:px-8 text-white text-left my-20'
        style={{
          background: 'radial-gradient(circle, #368f67 0%, #000000 100%)',
        }}
      >
        <div className='max-w-5xl mx-auto'>
          {' '}
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8'>
            {t('visible.title')}
          </h1>
          <TextWithLineBreaks
            text={t('visible.paragraph1')}
            className='text-lg md:text-xl lg:text-2xl mb-8 opacity-90'
          />
          <TextWithLineBreaks
            text={t('visible.paragraph2')}
            className='text-lg md:text-xl lg:text-2xl mb-12 opacity-90'
          />{' '}
          <button
            className='bg-[#c24640] hover:bg-[#a63c36] text-white py-4 px-12 rounded-md inline-block text-center transition-all duration-300 text-xl font-medium cursor-pointer'
            onClick={handleContactClick}
          >
            {t('visible.contactButton')}
          </button>
        </div>
      </div>
    </>
  );
}
