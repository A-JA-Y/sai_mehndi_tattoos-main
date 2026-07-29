import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Accordion from "@/components/Accordion";
import Magnetic from "@/components/Magnetic";
import { WhatsAppIcon } from "@/components/icons";
import { faqs, services, waLink } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bridal mehndi, party & festival designs, Arabic patterns, tattoo art, nail art and professional classes — every service offered at Sai Mehndi & Tattoo, New Delhi.",
};

const process = [
  {
    step: "01",
    title: "Consult",
    text: "Share your date, occasion and inspiration on a quick call or WhatsApp chat.",
  },
  {
    step: "02",
    title: "Design",
    text: "Motifs are sketched and personalised — bridal clients can preview a trial patch.",
  },
  {
    step: "03",
    title: "Apply",
    text: "The sitting itself: fresh hand-mixed cones, steady hands, unhurried detail.",
  },
  {
    step: "04",
    title: "Aftercare",
    text: "Lemon-sugar, warmth and simple do's & don'ts to coax out the deepest stain.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What I Offer"
        title={
          <>
            Services, from cone <em className="text-henna">to canvas</em>
          </>
        }
        description="Six crafts under one roof — each priced by design size and detail. Share your occasion and get a quote in minutes on WhatsApp."
      />

      {/* Service cards */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2 md:gap-8">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 2) * 0.12}>
              <article
                id={service.slug}
                className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-cream/10 bg-coal transition-all duration-500 hover:border-henna/40 hover:shadow-[0_24px_60px_-24px_rgba(198,119,70,0.3)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/25 to-transparent" />
                  <span className="absolute top-4 right-5 font-serif text-6xl text-cream/20 italic transition-colors duration-500 group-hover:text-henna/60">
                    {service.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h2 className="font-serif text-3xl text-cream transition-colors duration-300 group-hover:text-henna">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed font-light text-sand">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-2.5 text-sm font-light text-cream/80 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span aria-hidden className="mt-0.5 text-henna">
                          ✦
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <a
                      href={waLink(`Hello! I'd like to enquire about ${service.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.25em] text-henna uppercase transition-colors hover:text-gold"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Enquire about this
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-cream/8 bg-cream py-24 text-ink md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="How It Works"
            invert
            title={
              <>
                Four simple <em className="text-henna">steps</em>
              </>
            }
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.1}>
                <div className="group relative text-center sm:text-left">
                  {i < process.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute top-7 left-[calc(50%+44px)] hidden h-px w-[calc(100%-56px)] bg-gradient-to-r from-henna/50 to-transparent lg:block"
                    />
                  )}
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-henna/50 font-serif text-xl text-henna italic transition-all duration-400 group-hover:scale-110 group-hover:bg-henna group-hover:text-cream sm:mx-0">
                    {item.step}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed font-light text-ink/65">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Good to Know"
              title={
                <>
                  Questions, <em className="text-henna">answered</em>
                </>
              }
              description="Everything clients usually ask before booking. Something else on your mind? WhatsApp is the fastest way to reach us."
              className="mb-8"
            />
            <Reveal delay={0.15}>
              <Magnetic className="inline-block">
                <Link href="/contact" className="btn-solid">
                  Ask a question
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
