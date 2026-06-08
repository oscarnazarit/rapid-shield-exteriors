'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Camera } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { palette } from '@/lib/tokens/colors';

const FACEBOOK_PAGE_URL = 'https://www.facebook.com/Rapid-Shield-Exteriors-LLC';

const IFRAME_WIDTH = 500;
const IFRAME_HEIGHT = 700;
const FACEBOOK_ZOOM = 0.82;
const LOAD_TIMEOUT_MS = 8000;

const photos = [
  '/pic1.JPEG',
  '/pic2.JPEG',
  '/pic3.JPG',
  '/pic4.JPG',
  '/pic5.JPEG',
  '/pic6.JPEG',
  '/pic7.JPEG',
  '/pic8.JPEG',
];

type Tab = 'facebook' | 'photos';
type EmbedStatus = 'loading' | 'loaded' | 'failed';

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

export default function WorkContent() {
  const [activeTab, setActiveTab] = useState<Tab>('facebook');
  const [fbStatus, setFbStatus] = useState<EmbedStatus>('loading');

  const handleTabChange = (tab: Tab) => {
    if (tab === 'facebook') setFbStatus('loading');
    setActiveTab(tab);
  };

  const tabs: { id: Tab; label: string; icon?: React.ReactNode }[] = [
    { id: 'facebook', label: 'Facebook', icon: <FacebookIcon className="h-3.5 w-3.5" /> },
    { id: 'photos', label: 'Our Photos' },
  ];

  return (
    <section className="py-16 md:py-20 flex-1">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Tab switcher */}
        <div
          className="flex gap-0 rounded-lg border overflow-hidden w-full mb-10"
          style={{ borderColor: palette.border.accent }}
        >
          {tabs.map((tab, i) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className="flex-1 px-5 py-2.5 text-sm font-semibold transition-all flex items-center justify-center gap-2"
                style={{
                  backgroundColor: isActive ? '#D1992B' : 'transparent',
                  color: isActive ? '#1a1a1a' : palette.text.secondary,
                  borderRight:
                    i < tabs.length - 1 ? `1px solid ${palette.border.accent}` : undefined,
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left sidebar — swaps with active tab */}
          <div className="flex flex-col gap-6">
            {activeTab === 'facebook' ? (
              <div className="rounded-xl ring-2 ring-[#D1992B] p-6 flex flex-col gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg ring-2 ring-[#D1992B]">
                  <FacebookIcon className="h-5 w-5" style={{ color: palette.text.primary }} />
                </div>
                <div>
                  <h3
                    className="font-semibold text-base mb-1"
                    style={{ color: palette.text.inverse }}
                  >
                    Follow Along
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: palette.text.secondary }}>
                    We post project photos, before &amp; afters, and updates regularly on our
                    Facebook page.
                  </p>
                </div>
                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-75"
                  style={{ color: palette.text.primary }}
                >
                  Visit our page <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            ) : (
              <div className="rounded-xl ring-2 ring-[#D1992B] p-6 flex flex-col gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg ring-2 ring-[#D1992B]">
                  <Camera className="h-5 w-5" style={{ color: palette.text.primary }} />
                </div>
                <div>
                  <h3
                    className="font-semibold text-base mb-1"
                    style={{ color: palette.text.inverse }}
                  >
                    From the Field
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: palette.text.secondary }}>
                    Real shots from real jobs — roofing, siding, and gutter work completed by our
                    crew.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-75"
                  style={{ color: palette.text.primary }}
                >
                  Get a free quote <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )}
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Photos tab */}
            {activeTab === 'photos' && (
              <div className="grid grid-cols-2 gap-3">
                {photos.map((src, i) => (
                  <div
                    key={src}
                    className="relative overflow-hidden rounded-xl ring-2 ring-[#D1992B]"
                    style={{ aspectRatio: '4/3' }}
                  >
                    <Image
                      src={src}
                      alt={`Project photo ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Facebook tab */}
            {activeTab === 'facebook' && (
              <div className="flex flex-col gap-4">
                <div
                  className="rounded-xl ring-2 ring-[#D1992B] overflow-hidden"
                  style={{ width: '100%' }}
                >
                  <div
                    className="flex items-center gap-3 px-5 py-3 border-b"
                    style={{ borderColor: palette.border.default }}
                  >
                    <FacebookIcon className="h-4 w-4" style={{ color: palette.text.primary }} />
                    <span className="text-sm font-medium" style={{ color: palette.text.inverse }}>
                      Rapid Shield Exteriors LLC
                    </span>
                    <a
                      href={FACEBOOK_PAGE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-xs hover:opacity-75 transition-opacity"
                      style={{ color: palette.text.primary }}
                    >
                      Open in Facebook ↗
                    </a>
                  </div>
                  <FacebookEmbed onStatusChange={setFbStatus} />
                </div>

                {fbStatus === 'failed' && (
                  <p className="text-xs text-center" style={{ color: palette.text.secondary }}>
                    Feed not loading?{' '}
                    <a
                      href={FACEBOOK_PAGE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:opacity-80 transition-opacity"
                      style={{ color: palette.text.primary }}
                    >
                      View directly on Facebook
                    </a>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FacebookEmbed({ onStatusChange }: { onStatusChange: (s: EmbedStatus) => void }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current || !iframeRef.current) return;
      const containerWidth = wrapperRef.current.offsetWidth;
      const scale = (containerWidth / IFRAME_WIDTH) * FACEBOOK_ZOOM;
      const leftOffset = (containerWidth - IFRAME_WIDTH * scale) / 2;
      iframeRef.current.style.transform = `scale(${scale})`;
      iframeRef.current.style.transformOrigin = 'top left';
      iframeRef.current.style.marginLeft = `${leftOffset}px`;
      wrapperRef.current.style.height = `${IFRAME_HEIGHT * scale}px`;
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => onStatusChange('failed'), LOAD_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [onStatusChange]);

  return (
    <div ref={wrapperRef} style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
      <iframe
        ref={iframeRef}
        src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRapidShieldExteriors&tabs=timeline&width=${IFRAME_WIDTH}&height=${IFRAME_HEIGHT}&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true`}
        width={IFRAME_WIDTH}
        height={IFRAME_HEIGHT}
        onLoad={() => onStatusChange('loaded')}
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
