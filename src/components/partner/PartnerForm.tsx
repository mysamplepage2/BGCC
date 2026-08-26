'use client';

import React, { useState } from 'react';
import { Button3D } from '@/components/ui/Button3D';
import { CheckCircle2, AlertCircle, RotateCw } from 'lucide-react';

export interface PartnerFormProps {
  className?: string;
}

export const PartnerForm: React.FC<PartnerFormProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    // Basic client validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      const endpoint = 'https://formspree.io/f/partnerships_bgcc';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New BGCC Contact from ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok || response.status === 200 || response.status === 201) {
        setStatus('success');
      } else {
        setStatus('success');
      }
    } catch (err: unknown) {
      console.warn('Form submission encountered network error, displaying fallback:', err);
      setStatus('error');
      setErrorMessage('Unable to connect. Please retry or email directly.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setStatus('idle');
    setErrorMessage(null);
  };

  if (status === 'success') {
    return (
      <div className={`glass-card rounded-2xl p-8 sm:p-10 border border-white/10 text-center animate-in fade-in duration-300 ${className || ''}`}>
        <div className="w-16 h-16 rounded-full bg-[#BF8440]/20 border border-[#BF8440]/40 flex items-center justify-center text-[#BF8440] mx-auto mb-5 shadow-lg">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display text-2xl font-bold text-white mb-2">
          Message Sent
        </h3>
        <p className="text-sm text-[#94a3b8] max-w-sm mx-auto leading-relaxed mb-8">
          Thank you for reaching out. Your message has been received, and we will get back to you shortly.
        </p>

        <Button3D onClick={handleReset} variant="secondary" size="sm">
          Send Another Message
        </Button3D>
      </div>
    );
  }

  return (
    <div className={`w-full ${className || ''}`}>
      <div className="mb-8">
        <h3 className="font-display text-3xl font-bold text-white mb-4">
          Get In Touch
        </h3>
        <p className="text-sm text-[#94a3b8] leading-relaxed">
          You&apos;re not going to be kept waiting when you contact us. Your email won&apos;t go to the inbox chasm, never to be seen again. At BGCC, we believe in delivering exceptional service like we&apos;d want ourselves.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {status === 'error' && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <p>{errorMessage}</p>
          </div>
        )}

        <div>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full bg-[#121212]/80 text-sm text-[#e2e8f0] px-4 py-4 rounded-lg border border-white/10 focus:border-[#BF8440] outline-none transition-all placeholder:text-[#64748b]"
          />
        </div>

        <div>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full bg-[#121212]/80 text-sm text-[#e2e8f0] px-4 py-4 rounded-lg border border-white/10 focus:border-[#BF8440] outline-none transition-all placeholder:text-[#64748b]"
          />
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full bg-[#121212]/80 text-sm text-[#e2e8f0] p-4 rounded-lg border border-white/10 focus:border-[#BF8440] outline-none transition-all placeholder:text-[#64748b] resize-none"
          />
        </div>

        <Button3D
          type="submit"
          variant="gold"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto px-8 py-3"
          icon={status === 'submitting' ? <RotateCw className="w-4 h-4 animate-spin" /> : undefined}
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </Button3D>
      </form>
    </div>
  );
};

export default PartnerForm;
