'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { palette } from '@/lib/tokens/colors';

const photos = ['/pic1.JPEG', '/pic2.JPEG', '/pic3.JPG', '/pic4.JPG', '/pic8.JPEG'];

export default function HomeGallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const clamped = Math.max(0, Math.min(index, photos.length - 1));
    scroller.scrollTo({ left: scroller.clientWidth * clamped, behavior: 'smooth' });
  }, []);

  // Keep the active dot in sync as the user scrolls/swipes
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setActive(Math.round(scroller.scrollLeft / scroller.clientWidth));
      });
    };
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      scroller.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-2xl border [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ borderColor: palette.border.default }}
      >
        {photos.map((src, i) => (
          <div
            key={src}
            className="relative shrink-0 basis-full snap-center"
            style={{ aspectRatio: '16/9' }}
          >
            <Image
              src={src}
              alt={`Rapid Shield project photo ${i + 1}`}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      <button
        type="button"
        aria-label="Previous photo"
        onClick={() => scrollToIndex(active - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-[#D1992B] hover:text-black"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next photo"
        onClick={() => scrollToIndex(active + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-[#D1992B] hover:text-black"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Go to photo ${i + 1}`}
            aria-current={active === i}
            onClick={() => scrollToIndex(i)}
            className="h-2.5 rounded-full transition-all"
            style={{
              width: active === i ? '1.5rem' : '0.625rem',
              backgroundColor: active === i ? palette.action.primary : palette.border.default,
            }}
          />
        ))}
      </div>
    </div>
  );
}
