import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { palette } from '@/lib/tokens/colors';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Snowflake,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Truck,
  House,
  Building2,
  Sparkles,
  Wrench,
  CalendarDays,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seasonal Services',
  description:
    'Seasonal services from Rapid Shield Exteriors including snow removal for driveways, sidewalks, parking lots, and festive holiday lighting installation.',
};

type SeasonalSubService = {
  key: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  fallbackLabel: string;
  fallbackDesc: string;
};

const seasonalServices = [
  {
    id: 'snow-removal',
    settingsPrefix: 'seasonalSnow',
    icon: Snowflake,
    fallbackTitle: 'Snow Removal',
    fallbackTagline: 'Fast, reliable clearing so your property stays safe and accessible.',
    fallbackDescription:
      'When winter weather hits, we keep your property clear and usable. Our crew provides prompt snow removal and ice management for homes and businesses so you can avoid slips, delays, and property damage.',
    fallbackOfferings: [
      'Driveway snow clearing',
      'Sidewalk and walkway shoveling',
      'Parking lot plowing and cleanup',
      'Ice melt and de-icing treatment',
      'Storm-response scheduling',
    ],
    subServices: [
      {
        key: 'driveways',
        icon: House,
        fallbackLabel: 'Driveways',
        fallbackDesc: 'Clean, safe residential driveway clearing',
      },
      {
        key: 'sidewalks',
        icon: Truck,
        fallbackLabel: 'Sidewalks',
        fallbackDesc: 'Walkway and entry shoveling service',
      },
      {
        key: 'parkingLots',
        icon: Building2,
        fallbackLabel: 'Parking Lots',
        fallbackDesc: 'Commercial lot plowing and cleanup',
      },
    ],
  },
  {
    id: 'festive-lighting',
    settingsPrefix: 'seasonalLighting',
    icon: Lightbulb,
    fallbackTitle: 'Festive Holiday Lighting',
    fallbackTagline: 'Custom holiday displays without the hassle.',
    fallbackDescription:
      'Get a clean, professional holiday lighting setup for your home or business. We handle planning, installation, and takedown so you can enjoy the season without climbing ladders or untangling lights.',
    fallbackOfferings: [
      'Custom roofline and trim lighting',
      'Entryway, porch, and accent lighting',
      'Commercial storefront displays',
      'Mid-season maintenance and bulb replacement',
      'Post-season takedown and organized storage',
    ],
    subServices: [
      {
        key: 'design',
        icon: Sparkles,
        fallbackLabel: 'Design',
        fallbackDesc: 'Layout planning tailored to your property',
      },
      {
        key: 'install',
        icon: Wrench,
        fallbackLabel: 'Install',
        fallbackDesc: 'Secure, professional seasonal installation',
      },
      {
        key: 'takedown',
        icon: CalendarDays,
        fallbackLabel: 'Takedown',
        fallbackDesc: 'Removal and pack-up at season end',
      },
    ] as SeasonalSubService[],
  },
];

export default async function SeasonalPage() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);

  const parseCsv = (value: string | undefined, fallback: string[]) =>
    value
      ? value
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean)
      : fallback;

  const badge = settings?.seasonalBadge ?? 'Seasonal Services';
  const heading = settings?.seasonalHeading ?? 'Seasonal Services';
  const description =
    settings?.seasonalDescription ??
    'From winter snow removal to festive holiday lighting, we keep your property ready for every season.';
  const includedHeading = settings?.seasonalIncludedHeading ?? "What's included";

  const ctaHeading = settings?.seasonalCtaHeading ?? 'Need seasonal help this year?';
  const ctaDescription =
    settings?.seasonalCtaDescription ??
    'Tell us what you need and we&apos;ll build a plan that fits your property and timeline.';
  const ctaButton = settings?.seasonalCtaButton ?? 'Request a Seasonal Quote';
  const showSeasonalCta = settings?.showSeasonalCta ?? true;

  const displayServices = seasonalServices.map((service) => {
    const prefix = service.settingsPrefix;
    return {
      ...service,
      title: (settings?.[`${prefix}Title`] as string | undefined) ?? service.fallbackTitle,
      tagline: (settings?.[`${prefix}Tagline`] as string | undefined) ?? service.fallbackTagline,
      description:
        (settings?.[`${prefix}Description`] as string | undefined) ?? service.fallbackDescription,
      offerings: parseCsv(
        settings?.[`${prefix}Offerings`] as string | undefined,
        service.fallbackOfferings
      ),
      subServices: service.subServices.map((sub) => {
        const keyCap = sub.key.charAt(0).toUpperCase() + sub.key.slice(1);
        return {
          ...sub,
          // Card title stays hardcoded — only the description is editable.
          label: sub.fallbackLabel,
          desc: (settings?.[`${prefix}${keyCap}Desc`] as string | undefined) ?? sub.fallbackDesc,
        };
      }),
    };
  });

  return (
    <div className="flex flex-col">
      <section className="border-b py-16" style={{ borderColor: palette.border.default }}>
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <Badge
            className="mb-4 font-semibold uppercase text-sm tracking-wide"
            style={{ color: palette.text.primary, borderColor: palette.border.accent }}
          >
            {badge}
          </Badge>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: palette.text.inverse }}
          >
            {heading}
          </h1>
          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: palette.text.secondary }}
          >
            {description}
          </p>
        </div>
      </section>

      {displayServices.map((service) => {
        const Icon = service.icon;
        return (
          <section
            key={service.id}
            id={service.id}
            className="py-20 md:py-24 border-t"
            style={{ borderColor: palette.border.default }}
          >
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
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

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-start">
                <div>
                  <p className="leading-relaxed mb-8" style={{ color: palette.text.secondary }}>
                    {service.description}
                  </p>

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

                <Card className="ring-2 ring-[#D1992B]">
                  <CardContent className="p-6">
                    <h3
                      className="font-semibold mb-5 text-base"
                      style={{ color: palette.text.inverse }}
                    >
                      {includedHeading}
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

      {showSeasonalCta && (
        <section className="px-4 md:px-6 py-6">
          <div className="container mx-auto">
            <div
              className="w-fit mx-auto rounded-2xl py-10 md:py-14 px-10 md:px-16 text-center"
              style={{ backgroundColor: palette.background.primary }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#2D2C2C] dark:text-[#D4D4D4]">
                {ctaHeading}
              </h2>
              <p className="text-lg mb-5 max-w-xl mx-auto text-[#2D2C2C] dark:text-[#D4D4D4]">
                {ctaDescription}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#D1992B] hover:bg-[#B67D0E] text-[#2D2C2C] dark:text-[#D4D4D4] font-bold text-base"
              >
                <Link href="/contact">
                  {ctaButton}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
