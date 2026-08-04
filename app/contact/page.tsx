import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site, waLink } from "@/lib/data";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book bridal, party or Arabic mehandi, tattoos, nail art or classes at Sai Mehandi & Tattoo — West Patel Nagar, New Delhi. Call, WhatsApp or send the booking form.",
};

const infoCards = [
  {
    icon: MapPin,
    title: "Visit the studio",
    lines: [site.address],
  },
  {
    icon: Phone,
    title: "Call us",
    lines: site.phones,
    href: `tel:${site.phones[0].replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    title: "Email",
    lines: [site.email],
    href: `mailto:${site.email}`,
  },
  {
    icon: Clock,
    title: "Hours",
    lines: [site.hours, "Bridal sittings by appointment"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title={
          <>
            Book your <em className="text-gold">appointment</em>
          </>
        }
        description="Tell us about your occasion — we usually reply within the hour during studio time."
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[2fr_3fr] lg:gap-20">
          {/* Info cards */}
          <div className="space-y-4">
            {infoCards.map((card, i) => {
              const Icon = card.icon;
              const content = (
                <div className="flex gap-4 rounded-2xl border border-ink/10 bg-coal p-5 transition-all duration-400 hover:-translate-y-1 hover:border-henna/40 sm:gap-5 sm:p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-henna/15 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.25em] text-ink/70 uppercase">
                      {card.title}
                    </h3>
                    {card.lines.map((line) => (
                      <p
                        key={line}
                        className="mt-1.5 text-[15px] leading-relaxed text-ink"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
              return (
                <Reveal key={card.title} delay={i * 0.08}>
                  {card.href ? (
                    <a href={card.href} className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Reveal>
              );
            })}

            <Reveal delay={0.35}>
              <a
                href={waLink("Hello! I want to book an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 p-6 transition-all duration-400 hover:-translate-y-1 hover:bg-[#25D366]/15"
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-ink">
                    <WhatsAppIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-serif text-xl text-ink">
                      Fastest reply on WhatsApp
                    </p>
                    <p className="mt-0.5 text-[13px] text-sand">
                      Tap to start a chat instantly
                    </p>
                  </div>
                </div>
              </a>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-ink/10 bg-coal p-6 sm:p-8 md:p-12">
              <h2 className="font-serif text-4xl leading-[1.1] tracking-[-0.01em] text-ink md:text-5xl">
                Tell us about your <em className="text-henna">occasion</em>
              </h2>
              <p className="mt-3 mb-9 text-[15px] text-sand">
                Fields marked * are required — everything else helps us prepare
                a better quote.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-ink/10">
              <iframe
                title="Sai Mehandi & Tattoo studio location on Google Maps"
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] w-full grayscale-[0.85] transition-all duration-700 hover:grayscale-0 md:h-[460px]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
