import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
} from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowSuccess(true);
      setEmail("");
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <footer className="bg-black text-white pt-12 pb-8 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-green">
              <span className="text-white">Backpack</span> Wander
            </h3>
            <p className="mb-4 text-gray-300">{t("footer.tagline")}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-green transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green transition-colors"
                >
                  {t("footer.links.about")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green transition-colors"
                >
                  {t("footer.links.services")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green transition-colors"
                >
                  {t("footer.links.coaching")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green transition-colors"
                >
                  {t("footer.links.webdesign")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green transition-colors"
                >
                  {t("footer.links.blog")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red">
              {t("footer.contactUs")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-green mt-1" />
                <span className="text-gray-300">
                  Ewaldstrase 28, 45699, Herten
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-green" />
                <span className="text-gray-300">+49 172 8137 111</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-green" />
                <span className="text-gray-300">hello@backpackwander.de</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red">
              {t("footer.newsletter")}
            </h3>
            <p className="mb-4 text-gray-300">{t("footer.newsletterText")}</p>
            {showSuccess ? (
              <div className="bg-green bg-opacity-20 border border-green rounded-lg p-3 mb-3 flex items-center">
                <CheckCircle size={20} className="text-green mr-2" />
                <p className="text-white text-sm">{t("newsletter.title")}</p>
              </div>
            ) : (
              <form className="space-y-2" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white border border-gray-700 focus:ring-2 focus:ring-green focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-green hover:bg-opacity-90 text-white font-medium py-2 rounded-lg transition-colors"
                >
                  {t("footer.subscribe")}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} BackpackWander GmbH. {t("footer.rights")}
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-green transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-green transition-colors">
              {t("footer.terms")}
            </a>
            <a href="#" className="hover:text-green transition-colors">
              {t("footer.imprint")}
            </a>
            <div className="flex space-x-2">
              <button
                className="px-2 hover:text-green transition-colors"
                onClick={() => (document.documentElement.lang = "en")}
              >
                EN
              </button>
              <span>|</span>
              <button
                className="px-2 hover:text-green transition-colors"
                onClick={() => (document.documentElement.lang = "de")}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
