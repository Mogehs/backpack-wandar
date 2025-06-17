import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll function for navigation links
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      setIsOpen(false);
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Offset to account for navbar height
        behavior: "smooth",
      });
    }
  };

  // Desktop nav link style with hover animation
  const navLinkStyle =
    "relative text-white text-sm transition-colors duration-300 hover:text-green after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green after:left-0 after:bottom-[-5px] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="w-[98%] max-w-[1536px] mx-auto px-3 sm:px-6 py-[14px] h-[73px] bg-gradient-to-r from-black/60 via-[#EAF0F04D]/20 to-black/60 backdrop-blur-[20px] left-1/2 -translate-x-1/2 rounded-xl flex items-center justify-between font-rubik fixed top-[15px] z-50">
      {/* Logo & Brand */}
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Logo" className="w-15 h-15" />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex gap-8">
        <a href="#" onClick={() => setIsOpen(false)} className={navLinkStyle}>
          {t("navbar.home")}
        </a>
        <a
          href="http://bwdigit.de"
          target="_blank"
          onClick={() => setIsOpen(false)}
          className={navLinkStyle}
        >
          {t("navbar.services")}
        </a>
        <a
          href="http://setfreeway.com"
          target="_blank"
          onClick={() => setIsOpen(false)}
          className={navLinkStyle}
        >
          {t("navbar.coaching")}
        </a>
        <a
          href="http://backpackwander.org"
          target="_blank"
          onClick={() => setIsOpen(false)}
          className={navLinkStyle}
        >
          {t("navbar.digital")}
        </a>
        <a
          href="https://backpackwander.store"
          target="_blank"
          onClick={() => setIsOpen(false)}
          className={navLinkStyle}
        >
          {t("navbar.shop")}
        </a>
        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, "#contact")}
          className={navLinkStyle}
        >
          {t("navbar.contact")}
        </a>
      </div>

      {/* Sign In / Sign Up */}
      <div className="hidden lg:flex items-center gap-4 font-dm">
        <LanguageSwitcher />
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden mt-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="relative w-5 h-[14px] flex flex-col justify-between items-center"
        >
          <span
            className={`block h-[2px] w-full bg-green transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] w-full bg-green transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] w-full bg-green transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[85px] left-0 w-full bg-green shadow-lg px-6 py-4 flex flex-col gap-4 lg:hidden z-40 font-rubik rounded-xl">
          <a
            href="#"
            className="text-white text-sm hover:text-black transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.home")}
          </a>
          <a
            href="http://bwdigit.de"
            target="_blank"
            className="text-white text-sm hover:text-black transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.services")}
          </a>
          <a
            href="http://setfreeway.com"
            target="_blank"
            className="text-white text-sm hover:text-black transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.coaching")}
          </a>
          <a
            href="http://backpackwander.org"
            target="_blank"
            className="text-white text-sm hover:text-black transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.digital")}
          </a>
          <a
            href="https://backpackwander.store"
            target="_blank"
            className="text-white text-sm hover:text-black transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.shop")}
          </a>
          <a
            href="#contact"
            className="text-white text-sm hover:text-black transition-colors duration-300"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
          >
            {t("navbar.contact")}
          </a>
          <hr />
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
