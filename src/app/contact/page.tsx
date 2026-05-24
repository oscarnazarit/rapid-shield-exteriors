'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from 'lucide-react';
import { palette } from '@/lib/tokens/colors';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(515) 805-0500',
    sub: 'Mon–Fri, 7am–6pm',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'rapidshieldexteriors@gmail.com',
    sub: 'We respond within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: 'Greater Des Moines, IA',
    sub: 'Contact us to confirm your location',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri: 7am – 6pm',
    sub: 'Sat: 8am – 2pm',
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [phoneError, setPhoneError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceChange = (value: string | null) => {
    setForm((prev) => ({ ...prev, service: value ?? '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const phoneValidation = validatePhone(form.phone);
    if (phoneValidation) {
      setPhoneError(phoneValidation);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const validatePhone = (value: string) => {
    if (!value) return null; // phone is optional
    const digits = value.replace(/\D/g, '');
    if (digits.length !== 10 && digits.length !== 11) {
      return 'Please enter a valid US phone number';
    }
    return null;
  };

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="border-b py-16 md:py-20" style={{ borderColor: palette.border.default }}>
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <Badge
            className="mb-4 font-medium uppercase text-xs tracking-wide"
            style={{ color: palette.text.primary, borderColor: palette.border.accent }}
          >
            Contact Us
          </Badge>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: palette.text.inverse }}
          >
            Get a Free Quote
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: palette.text.secondary }}>
            Fill out the form and we&apos;ll get back to you within one business day. No obligation,
            no pressure.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-20 flex-1">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info column */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-bold text-xl mb-1" style={{ color: palette.text.inverse }}>
                  Reach us directly
                </h2>
                <p className="text-sm" style={{ color: palette.text.secondary }}>
                  Prefer to talk? Give us a call or send an email.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#D1992B]">
                        <Icon className="h-4 w-4" style={{ color: palette.text.primary }} />
                      </div>
                      <div>
                        <p
                          className="text-xs font-medium uppercase tracking-wide"
                          style={{ color: palette.text.secondary }}
                        >
                          {info.label}
                        </p>
                        <p className="text-sm font-medium" style={{ color: palette.text.inverse }}>
                          {info.value}
                        </p>
                        <p className="text-xs" style={{ color: palette.text.secondary }}>
                          {info.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust signals */}
              <Card className="ring-[#D1992B] mt-2">
                <CardContent className="p-5">
                  <h3
                    className="font-semibold text-sm mb-4"
                    style={{ color: palette.text.inverse }}
                  >
                    Our commitment to you
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      'Free on-site estimate',
                      'No hidden costs',
                      'Fully licensed & insured',
                      'Same-day response',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D1992B]" />
                        <span className="text-sm" style={{ color: palette.text.secondary }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Form column */}
            <div className="lg:col-span-2">
              <Card className="ring-[#D1992B]">
                <CardContent className="p-6 md:p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D1992B]">
                        <CheckCircle2 className="h-8 w-8" style={{ color: palette.text.primary }} />
                      </div>
                      <div>
                        <h3
                          className="font-bold text-2xl mb-2"
                          style={{ color: palette.text.inverse }}
                        >
                          Message received!
                        </h3>
                        <p className="max-w-sm" style={{ color: palette.text.secondary }}>
                          Thanks for reaching out. We&apos;ll review your request and get back to
                          you within one business day.
                        </p>
                      </div>
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: '',
                            email: '',
                            phone: '',
                            service: '',
                            message: '',
                          });
                        }}
                        variant="outline"
                        className="mt-2 border-[#D1992B] text-[#494848] dark:text-[#D4D4D4] hover:bg-[#B67D0E] hover:text-black dark:hover:text-[#D4D4D4]"
                      >
                        Submit another request
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <Label
                            htmlFor="name"
                            className="text-sm text-[#494848] dark:text-[#D4D4D4]"
                          >
                            Full Name <span className="text-[#D1992B]">*</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="John Smith"
                            className="border-[#B4B4B4] placeholder:text-[#909090] focus:border-[#D1992B]/50 focus:ring-[#D1992B]/20"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <Label
                            htmlFor="email"
                            className="text-sm text-[#494848] dark:text-[#D4D4D4]"
                          >
                            Email <span className="text-[#D1992B]">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="border-[#B4B4B4] placeholder:text-[#909090] focus:border-[#D1992B]/50 focus:ring-[#D1992B]/20"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <Label
                            htmlFor="phone"
                            className="text-sm text-[#494848] dark:text-[#D4D4D4]"
                          >
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            onBlur={(e) => setPhoneError(validatePhone(e.target.value))}
                            placeholder="(515) 000-0000"
                            className={`border-[#B4B4B4] placeholder:text-[#909090] focus:border-[#D1992B]/50 focus:ring-[#D1992B]/20 ${
                              phoneError ? 'border-red-500' : ''
                            }`}
                          />
                          {phoneError && <p className="text-red-400 text-xs">{phoneError}</p>}
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <Label className="text-sm text-[#494848] dark:text-[#D4D4D4]">
                            Service Needed
                          </Label>
                          <Select value={form.service} onValueChange={handleServiceChange}>
                            <SelectTrigger className="border-[#B4B4B4] focus:border-[#D1992B]/50 focus:ring-[#D1992B]/20">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent className="border-[#B4B4B4]">
                              <SelectItem value="roofing">Roofing</SelectItem>
                              <SelectItem value="siding">Siding</SelectItem>
                              <SelectItem value="gutters">Gutters</SelectItem>
                              <SelectItem value="inspection">Inspection / Assessment</SelectItem>
                              <SelectItem value="multiple">Multiple Services</SelectItem>
                              <SelectItem value="other">Other / Not sure</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <Label
                          htmlFor="message"
                          className="text-sm text-[#494848] dark:text-[#D4D4D4]"
                        >
                          Tell us about your project <span className="text-[#D1992B]">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Describe the issue or project, your property type, and any other details that would help us give you an accurate quote..."
                          className="border-[#B4B4B4] placeholder:text-[#909090] focus:border-[#D1992B]/50 focus:ring-[#D1992B]/20 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="bg-[#D1992B] hover:bg-[#B67D0E] text-black dark:text-[#D4D4D4] hover:text-black dark:hover:text-[#D4D4D4] font-bold transition-colors w-full sm:w-auto sm:self-start"
                        size="lg"
                      >
                        {loading ? (
                          'Sending...'
                        ) : (
                          <>
                            Send Request
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                        {error && <p className="text-red-400 text-sm">{error}</p>}
                      </Button>
                      <p className="text-xs" style={{ color: palette.text.secondary }}>
                        By submitting this form you agree to be contacted about your request. We
                        never share your information.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
