import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  X,
  CheckCircle,
  XCircle,
  Calendar,
  User,
  Mail,
  MessageSquare,
  Phone,
} from 'lucide-react';

const SidebarModal = ({
  isOpen,
  onClose,
  title = 'Book a Free Discovery Call',
}) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  // Close the modal when escape key is pressed
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim())
      newErrors.name = t('modal.nameRequired', 'Name is required');
    if (!formData.email.trim())
      newErrors.email = t('modal.emailRequired', 'Email is required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = t(
        'modal.emailInvalid',
        'Please enter a valid email address'
      );
    if (!formData.message.trim())
      newErrors.message = t('modal.messageRequired', 'Message is required');

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
      `Discovery Call Request: ${formData.name}`
    );
    // Redirect to the same page after submission (prevents FormSubmit redirect page)
    formDataToSend.append('_next', window.location.href);
    // Disable captcha for better user experience
    formDataToSend.append('_captcha', 'false');

    fetch('https://formsubmit.co/ajax/info@backpackwander.sr', {
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
          message: t(
            'modal.messageSent',
            "Your request has been sent. We'll contact you shortly to schedule your free discovery call!"
          ),
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        formElement.reset();

        // Close modal after successful submission after 3 seconds
        setTimeout(() => {
          onClose();
          // Reset form status after modal is closed
          setTimeout(() => {
            setFormStatus({
              submitted: false,
              success: false,
              message: '',
            });
          }, 500);
        }, 3000);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsSubmitting(false);
        setFormStatus({
          submitted: true,
          success: false,
          message:
            error.message ||
            t('modal.errorMessage', 'Something went wrong. Please try again.'),
        });
      });
  };

  // Animation variants for smooth transitions
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const sidebarVariants = {
    hidden: {
      x: '100%',
      opacity: 0.5,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    },
    visible: {
      x: '0%',
      opacity: 1,
      boxShadow: '-5px 0px 25px rgba(0,0,0,0.3)',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
        when: 'beforeChildren',
      },
    },
    exit: {
      x: '100%',
      opacity: 0.5,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.25,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence mode='wait'>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className='fixed inset-0 bg-black/70 z-40 backdrop-blur-sm'
            onClick={onClose}
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={overlayVariants}
          />
          {/* Sidebar */}{' '}
          <motion.div
            className='fixed right-0 top-0 h-full w-full sm:w-[450px] max-w-full bg-gradient-to-b from-[#121212] to-[#0a0a0a] text-white z-50 shadow-xl overflow-y-auto'
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={sidebarVariants}
          >
            <motion.div
              className='p-6 md:p-8 h-full flex flex-col'
              variants={contentVariants}
            >
              {/* Header with close button */}
              <div className='flex items-center justify-between mb-8'>
                <h2 className='text-2xl font-bold text-green'>
                  {t('modal.title', title)}
                </h2>
                <button
                  onClick={onClose}
                  className='p-2 rounded-full hover:bg-gray-800 transition-colors'
                  aria-label='Close modal'
                >
                  <X size={24} />
                </button>
              </div>
              <div className='mb-6'>
                <p className='text-gray-300'>
                  {t(
                    'modal.description',
                    "Schedule your free 30-minute discovery call to discuss how we can help you achieve your goals. We'll reach out to confirm a time that works for you."
                  )}
                </p>
              </div>
              {/* Form Status Messages */}
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
              )}{' '}
              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                className='space-y-6 flex-grow'
                variants={contentVariants}
              >
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor='name'
                    className='text-sm font-medium mb-1 text-gray-300 flex items-center gap-2'
                  >
                    <User size={16} className='text-green' />
                    {t('modal.fullName', 'Full Name')} *
                  </label>
                  <motion.input
                    id='name'
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      errors.name ? 'border-red' : 'border-gray-700'
                    } bg-black/40 py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green`}
                    placeholder={t(
                      'modal.namePlaceholder',
                      'Enter your full name'
                    )}
                    whileFocus={{ boxShadow: '0 0 0 2px rgba(0, 255, 0, 0.2)' }}
                  />
                  {errors.name && (
                    <motion.p
                      className='text-sm text-red mt-1'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>{' '}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor='email'
                    className='text-sm font-medium mb-1 text-gray-300 flex items-center gap-2'
                  >
                    <Mail size={16} className='text-green' />
                    {t('modal.email', 'Email')} *
                  </label>
                  <motion.input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      errors.email ? 'border-red' : 'border-gray-700'
                    } bg-black/40 py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green`}
                    placeholder={t(
                      'modal.emailPlaceholder',
                      'Enter your email address'
                    )}
                    whileFocus={{ boxShadow: '0 0 0 2px rgba(0, 255, 0, 0.2)' }}
                  />
                  {errors.email && (
                    <motion.p
                      className='text-sm text-red mt-1'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>{' '}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor='phone'
                    className='text-sm font-medium mb-1 text-gray-300 flex items-center gap-2'
                  >
                    <Phone size={16} className='text-green' />
                    {t('modal.phone', 'Phone')}{' '}
                    <span className='text-xs text-gray-500'>
                      ({t('modal.optional', 'optional')})
                    </span>
                  </label>
                  <motion.input
                    id='phone'
                    name='phone'
                    type='tel'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full rounded-md border border-gray-700 bg-black/40 py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green'
                    placeholder={t(
                      'modal.phonePlaceholder',
                      'Enter your phone number (optional)'
                    )}
                    whileFocus={{ boxShadow: '0 0 0 2px rgba(0, 255, 0, 0.2)' }}
                  />
                </motion.div>{' '}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor='message'
                    className='text-sm font-medium mb-1 text-gray-300 flex items-center gap-2'
                  >
                    <MessageSquare size={16} className='text-green' />
                    {t('modal.message', 'Message')} *
                  </label>
                  <motion.textarea
                    id='message'
                    name='message'
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      errors.message ? 'border-red' : 'border-gray-700'
                    } bg-black/40 py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green`}
                    placeholder={t(
                      'modal.messagePlaceholder',
                      "Tell us briefly about your goals and what you'd like to discuss in the discovery call"
                    )}
                    whileFocus={{ boxShadow: '0 0 0 2px rgba(0, 255, 0, 0.2)' }}
                  ></motion.textarea>
                  {errors.message && (
                    <motion.p
                      className='text-sm text-red mt-1'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>{' '}
                <motion.div className='mt-auto pt-4' variants={itemVariants}>
                  <motion.button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full py-3 px-4 bg-green text-white font-semibold rounded-md hover:bg-green/90 transition focus:outline-none focus:ring-2 focus:ring-green flex items-center justify-center gap-2 disabled:opacity-50'
                    whileHover={{
                      scale: 1.03,
                      boxShadow: '0px 4px 12px rgba(0, 255, 0, 0.15)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Calendar size={18} />
                    {isSubmitting
                      ? t('modal.sending', 'Sending...')
                      : t('modal.book', 'Book Your Free Discovery Call')}
                  </motion.button>
                </motion.div>
              </motion.form>
              <motion.div
                className='mt-4 pt-4 border-t border-gray-800 text-xs text-gray-500 text-center'
                variants={itemVariants}
              >
                {' '}
                {t(
                  'modal.privacy',
                  'By submitting this form, you agree to our privacy policy and consent to being contacted regarding your request.'
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SidebarModal;
