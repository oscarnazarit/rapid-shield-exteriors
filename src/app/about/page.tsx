import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Clock, Star } from 'lucide-react';
import { palette } from '@/lib/tokens/colors';
import { client } from '@/sanity/lib/client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Rapid Shield Exteriors — our story, our crew, and our commitment to quality exterior work in the Des Moines area.',
};

type Stat = {
  value: string;
  label: string;
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

const fallbackStats = [
  { value: '500+', label: 'Projects completed' },
  { value: '15+', label: 'Years of experience' },
  { value: '100%', label: 'Licensed & insured' },
  { value: '5★', label: 'Average rating' },
];

export default async function AboutPage() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);

  // Stats come from siteSettings (same source as the Home page)
  const stats: { value: string; label: string }[] = settings?.stats?.length
    ? settings.stats
    : fallbackStats;

  // Page header
  const pageHeading = settings?.aboutHeading ?? 'Built on Reputation.';
  const pageHeadingAccent = settings?.aboutHeadingAccent ?? 'Driven by Craft.';
  const pageDescription =
    settings?.aboutDescription ??
    'Rapid Shield Exteriors is a family-owned exterior contracting company serving the Greater Des Moines area. We take pride in treating every home like our own.';

  // Bio paragraphs — now live inside siteSettings
  const bio1 =
    settings?.bio1 ??
    'I got into the exterior contracting business over a decade ago, starting out as a laborer and working my way up to running my own crew. Growing up in Iowa, I saw firsthand how hard winters and severe storms can damage a home — and how much it means to a family to have it properly protected.';
  const bio2 =
    settings?.bio2 ??
    "I started Rapid Shield Exteriors because I wanted to build a company that treated every homeowner the way I'd want to be treated — with honest pricing, clear communication, and quality work that lasts. No high-pressure sales tactics, no shortcuts on materials.";
  const bio3 =
    settings?.bio3 ??
    "Outside of work, I'm a husband and father based in the Des Moines area. I take a lot of pride in this community and the relationships I've built here. When you hire Rapid Shield, you're hiring someone who genuinely cares about the work — and about you.";

  const fallbackBullets = [
    'Licensed & fully insured in the state of Iowa',
    'Over [X] years in the exterior contracting industry',
    'Based in [City], serving the Greater Des Moines area',
    'Certified installer for [Brand/Manufacturer — e.g. GAF, CertainTeed]',
  ];
  const bullets: string[] = settings?.aboutBullets
    ? settings.aboutBullets
        .split(',')
        .map((s: string) => s.trim())
        .filter(Boolean)
    : fallbackBullets;

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="border-b py-16 md:py-20" style={{ borderColor: palette.border.default }}>
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <Badge
            className="mb-4 font-semibold uppercase text-sm tracking-wide"
            style={{ color: palette.text.primary, borderColor: palette.border.accent }}
          >
            About Us
          </Badge>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: palette.text.inverse }}
          >
            {pageHeading}
            <br />
            <span style={{ color: palette.text.primary }}>{pageHeadingAccent}</span>
          </h1>
          <p
            className="text-lg font-medium max-w-xl leading-relaxed"
            style={{ color: palette.text.secondary }}
          >
            {pageDescription}
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
                  className="text-sm font-semibold uppercase tracking-widest mb-2"
                  style={{ color: palette.text.primary }}
                >
                  Our Story
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold leading-tight"
                  style={{ color: palette.text.inverse }}
                >
                  Alexis Landeros
                </h2>
                <h2
                  className="text-2xl md:text-3xl font-semibold leading-tight"
                  style={{ color: palette.text.primary }}
                >
                  Owner & Lead Contractor
                </h2>
              </div>

              <div
                className="flex flex-col gap-4 text-base font-medium leading-relaxed"
                style={{ color: palette.text.secondary }}
              >
                <p>{bio1}</p>
                <p>{bio2}</p>
                <p>{bio3}</p>
              </div>

              <ul className="flex flex-col gap-2.5 mt-2">
                {bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm font-semibold"
                    style={{ color: palette.text.secondary }}
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-[#D1992B]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="bg-[#D1992B] hover:bg-[#B67D0E] text-[#2D2C2C] dark:text-[#D4D4D4] font-bold text-base"
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
      <section className="py-8" style={{ backgroundColor: palette.background.primary }}>
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-[#2D2C2C] dark:text-[#D4D4D4]">
            {fallbackStats.map((stat: Stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-[#2D2C2C] dark:text-[#D4D4D4]">
                  {stat.value}
                </div>
                <div className="font-medium text-sm mt-1 text-[#2D2C2C] dark:text-[#D4D4D4]">
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
              className="mb-4 font-semibold uppercase text-sm tracking-wide"
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
                className="flex gap-4 rounded-xl ring-2 ring-[#D1992B] hover:bg-[#FAC857]/10 p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-2 ring-[#D1992B]">
                  <Icon className="h-5 w-5" style={{ color: palette.text.primary }} />
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: palette.text.primary }}>
                    {title}
                  </h3>
                  <p
                    className="text-sm font-medium leading-relaxed"
                    style={{ color: palette.text.secondary }}
                  >
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
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-[#D1992B] text-[#2D2C2C] dark:text-[#D4D4D4]">
              Ready to work together?
            </h2>
            <p className="text-lg mb-5 max-w-lg mx-auto bg-[#D1992B] text-[#2D2C2C] dark:text-[#D4D4D4]">
              Reach out today for a free, no-pressure estimate. We&apos;d love to earn your trust.
            </p>
            <Button
              asChild
              size="lg"
              className=" font-bont text-base bg-[#D1992B] hover:bg-[#B67D0E] text-[#2D2C2C] dark:text-[#D4D4D4]"
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
