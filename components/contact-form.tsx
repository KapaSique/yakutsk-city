'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'success' | 'error' | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, укажите ваше имя';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Пожалуйста, укажите email';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Пожалуйста, укажите корректный email';
    }

    // Phone validation
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, укажите телефон';
    } else if (!phoneRegex.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Пожалуйста, укажите корректный номер телефона';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Пожалуйста, укажите тему обращения';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Тема должна содержать минимум 5 символов';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Пожалуйста, введите сообщение';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    // Clear submit status when user modifies form
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {submitStatus === 'success' && (
        <Alert
          variant="success"
          title="Сообщение отправлено"
          onClose={() => setSubmitStatus(null)}
        >
          Спасибо за обращение! Мы свяжемся с вами в ближайшее время.
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert
          variant="error"
          title="Ошибка отправки"
          onClose={() => setSubmitStatus(null)}
        >
          Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-900">
            Имя <span className="text-red-500" aria-label="обязательное поле">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="Иванов Иван Иванович"
            disabled={isSubmitting}
            required
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-900">
            Email <span className="text-red-500" aria-label="обязательное поле">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="example@mail.ru"
            disabled={isSubmitting}
            required
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone field */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-slate-900">
            Телефон <span className="text-red-500" aria-label="обязательное поле">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            placeholder="+7 (999) 123-45-67"
            disabled={isSubmitting}
            required
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm text-red-600" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Subject field */}
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-slate-900">
            Тема обращения <span className="text-red-500" aria-label="обязательное поле">*</span>
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            placeholder="Вопрос по имущественным отношениям"
            disabled={isSubmitting}
            required
          />
          {errors.subject && (
            <p id="subject-error" className="text-sm text-red-600" role="alert">
              {errors.subject}
            </p>
          )}
        </div>
      </div>

      {/* Message field */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-slate-900">
          Сообщение <span className="text-red-500" aria-label="обязательное поле">*</span>
        </Label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="Опишите ваш вопрос или обращение подробно..."
          disabled={isSubmitting}
          required
          rows={6}
          className="flex w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base ring-offset-white transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus-visible:ring-red-500 resize-none"
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit button */}
      <div className="flex justify-end pt-2">
        <Button
          type="submit"
          variant="cta"
          size="lg"
          disabled={isSubmitting}
          className="min-w-[200px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              <span>Отправка...</span>
            </>
          ) : (
            'Отправить обращение'
          )}
        </Button>
      </div>

      <p className="text-sm text-slate-500 text-center">
        <span className="text-red-500">*</span> — обязательные поля для заполнения
      </p>
    </form>
  );
}
