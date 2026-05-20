import Link from 'next/link';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 text-zinc-400">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit group">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-yellow-500">
                <Shield className="h-4 w-4 text-black" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold text-base tracking-tight leading-none">
                Rapid Shield
                <span className="block text-yellow-500 text-xs font-semibold tracking-widest uppercase">
                  Exteriors
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500">
              Professional roofing, siding, and gutter services you can trust. Serving your
              community with quality craftsmanship.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Contact', href: '/contact' },
                { label: 'Get a Free Quote', href: '/contact' },
              ].map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                <span>(515) 805-0500</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                <span>rapidshieldexteriors@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                <span>Des Moines, Iowa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Rapid Shield Exteriors. All rights reserved.</p>
          <p>Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
}
