import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { palette } from '@/lib/tokens/colors';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Home,
  Layers,
  Droplets,
  Snowflake,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Wrench,
  Search,
  RefreshCcw,
} from 'lucide-react';

const services = [
  {
    id: 'roofing',
    icon: Home,
    title: 'Roofing',
    tagline: 'Built to withstand anything the sky throws at you.',
    description:
      "Your roof is your home's first line of defense. We specialize in complete roof replacements, precision repairs, and detailed inspections using materials rated for durability and longevity. Whether you're dealing with storm damage, an aging roof, or just want a fresh look, our team delivers exceptional results every time.",
    offerings: [
      'Full roof replacement (asphalt, metal, architectural shingles)',
      'Storm & hail damage repair',
      'Roof leak detection and patching',
      'Flashing repair and replacement',
      'Chimney flashing and sealing',
      'Free roof inspections',
    ],
    subServices: [
      { icon: RefreshCcw, label: 'Replacement', desc: 'Tear-off and full new roof installation' },
      { icon: Wrench, label: 'Repair', desc: 'Targeted fixes for any damage' },
      { icon: Search, label: 'Inspection', desc: 'Detailed assessment and report' },
    ],
  },
  {
    id: 'siding',
    icon: Layers,
    title: 'Siding',
    tagline: 'Protect your home. Elevate its appearance.',
    description:
      'New siding is one of the highest-return home improvements you can make — both for curb appeal and energy efficiency. We install, repair, and replace a full range of siding materials. Our team ensures a tight, professional installation that keeps moisture out and your heating and cooling bills low.',
    offerings: [
      'Vinyl siding installation and replacement',
      'Fiber cement (HardiePlank) siding',
      'Wood and engineered wood siding',
      'Siding repair and patching',
      'Moisture barrier and house wrap installation',
      'Trim and soffit work',
    ],
    subServices: [
      { icon: RefreshCcw, label: 'Replacement', desc: 'Full exterior re-siding' },
      { icon: Wrench, label: 'Repair', desc: 'Panel replacement and patching' },
      { icon: Layers, label: 'Trim & Detail', desc: 'Soffit, fascia, and corner work' },
    ],
  },
  {
    id: 'gutters',
    icon: Droplets,
    title: 'Gutters',
    tagline: 'Keep water where it belongs — away from your home.',
    description:
      "Gutters are a small but critical part of your home's water management system. Clogged, sagging, or leaking gutters can cause serious foundation and landscaping damage. We install seamless gutter systems custom-cut to your home, and offer full cleaning and maintenance services to keep things flowing.",
    offerings: [
      'Seamless aluminum gutter installation',
      'K-style and half-round gutter options',
      'Gutter guard / leaf guard installation',
      'Gutter cleaning and flushing',
      'Downspout repair and rerouting',
      'Fascia board repair',
    ],
    subServices: [
      { icon: RefreshCcw, label: 'Installation', desc: 'Custom seamless systems' },
      { icon: Wrench, label: 'Repair', desc: 'Sealing, re-hanging, and realigning' },
      { icon: Search, label: 'Cleaning', desc: 'Full flush and debris removal' },
    ],
  },
];

const seasonalHighlights = [
  {
    icon: Snowflake,
    title: 'Snow Removal',
    description: 'Driveways, sidewalks, and parking lots cleared quickly and safely.',
  },
  {
    icon: Lightbulb,
    title: 'Holiday Lighting',
    description: 'Professional festive lighting setup and takedown for the holiday season.',
  },
];

export default async function ServicesPage() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);

  const heading = settings?.servicesHeading ?? 'What We Do';
  const description =
    settings?.servicesDescription ??
    'Comprehensive exterior services performed by experienced, licensed professionals. Every project, every time.';

  // Parse a comma-separated Sanity string into a trimmed string array
  const parseOfferings = (csv: string | undefined, fallback: string[]) =>
    csv
      ? csv
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean)
      : fallback;

  // Merge Sanity-editable fields into each hardcoded service
  const displayServices = services.map((s) => ({
    ...s,
    tagline: (settings?.[`${s.id}Tagline`] as string | undefined) ?? s.tagline,
    description: (settings?.[`${s.id}Description`] as string | undefined) ?? s.description,
    offerings: parseOfferings(settings?.[`${s.id}Offerings`] as string | undefined, s.offerings),
  }));

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="border-b py-16" style={{ borderColor: palette.border.default }}>
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <Badge
            className="mb-4 font-semibold uppercase text-sm tracking-wide"
            style={{ color: palette.text.primary, borderColor: palette.border.accent }}
          >
            Our Services
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

      {/* Service sections */}
      {displayServices.map((service) => {
        const Icon = service.icon;
        return (
          <section
            key={service.id}
            id={service.id}
            className="py-20 md:py-24 border-t border-[#B4B4B4]"
          >
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
              {/* Header */}
              <div className="flex items-start gap-4 mb-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ring-2 ring-[#D1992B]">
                  <Icon className="h-7 w-7" style={{ color: palette.text.primary }} />
                </div>
                <div>
                  <h2
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: palette.text.inverse }}
                  >
                    {service.title}
                  </h2>
                  <p className="font-medium mt-1" style={{ color: palette.text.primary }}>
                    {service.tagline}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-start">
                <div>
                  <p className="leading-relaxed mb-8" style={{ color: palette.text.secondary }}>
                    {service.description}
                  </p>

                  {/* Sub-services */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                    {service.subServices.map((sub) => {
                      const SubIcon = sub.icon;
                      return (
                        <div
                          key={sub.label}
                          className="ring-2 ring-[#D1992B] rounded-lg p-4 text-center hover:bg-[#FAC857]/10"
                        >
                          <SubIcon
                            className="h-5 w-5 mx-auto mb-2"
                            style={{ color: palette.text.primary }}
                          />
                          <p
                            className="font-semibold text-sm"
                            style={{ color: palette.text.inverse }}
                          >
                            {sub.label}
                          </p>
                          <p className="text-xs mt-1" style={{ color: palette.text.secondary }}>
                            {sub.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <Button
                    asChild
                    className="bg-[#D1992B] hover:bg-[#B67D0E] text-[#2D2C2C] dark:text-[#D4D4D4] hover:text-[#2D2C2C] dark:hover:text-[#D4D4D4] font-bold transition-colors"
                  >
                    <Link href="/contact">
                      Get a {service.title} Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Checklist */}
                <Card className="ring-2 ring-[#D1992B]">
                  <CardContent className="p-6">
                    <h3
                      className="font-semibold mb-5 text-base"
                      style={{ color: palette.text.inverse }}
                    >
                      What&apos;s included
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {service.offerings.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-[#D1992B]" />
                          <span
                            className="text-sm leading-snug"
                            style={{ color: palette.text.inverse }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        );
      })}

      {/* Seasonal services */}
      <section className="py-16 border-t" style={{ borderColor: palette.border.default }}>
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-10">
            <Badge
              className="mb-4 font-semibold uppercase text-sm tracking-wide"
              style={{ color: palette.text.primary, borderColor: palette.border.accent }}
            >
              Seasonal
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: palette.text.inverse }}>
              Seasonal Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {seasonalHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="ring-2 ring-[#D1992B] hover:bg-[#FAC857]/10">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-2 ring-[#D1992B]">
                      <Icon className="h-5 w-5" style={{ color: palette.text.primary }} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: palette.text.inverse }}>
                        {item.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: palette.text.secondary }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-[#D1992B] hover:bg-[#B67D0E] text-[#2D2C2C] dark:text-[#D4D4D4] hover:text-[#2D2C2C] dark:hover:text-[#D4D4D4] font-bold transition-colors"
            >
              <Link href="/seasonal">
                View Seasonal Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* "Don't see what you need?" note */}
      <section className="py-6">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-medium text-center" style={{ color: palette.text.secondary }}>
            Don&apos;t see what you&apos;re looking for?{' '}
            <Link
              href="/contact"
              className="underline underline-offset-4 font-medium hover:opacity-75 transition-opacity"
              style={{ color: palette.text.primary }}
            >
              Reach out
            </Link>{' '}
            <br></br> We handle more than what&apos;s listed here and are happy to talk through your
            project.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 md:px-6 py-6">
        <div className="container mx-auto">
          <div
            className="w-fit mx-auto rounded-2xl py-10 md:py-14 px-10 md:px-16 text-center"
            style={{ backgroundColor: palette.background.primary }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#2D2C2C] dark:text-[#D4D4D4]">
              Not sure what you need?
            </h2>
            <p className="text-lg mb-5 max-w-xl mx-auto text-[#2D2C2C] dark:text-[#D4D4D4]">
              We&apos;ll assess your home and recommend the best solution — at no cost and with zero
              pressure.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#D1992B] hover:bg-[#B67D0E] text-[#2D2C2C] dark:text-[#D4D4D4] font-bold text-base"
            >
              <Link href="/contact">
                Schedule a Free Inspection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
