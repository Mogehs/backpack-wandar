import React from 'react';
import { useTranslation } from 'react-i18next';

export default function BeginSection() {
  const { t } = useTranslation();

  // Card data from translation files
  const cardData = [
    {
      key: 'coaching',
      color: 'text-red',
      underline: 'bg-red',
      btnColor: 'bg-green hover:bg-green/90',
      img: '/images/coaching.png',
    },
    {
      key: 'digital',
      color: 'text-green',
      underline: 'bg-green',
      btnColor: 'bg-rose-500 hover:bg-rose-600',
      img: '/images/digital.png',
    },
    {
      key: 'community',
      color: 'text-red',
      underline: 'bg-red',
      btnColor: 'bg-green hover:bg-green/90',
      img: '/images/community.png',
    },
  ];

  return (
    <section className='bg-black text-white py-8 md:py-16'>
      {/* Header */}
      <div className='text-center mb-20 px-4'>
        <h2 className='text-3xl md:text-4xl font-semibold text-green mb-4'>
          {t('whatWeDo.beginSection.title')}
        </h2>
        <p className='text-gray-300 max-w-2xl mx-auto'>
          {t('whatWeDo.beginSection.subtitle')}
        </p>
      </div>

      <div className='h-20'></div>

      {/* Responsive Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-40 md:gap-y-44 lg:gap-y-47 px-6 sm:px-10 lg:px-20'>
        {/* Card Data Map */}
        {cardData.map((card, index) => (
          <div key={index} className='flex flex-col items-center'>
            {' '}
            {/* Card Container */}
            <div className='bg-[#1A1A1A] rounded-xl shadow-lg border border-gray-800 text-center w-full mb-6 relative pt-[100px] h-[230px] md:h-[250px] lg:h-[280px] flex flex-col'>
              {/* Image Floating at Top */}
              <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5'>
                <img
                  src={card.img}
                  alt={t(`whatWeDo.beginSection.${card.key}.imageAlt`)}
                  className='w-full h-auto mx-auto rounded-lg'
                  style={{ objectFit: 'fill', aspectRatio: '16/10' }}
                />
              </div>

              {/* Card Body */}
              <div className='p-6  pt-3 md:pt-8 lg:pt-14 pb-8 flex-grow flex flex-col justify-center'>
                <h3
                  className={`${card.color} text-xl font-semibold mb-2 relative inline-block`}
                >
                  {t(`whatWeDo.beginSection.${card.key}.title`)}
                  <span
                    className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1/4 h-[3px] ${card.underline}`}
                  ></span>
                </h3>
                <p className='text-sm text-gray-200 mt-5'>
                  {t(`whatWeDo.beginSection.${card.key}.description`)}
                </p>
              </div>
            </div>{' '}
            {/* Button with URL Link */}
            <a
              href={
                index === 0
                  ? 'https://setfreeway.com/'
                  : index === 1
                  ? 'https://bwdigit.de/'
                  : 'http://backpackwander.org/'
              }
              target='_blank'
              rel='noopener noreferrer'
              className={`${card.btnColor} text-white px-6 py-2.5 rounded-md font-medium text-sm transition-colors w-11/12 text-center inline-block`}
            >
              {index === 0
                ? 'Free Session Transformational Coaching'
                : index === 1
                ? 'Find Digital Solution for your needs'
                : 'Click to explore community space'}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
