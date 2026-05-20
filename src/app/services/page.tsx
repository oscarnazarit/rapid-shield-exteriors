import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Home,
  Layers,
  Droplets,
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

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="border-b border-zinc-800 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <Badge className="mb-4 bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/10 font-medium uppercase text-xs tracking-wide">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Comprehensive exterior services performed by experienced, licensed professionals. Every
            project, every time.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <section
            key={service.id}
            id={service.id}
            className={
              `py-20 md:py-24 border-t border-zinc-900`
              // 	${
              //   isEven ? "bg-zinc-950" : "bg-black"
              // }`
            }
          >
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
              {/* Header */}
              <div className="flex items-start gap-4 mb-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <Icon className="h-7 w-7 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
                  <p className="text-yellow-400 font-medium mt-1">{service.tagline}</p>
                </div>
              </div>

              {/* Body */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <p className="text-zinc-400 leading-relaxed mb-8">{service.description}</p>

                  {/* Sub-services */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                    {service.subServices.map((sub) => {
                      const SubIcon = sub.icon;
                      return (
                        <div
                          key={sub.label}
                          className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center"
                        >
                          <SubIcon className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
                          <p className="text-white font-semibold text-sm">{sub.label}</p>
                          <p className="text-zinc-500 text-xs mt-1">{sub.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  <Button
                    asChild
                    className="bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors"
                  >
                    <Link href="/contact">
                      Get a {service.title} Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Checklist */}
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <h3 className="text-white font-semibold mb-5 text-base">
                      What&apos;s included
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {service.offerings.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                          <span className="text-zinc-300 text-sm leading-snug">{item}</span>
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

      {/* Bottom CTA */}
      <section className="bg-yellow-500 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Not sure what you need?
          </h2>
          <p className="text-yellow-900 text-lg mb-8 max-w-lg mx-auto">
            We&apos;ll assess your home and recommend the best solution — at no cost and with zero
            pressure.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-zinc-900 font-bold text-base"
          >
            <Link href="/contact">
              Schedule a Free Inspection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
