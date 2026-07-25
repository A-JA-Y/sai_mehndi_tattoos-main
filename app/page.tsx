import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HomeHero from "@/components/home/HomeHero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Parallax from "@/components/Parallax";
import Magnetic from "@/components/Magnetic";
import Mandala from "@/components/Mandala";
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
      <section className="border-y border-henna/20 bg-henna py-5 text-ink">
        <Marquee items={marqueeItems} />
      </section>

      {/* Intro / commitment */}
      <section className="relative overflow-hidden bg-cream py-24 text-ink md:py-36">
        <Mandala className="absolute -bottom-40 -left-40 h-[480px] w-[480px] animate-spin-slow text-henna/15" />
        <div className="container-x relative grid items-start gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="eyebrow">
              <span aria-hidden className="h-px w-8 bg-henna/60" />
              The Promise
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.08] font-medium md:text-5xl lg:text-[3.4rem]">
              Committed to making your special occasion an{" "}
              <em className="text-henna">unforgettable</em> one
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-base leading-relaxed font-light text-ink/70 md:text-lg">
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
              className="group mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] text-henna uppercase"
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
              <Reveal key={service.slug} delay={i * 0.12}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-cream/10 bg-coal transition-all duration-500 hover:-translate-y-2 hover:border-henna/40 hover:shadow-[0_24px_60px_-24px_rgba(193,127,74,0.35)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/20 to-transparent" />
                    <span className="absolute top-4 right-5 font-serif text-5xl text-cream/25 italic transition-colors duration-500 group-hover:text-henna/70">
                      {service.number}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-2xl text-cream transition-colors duration-300 group-hover:text-henna">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed font-light text-sand">
                      {service.short}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.25em] text-henna uppercase">
                      Explore
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center" delay={0.2}>
            <Magnetic className="inline-block">
              <Link href="/services" className="btn-outline">
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-cream/8 bg-coal/60">
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
                    <span className="rounded-full bg-cream/90 px-5 py-2 text-[10px] font-medium tracking-[0.3em] text-ink uppercase backdrop-blur">
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
        <Mandala className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 text-cream/4" />
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
              className="group inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] text-henna uppercase"
            >
              Read all reviews
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA banner with parallax */}
      <section className="relative overflow-hidden py-28 md:py-40">
        <Parallax>
          <Image
            src={ctaBannerSrc}
            alt=""
            fill
            sizes="100vw"
            className="scale-110 object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-ink/80" />
        <div className="container-x relative text-center">
          <Reveal>
            <p className="eyebrow justify-center">
              <span aria-hidden className="h-px w-8 bg-henna/60" />
              Limited slots each season
              <span aria-hidden className="h-px w-8 bg-henna/60" />
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-[1.05] font-medium text-cream md:text-6xl">
              Have a date circled on the{" "}
              <em className="text-henna">calendar?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[15px] font-light text-sand">
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
