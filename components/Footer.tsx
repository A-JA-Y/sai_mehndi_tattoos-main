import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { navLinks, serviceHref, services, site, waLink } from "@/lib/data";
import { WhatsAppIcon, XIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-ink/8 bg-coal">
      {/* Big CTA row */}
      <div className="container-x pt-20 pb-14 md:pt-28">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 border-b border-ink/10 pb-14 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-henna">
                <span aria-hidden className="h-px w-8 bg-henna/50" />
                Ready when you are
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-[2.75rem] leading-[1.02] font-medium tracking-[-0.01em] text-ink md:text-7xl">
                Let&apos;s create something{" "}
                <em className="text-henna">beautiful</em> together
              </h2>
            </div>
            <a
              href={waLink("Hello! I want to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid shrink-0"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-serif text-2xl text-ink">
              Sai <span className="text-henna">Mehandi & Tattoo</span>
            </Link>
            <p className="mt-4 max-w-xs text-[17px] leading-relaxed text-sand">
              {site.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-sand transition-all duration-250 hover:-translate-y-0.5 hover:rotate-6 hover:scale-110 hover:border-henna hover:text-henna active:scale-95"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-sand transition-all duration-250 hover:-translate-y-0.5 hover:rotate-6 hover:scale-110 hover:border-henna hover:text-henna active:scale-95"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={site.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-sand transition-all duration-250 hover:-translate-y-0.5 hover:rotate-6 hover:scale-110 hover:border-henna hover:text-henna active:scale-95"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={site.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-sand transition-all duration-250 hover:-translate-y-0.5 hover:rotate-6 hover:scale-110 hover:border-henna hover:text-henna active:scale-95"
              >
                <XIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={waLink("Hello!")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-sand transition-all duration-250 hover:-translate-y-0.5 hover:rotate-6 hover:scale-110 hover:border-henna hover:text-henna active:scale-95"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold tracking-[0.3em] text-ink/75 uppercase">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-[17px] text-sand hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold tracking-[0.3em] text-ink/75 uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={serviceHref(s)}
                    className="link-underline text-[17px] text-sand hover:text-ink"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold tracking-[0.3em] text-ink/75 uppercase">
              Visit
            </h3>
            <ul className="mt-5 space-y-4 text-[17px] text-sand">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-henna" />
                {site.address}
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-henna" />
                <span>
                  {site.phones[0]}
                  <br />
                  {site.phones[1]}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-henna" />
                <a href={`mailto:${site.email}`} className="hover:text-ink">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-ink/10 py-7 text-[13px] tracking-wide text-sand md:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Crafted with <span className="text-henna">♥</span> by Funkey Graphics
          </p>
        </div>
      </div>

      {/* Watermark */}
      <div
        aria-hidden
        className="text-outline pointer-events-none absolute -bottom-6 left-1/2 w-full -translate-x-1/2 text-center font-serif text-[18vw] leading-none whitespace-nowrap select-none"
      >
        Sai Mehandi
      </div>
    </footer>
  );
}
