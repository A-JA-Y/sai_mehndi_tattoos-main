import { site } from "@/lib/data";

export const siteUrl = "https://www.saimehandiandtattoo.com";

export const seoKeywords = [
  "mehndi artist in Delhi",
  "mehandi artist in New Delhi",
  "bridal mehndi Delhi",
  "bridal mehandi West Patel Nagar",
  "Arabic mehndi designs Delhi",
  "party mehndi artist Delhi",
  "tattoo artist in Delhi",
  "nail art Delhi",
  "mehndi classes Delhi",
  "tattoo training Delhi",
  "Sai Mehandi and Tattoo",
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function breadcrumbSchema(items: Array<{ name: string; path?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TattooParlor"],
  "@id": `${siteUrl}/#business`,
  name: site.name,
  image: absoluteUrl("/images/artist.jpg"),
  url: siteUrl,
  telephone: site.phones[0],
  email: site.email,
  description:
    "Bridal and party mehndi, Arabic mehndi, tattoo art, nail art and professional artist training in West Patel Nagar, New Delhi.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 22, Minni Khanna Market, West Patel Nagar",
    addressLocality: "New Delhi",
    postalCode: "110008",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    addressCountry: "IN",
    addressLocality: "New Delhi",
  },
  areaServed: ["New Delhi", "Delhi NCR"],
  priceRange: "₹₹",
  openingHours: "Mo-Su 10:00-21:00",
  sameAs: Object.values(site.socials),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: site.name,
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#business` },
  inLanguage: "en-IN",
};
