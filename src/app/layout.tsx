import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Rapid Shield Exteriors | Roofing, Siding & Gutters",
    template: "%s | Rapid Shield Exteriors",
  },
  description:
    "Professional roofing, siding, and gutter services. Licensed, insured, and trusted by hundreds of homeowners. Get a free quote today.",
  keywords: ["roofing", "siding", "gutters", "exterior contractor", "Rapid Shield Exteriors"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}