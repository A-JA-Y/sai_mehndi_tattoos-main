import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { WhatsAppIcon } from "@/components/icons";
import { reviews, waLink } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What brides, families and students say about Sai Mehandi & Tattoo — five-star mehandi, tattoo and nail art experiences across Delhi NCR.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kind Words"
        title={
          <>
            Stories our clients <em className="text-gold">tell</em>
          </>
        }
        description="Real words from brides, families and students — the reason this studio has run on referrals for eighteen years."
      />

      {/* Summary */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-henna/25 bg-gradient-to-br from-mocha/60 to-coal px-6 py-10 text-center sm:px-8 sm:py-12">
              <p className="font-serif text-8xl font-medium tracking-tight text-ink">
                5.0
              </p>
              <div className="flex gap-1.5 text-2xl text-gold" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <p className="max-w-md text-[15px] text-sand">
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
              <figure className="group relative flex h-full flex-col rounded-2xl border border-ink/10 bg-coal p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-henna/40 sm:p-8">
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
                <blockquote className="mt-5 flex-1 font-serif text-xl leading-snug text-ink italic">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-7 border-t border-ink/10 pt-5">
                  <p className="text-sm font-semibold tracking-[0.18em] text-gold uppercase">
                    {review.name}
                  </p>
                  <p className="mt-1 text-[13px] text-sand">
                    {review.occasion}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="border-t border-ink/8 bg-cream py-20 text-ink md:py-24">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl font-medium tracking-[-0.01em] md:text-6xl">
              Celebrated with us recently?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-ink/75">
              Your words help other brides find us. Share a line about your
              experience — it means the world.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Magnetic className="inline-block">
              <a
                href={waLink("Hi! I'd love to share a review about my experience at Sai Mehandi & Tattoo.")}
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
