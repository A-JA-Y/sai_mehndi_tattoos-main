import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HomeHero from "@/components/home/HomeHero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import GsapParallax from "@/components/GsapParallax";
import Magnetic from "@/components/Magnetic";
import Mandala from "@/components/Mandala";
import CoverMedia from "@/components/CoverMedia";
import TiltCard from "@/components/TiltCard";
import { WhatsAppIcon } from "@/components/icons";
import { marqueeItems, services, site, stats, waLink } from "@/lib/data";
import { ctaBannerSrc, homePreview } from "@/lib/gallery";

export default function HomePage() {
  const featured = services.slice(0, 3);
  const previews = homePreview;

  return (
    <>
      <HomeHero />

      {/* Marquee strip */}
      <section className="border-y border-henna/20 bg-henna py-5 text-cream">
        <Marquee items={marqueeItems} />
      </section>

      {/* Intro / commitment */}
      <section className="relative overflow-hidden bg-cream py-24 text-ink md:py-36">
        <Mandala className="absolute -bottom-40 -left-40 h-[480px] w-[480px] animate-spin-slow text-henna/15" />
        <div className="container-x relative grid items-start gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="eyebrow text-henna">
              <span aria-hidden className="h-px w-8 bg-henna/60" />
              The Promise
            </p>
            <h2 className="mt-5 font-serif text-[2.75rem] leading-[1.05] font-medium tracking-[-0.01em] md:text-6xl lg:text-[4rem]">
              Committed to making your special occasion an{" "}
              <em className="text-henna">unforgettable</em> one
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-[17px] leading-relaxed text-ink/80 md:text-lg">
              With over {new Date().getFullYear() - site.since} years of
              experience creating intricate bridal and festive designs, every
              pattern is drawn with care, patience and a personal touch — so
              your hands tell a story worth remembering.
            </p>
            <p className="mt-6 font-serif text-2xl text-ink/80 italic">
              — {site.artist}, Founder &amp; Artist
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.25em] text-henna uppercase"
            >
              Read my journey
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services preview */}
      <section className="relative py-24 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="What I Offer"
            title={
              <>
                Artistry for every <em className="text-henna">occasion</em>
              </>
            }
            description="From eight-hour bridal sittings to fifteen-minute festive designs — and tattoos, nail art and classes beyond the cone."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.1}>
                <TiltCard className="rounded-2xl">
                <Link
                  href={`/services#${service.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-ink/10 bg-coal transition-all duration-300 hover:-translate-y-2 hover:border-henna/40 hover:shadow-[0_24px_60px_-24px_rgba(168,30,34,0.35)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <CoverMedia
                      src={service.video}
                      poster={service.image}
                      alt={service.title}
                      className="transition-transform duration-500 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/20 to-transparent" />
                    <span className="absolute top-4 right-5 font-serif text-5xl text-cream/25 italic transition-colors duration-300 group-hover:text-cream/70">
                      {service.number}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-2xl text-ink transition-colors duration-300 group-hover:text-henna">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[17px] leading-relaxed text-sand">
                      {service.short}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.25em] text-henna uppercase">
                      Explore
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center" delay={0.2}>
            <Magnetic className="inline-block">
              <Link href="/services" className="btn-outline-dark">
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      {/* Service index — jump straight to any service */}
      <section className="border-y border-ink/8 bg-coal/40 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Find Your Service"
            title={
              <>
                Jump straight to <em className="text-henna">your occasion</em>
              </>
            }
            description="Know exactly what you need? Head directly to any of the six services offered at the studio."
          />
          <div className="mx-auto max-w-4xl border-t border-ink/10">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.06}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex items-center gap-4 border-b border-ink/10 py-5 transition-all duration-300 hover:border-henna/40 hover:pl-2 sm:gap-8 md:py-6"
                >
                  <span className="w-14 shrink-0 font-serif text-4xl text-outline-henna italic transition-all duration-300 group-hover:text-henna group-hover:[-webkit-text-stroke:0] md:w-16 md:text-5xl">
                    {service.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-2xl text-ink transition-colors duration-300 group-hover:text-henna md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-1 hidden text-[17px] text-sand sm:block">
                      {service.short}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-all duration-300 group-hover:border-henna group-hover:bg-henna group-hover:text-cream md:h-12 md:w-12">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-ink/8 bg-coal/60">
        <div className="container-x grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:grid-cols-4 md:py-20">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <StatCounter {...stat} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-cream py-24 text-ink md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="A Peek Into My Work"
            invert
            title={
              <>
                Patterns that <em className="text-henna">linger</em>
              </>
            }
          />

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {previews.map((item, i) => (
              <Reveal
                key={item.src}
                delay={(i % 3) * 0.1}
                className={i === 0 ? "row-span-2" : ""}
              >
                <Link
                  href="/gallery"
                  className={`group relative block overflow-hidden rounded-xl ${
                    i === 0 ? "h-full min-h-[420px] md:min-h-[520px]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-107"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/35" />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="rounded-full bg-cream/90 px-5 py-2 text-[11px] font-medium tracking-[0.3em] text-ink uppercase backdrop-blur">
                      View
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center" delay={0.2}>
            <Magnetic className="inline-block">
              <Link href="/gallery" className="btn-outline-dark">
                Explore full gallery
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      {/* Reviews teaser */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <Mandala className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 text-ink/4" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Kind Words"
            title={
              <>
                Loved by <em className="text-henna">brides</em> across Delhi
              </>
            }
          />
          <TestimonialCarousel />
          <Reveal className="mt-12 text-center" delay={0.1}>
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.25em] text-henna uppercase"
            >
              Read all reviews
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA banner with parallax */}
      <section className="relative overflow-hidden py-28 md:py-40">
        <GsapParallax speed={0.3}>
          <Image
            src={ctaBannerSrc}
            alt=""
            fill
            sizes="100vw"
            className="scale-110 object-cover"
          />
        </GsapParallax>
        <div className="absolute inset-0 bg-ink/80" />
        <div className="container-x relative text-center">
          <Reveal>
            <p className="eyebrow justify-center">
              <span aria-hidden className="h-px w-8 bg-cream/50" />
              Limited slots each season
              <span aria-hidden className="h-px w-8 bg-cream/50" />
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl font-serif text-[2.75rem] leading-[1.03] font-medium tracking-[-0.01em] text-cream drop-shadow-[0_6px_28px_rgba(0,0,0,0.4)] md:text-7xl">
              Have a date circled on the{" "}
              <em className="text-cream">calendar?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[17px] text-cream/80">
              Wedding-season books up fast. Share your date and let&apos;s
              reserve your sitting before it fills.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Magnetic>
                <a
                  href={waLink("Hello! I want to book an appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </Magnetic>
              <Magnetic>
                <Link href="/contact" className="btn-outline">
                  Contact Page
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
