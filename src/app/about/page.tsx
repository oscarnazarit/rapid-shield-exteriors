import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Clock, Star } from 'lucide-react';
import { palette } from '@/lib/tokens/colors';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Rapid Shield Exteriors — our story, our crew, and our commitment to quality exterior work in the Des Moines area.',
};

const values = [
  {
    icon: ShieldCheck,
    title: 'Quality First',
    description: 'We use premium materials and proven techniques on every job, no matter the size.',
  },
  {
    icon: Users,
    title: 'Local & Trusted',
    description:
      'We live and work in this community. Our reputation is built one neighbor at a time.',
  },
  {
    icon: Clock,
    title: 'On Time, Every Time',
    description:
      'We respect your schedule. Jobs start when we say they will and finish when we commit.',
  },
  {
    icon: Star,
    title: 'Honest Pricing',
    description: 'No surprises on your bill. We quote accurately and stick to it.',
  },
];

const stats = [
  { value: '500+', label: 'Projects completed' },
  { value: '15+', label: 'Years of experience' },
  { value: '100%', label: 'Licensed & insured' },
  { value: '5★', label: 'Average rating' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="border-b py-16 md:py-20" style={{ borderColor: palette.border.default }}>
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <Badge
            className="mb-4 font-medium uppercase text-xs tracking-wide"
            style={{ color: palette.text.primary, borderColor: palette.border.accent }}
          >
            About Us
          </Badge>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: palette.text.inverse }}
          >
            Built on Reputation.
            <br />
            <span style={{ color: palette.text.primary }}>Driven by Craft.</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: palette.text.secondary }}>
            Rapid Shield Exteriors is a family-owned exterior contracting company serving the
            Greater Des Moines area. We take pride in treating every home like our own.
          </p>
        </div>
      </section>

      {/* Story section — image + bio */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div
                className="relative overflow-hidden rounded-2xl border"
                style={{ borderColor: palette.border.default, aspectRatio: '4/5' }}
              >
                <Image
                  src="/about_pic.JPEG"
                  alt="Owner of Rapid Shield Exteriors"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: palette.text.primary }}
                >
                  Our Story
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                  style={{ color: palette.text.inverse }}
                >
                  Alexis Landeros - Owner & Lead Contractor
                </h2>
              </div>

              <div
                className="flex flex-col gap-4 text-base leading-relaxed"
                style={{ color: palette.text.secondary }}
              >
                {/* Replace these paragraphs with the client's actual background */}
                <p>
                  [Placeholder — share how you got into the roofing/exterior business. Where did you
                  grow up? Did you learn the trade from a family member or start from scratch? How
                  many years have you been doing this?]
                </p>
                <p>
                  [Placeholder — why did you start Rapid Shield Exteriors? What makes your approach
                  different from larger companies? What do you care most about when working on
                  someone&apos;s home?]
                </p>
                <p>
                  [Placeholder — something personal: family, community ties to Des Moines, what you
                  do outside of work. This helps homeowners feel they know who they&apos;re hiring.]
                </p>
              </div>

              <ul className="flex flex-col gap-2.5 mt-2">
                {[
                  /* Update these bullets with real credentials / milestones */
                  'Licensed & fully insured in the state of Iowa',
                  'Over [X] years in the exterior contracting industry',
                  'Based in [City], serving the Greater Des Moines area',
                  'Certified installer for [Brand/Manufacturer — e.g. GAF, CertainTeed]',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: palette.text.secondary }}
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#D1992B]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="bg-[#D1992B] hover:bg-[#B67D0E] text-black font-bold text-base"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        className="py-10 border-y"
        style={{ borderColor: palette.border.default, backgroundColor: palette.background.primary }}
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold mb-1" style={{ color: palette.text.inverse }}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium" style={{ color: palette.text.secondary }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge
              className="mb-4 font-medium uppercase text-xs tracking-wide"
              style={{ color: palette.text.primary, borderColor: palette.border.accent }}
            >
              What We Stand For
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: palette.text.inverse }}>
              The way we work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border p-6"
                style={{ borderColor: palette.border.default }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D1992B]">
                  <Icon className="h-5 w-5" style={{ color: palette.text.primary }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: palette.text.inverse }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: palette.text.secondary }}>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6 py-6 md:py-8">
        <div className="container mx-auto">
          <div
            className="mx-auto max-w-3xl rounded-2xl py-8 md:py-10 px-5 md:px-8 text-center"
            style={{ backgroundColor: palette.background.primary }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: palette.text.inverse }}
            >
              Ready to work together?
            </h2>
            <p className="text-lg mb-5 max-w-lg mx-auto" style={{ color: palette.text.secondary }}>
              Reach out today for a free, no-pressure estimate. We&apos;d love to earn your trust.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#D1992B] hover:bg-[#B67D0E] text-black font-bold text-base"
            >
              <Link href="/contact">
                Request a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
