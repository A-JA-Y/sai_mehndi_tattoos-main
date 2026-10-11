import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Providers from "@/components/Providers";
import { site } from "@/lib/data";
import SeoJsonLd from "@/components/SeoJsonLd";
import { absoluteUrl, localBusinessSchema, seoKeywords, siteUrl, websiteSchema } from "@/lib/seo";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Bridal Mehandi & Tattoo Artist in New Delhi`,
    template: `%s — ${site.name}`,
  },
  description:
    "Award-winning bridal, party & Arabic mehandi, tattoo art, nail art and professional classes by Dev Kumar — 18 years of artistry in West Patel Nagar, New Delhi.",
  keywords: seoKeywords,
  alternates: { canonical: "/" },
  authors: [{ name: site.artist }],
  creator: site.artist,
  publisher: site.name,
  category: "Beauty and personal services",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — Bridal Mehandi & Tattoo Artist in New Delhi`,
    description:
      "Bridal mehndi, party and Arabic mehandi, tattoos, nail art and professional classes in West Patel Nagar, New Delhi.",
    images: [{ url: absoluteUrl("/images/artist.jpg"), alt: `${site.artist}, founder and artist` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Bridal Mehandi & Tattoo Artist in New Delhi`,
    description:
      "Bridal mehndi, party and Arabic mehandi, tattoos, nail art and professional classes in New Delhi.",
    images: [absoluteUrl("/images/artist.jpg")],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export const viewport: Viewport = {
  themeColor: "#D85631",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <Providers>
          <SeoJsonLd data={[localBusinessSchema, websiteSchema]} />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
          <div aria-hidden className="grain" />
        </Providers>
      </body>
    </html>
  );
}
