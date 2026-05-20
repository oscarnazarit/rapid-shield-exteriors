'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

declare global {
  interface Window {
    FB?: {
      init: (params: object) => void;
      XFBML: { parse: () => void };
    };
    fbAsyncInit?: () => void;
  }
}

const FACEBOOK_PAGE_URL =
  'https://www.facebook.com/people/Rapid-Shield-Exteriors-LLC/61577167798202/';

export default function OurWorkPage() {
  const fbRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
      return;
    }

    window.fbAsyncInit = function () {
      window.FB?.init({
        xfbml: true,
        version: 'v19.0',
      });
    };

    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section
        className="border-b py-16 md:py-20"
        style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--bg-secondary)' }}
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <Badge
            className="mb-4 border font-medium uppercase text-xs tracking-wide"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--accent) 10%, transparent)',
              color: 'var(--accent)',
              borderColor: 'color-mix(in srgb, var(--accent) 30%, transparent)',
            }}
          >
            Our Work
          </Badge>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            See It for Yourself
          </h1>
          <p
            className="text-lg max-w-xl leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Browse our latest roofing, siding, and gutter projects straight from our Facebook page.
          </p>
        </div>
      </section>

      {/* Facebook feed */}
      <section className="py-16 md:py-20 flex-1" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div ref={fbRootRef} id="fb-root" />

          <div className="flex flex-col items-center gap-6">
            {/* Facebook Page Plugin */}
            <div
              className="fb-page w-full overflow-hidden rounded-lg"
              data-href={FACEBOOK_PAGE_URL}
              data-tabs="timeline"
              data-width="800"
              data-height="800"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            />

            <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>
              Posts not loading?{' '}
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-80 transition-opacity"
                style={{ color: 'var(--accent)' }}
              >
                View our Facebook page directly
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-20 border-t"
        style={{
          backgroundColor: 'var(--accent)',
          borderColor: 'color-mix(in srgb, var(--accent) 60%, #000)',
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Like what you see?</h2>
          <p className="text-yellow-900 text-lg mb-8 max-w-lg mx-auto">
            Get in touch today for a free estimate on your project.
          </p>
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
        </div>
      </section>
    </div>
  );
}
