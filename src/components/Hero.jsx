import React from 'react';
import { SparklesCore } from './ui/Sparkel';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TextWithLineBreaks from './ui/TextWithLineBreaks';

const Hero = () => {
  const { t } = useTranslation();
  const MotionComponent = motion.div;

  return (
    <div className='relative top-5 md:top-5  font-rubik  py-10 bg-black text-white flex items-center justify-center'>
      <img
        src='/images/background.png'
        alt='Hero'
        className='w-full  max-sm:h-[100vh] md:h-auto object-cover absolute inset-0 z-10'
      />
      <div className='w-full flex flex-col items-center justify-center overflow-hidden rounded-md top-0 px-4 md:px-6 lg:px-8'>
        {/* Add sparkles as absolute positioned background */}
        <div className='absolute top-[50%] inset-0 '>
          <SparklesCore
            background='transparent'
            minSize={0.4}
            maxSize={2}
            particleDensity={1200}
            className='w-full h-full'
            particleColor='#FFFFFF'
          />
          <div className='absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(550px_500px_at_top,transparent_50%,white)]'></div>
        </div>

        <div className='flex flex-col items-center justify-center text-center z-20 relative gap-2 px-3 sm:px-0'>
          <div className='h-fit overflow-hidden mt-20 flex items-center justify-center gap-2'>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className='text-4xl xs:text-4xl sm:md:text-7xl lg:text-8xl font-bold text-center text-white relative z-20'
            >
              {t('hero.title').split(' ')[0]}
            </motion.h1>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className='text-4xl xs:text-4xl sm:md:text-7xl lg:text-8xl font-bold text-center text-green relative z-20'
            >
              {t('hero.title').split(' ')[1]}
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='text-base xs:text-lg sm:text-xl capitalize'
          >
            {t('hero.subtitle')}
          </motion.p>
          {/* Service buttons with divider lines */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-2'
          >
            <motion.button
              onClick={() => window.open('http://setfreeway.com', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-green text-white px-3 py-1.5 text-sm rounded-md hover:bg-opacity-90 transition-all'
            >
              {t('hero.buttons.coaching')}
            </motion.button>

            <div className='h-6 w-[1px] bg-white/50 mx-1'></div>

            <motion.button
              onClick={() => window.open('http://bwdigit.de', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-green text-white px-3 py-1.5 text-sm rounded-md hover:bg-opacity-90 transition-all'
            >
              {t('hero.buttons.webDesign')}
            </motion.button>

            <div className='h-6 w-[1px] bg-white/50 mx-1'></div>

            <motion.button
              onClick={() => window.open('http://bwdigit.de', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-green text-white px-3 py-1.5 text-sm rounded-md hover:bg-opacity-90 transition-all'
            >
              {t('hero.buttons.digitalStrategy')}
            </motion.button>
          </motion.div>{' '}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className='text-base xs:text-lg sm:text-xl mt-2 text-center w-full sm:w-[80%]'
          >
            <TextWithLineBreaks text={t('hero.description')} />
          </motion.div>
          <div className='w-full mt-8 sm:mt-16 px-4 sm:px-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className='w-full sm:w-2/5 rounded-t-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 relative'
            >
              <div className=' inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 absolute'></div>
              <img
                src='/images/hero1.png'
                alt='Business strategies'
                className='w-full h-full object-cover transition-all duration-500'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className='w-full sm:w-2/5 rounded-t-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 relative'
            >
              <div className=' inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 absolute'></div>
              <img
                src='/images/hero2.png'
                alt='Business strategies'
                className='w-full h-full object-cover transition-all duration-500'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
