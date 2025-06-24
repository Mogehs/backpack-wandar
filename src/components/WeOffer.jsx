import {
  BookOpen,
  Compass,
  Globe,
  Laptop,
  Users2,
  ExternalLink,
} from 'lucide-react';
import { useState } from 'react';
import { GlowingEffect } from '../components/ui/GlowingEffect';
import { useTranslation } from 'react-i18next';
import SidebarModal from './ui/SidebarModal';
import TextWithLineBreaks from './ui/TextWithLineBreaks';

export default function GlowingEffectDemo() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id='we-offer' className='py-16  px-4 md:px-6 lg:px-8'>
      <h1 className='mb-6 md:mb-10 text-red text-3xl md:text-4xl lg:text-5xl font-bold'>
        {t('weOffer.title')}
      </h1>
      <ul className='grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-2'>
        <GridItem
          area='md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]'
          icon={<Compass className='h-6 w-6 text-red' />}
          title={t('weOffer.items.coaching.title')}
          description={t('weOffer.items.coaching.description')}
          button={t('weOffer.items.coaching.button')}
          link='http://setfreeway.com'
        />
        <GridItem
          area='md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]'
          icon={<Laptop className='h-6 w-6 text-blue-500' />}
          title={t('weOffer.items.webDesign.title')}
          description={t('weOffer.items.webDesign.description')}
          button={t('weOffer.items.webDesign.button')}
          link='http://bwdigit.de'
        />
        <GridItem
          area='md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]'
          icon={<Globe className='h-6 w-6 text-green' />}
          title={t('weOffer.items.digitalMarketing.title')}
          description={t('weOffer.items.digitalMarketing.description')}
          button={t('weOffer.items.digitalMarketing.button')}
          link='http://bwdigit.de'
          isMiddleCard={true}
        />
        <GridItem
          area='md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]'
          icon={<Users2 className='h-6 w-6 text-purple-500' />}
          title={t('weOffer.items.community.title')}
          description={t('weOffer.items.community.description')}
          button={t('weOffer.items.community.button')}
          link='http://backpackwander.org'
        />
        <GridItem
          area='md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]'
          icon={<BookOpen className='h-6 w-6 text-amber-500' />}
          title={t('weOffer.items.workshops.title')}
          description={t('weOffer.items.workshops.description')}
          button={t('weOffer.items.workshops.button')}
          link='http://setfreeway.com/'
        />
      </ul>
    </div>
  );
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  button,
  link,
  isMiddleCard,
}) => {
  if (isMiddleCard) {
    // Special layout for the middle card - icon at top, content at bottom
    return (
      <li
        className={`min-h-[14rem] md:min-h-[16rem] lg:min-h-[18rem] list-none ${area}`}
      >
        <div className='relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3'>
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className='border-0.75 relative flex h-full flex-col justify-between rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]'>
            <div className='w-fit rounded-lg border border-gray-600 p-2 mb-3'>
              {icon}
            </div>
            <div className='mt-auto'>
              <div className='space-y-2 sm:space-y-3 mb-3'>
                <h3 className='-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white'>
                  {title}
                </h3>
                <div className='font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-300 [&_b]:md:font-semibold [&_strong]:md:font-semibold'>
                  <TextWithLineBreaks text={description} />
                </div>
              </div>
              {button && (
                <a
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 mt-2 px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-sm hover:bg-gray-800 hover:text-white transition-all dark:text-white dark:hover:bg-gray-700 group'
                >
                  {button}
                  <ExternalLink className='h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
                </a>
              )}
            </div>
          </div>
        </div>
      </li>
    );
  }

  // Default layout for other cards
  return (
    <li
      className={`min-h-[14rem] md:min-h-[16rem] lg:min-h-[18rem] list-none ${area}`}
    >
      <div className='relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3'>
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className='border-0.75 relative flex h-full flex-col justify-between gap-4 overflow-y-auto rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]'>
          <div className='relative flex flex-col justify-between gap-3'>
            <div className='w-fit rounded-lg border border-gray-600 p-2'>
              {icon}
            </div>
            <div className='space-y-2 sm:space-y-3'>
              <h3 className='-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white'>
                {title}
              </h3>
              <div className='font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-300 [&_b]:md:font-semibold [&_strong]:md:font-semibold'>
                <TextWithLineBreaks text={description} />
              </div>
            </div>
          </div>
          {button && (
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 mt-3 px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-sm hover:bg-gray-800 hover:text-white transition-all dark:text-white dark:hover:bg-gray-700 group'
            >
              {button}
              <ExternalLink className='h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
            </a>
          )}
        </div>
      </div>
    </li>
  );
};
