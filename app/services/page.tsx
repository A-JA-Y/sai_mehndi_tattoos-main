import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Accordion from "@/components/Accordion";
import Magnetic from "@/components/Magnetic";
import ClassesGrid from "@/components/ClassesGrid";
import MehandiSection from "@/components/MehandiSection";
import ServiceCard from "@/components/ServiceCard";
import { faqs, standaloneServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bridal, party and Arabic mehandi, tattoo art, nail art and professional classes at Sai Mehandi & Tattoo, New Delhi — each with its own gallery and rate card.",
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

      {/* Service cards — About / previews / show more / rate card.
          Mehandi leads as one section that opens into its three styles; the
          remaining crafts are one section each. Numbering runs down the page
          rather than following each service's stored number. */}
      <section className="py-20 md:py-28">
        <div className="container-x flex flex-col gap-10 md:gap-14">
          <Reveal>
            <MehandiSection number="01" />
          </Reveal>
          {standaloneServices.map((service, i) => (
            <Reveal key={service.slug} delay={0.05}>
              <ServiceCard
                service={service}
                number={String(i + 2).padStart(2, "0")}
              />
            </Reveal>
          ))}
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
                  <p className="mt-2.5 text-[17px] leading-relaxed text-ink/75">
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
                Learn the craft, <em className="text-henna">batch by batch</em>
              </>
            }
            description="Three career-ready courses, each with a Basic and Advance track. Mehandi starts at ₹7,000 / ₹15,000, Nail Art at ₹10,000 / ₹18,000, and Tattoo at ₹80,000 / ₹1,50,000 — tap Read more for the full curriculum."
          />
          <ClassesGrid />
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
