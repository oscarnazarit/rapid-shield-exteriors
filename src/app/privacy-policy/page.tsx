import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { palette } from '@/lib/tokens/colors';
import { client } from '@/sanity/lib/client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Rapid Shield Exteriors collects, uses, and protects the information you share through our website and contact form.',
};

// Update this when the policy text changes
const LAST_UPDATED = 'June 3, 2026';

export default async function PrivacyPolicyPage() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);

  const businessName = settings?.businessName ?? 'Rapid Shield Exteriors';
  const phone = settings?.phone ?? '(515) 805-0500';
  const phoneHref = `tel:${(settings?.phone ?? '5158050500').replace(/\D/g, '')}`;
  const email = settings?.email ?? 'rapidshieldexteriors@gmail.com';
  const address = settings?.address ?? 'Des Moines, Iowa';

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="border-b py-16 md:py-20" style={{ borderColor: palette.border.default }}>
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <Badge
            className="mb-4 font-medium uppercase text-xs tracking-wide"
            style={{ color: palette.text.primary, borderColor: palette.border.accent }}
          >
            Legal
          </Badge>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: palette.text.inverse }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: palette.text.secondary }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Policy body */}
      <section className="py-12 md:py-16">
        <div
          className="container mx-auto max-w-3xl px-4 md:px-6 flex flex-col gap-10 leading-relaxed"
          style={{ color: palette.text.secondary }}
        >
          <p>
            {businessName} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
            privacy. This Privacy Policy explains what information we collect when you use our
            website, how we use it, and the choices you have. By using our website or submitting our
            contact form, you agree to the practices described below.
          </p>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold" style={{ color: palette.text.inverse }}>
              Information We Collect
            </h2>
            <p>
              We only collect the information you choose to give us. When you fill out our contact
              or quote-request form, we collect:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number (optional)</li>
              <li>The service you&apos;re interested in (optional)</li>
              <li>Any details you include in your message</li>
              <li>Any photos you choose to attach to your request (optional)</li>
            </ul>
            <p>
              We do not use cookies, analytics, or advertising trackers on this website, and we do
              not collect information about you in the background.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold" style={{ color: palette.text.inverse }}>
              How We Use Your Information
            </h2>
            <p>We use the information you provide solely to:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Respond to your inquiry and answer your questions</li>
              <li>Prepare and provide a quote or estimate</li>
              <li>Schedule inspections, appointments, or project work</li>
              <li>Follow up about your request or completed work</li>
            </ul>
            <p>
              We do not use your information for marketing to people who have not contacted us, and
              we will not send you promotional messages you did not ask for.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold" style={{ color: palette.text.inverse }}>
              How We Share Your Information
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to anyone. We only share your
              information with trusted service providers who help us operate our business — for
              example, the email provider that delivers your form submission to us. These providers
              are only permitted to use your information to provide their service to us.
            </p>
            <p>
              We may also disclose information if required to do so by law or to protect our legal
              rights.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold" style={{ color: palette.text.inverse }}>
              Data Security
            </h2>
            <p>
              Information submitted through our website is sent over an encrypted (HTTPS)
              connection, and we limit access to the information you share with us. However, no
              method of transmission or storage is completely secure, so we cannot guarantee
              absolute security.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold" style={{ color: palette.text.inverse }}>
              Your Choices
            </h2>
            <p>You may, at any time:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Ask us what information we have about you</li>
              <li>Ask us to correct or update your information</li>
              <li>Ask us to delete your information</li>
            </ul>
            <p>
              To make any of these requests, contact us using the details below and we&apos;ll
              respond as promptly as we can.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold" style={{ color: palette.text.inverse }}>
              Children&apos;s Privacy
            </h2>
            <p>
              Our website and services are intended for adults 18 and older. We do not knowingly
              collect information from children. If you believe a child has provided us with
              personal information, please contact us and we will delete it.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold" style={{ color: palette.text.inverse }}>
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we&apos;ll revise the
              &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review
              this page periodically.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold" style={{ color: palette.text.inverse }}>
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or your information, please reach
              out:
            </p>
            <ul className="flex flex-col gap-1">
              <li style={{ color: palette.text.inverse }}>{businessName}</li>
              <li>
                Phone:{' '}
                <a href={phoneHref} className="hover:opacity-75 transition-opacity">
                  {phone}
                </a>
              </li>
              <li>
                Email:{' '}
                <a href={`mailto:${email}`} className="hover:opacity-75 transition-opacity">
                  {email}
                </a>
              </li>
              <li>{address}</li>
            </ul>
            <p className="pt-2">
              Or use our{' '}
              <Link
                href="/contact"
                className="underline underline-offset-4 font-medium hover:opacity-75 transition-opacity"
                style={{ color: palette.text.primary }}
              >
                contact form
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
