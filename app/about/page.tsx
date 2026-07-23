import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import Magnetic from "@/components/Magnetic";
import { awards, site, stats, timeline, waLink } from "@/lib/data";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Dev Kumar — award-winning mehndi and tattoo artist with 18 years of artistry, from school sketching competitions to the Grihshobha National Certificate 2011.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title={
          <>
            The artist behind <em className="text-henna">the art</em>
          </>
        }
        description="Painter, sketch artist, mehndi designer, tattooist and teacher — one pair of hands, eighteen years of practice."
      />

      {/* Portrait + intro */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-start gap-14 md:grid-cols-[5fr_6fr] md:gap-20">
          <Reveal>
            <div className="group relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-2xl border border-henna/40 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 md:-inset-4"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/artist.jpg"
                  alt={`${site.artist}, mehndi and tattoo artist`}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-104"
                />
              </div>
              <div className="absolute -bottom-6 left-6 rounded-xl border border-cream/10 bg-coal/90 px-6 py-4 backdrop-blur">
                <p className="font-serif text-2xl text-henna italic">
                  {site.artist}
                </p>
                <p className="mt-0.5 text-[10px] tracking-[0.3em] text-sand uppercase">
                  Founder · Artist · Teacher
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-serif text-3xl leading-snug font-medium text-cream md:text-4xl">
                &ldquo;If I can apply mehndi,{" "}
                <em className="text-henna">why not create tattoos?</em>&rdquo;
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-7 space-y-5 text-[15px] leading-relaxed font-light text-sand md:text-base">
                <p>
                  Ever since childhood, I have had a deep passion for design and
                  painting. During my school days, I participated in numerous
                  competitions and brought home many first-prize trophies. I
                  formally learned painting and sketching — starting with facial
                  portraits — before transitioning this art onto hands.
                </p>
                <p>
                  With continuous dedication, I learned the art of mehndi in{" "}
                  {site.since}. The passion only grew stronger: I began winning
                  mehndi competitions, and started training young students so
                  they too could become skilled artisans and earn a respectable
                  livelihood.
                </p>
                <p>
                  Over {new Date().getFullYear() - site.since} years dedicated
                  to the world of art, I have achieved a great deal — and
                  learned even more. From every contest I won, I gained valuable
                  insight; from every contest I didn&apos;t, I learned twice as
                  much.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Magnetic>
                  <Link href="/contact" className="btn-solid">
                    Get in touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link href="/gallery" className="btn-outline">
                    See my work
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-cream/8 bg-coal/60">
        <div className="container-x grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <StatCounter {...stat} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="The Journey"
            title={
              <>
                From sketchbook to <em className="text-henna">studio</em>
              </>
            }
          />
          <div className="relative mx-auto max-w-3xl">
            <span
              aria-hidden
              className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-henna/60 via-cream/15 to-transparent md:left-1/2"
            />
            <div className="space-y-14">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={0.05}>
                  <div
                    className={`relative flex flex-col gap-3 pl-10 md:w-1/2 md:pl-0 ${
                      i % 2 === 0
                        ? "md:pr-14 md:text-right"
                        : "md:ml-auto md:pl-14"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border-2 border-henna bg-ink md:left-auto ${
                        i % 2 === 0
                          ? "md:-right-[8px]"
                          : "md:-left-[7px]"
                      }`}
                    />
                    <p className="font-serif text-2xl text-gold italic">
                      {item.year}
                    </p>
                    <h3 className="font-serif text-2xl text-cream md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed font-light text-sand">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="border-y border-cream/8 bg-cream py-20 text-ink md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Recognition"
            invert
            title={
              <>
                National-level <em className="text-henna">honours</em>
              </>
            }
            description="Competing — and winning — at prestigious contests hosted by India's leading publications."
          />
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {awards.map((award, i) => (
              <Reveal key={award} delay={i * 0.08}>
                <p className="flex items-center gap-3 text-sm font-medium tracking-[0.18em] text-ink/70 uppercase transition-colors duration-300 hover:text-henna">
                  <Award className="h-4 w-4 text-henna" />
                  {award}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Classes callout */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-henna/25 bg-gradient-to-br from-mocha/70 to-coal p-10 md:p-16">
              <GraduationCap
                aria-hidden
                className="absolute -top-6 -right-6 h-40 w-40 text-henna/10"
              />
              <div className="max-w-2xl">
                <p className="eyebrow">
                  <span aria-hidden className="h-px w-8 bg-henna/60" />
                  Beyond the studio
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight font-medium text-cream md:text-5xl">
                  Learn the craft.{" "}
                  <em className="text-henna">Build a career.</em>
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed font-light text-sand">
                  Mehndi, tattoo making and nail art classes for the next
                  generation of artists. Students who have completed 10th or
                  12th grade can turn this art into a real, respectable
                  livelihood — exactly the way I did.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Magnetic>
                    <Link href="/services#classes" className="btn-solid">
                      About the classes
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <a
                      href={waLink("Hello! I want to know about the Mehndi/Tattoo/Nail Art classes.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Ask about batches
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
