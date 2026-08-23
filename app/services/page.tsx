"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Accordion from "@/components/Accordion";
import Magnetic from "@/components/Magnetic";
import ClassesGrid from "@/components/ClassesGrid";
import CoverMedia from "@/components/CoverMedia";
import TiltCard from "@/components/TiltCard";
import { TattooPricingTable, NailArtPricingTable } from "@/components/PricingTables";
import { WhatsAppIcon } from "@/components/icons";
import { faqs, services, waLink } from "@/lib/data";

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
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="What I Offer"
        title={
          <>
            Services, from cone <em className="text-gold">to canvas</em>
          </>
        }
        description="Six crafts under one roof — each priced by design size and detail. Share your occasion and get a quote in minutes on WhatsApp."
      />

      {/* Service cards */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2 md:gap-8">
          {services.map((service, i) => {
            const isExpanded = expandedService === service.slug;

            return (
              <Reveal key={service.slug} delay={(i % 2) * 0.1}>
                <TiltCard strength={5} className="h-full rounded-2xl">
                  <article
                    id={service.slug}
                    className="group relative h-full scroll-mt-36 rounded-2xl border border-ink/10 bg-coal transition-all duration-300 hover:border-henna/40 hover:shadow-[0_24px_60px_-24px_rgba(168,30,34,0.3)]"
                  >
                    <div className="[perspective:1200px]">
                      <div
                        className={`relative h-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] ${
                          isExpanded ? "[transform:rotateY(180deg)]" : ""
                        }`}
                      >
                        <div className="[backface-visibility:hidden]">
                          <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                            <CoverMedia
                              src={service.video}
                              poster={service.image}
                              alt={service.title}
                              className="transition-transform duration-500 ease-out group-hover:scale-106"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/25 to-transparent" />
                            <span className="absolute top-4 right-5 font-serif text-6xl text-cream/20 italic transition-colors duration-300 group-hover:text-gold/60">
                              {service.number}
                            </span>
                          </div>

                          <div className="flex flex-1 flex-col p-6 sm:p-8">
                            <h2 className="font-serif text-3xl text-ink transition-colors duration-300 group-hover:text-henna">
                              {service.title}
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-sand">
                              {service.description}
                            </p>
                            <ul className="mt-6 grid gap-2.5 text-[15px] text-ink/90 sm:grid-cols-2">
                              {service.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2.5">
                                  <span aria-hidden className="mt-0.5 text-gold">
                                    ✦
                                  </span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
                              <a
                                href={waLink(`Hello! I'd like to enquire about ${service.title}.`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.25em] text-gold uppercase transition-colors hover:text-henna"
                              >
                                <WhatsAppIcon className="h-4 w-4" />
                                Enquire about this
                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                              </a>
                              <button
                                type="button"
                                onClick={() => setExpandedService(isExpanded ? null : service.slug)}
                                className="text-xs font-semibold tracking-[0.25em] text-ink/50 uppercase transition-colors hover:text-henna"
                              >
                                {isExpanded ? "Hide details" : "Get more info"}
                              </button>
                              <Link
                                href={
                                  service.slug === "bridal-mehandi" || service.slug === "party-mehandi" || service.slug === "arabic-designs"
                                    ? "/gallery?category=mehndi"
                                    : service.slug === "tattoo-art"
                                      ? "/gallery?category=tattoo"
                                      : service.slug === "nail-art"
                                        ? "/gallery?category=nail-art"
                                        : "/gallery?category=mehndi"
                                }
                                className="text-xs font-semibold tracking-[0.25em] text-ink/50 uppercase transition-colors hover:text-henna"
                              >
                                See more photos →
                              </Link>
                              {service.slug === "classes" && (
                                <Link
                                  href="/services#classes-detail"
                                  className="text-xs font-semibold tracking-[0.25em] text-ink/50 uppercase transition-colors hover:text-henna"
                                >
                                  Curriculum &amp; pricing →
                                </Link>
                              )}
                              {service.slug === "tattoo-art" && (
                                <Link
                                  href="/services#tattoo-pricing"
                                  className="text-xs font-semibold tracking-[0.25em] text-ink/50 uppercase transition-colors hover:text-henna"
                                >
                                  Full price list →
                                </Link>
                              )}
                              {service.slug === "nail-art" && (
                                <Link
                                  href="/services#nail-art-pricing"
                                  className="text-xs font-semibold tracking-[0.25em] text-ink/50 uppercase transition-colors hover:text-henna"
                                >
                                  Price menu →
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="absolute inset-0 rounded-2xl border border-ink/10 bg-coal px-6 py-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                          <div className="flex h-full flex-col">
                            <div className="flex items-center justify-between gap-3">
                              <h3 className="font-serif text-2xl text-henna">{service.title}</h3>
                              <button
                                type="button"
                                onClick={() => setExpandedService(null)}
                                className="text-[11px] font-semibold tracking-[0.2em] text-ink/60 uppercase transition-colors hover:text-henna"
                              >
                                Close
                              </button>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-sand">
                              {service.description}
                            </p>
                            <ul className="mt-5 space-y-2.5 text-[14px] leading-relaxed text-ink/90">
                              {service.details.map((detail) => (
                                <li key={detail} className="flex items-start gap-2.5">
                                  <span aria-hidden className="mt-1 text-gold">
                                    ✦
                                  </span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                            <a
                              href={waLink(`Hello! I want more information about ${service.title}.`)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-henna px-5 py-3 text-[11px] font-semibold tracking-[0.2em] text-cream uppercase transition-colors hover:bg-[#2D6072]"
                            >
                              Enquire now
                              <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-ink/8 bg-cream py-24 text-ink md:py-32">
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
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink/75">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Classes & Training — detailed curriculum */}
      <section id="classes-detail" className="scroll-mt-28 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Classes & Training"
            title={
              <>
                Learn the craft, <em className="text-gold">batch by batch</em>
              </>
            }
            description="Three career-ready courses, each with a Basic and Advance track. Mehandi starts at ₹7,000 / ₹15,000, Nail Art at ₹10,000 / ₹18,000, and Tattoo at ₹80,000 / ₹1,50,000 — tap Read more for the full curriculum."
          />
          <ClassesGrid />
        </div>
      </section>

      {/* Tattoo pricing */}
      <section id="tattoo-pricing" className="scroll-mt-28 border-y border-ink/8 bg-coal/40 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Cost of a Tattoo"
            title={
              <>
                Priced by size, <em className="text-gold">hour or session</em>
              </>
            }
            description="Pick whichever suits your design — a small first inch starts at ₹1,500, single sittings can be booked by the hour, and full-day pieces run by session."
          />
          <TattooPricingTable />
        </div>
      </section>

      {/* Nail art pricing */}
      <section id="nail-art-pricing" className="scroll-mt-28 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Nail Art Menu"
            title={
              <>
                Add-on <em className="text-gold">nail styling</em>
              </>
            }
            description="From a quick gel polish to full bridal extensions — pair any of these with your mehandi or tattoo booking."
          />
          <NailArtPricingTable />
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
                  Questions, <em className="text-gold">answered</em>
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
