import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Home,
  Layers,
  Droplets,
  ShieldCheck,
  Star,
  Phone,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Roofing',
    description:
      'Full roof replacements, repairs, and inspections using premium materials built to last through any weather.',
    href: '/services#roofing',
  },
  {
    icon: Layers,
    title: 'Siding',
    description:
      "Enhance your home's curb appeal and insulation with durable vinyl, fiber cement, or wood siding.",
    href: '/services#siding',
  },
  {
    icon: Droplets,
    title: 'Gutters',
    description:
      'Seamless gutter installation, cleaning, and repairs to protect your foundation from water damage.',
    href: '/services#gutters',
  },
];

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '15+', label: 'Years of Experience' },
  { value: '100%', label: 'Licensed & Insured' },
  { value: '5★', label: 'Average Rating' },
];

const reasons = [
  'Free, no-obligation estimates',
  'Licensed and fully insured crew',
  'Premium materials with manufacturer warranties',
  'Transparent pricing — no hidden fees',
  'On-time project completion guarantee',
  'Local company, community reputation',
];

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Homeowner',
    text: "Rapid Shield replaced our entire roof after storm damage. The crew was professional, fast, and left our yard spotless. Couldn't be happier.",
    rating: 5,
  },
  {
    name: 'James T.',
    location: 'Property Manager',
    text: "We've used Rapid Shield for three properties now. Consistently excellent work on gutters and siding. They're our go-to contractor.",
    rating: 5,
  },
  {
    name: 'Linda K.',
    location: 'Homeowner',
    text: 'Fair quote, great communication, and beautiful new siding. The house looks brand new. I highly recommend them to anyone.',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-yellow-500/40" />

        <div className="relative container mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <Badge className="mb-5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/10 font-medium tracking-wide uppercase text-xs">
              Licensed &amp; Insured Contractors
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Protect Your Home.
              <br />
              <span className="text-yellow-400">Trust the Shield.</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Expert roofing, siding, and gutter services delivered with precision and care. We
              stand behind every job we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors text-base"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-900 hover:text-white text-base"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-yellow-500 py-8">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-black">{stat.value}</div>
                <div className="text-yellow-900 font-medium text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/10 font-medium uppercase text-xs tracking-wide">
              What We Do
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Services</h2>
            <p className="text-zinc-400 mt-3 max-w-xl mx-auto">
              From roof to foundation, we keep the exterior of your home in peak condition
              year-round.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="bg-zinc-900 border-zinc-800 hover:border-yellow-500/40 transition-colors group"
                >
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10 border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors">
                      <Icon className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
                    </div>
                    <Link
                      href={service.href}
                      className="text-yellow-400 text-sm font-medium hover:text-yellow-300 flex items-center gap-1 mt-auto transition-colors"
                    >
                      Learn more <ArrowRight className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 md:py-24 border-t border-zinc-900">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/10 font-medium uppercase text-xs tracking-wide">
                Why Rapid Shield
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The standard for exterior work in the area
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                We&apos;ve built our reputation one rooftop at a time. Every project gets the same
                focus, care, and expertise — whether it&apos;s a small repair or a full exterior
                renovation.
              </p>
              <Button
                asChild
                className="bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors"
              >
                <Link href="/contact">Schedule a Free Estimate</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-3 bg-zinc-950 border border-zinc-800 rounded-lg p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm leading-snug">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24 border-t border-zinc-900">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/10 font-medium uppercase text-xs tracking-wide">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What our customers say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-auto pt-2 border-t border-zinc-800">
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-zinc-500 text-xs">{t.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-yellow-500 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 text-center">
          <ShieldCheck className="h-10 w-10 text-black mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Ready to get started?</h2>
          <p className="text-yellow-900 text-lg mb-8 max-w-xl mx-auto">
            Contact us today for a free, no-obligation quote. We&apos;ll come to you and walk
            through every detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-zinc-900 font-bold text-base"
            >
              <Link href="/contact">
                Request a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-black text-black bg-transparent hover:bg-yellow-400 font-bold text-base"
            >
              <a href="tel:5158050500">
                <Phone className="mr-2 h-4 w-4" />
                (515) 805-0500
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
