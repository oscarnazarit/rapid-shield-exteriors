'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import imageCompression from 'browser-image-compression';
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
import { CheckCircle2, Send, Paperclip, X, ImageIcon } from 'lucide-react';
import { palette } from '@/lib/tokens/colors';

const MAX_PHOTOS = 4;
const MAX_SIZE_MB = 0.6;

type AttachedPhoto = {
  name: string;
  preview: string;
  data: string;
  originalKB: number;
  compressedKB: number;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [photos, setPhotos] = useState<AttachedPhoto[]>([]);
  const [compressing, setCompressing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = async (fileList: FileList | null) => {
    if (!fileList) return;
    const slots = MAX_PHOTOS - photos.length;
    if (slots <= 0) return;
    const incoming = Array.from(fileList).slice(0, slots);
    setCompressing(true);
    try {
      const compressed = await Promise.all(
        incoming.map(async (file) => {
          const originalKB = Math.round(file.size / 1024);
          const blob = await imageCompression(file, {
            maxSizeMB: MAX_SIZE_MB,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
          });
          const compressedKB = Math.round(blob.size / 1024);
          const data = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve((reader.result as string).split(',')[1]);
            reader.readAsDataURL(blob);
          });
          return {
            name: file.name,
            preview: URL.createObjectURL(blob),
            data,
            originalKB,
            compressedKB,
          };
        })
      );
      setPhotos((prev) => [...prev, ...compressed].slice(0, MAX_PHOTOS));
    } finally {
      setCompressing(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const validatePhone = (value: string) => {
    if (!value) return null;
    const digits = value.replace(/\D/g, '');
    if (digits.length !== 10 && digits.length !== 11) return 'Please enter a valid US phone number';
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleServiceChange = (value: string | null) =>
    setForm((prev) => ({ ...prev, service: value ?? '' }));

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
        body: JSON.stringify({ ...form, photos: photos.map(({ name, data }) => ({ name, data })) }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="ring-[#D1992B]">
      <CardContent className="p-6 md:p-8">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D1992B]">
              <CheckCircle2 className="h-8 w-8" style={{ color: palette.text.primary }} />
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-2" style={{ color: palette.text.inverse }}>
                Message received!
              </h3>
              <p className="max-w-sm" style={{ color: palette.text.secondary }}>
                Thanks for reaching out. We&apos;ll review your request and get back to you within
                one business day.
              </p>
            </div>
            <Button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: '', email: '', phone: '', service: '', message: '' });
                setPhotos([]);
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
                <Label htmlFor="name" className="text-sm text-[#494848] dark:text-[#D4D4D4]">
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
                <Label htmlFor="email" className="text-sm text-[#494848] dark:text-[#D4D4D4]">
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
                <Label htmlFor="phone" className="text-sm text-[#494848] dark:text-[#D4D4D4]">
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
                  className={`border-[#B4B4B4] placeholder:text-[#909090] focus:border-[#D1992B]/50 focus:ring-[#D1992B]/20 ${phoneError ? 'border-red-500' : ''}`}
                />
                {phoneError && <p className="text-red-400 text-xs">{phoneError}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm text-[#494848] dark:text-[#D4D4D4]">Service Needed</Label>
                <Select value={form.service} onValueChange={handleServiceChange}>
                  <SelectTrigger className="border-[#B4B4B4] focus:border-[#D1992B]/50 focus:ring-[#D1992B]/20">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent
                    align="start"
                    alignItemWithTrigger={false}
                    className="border-[#B4B4B4] bg-white dark:bg-zinc-900"
                  >
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
              <Label htmlFor="message" className="text-sm text-[#494848] dark:text-[#D4D4D4]">
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

            {/* Photo attachment */}
            <div className="flex flex-col gap-2">
              <Label className="text-sm text-[#494848] dark:text-[#D4D4D4] flex items-center gap-1.5">
                <Paperclip className="h-3.5 w-3.5" />
                Attach Photos
                <span className="font-normal" style={{ color: palette.text.secondary }}>
                  (optional — up to {MAX_PHOTOS})
                </span>
              </Label>

              {photos.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {photos.map((photo, i) => (
                    <div key={i} className="relative group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.preview}
                        alt={photo.name}
                        className="h-20 w-20 object-cover rounded-lg border"
                        style={{ borderColor: palette.border.default }}
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(i)}
                        className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3 text-white" />
                      </button>
                      <p
                        className="text-xs mt-1 text-center truncate w-20"
                        style={{ color: palette.text.secondary }}
                        title={photo.name}
                      >
                        {photo.compressedKB < photo.originalKB
                          ? `${photo.compressedKB} KB`
                          : photo.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {photos.length < MAX_PHOTOS && (
                <>
                  <button
                    type="button"
                    disabled={compressing}
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 w-fit px-4 py-2 rounded-lg border text-sm font-medium transition-colors disabled:opacity-50"
                    style={{ borderColor: palette.border.accent, color: palette.text.secondary }}
                  >
                    <ImageIcon className="h-4 w-4" />
                    {compressing
                      ? 'Compressing…'
                      : photos.length === 0
                        ? 'Add photos'
                        : `Add more (${MAX_PHOTOS - photos.length} left)`}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => handleFiles(e.target.files)}
                  />
                </>
              )}

              <p className="text-xs" style={{ color: palette.text.secondary }}>
                Photos are compressed automatically before sending.
              </p>
            </div>

            <Button
              type="submit"
              disabled={loading || compressing}
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
            </Button>
            <p className="text-xs" style={{ color: palette.text.secondary }}>
              By submitting this form you agree to be contacted about your request.
            </p>
            <p className="text-xs" style={{ color: palette.text.secondary }}>
              We never share your information. See our{' '}
              <Link
                href="/privacy-policy"
                className="underline underline-offset-4 hover:opacity-75 transition-opacity"
                style={{ color: palette.text.primary }}
              >
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
