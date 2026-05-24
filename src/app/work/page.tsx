'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const FACEBOOK_PAGE_URL = 'https://www.facebook.com/Rapid-Shield-Exteriors-LLC';

const IFRAME_WIDTH = 500;
const IFRAME_HEIGHT = 700;

const FacebookIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function OurWorkPage() {
  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section
        className="border-b py-16 md:py-20"
        style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}
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
            Real projects, real results. Browse our latest roofing, siding, and gutter work straight
            from our Facebook page.
          </p>
        </div>
      </section>

      {/* Facebook feed */}
      <section className="py-16 md:py-20 flex-1" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Left sidebar */}
            <div className="flex flex-col gap-6">
              <div
                className="rounded-xl border p-6 flex flex-col gap-4"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border)',
                }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 15%, transparent)' }}
                >
                  <FacebookIcon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3
                    className="font-semibold text-base mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Follow Along
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    We post project photos, before & afters, and updates regularly on our Facebook
                    page.
                  </p>
                </div>
                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-75"
                  style={{ color: 'var(--accent)' }}
                >
                  Visit our page <ArrowRight className="h-3 w-3" />
                </a>
              </div>

              <div
                className="rounded-xl border p-6 flex flex-col gap-3"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border)',
                }}
              >
                <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                  What we post
                </h3>
                <ul className="flex flex-col gap-2">
                  {[
                    'Before & after photos',
                    'Completed roof replacements',
                    'Siding & gutter installs',
                    'Storm damage repairs',
                    'Customer shoutouts',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: 'var(--accent)' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-xl border p-6"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border)',
                }}
              >
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Seen enough? Get a free quote on your project today.
                </p>
                <Button
                  asChild
                  className="w-full font-bold"
                  style={{ backgroundColor: 'var(--accent)', color: '#000' }}
                >
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </div>

            {/* Facebook embed */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: 'var(--border)', maxWidth: '500px', width: '100%' }}
              >
                <div
                  className="flex items-center gap-3 px-5 py-3 border-b"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <FacebookIcon className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    Rapid Shield Exteriors LLC
                  </span>
                  <a
                    href={FACEBOOK_PAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs hover:opacity-75 transition-opacity"
                    style={{ color: 'var(--accent)' }}
                  >
                    Open in Facebook ↗
                  </a>
                </div>
                <FacebookEmbed />
              </div>

              <p className="text-xs text-center" style={{ color: 'var(--text-secondary)' }}>
                Feed not loading?{' '}
                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--accent)' }}
                >
                  View directly on Facebook
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--accent)' }}>
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

function FacebookEmbed() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current || !iframeRef.current) return;
      const containerWidth = wrapperRef.current.offsetWidth;
      const scale = Math.min(1, containerWidth / IFRAME_WIDTH);
      iframeRef.current.style.transform = `scale(${scale})`;
      wrapperRef.current.style.height = `${IFRAME_HEIGHT * scale}px`;
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div ref={wrapperRef} style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
      <iframe
        ref={iframeRef}
        src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRapidShieldExteriors&tabs=timeline&width=${IFRAME_WIDTH}&height=${IFRAME_HEIGHT}&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true`}
        width={IFRAME_WIDTH}
        height={IFRAME_HEIGHT}
        style={{
          border: 'none',
          overflow: 'hidden',
          display: 'block',
          width: `${IFRAME_WIDTH}px`,
          transformOrigin: 'top left',
        }}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
}
