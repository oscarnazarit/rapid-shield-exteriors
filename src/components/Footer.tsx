import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { palette } from '@/lib/tokens/colors';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 text-zinc-400">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] gap-y-10 gap-x-12 md:gap-x-16 lg:gap-x-24">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit group">
              <div className="flex h-10 w-10 items-center justify-center rounded">
                <Image
                  src="/solid-gold-logo.png"
                  alt="Rapid Shield Exteriors Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-base tracking-tight leading-none text-[#494848] dark:text-[#D4D4D4]">
                Rapid Shield
                <span
                  className="block text-xs font-semibold tracking-widest uppercase"
                  style={{ color: palette.text.primary }}
                >
                  Exteriors
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-[#D4D4D4]">
              Professional roofing, siding, and gutter services you can trust. Serving your
              community with quality craftsmanship.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-semibold text-sm mb-4 uppercase tracking-widest"
              style={{ color: palette.text.primary }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: 'Roofing', href: '/services#roofing' },
                { label: 'Siding', href: '/services#siding' },
                { label: 'Gutters', href: '/services#gutters' },
              ].map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors text-[#636363] dark:text-[#D4D4D4] hover:text-[#C79B3A] dark:hover:text-[#C79B3A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-semibold text-sm mb-4 uppercase tracking-widest"
              style={{ color: palette.text.primary }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone
                  className="h-4 w-4 mt-0.5 shrink-0"
                  style={{ color: palette.text.primary }}
                />
                <span className="text-[#494848] dark:text-[#D4D4D4]">(515) 805-0500</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" style={{ color: palette.text.primary }} />
                <span className="text-[#494848] dark:text-[#D4D4D4]">
                  rapidshieldexteriors@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  className="h-4 w-4 mt-0.5 shrink-0"
                  style={{ color: palette.text.primary }}
                />
                <span className="text-[#494848] dark:text-[#D4D4D4]">Des Moines, Iowa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-600 dark:text-[#D4D4D4]">
          <p>© {new Date().getFullYear()} Rapid Shield Exteriors. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#C79B3A] dark:hover:text-[#C79B3A]"
            >
              Privacy Policy
            </Link>
            <p>Licensed &amp; Insured</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
