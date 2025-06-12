"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactUs = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("contact.nameRequired");
    if (!formData.email.trim()) newErrors.email = t("contact.emailRequired");
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = t("contact.emailInvalid");
    if (!formData.subject.trim())
      newErrors.subject = t("contact.subjectRequired");
    if (!formData.message.trim())
      newErrors.message = t("contact.messageRequired");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  return (
    <div className="bg-black-light py-12 px-4 sm:px-6 lg:px-8 min-h-fit text-white font-rubik">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("contact.contactUs")}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t("contact.contactUsSubtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" rounded-xl p-8 h-fit shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">
              {t("contact.getInTouch")}
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-green" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-white">
                    {t("contact.address")}
                  </p>
                  <p className="mt-1 text-sm text-gray-300">
                    1234 Backpacker Street, Adventure City, 98765
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-green" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-white">
                    {t("contact.phone")}
                  </p>
                  <p className="mt-1 text-sm text-gray-300">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-green" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-white">
                    {t("contact.email")}
                  </p>
                  <p className="mt-1 text-sm text-gray-300">
                    info@backpackwander.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-green" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-white">
                    {t("contact.businessHours")}
                  </p>
                  <p className="mt-1 text-sm text-gray-300">
                    {t("contact.mondayToFriday")}: 9:00 AM - 6:00 PM
                  </p>
                  <p className="mt-1 text-sm text-gray-300">
                    {t("contact.weekend")}: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden h-64 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.315540303!2d-74.25986763594224!3d40.69714941512199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1625228007727!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="location map"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-green rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-6">
                {t("contact.sendUsMessage")}
              </h2>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green/20 text-green rounded-md border border-green">
                  {t("contact.messageSent")}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    {t("contact.fullName")} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.name ? "border-red" : "border-gray-700"
                    } bg-black/50 py-2 px-3 shadow-sm focus:border-green focus:outline-none focus:ring-green text-white`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    {t("contact.email")} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    } bg-black/50 py-2 px-3 shadow-sm focus:border-green focus:outline-none focus:ring-green text-white`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white"
                  >
                    {t("contact.subject")} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.subject ? "border-red-500" : "border-gray-700"
                    } bg-black/50 py-2 px-3 shadow-sm focus:border-green focus:outline-none focus:ring-green text-white`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white"
                  >
                    {t("contact.message")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.message ? "border-red-500" : "border-gray-700"
                    } bg-black/50 py-2 px-3 shadow-sm focus:border-green focus:outline-none focus:ring-green text-white`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red hover:bg-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green disabled:opacity-50"
                  >
                    {isSubmitting ? t("contact.sending") : t("contact.send")}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
