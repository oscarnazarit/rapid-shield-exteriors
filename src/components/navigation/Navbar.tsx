'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Monitor, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import { palette } from '@/lib/tokens/colors';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const activeTheme = isHydrated ? (theme ?? 'system') : 'system';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-900/20 bg-white dark:bg-black">
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
                pathname === link.href
                  ? 'text-[#D1992B]'
                  : 'text-[#494848] dark:text-[#D4D4D4] hover:text-[#D1992B] dark:hover:text-[#D1992B]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + theme toggle (desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center rounded-md border border-[#B4B4B4] p-0.5">
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => setTheme('light')}
              aria-label="Use light mode"
              className={`h-7 w-7 ${
                activeTheme === 'light'
                  ? 'bg-[#D1992B]/15 text-[#D1992B]'
                  : 'hover:bg-[#D1992B]/10 hover:text-[#D1992B]'
              }`}
            >
              <Sun className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => setTheme('dark')}
              aria-label="Use dark mode"
              className={`h-7 w-7 ${
                activeTheme === 'dark'
                  ? 'bg-[#D1992B]/15 text-[#D1992B]'
                  : 'hover:bg-[#D1992B]/10 hover:text-[#D1992B]'
              }`}
            >
              <Moon className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => setTheme('system')}
              aria-label="Use system theme"
              className={`h-7 w-7 ${
                activeTheme === 'system'
                  ? 'bg-[#D1992B]/15 text-[#D1992B]'
                  : 'hover:bg-[#D1992B]/10 hover:text-[#D1992B]'
              }`}
            >
              <Monitor className="h-4 w-4" />
            </Button>
          </div>
          <Button
            asChild
            className="bg-[#D1992B] hover:bg-[#B67D0E] text-black dark:text-[#D4D4D4] hover:text-black dark:hover:text-[#D4D4D4] font-semibold transition-colors"
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
              <div className="mx-4 mb-3 grid grid-cols-3 gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setTheme('light')}
                  className={`border-[#B4B4B4] text-[#D4D4D4] hover:bg-[#D1992B]/10 hover:text-[#D1992B] ${
                    activeTheme === 'light' ? 'bg-[#D1992B]/15 text-[#D1992B]' : ''
                  }`}
                >
                  <Sun className="h-4 w-4 mr-1" />
                  Light
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setTheme('dark')}
                  className={`border-[#B4B4B4] text-[#D4D4D4] hover:bg-[#D1992B]/10 hover:text-[#D1992B] ${
                    activeTheme === 'dark' ? 'bg-[#D1992B]/15 text-[#D1992B]' : ''
                  }`}
                >
                  <Moon className="h-4 w-4 mr-1" />
                  Dark
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setTheme('system')}
                  className={`border-[#B4B4B4] text-[#D4D4D4] hover:bg-[#D1992B]/10 hover:text-[#D1992B] ${
                    activeTheme === 'system' ? 'bg-[#D1992B]/15 text-[#D1992B]' : ''
                  }`}
                >
                  <Monitor className="h-4 w-4 mr-1" />
                  System
                </Button>
              </div>
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
                  className="w-full bg-[#F2B43B] hover:bg-[#B67D0E] text-black dark:text-[#D4D4D4] hover:text-black dark:hover:text-[#D4D4D4] font-semibold"
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
