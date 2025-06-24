import React, { useState, useEffect } from 'react';
import './SidebarContact.css';
import { useTranslation } from 'react-i18next';

const SidebarContact = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [isClosing, setIsClosing] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem('formSubmitted') === 'true') {
      window.localStorage.removeItem('formSubmitted');

      setFormStatus({
        submitted: true,
        success: true,
        message: t('sidebarContact.successMessage'),
      });

      const timer = setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: '',
        });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [t]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    fetch('https://formsubmit.co/ajax/info@backpackwander.rs', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        setIsSubmitting(false);
        setFormStatus({
          submitted: true,
          success: true,
          message: t('sidebarContact.successMessage'),
        });

        // Reset the form
        e.target.reset();

        // Hide success message after 5 seconds
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
          message: t('sidebarContact.errorMessage'),
        });
      });
  };

  return (
    <>
      {isOpen && <div className='modal-overlay' onClick={handleClose}></div>}

      <div
        className={`contact-modal ${isOpen ? 'open' : ''} ${
          isClosing ? 'closing' : ''
        }`}
      >
        <button className='close-bt' onClick={handleClose}>
          ✖
        </button>
        <h2>{t('sidebarContact.title')}</h2>
        <p>{t('sidebarContact.description')}</p>

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder={t('sidebarContact.namePlaceholder')}
            required
          />
          <div className='email-phone-group'>
            <input
              type='email'
              name='email'
              placeholder={t('sidebarContact.emailPlaceholder')}
              required
            />
            <input
              type='tel'
              name='phone'
              placeholder={t('sidebarContact.phonePlaceholder')}
            />
          </div>
          <textarea
            name='message'
            placeholder={t('sidebarContact.messagePlaceholder')}
            required
          ></textarea>

          {formStatus.submitted && (
            <div
              className={`submit-status ${
                formStatus.success ? 'success' : 'error'
              }`}
            >
              {formStatus.message}
            </div>
          )}

          <button
            type='submit'
            className='submit-contact'
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t('sidebarContact.submitting')
              : t('sidebarContact.submit')}
          </button>
        </form>
      </div>
    </>
  );
};

export default SidebarContact;
