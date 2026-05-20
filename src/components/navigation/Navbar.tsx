"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-900/20 backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-yellow-500 group-hover:bg-yellow-400 transition-colors">
            <Shield className="h-4 w-4 text-black" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-lg tracking-tight leading-none">
            Rapid Shield
            <span className="block text-yellow-500 text-xs font-semibold tracking-widest uppercase">
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
                  ? "text-yellow-400"
                  : "var(--text-default) hover:text-yellow-400"
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
            className="bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors"
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
                      ? "text-yellow-400 bg-zinc-900"
                      : "text-zinc-300 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Button
                  asChild
                  className="w-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400"
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