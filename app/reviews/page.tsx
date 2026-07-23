import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { WhatsAppIcon } from "@/components/icons";
import { reviews, waLink } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What brides, families and students say about Sai Mehndi & Tattoo — five-star mehndi, tattoo and nail art experiences across Delhi NCR.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kind Words"
        title={
          <>
            Stories our clients <em className="text-henna">tell</em>
          </>
        }
        description="Real words from brides, families and students — the reason this studio has run on referrals for eighteen years."
      />

      {/* Summary */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-henna/25 bg-gradient-to-br from-mocha/60 to-coal px-8 py-12 text-center">
              <p className="font-serif text-7xl font-medium text-cream">
                5.0
              </p>
              <div className="flex gap-1.5 text-2xl text-gold" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <p className="max-w-md text-sm font-light text-sand">
                Rated by brides, festive clients and students — every review
                below came from a real occasion we were lucky to be part of.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Review cards */}
      <section className="pb-24 md:pb-32">
        <div className="container-x grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={(i % 3) * 0.1}>
              <figure className="group relative flex h-full flex-col rounded-2xl border border-cream/10 bg-coal p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-henna/40">
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-3 right-6 font-serif text-7xl leading-none text-henna/12 transition-colors duration-500 select-none group-hover:text-henna/25"
                >
                  &rdquo;
                </span>
                <div className="flex gap-1 text-sm text-gold" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} aria-hidden>
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-xl leading-snug text-cream italic">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-7 border-t border-cream/10 pt-5">
                  <p className="text-sm font-medium tracking-[0.18em] text-henna uppercase">
                    {review.name}
                  </p>
                  <p className="mt-1 text-xs font-light text-sand">
                    {review.occasion}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="border-t border-cream/8 bg-cream py-20 text-ink md:py-24">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium md:text-5xl">
              Celebrated with us recently?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] font-light text-ink/65">
              Your words help other brides find us. Share a line about your
              experience — it means the world.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Magnetic className="inline-block">
              <a
                href={waLink("Hi! I'd love to share a review about my experience at Sai Mehndi & Tattoo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Share your experience
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}
