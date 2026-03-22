import { useEffect, useRef } from 'react';
import useContactForm from '../../hooks/useContactForm';

function getFocusableElements(container) {
  if (!container) return [];

  return Array.from(
    container.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  );
}

export default function ShowcaseContactModal({
  isOpen,
  onClose,
  onSuccessfulClose,
  whatsappUrl,
}) {
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);
  const closeTimerRef = useRef(null);
  const { formRef, formData, errors, status, handleBlur, handleChange, handleSubmit, resetForm } = useContactForm();

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstFieldRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements = getFocusableElements(dialogRef.current);
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || status.type !== 'success') return undefined;

    closeTimerRef.current = window.setTimeout(() => {
      onSuccessfulClose();
      resetForm();
    }, 1800);

    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    };
  }, [isOpen, onSuccessfulClose, resetForm, status.type]);

  if (!isOpen) return null;

  return (
    <div className='showcase-modal-backdrop' onClick={onClose}>
      <div
        ref={dialogRef}
        className='showcase-modal-dialog'
        role='dialog'
        aria-modal='true'
        aria-labelledby='showcase-contact-modal-title'
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type='button'
          className='showcase-modal-close'
          onClick={onClose}
          aria-label='Close contact form'
        >
          <span />
          <span />
        </button>

        <div className='showcase-modal-header'>
          <p className='showcase-mini-label'>Let's Build Your Brand's Future.</p>
          <h2 id='showcase-contact-modal-title' className='showcase-modal-title'>
            Send Project Details
          </h2>
        </div>

        <form ref={formRef} className='contact-modern-form showcase-modal-form' onSubmit={handleSubmit} noValidate>
          <div className='form-row'>
            <label className='form-label-modern' htmlFor='showcase-contact-name'>
              Name <span className='required-mark'>*</span>
            </label>
            <input
              ref={firstFieldRef}
              id='showcase-contact-name'
              name='user_name'
              type='text'
              className='input-field-modern'
              placeholder='Your full name'
              value={formData.user_name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.user_name)}
              aria-describedby={errors.user_name ? 'showcase-name-error' : undefined}
              required
            />
            {errors.user_name ? (
              <p id='showcase-name-error' className='form-error' role='alert'>
                {errors.user_name}
              </p>
            ) : null}
          </div>

          <div className='form-row'>
            <label className='form-label-modern' htmlFor='showcase-contact-email'>
              Email <span className='required-mark'>*</span>
            </label>
            <input
              id='showcase-contact-email'
              name='user_email'
              type='email'
              className='input-field-modern'
              placeholder='you@company.com'
              value={formData.user_email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.user_email)}
              aria-describedby={errors.user_email ? 'showcase-email-error' : undefined}
              required
            />
            {errors.user_email ? (
              <p id='showcase-email-error' className='form-error' role='alert'>
                {errors.user_email}
              </p>
            ) : null}
          </div>

          <div className='form-row'>
            <label className='form-label-modern' htmlFor='showcase-project-type'>
              Project Type
            </label>
            <select
              id='showcase-project-type'
              name='project_type'
              className='input-field-modern'
              value={formData.project_type}
              onChange={handleChange}
            >
              <option value='Branding'>Branding</option>
              <option value='Web Design'>Web Design</option>
              <option value='Marketing'>Marketing</option>
              <option value='Other'>Other</option>
            </select>
          </div>

          <div className='form-row'>
            <label className='form-label-modern' htmlFor='showcase-contact-message'>
              Message
            </label>
            <textarea
              id='showcase-contact-message'
              name='user_message'
              rows='4'
              className='input-field-modern textarea-modern'
              placeholder='Briefly describe your goals, timeline, and budget...'
              value={formData.user_message}
              onChange={handleChange}
            />
          </div>

          <button type='submit' className='btn-accent-glow contact-submit contact-submit-btn showcase-modal-submit'>
            Send Project Details
          </button>

          {status.message ? (
            <p className={status.type === 'success' ? 'form-success' : 'form-error'} role='status' aria-live='polite'>
              {status.message}
            </p>
          ) : null}
        </form>

        <p className='showcase-modal-footer'>
          Prefer instant chat?{' '}
          <a href={whatsappUrl} target='_blank' rel='noreferrer' className='whatsapp-inline-link'>
            Message us on WhatsApp
          </a>
          .
        </p>
      </div>
    </div>
  );
}
