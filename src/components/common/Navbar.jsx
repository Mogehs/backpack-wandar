import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[98%] max-w-[1536px] mx-auto px-3 sm:px-6 py-[14px] h-[73px] bg-gradient-to-r from-black/60 via-[#EAF0F04D]/20 to-black/60 backdrop-blur-[20px] left-1/2 -translate-x-1/2 rounded-xl flex items-center justify-between font-rubik fixed top-[15px] z-50">
      {/* Logo & Brand */}
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Logo" className="w-15 h-15" />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex gap-8 text-white text-sm">
        <a href="#" onClick={() => setIsOpen(false)}>
          {t("navbar.home")}
        </a>
        <a href="#potential" onClick={() => setIsOpen(false)}>
          {t("navbar.coaching")}
        </a>
        <a href="#potential" onClick={() => setIsOpen(false)}>
          {t("navbar.services")}
        </a>
        <a href="#potential" onClick={() => setIsOpen(false)}>
          {t("navbar.digital")}
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
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
            className="text-white text-sm"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.home")}
          </a>
          <a
            href="#potential"
            className="text-white text-sm"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.coaching")}
          </a>
          <a
            href="#potential"
            className="text-white text-sm"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.services")}
          </a>
          <a
            href="#contact"
            className="text-white text-sm"
            onClick={() => setIsOpen(false)}
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
