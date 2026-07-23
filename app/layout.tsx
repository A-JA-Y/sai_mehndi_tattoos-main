import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Providers from "@/components/Providers";
import { site } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Bridal Mehndi & Tattoo Artist in New Delhi`,
    template: `%s — ${site.name}`,
  },
  description:
    "Award-winning bridal, party & Arabic mehndi, tattoo art, nail art and professional classes by Dev Kumar — 18 years of artistry in West Patel Nagar, New Delhi.",
  keywords: [
    "mehndi artist delhi",
    "bridal mehndi",
    "arabic mehndi",
    "tattoo artist delhi",
    "mehndi classes",
    "nail art",
  ],
};

export const viewport: Viewport = {
  themeColor: "#140d08",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <div aria-hidden className="grain" />
        </Providers>
      </body>
    </html>
  );
}
