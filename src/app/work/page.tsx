import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { palette } from '@/lib/tokens/colors';
import { client } from '@/sanity/lib/client';
import WorkContent from './WorkContent';

export default async function OurWorkPage() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);

  const heading = settings?.workHeading ?? 'See It for Yourself';
  const description =
    settings?.workDescription ??
    'Real projects, real results. Browse our latest roofing, siding, and gutter work from the field or follow us on Facebook.';

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="border-b py-16 md:py-20" style={{ borderColor: palette.border.default }}>
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <Badge
            className="mb-4 font-semibold uppercase text-sm tracking-wide"
            style={{ color: palette.text.primary, borderColor: palette.border.accent }}
          >
            Our Work
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

      {/* Interactive tabs (photos + Facebook) */}
      <WorkContent />

      {/* CTA */}
      <section className="px-4 md:px-6 py-6 md:py-8">
        <div className="container mx-auto">
          <div
            className="mx-auto max-w-3xl rounded-2xl py-8 md:py-10 px-5 md:px-8 text-center"
            style={{ backgroundColor: palette.background.primary }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-[#D1992B] text-[#2D2C2C] dark:text-[#D4D4D4]">
              Like what you see?
            </h2>
            <p className="text-lg mb-5 max-w-lg mx-auto bg-[#D1992B] text-[#2D2C2C] dark:text-[#D4D4D4]">
              Get in touch today for a free estimate on your project.
            </p>
            <Button
              asChild
              size="lg"
              className="font-bold text-base bg-[#D1992B] hover:bg-[#B67D0E] text-[#2D2C2C] dark:text-[#D4D4D4]"
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
