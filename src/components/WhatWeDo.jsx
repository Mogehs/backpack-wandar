import { CircleHelp, RefreshCw, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import SidebarModal from './ui/SidebarModal';

export default function WhatWeDo() {
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

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className='pb-5 px-4 md:px-6 lg:px-8 bg-black text-white pt-16 md:pt-24 lg:pt-32'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-green mb-3'>
          {t('whatWeDo.title', 'What We Do')}
        </h2>
        <p className='text-lg mb-12 text-neutral-300'>
          {t(
            'whatWeDo.subtitle',
            'Empowering your personal and digital journey.'
          )}
        </p>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {/* Card 1 */}
          <motion.div
            variants={fadeIn}
            className='bg-neutral-900 rounded-lg p-8 border border-green flex flex-col'
          >
            <div className='flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-400 mb-5'>
              <RefreshCw size={24} />
            </div>
            <h3 className='text-xl font-bold mb-3'>
              {t('whatWeDo.card1.title', 'Break Free & Redesign Life')}
            </h3>
            <p className='text-neutral-400 flex-grow'>
              {t(
                'whatWeDo.card1.description',
                'We help you escape the 9-to-5 and build a flexible, fulfilling life in the digital space — one aligned with your personal values and passions.'
              )}
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeIn}
            className='bg-neutral-900 rounded-lg p-8 border border-green flex flex-col'
          >
            <div className='flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 text-green mb-5'>
              <Rocket size={24} />
            </div>
            <h3 className='text-xl font-bold mb-3'>
              {t('whatWeDo.card2.title', 'Coaching Meets Creativity')}
            </h3>
            <p className='text-neutral-400 flex-grow'>
              {t(
                'whatWeDo.card2.description',
                'Through a holistic blend of coaching, creative direction, and digital tools, we empower you, your team, or your business to turn ideas into reality.'
              )}
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeIn}
            className='bg-neutral-900 rounded-lg p-8 border border-green flex flex-col'
          >
            <div className='flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mb-5'>
              <CircleHelp size={24} />
            </div>
            <h3 className='text-xl font-bold mb-3'>
              {t('whatWeDo.card3.title', 'Build A Life that Fits You')}
            </h3>
            <p className='text-neutral-400 flex-grow'>
              {t(
                'whatWeDo.card3.description',
                "Whether you're launching an online business, shaping your brand, or crafting your digital presence — we walk with you, helping you work remotely and design a life that truly fits."
              )}
            </p>
          </motion.div>
        </motion.div>
        <div className='text-center mt-16'>
          <p className='text-neutral-300 mb-5'>
            {t('whatWeDo.cta.question', 'Ready to discover your next step?')}
          </p>{' '}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-green hover:bg-green text-white py-3 px-6 rounded-lg font-medium transition-all'
          >
            {t('whatWeDo.cta.button', 'Book a Free Discovery Call')}
          </motion.button>
        </div>{' '}
      </motion.div>

      {/* Sidebar Modal */}
      <SidebarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t('modal.title', 'Book a Free Discovery Call')}
      />
    </div>
  );
}
