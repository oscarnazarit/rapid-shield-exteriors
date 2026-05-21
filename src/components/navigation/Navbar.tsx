'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Shield } from 'lucide-react';
import Image from 'next/image';
import { palette } from '@/lib/tokens/colors';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-900/20 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center rounded transition-colors">
            <Image
              src="/solid-gold-logo.png"
              alt="Rapid Shield Exteriors Logo"
              width={64}
              height={64}
              className="object-contain rounded"
            />
          </div>
          <span
            className="font-bold text-lg tracking-tight leading-none"
            style={{ color: palette.text.inverse }}
          >
            Rapid Shield
            <span
              className="block text-xs font-semibold tracking-widest uppercase"
              style={{ color: palette.text.primary }}
            >
              Exteriors
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                pathname === link.href ? 'text-[#D1992B]' : 'text-[#494848] hover:text-[#D1992B]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA button (desktop) */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-[#D1992B] hover:bg-[#B67D0E] text-[#494848] hover:text-[#494848] font-semibold transition-colors"
          >
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden text-white hover:bg-zinc-800 p-2 rounded-md">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="bg-zinc-950 border-zinc-800 w-72">
            <div className="flex flex-col gap-1 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded text-base font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-yellow-400 bg-zinc-900'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Button
                  asChild
                  className="w-full bg-[#F2B43B] hover:bg-[#C79B3A] text-black font-semibold"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
