import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const successMessage = 'Thanks. Your details have been received. We will reach out soon.';

const initialFormData = {
  user_name: '',
  user_email: '',
  project_type: 'Branding',
  user_message: '',
};

function validateField(name, value) {
  const trimmed = value.trim();

  if (name === 'user_name') {
    if (!trimmed) return 'Name is required.';
    return '';
  }

  if (name === 'user_email') {
    if (!trimmed) return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Enter a valid email address.';
    return '';
  }

  return '';
}

function validateAll(values) {
  const nextErrors = {};
  const nameError = validateField('user_name', values.user_name);
  const emailError = validateField('user_email', values.user_email);

  if (nameError) nextErrors.user_name = nameError;
  if (emailError) nextErrors.user_email = emailError;

  return nextErrors;
}

export default function useContactForm({ onSuccess } = {}) {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextData = { ...formData, [name]: value };
    setFormData(nextData);

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }

    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setTouched({});
    setStatus({ type: '', message: '' });
    formRef.current?.reset();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateAll(formData);

    setTouched({ user_name: true, user_email: true });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    try {
      await emailjs.sendForm(
        'service_a4xmjm9',
        'template_gk2wk2h',
        formRef.current,
        'Mv4C5DoOJk_eNUfgC'
      );

      setStatus({
        type: 'success',
        message: successMessage,
      });

      setFormData(initialFormData);
      setErrors({});
      setTouched({});
      formRef.current?.reset();

      onSuccess?.();
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending your message. Please try again.',
      });
    }
  };

  return {
    formRef,
    formData,
    errors,
    status,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    successMessage,
  };
}
