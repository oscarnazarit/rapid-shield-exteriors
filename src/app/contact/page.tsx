import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { palette } from '@/lib/tokens/colors';
import { client } from '@/sanity/lib/client';
import ContactForm from './ContactForm';

export default async function ContactPage() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);

  const heading = settings?.contactHeading ?? 'Get a Free Quote';
  const description =
    settings?.contactDescription ??
    "Fill out the form and we'll get back to you within one business day. No obligation, no pressure.";

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: settings?.phone ?? '(515) 805-0500',
      sub: 'Mon–Fri, 7am–6pm',
    },
    {
      icon: Mail,
      label: 'Email',
      value: settings?.email ?? 'rapidshieldexteriors@gmail.com',
      sub: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      label: 'Service Area',
      value: settings?.address ?? 'Greater Des Moines, IA',
      sub: 'Contact us to confirm your location',
    },
    { icon: Clock, label: 'Hours', value: 'Mon–Fri: 7am – 6pm', sub: 'Sat: 8am – 2pm' },
  ];

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="border-b py-16 md:py-20" style={{ borderColor: palette.border.default }}>
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <Badge
            className="mb-4 font-semibold uppercase text-sm tracking-wide"
            style={{ color: palette.text.primary, borderColor: palette.border.accent }}
          >
            Contact Us
          </Badge>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: palette.text.inverse }}
          >
            {heading}
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: palette.text.secondary }}>
            {description}
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
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-2 ring-[#D1992B]">
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

              <Card className="ring-2 ring-[#D1992B] mt-2">
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
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#D1992B]" />
                        <span className="text-sm" style={{ color: palette.text.secondary }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Form column — client component */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
