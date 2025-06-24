'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, CheckCircle, XCircle } from 'lucide-react';
import TextWithLineBreaks from './ui/TextWithLineBreaks';

const ContactUs = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('contact.nameRequired');
    if (!formData.email.trim()) newErrors.email = t('contact.emailRequired');
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = t('contact.emailInvalid');
    if (!formData.subject.trim())
      newErrors.subject = t('contact.subjectRequired');
    if (!formData.message.trim())
      newErrors.message = t('contact.messageRequired');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ submitted: false, success: false, message: '' });

    const formElement = e.target;
    const formDataToSend = new FormData(formElement);

    // Make sure all form data is included
    Object.keys(formData).forEach((key) => {
      if (!formDataToSend.has(key)) {
        formDataToSend.append(key, formData[key]);
      }
    });

    // Add formsubmit.co specific fields
    formDataToSend.append(
      '_subject',
      `Contact Form Submission: ${formData.subject}`
    );
    // Redirect to the same page after submission (prevents FormSubmit redirect page)
    formDataToSend.append('_next', window.location.href);
    // Disable captcha for better user experience
    formDataToSend.append('_captcha', 'false');

    fetch('https://formsubmit.co/ajax/info@backpackwander.rs', {
      method: 'POST',
      body: formDataToSend,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw err;
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
        setIsSubmitting(false);
        setFormStatus({
          submitted: true,
          success: true,
          message: t('contact.messageSent'),
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        formElement.reset();

        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus({
            submitted: false,
            success: false,
            message: '',
          });
        }, 5000);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsSubmitting(false);
        setFormStatus({
          submitted: true,
          success: false,
          message:
            error.message ||
            t('contact.errorMessage') ||
            'Something went wrong. Please try again.',
        });

        // Clear error message after 5 seconds
        setTimeout(() => {
          setFormStatus({
            submitted: false,
            success: false,
            message: '',
          });
        }, 5000);
      });
  };

  return (
    <section
      id='contact'
      className='bg-gradient-to-b from-[#0f0f0f] via-green to-green text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 rounded-xl'
    >
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h1 className='text-4xl md:text-5xl font-bold mb-4 text-red'>
            {t('contact.contactUs').split(' ')[0]}{' '}
            <span className='text-white'>
              {t('contact.contactUs').split(' ').slice(1).join(' ')}
            </span>
          </h1>
          <p className='text-lg text-gray-200 max-w-2xl mx-auto'>
            {t('contact.contactUsSubtitle')}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='bg-black/30 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-md flex flex-col'
          >
            <h2 className='text-2xl font-semibold mb-6'>
              {t('contact.getInTouch')}
            </h2>

            <div className='space-y-6 text-gray-200'>
              {[
                ['address', <MapPin />],
                ['phone', <Phone />],
                ['email', <Mail />],
                ['businessHours', <Clock />],
              ].map(([key, Icon], idx) => (
                <div key={idx} className='flex items-start gap-4'>
                  <div className='text-green'>{Icon}</div>
                  <div>
                    <p className='font-medium'>{t(`contact.${key}`)}</p>
                    {key === 'address' ? (
                      <p className='text-sm'>Ewaldstraße 28, 45699, Herten</p>
                    ) : key === 'phone' ? (
                      <p className='text-sm'>+49 172 8137 111</p>
                    ) : key === 'email' ? (
                      <p className='text-sm'>info@backpackwander.rs</p>
                    ) : (
                      <>
                        <p className='text-sm'>
                          {t('contact.mondayToFriday')}: 9:00 AM - 6:00 PM
                        </p>
                        <p className='text-sm'>
                          {t('contact.weekend')}: 10:00 AM - 4:00 PM
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-8 rounded-lg overflow-hidden h-64 w-full flex justify-center items-center'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.7120843287157!2d7.137965075770444!3d51.591839971832684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e461c732271f%3A0xb75d756bec20aa26!2sEwaldstra%C3%9Fe%2028%2C%2045699%20Herten%2C%20Germany!5e0!3m2!1sen!2s!4v1750158982006!5m2!1sen!2s'
                width='100%'
                height='100%'
                style={{ minWidth: '200px', minHeight: '200px', border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='w-full h-full'
              ></iframe>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className='bg-black/30 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-md'>
              <h2 className='text-2xl font-semibold mb-6 text-white'>
                {t('contact.sendUsMessage')}
              </h2>{' '}
              {formStatus.submitted && (
                <div
                  className={`mb-6 p-4 flex items-start gap-3 ${
                    formStatus.success
                      ? 'bg-green-600/10 text-green border border-green'
                      : 'bg-red-600/10 text-red border border-red'
                  } rounded-md`}
                >
                  {formStatus.success ? (
                    <CheckCircle className='h-5 w-5 mt-0.5 flex-shrink-0' />
                  ) : (
                    <XCircle className='h-5 w-5 mt-0.5 flex-shrink-0' />
                  )}
                  <span>{formStatus.message}</span>
                </div>
              )}
              <form onSubmit={handleSubmit} className='space-y-6'>
                {[
                  { id: 'name', label: 'fullName', type: 'text' },
                  { id: 'email', label: 'email', type: 'email' },
                  { id: 'subject', label: 'subject', type: 'text' },
                ].map(({ id, label, type }) => (
                  <div key={id}>
                    <label htmlFor={id} className='block text-sm font-medium'>
                      {t(`contact.${label}`)} *
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      value={formData[id]}
                      onChange={handleChange}
                      className={`mt-1 w-full rounded-md border ${
                        errors[id] ? 'border-red-500' : 'border-gray-700'
                      } bg-black/50 py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green`}
                    />
                    {errors[id] && (
                      <p className='text-sm text-red-500 mt-1'>{errors[id]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium'
                  >
                    {t('contact.message')} *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-md border ${
                      errors.message ? 'border-red-500' : 'border-gray-700'
                    } bg-black/50 py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green`}
                  ></textarea>
                  {errors.message && (
                    <p className='text-sm text-red-500 mt-1'>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full py-2 px-4 bg-green text-white font-semibold rounded-md hover:bg-green/90 transition focus:outline-none focus:ring-2 focus:ring-green disabled:opacity-50'
                >
                  {isSubmitting ? t('contact.sending') : t('contact.send')}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
