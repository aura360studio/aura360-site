import { useState } from 'react';
import { motion } from 'framer-motion';

const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: index * 0.08 },
  }),
};

export default function Contact() {
  const whatsappUrl =
    'https://wa.me/917411116694?text=Hi%20Aura%20360%20Studio%2C%20I%20want%20to%20discuss%20a%20project.';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Branding',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    const trimmed = value.trim();
    if (name === 'name') {
      if (!trimmed) return 'Name is required.';
      return '';
    }
    if (name === 'email') {
      if (!trimmed) return 'Email is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Enter a valid email address.';
      return '';
    }
    return '';
  };

  const validateAll = (values) => {
    const nextErrors = {};
    const nameError = validateField('name', values.name);
    const emailError = validateField('email', values.email);
    if (nameError) nextErrors.name = nameError;
    if (emailError) nextErrors.email = emailError;
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextData = { ...formData, [name]: value };
    setFormData(nextData);
    if (touched[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
    if (submitted) setSubmitted(false);
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateAll(formData);
    setTouched({ name: true, email: true });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      projectType: 'Branding',
      message: '',
    });
  };

  return (
    <motion.section
      id='contact'
      className='section'
      variants={sectionReveal}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className='container glass section-panel contact-panel contact-modern'>
        <div className='contact-modern-grid'>
          <motion.aside className='contact-lead-block' variants={itemReveal} custom={0}>
            <h2 className='contact-heading'>Let&apos;s Build Your Brand&apos;s Future.</h2>
            <p className='section-copy contact-subtext'>
              Tell us about your idea. Let&apos;s shape it into something unforgettable.
            </p>
            <p className='contact-microcopy'>We respond within 24 hours.</p>
          </motion.aside>

          <motion.div className='contact-form-card glass' variants={itemReveal} custom={1}>
            <form id='contact-form' className='contact-modern-form' onSubmit={handleSubmit} noValidate>
              <div className='form-row'>
                <label className='form-label-modern' htmlFor='contact-name'>
                  Name <span className='required-mark'>*</span>
                </label>
                <input
                  id='contact-name'
                  name='name'
                  type='text'
                  className='input-field-modern'
                  placeholder='Your full name'
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  required
                />
                {errors.name ? (
                  <p id='name-error' className='form-error' role='alert'>
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className='form-row'>
                <label className='form-label-modern' htmlFor='contact-email'>
                  Email <span className='required-mark'>*</span>
                </label>
                <input
                  id='contact-email'
                  name='email'
                  type='email'
                  className='input-field-modern'
                  placeholder='you@company.com'
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  required
                />
                {errors.email ? (
                  <p id='email-error' className='form-error' role='alert'>
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div className='form-row'>
                <label className='form-label-modern' htmlFor='project-type'>
                  Project Type
                </label>
                <select
                  id='project-type'
                  name='projectType'
                  className='input-field-modern'
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value='Branding'>Branding</option>
                  <option value='Web Design'>Web Design</option>
                  <option value='Marketing'>Marketing</option>
                  <option value='Other'>Other</option>
                </select>
              </div>

              <div className='form-row'>
                <label className='form-label-modern' htmlFor='contact-message'>
                  Message
                </label>
                <textarea
                  id='contact-message'
                  name='message'
                  rows='4'
                  className='input-field-modern textarea-modern'
                  placeholder='Briefly describe your goals, timeline, and budget...'
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type='submit' className='btn-accent-glow contact-submit contact-submit-btn'>
                Send Project Details
              </button>

              <p className='trust-strip'>
                <span>✔ 100% confidential</span>
                <span>✔ No spam</span>
                <span>✔ Free consultation</span>
              </p>

              {submitted ? (
                <p className='form-success' role='status' aria-live='polite'>
                  Thanks. Your details have been received. We will reach out soon.
                </p>
              ) : null}
            </form>

            <p className='whatsapp-secondary'>
              Prefer instant chat?{' '}
              <a href={whatsappUrl} target='_blank' rel='noreferrer' className='whatsapp-inline-link'>
                Message us on WhatsApp
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
