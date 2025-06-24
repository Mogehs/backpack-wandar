import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CalendarRange, Sparkles } from 'lucide-react';
import SidebarModal from './ui/SidebarModal';
import TextWithLineBreaks from './ui/TextWithLineBreaks';

const OurVision = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <div className='bg-black text-white px-4 md:px-6 lg:px-8 py-8 md:py-16'>
      <div className='mx-auto flex flex-col gap-10'>
        {/* Section 1: Free Coaching Session */}
        <motion.div
          className='flex flex-col gap-3 mb-16 rounded-xl overflow-hidden'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <div className='relative'>
            <img src='/images/01.png' alt='' className='' />
          </div>

          <div className='flex flex-col md:flex-row gap-5 justify-center w-full'>
            <div className='w-full md:w-1/2'>
              <img
                src='/images/vision1.png'
                alt={t('ourVision.coaching.imageAlt')}
                className='w-full h-[500px] object-cover rounded-xl'
              />
            </div>
            <div className='bg-neutral-900 p-6 md:p-10 rounded-2xl w-full md:w-1/2 flex flex-col justify-between'>
              <h3 className='text-2xl md:text-4xl font-bold text-white mb-3'>
                {t('ourVision.coaching.title')}
              </h3>{' '}
              <div className='text-[#52a77f] mb-4 text-xl md:text-2xl'>
                <TextWithLineBreaks text={t('ourVision.coaching.subtitle')} />
              </div>
              <div className='text-neutral-300 mb-6 text-lg md:text-2xl mt-5'>
                <TextWithLineBreaks
                  text={t('ourVision.coaching.description')}
                />
              </div>
              <a
                href='http://setfreeway.com'
                target='_blank'
                className='bg-green hover:bg-opacity-80 text-white py-2 px-6 rounded-md inline-block w-fit text-center transition-all text-lg mt-18'
              >
                {t('ourVision.coaching.button')}
              </a>
            </div>
          </div>
        </motion.div>
        {/* Section 2: Make an appointment */}
        <motion.div
          className='flex flex-col gap-3 mb-16 rounded-xl overflow-hidden'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <div className='relative flex justify-end'>
            <img src='/images/02.png' alt='' className='' />
          </div>

          <div className='flex flex-col md:flex-row-reverse gap-5 justify-center w-full'>
            <div className='w-full md:w-1/2'>
              <img
                src='/images/vision2.png'
                alt={t('ourVision.appointment.imageAlt')}
                className='w-full md:w-full lg:w-full h-full object-cover rounded-xl'
              />
            </div>{' '}
            <div className='bg-gradient-to-br from-neutral-900 to-black p-6 md:p-10 rounded-2xl w-full md:w-1/2 flex flex-col justify-between border border-red/10'>
              <h3 className='text-2xl md:text-5xl font-bold text-white'>
                {t('ourVision.appointment.title')}
              </h3>{' '}
              <div className='text-[#52a77f] mb-4 text-lg mt-5 md:text-2xl'>
                <TextWithLineBreaks
                  text={t('ourVision.appointment.subtitle')}
                />
              </div>{' '}
              <div className='text-neutral-300 mb-6 text-base md:text-xl space-y-4'>
                <TextWithLineBreaks text={t('ourVision.appointment.webdev')} />
                <TextWithLineBreaks text={t('ourVision.appointment.custom')} />
                <TextWithLineBreaks text={t('ourVision.appointment.mobile')} />
                <TextWithLineBreaks text={t('ourVision.appointment.seo')} />
                <TextWithLineBreaks
                  text={t('ourVision.appointment.marketing')}
                />
              </div>
              <a
                href='http://bwdigit.de'
                target='_blank'
                className='bg-gradient-to-r from-red to-red/80 hover:from-red/80 hover:to-red text-white py-3 px-6 rounded-md inline-block w-fit text-center transition-all text-xl font-medium'
              >
                {t('ourVision.appointment.button')}
              </a>
            </div>
          </div>
        </motion.div>{' '}
        {/* Section 3: Special Offer */}
        <motion.div
          className='flex flex-col gap-3 mb-16 rounded-xl overflow-hidden'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <div className='relative'>
            <div className='flex items-center gap-2'>
              <img src='/images/03.png' alt='' />
              {/* <Sparkles className="text-red h-6 w-6" />
              <span className="text-green font-semibold">SPECIAL OFFER</span> */}
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-5 justify-center w-full'>
            <div className='w-full md:w-1/2 relative'>
              <div className='absolute top-0 right-0 bg-green text-black font-bold py-2 px-4 rounded-bl-lg z-10'>
                LIMITED TIME
              </div>
              <img
                src='/images/marketing.jpg'
                alt={t('ourVision.community.imageAlt')}
                className='w-full md:w-full lg:w-full h-[400px] object-cover rounded-xl'
              />
              <div className='absolute bottom-4 right-4 bg-black/70 py-2 px-4 rounded-lg backdrop-blur-sm'>
                <div className='flex items-center gap-2'>
                  <CalendarRange className='text-red' size={16} />
                  <span className='text-white text-sm font-medium'>
                    Ends July 31, 2025
                  </span>
                </div>
              </div>
            </div>
            <div className='bg-gradient-to-br from-neutral-900 to-black p-6 md:p-10 rounded-2xl w-full md:w-1/2 flex flex-col justify-between border border-green-500/20'>
              <div className='space-y-4'>
                <h3 className='text-2xl md:text-4xl font-bold text-white mb-3'>
                  {t('ourVision.community.title')}
                </h3>{' '}
                <div className='text-red font-medium mb-4 text-lg md:text-2xl'>
                  <TextWithLineBreaks
                    text={t('ourVision.community.subtitle')}
                  />
                </div>
                <div className='flex flex-col gap-3 text-neutral-300 mb-6 text-base md:text-lg'>
                  {t('ourVision.community.description')
                    .split('. ')
                    .map((item, index) => (
                      <div key={index} className='flex items-start gap-2'>
                        <div className='mt-1 text-red'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <polyline points='20 6 9 17 4 12'></polyline>
                          </svg>
                        </div>
                        <div>
                          <TextWithLineBreaks text={item.replace(/\.$/, '')} />
                        </div>
                      </div>
                    ))}
                </div>
              </div>{' '}
              <button
                onClick={() => setIsModalOpen(true)}
                className='bg-gradient-to-r from-green/30 to-green hover:from-green hover:to-green/30 white font-semibold py-3 px-6 rounded-md w-fit text-center transition-all mt-4 flex items-center gap-2 linear'
              >
                <Sparkles className='h-5 w-5' />
                {t('ourVision.community.button')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <SidebarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t('modal.title', 'Book a Free Discovery Call')}
      />
    </div>
  );
};

export default OurVision;
