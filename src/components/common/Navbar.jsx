import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation handler that works with React Router
  const handleNavClick = (targetId) => {
    if (location.pathname === '/') {
      // If already on home page, scroll to section
      const element = document.querySelector(targetId);
      if (element) {
        setIsOpen(false);
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: 'smooth',
        });
      }
    } else {
      // If on different page, navigate to home with hash
      navigate('/' + targetId);
    }
  };

  // Handle digital services navigation based on current language
  const handleDigitalServicesClick = () => {
    const currentLang = i18n.language;
    let url = 'http://bwdigit.de'; // default to German

    if (currentLang === 'en') {
      url = 'http://bwdigit.com';
    } else if (currentLang === 'sr') {
      url = 'http://bwdigit.rs';
    } else if (currentLang === 'de') {
      url = 'http://bwdigit.de';
    }

    window.open(url, '_blank');
    setIsOpen(false);
  };

  // Handle hash navigation after route change
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  }, [location]);

  // Desktop nav link style with hover animation
  const navLinkStyle =
    "relative text-white text-sm transition-colors duration-300 hover:text-[#52a77f] after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#52a77f] after:left-0 after:bottom-[-5px] after:transition-all after:duration-300 hover:after:w-full";
  return (
    <nav className='w-[98%] max-w-[1536px] mx-auto px-3 sm:px-6 py-[14px] h-[73px] bg-gradient-to-r from-black/80 via-[#EAF0F04D]/30 to-black/80 backdrop-blur-[20px] border border-[#52a77f]/10 shadow-[0_4px_12px_rgba(82,167,127,0.15)] sm:shadow-[0_4px_15px_rgba(82,167,127,0.2)] left-1/2 -translate-x-1/2 rounded-xl flex items-center justify-between font-rubik fixed top-[15px] z-50'>
      {/* Logo & Brand */}
      <div className='flex items-center gap-2'>
        <img src='/images/logo.png' alt='Logo' className='w-15 h-15' />
      </div>

      {/* Desktop Nav Links */}
      <div className='hidden lg:flex gap-8'>
        <Link to='/' onClick={() => setIsOpen(false)} className={navLinkStyle}>
          {t('navbar.home')}
        </Link>
        <button onClick={handleDigitalServicesClick} className={navLinkStyle}>
          {t('navbar.services')}
        </button>
        <a
          href='http://setfreeway.com'
          target='_blank'
          onClick={() => setIsOpen(false)}
          className={navLinkStyle}
        >
          {t('navbar.coaching')}
        </a>
        <a
          href='http://backpackwander.org'
          target='_blank'
          onClick={() => setIsOpen(false)}
          className={navLinkStyle}
        >
          {t('navbar.digital')}
        </a>
        <a
          href='https://backpackwander.store'
          target='_blank'
          onClick={() => setIsOpen(false)}
          className={navLinkStyle}
        >
          {t('navbar.shop')}
        </a>
        <button
          onClick={() => handleNavClick('#contact')}
          className={navLinkStyle}
        >
          {t('navbar.contact')}
        </button>
      </div>

      {/* Sign In / Sign Up */}
      <div className='hidden lg:flex items-center gap-4 font-dm'>
        <LanguageSwitcher />
      </div>

      {/* Hamburger Icon */}
      <div className='lg:hidden mt-1'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle Menu'
          className='relative w-5 h-[14px] flex flex-col justify-between items-center'
        >
          <span
            className={`block h-[2px] w-full bg-[#52a77f] transition-transform duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          ></span>
          <span
            className={`block h-[2px] w-full bg-[#52a77f] transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block h-[2px] w-full bg-[#52a77f] transition-transform duration-300 ease-in-out ${
              isOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='absolute top-[85px] left-0 w-full bg-[#52a77f] shadow-lg px-6 py-4 flex flex-col gap-4 lg:hidden z-40 font-rubik rounded-xl'>
          <Link
            to='/'
            className='text-white text-sm hover:text-black transition-colors duration-300'
            onClick={() => setIsOpen(false)}
          >
            {t('navbar.home')}
          </Link>
          <button
            onClick={handleDigitalServicesClick}
            className='text-white text-sm hover:text-black transition-colors duration-300 text-left'
          >
            {t('navbar.services')}
          </button>
          <a
            href='http://setfreeway.com'
            target='_blank'
            className='text-white text-sm hover:text-black transition-colors duration-300'
            onClick={() => setIsOpen(false)}
          >
            {t('navbar.coaching')}
          </a>
          <a
            href='http://backpackwander.org'
            target='_blank'
            className='text-white text-sm hover:text-black transition-colors duration-300'
            onClick={() => setIsOpen(false)}
          >
            {t('navbar.digital')}
          </a>
          <a
            href='https://backpackwander.store'
            target='_blank'
            className='text-white text-sm hover:text-black transition-colors duration-300'
            onClick={() => setIsOpen(false)}
          >
            {t('navbar.shop')}
          </a>
          <button
            className='text-white text-sm hover:text-black transition-colors duration-300 text-left'
            onClick={() => handleNavClick('#contact')}
          >
            {t('navbar.contact')}
          </button>
          <hr />
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
