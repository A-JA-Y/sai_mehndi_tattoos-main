import {
  CARD_PAD,
  QuoteCta,
  RateCard,
  ServicePreviews,
} from "@/components/ServiceCard";
import { MEHANDI_ANCHOR } from "@/lib/data";

const MEHANDI_INTRO =
  "Eighteen years of cone work, in three shapes: the full bridal composition built up over hours of fine detailing, the quick festive design sized for a sangeet or Karva Chauth, and the bold Arabic floral trail. Every cone is hand-mixed in the studio from natural henna — no chemical dyes — which is exactly what lets the stain settle into that deep, lasting colour.";

/**
 * Mehandi is one section on the services page rather than three. Bridal, party
 * and Arabic are named in the copy but get no sub-sections of their own — the
 * work itself is what distinguishes them, so the section leads straight into
 * the gallery instead.
 */
export default function MehandiSection({ number }: { number: string }) {
  return (
    <article
      id={MEHANDI_ANCHOR}
      className="scroll-mt-36 overflow-hidden rounded-2xl border border-ink/12 bg-coal"
    >
      {/* 1 — About the craft */}
      <div className={`pt-8 pb-7 md:pt-10 ${CARD_PAD}`}>
        <p className="eyebrow text-henna">
          <span aria-hidden className="h-px w-8 bg-henna/50" />
          {number}
        </p>
        <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
          About Mehandi
        </h2>
        <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-sand">
          {MEHANDI_INTRO}
        </p>
      </div>

      {/* 2 — A peek at the work, across all three styles, into the gallery */}
      <div className={`pb-8 ${CARD_PAD}`}>
        <ServicePreviews gallery={{ category: "mehndi" }} title="Mehandi" />
      </div>

      {/* 3 — Rate card. Mehandi is deliberately not priced per style —
          coverage and detail move the number too much to post a figure. */}
      <RateCard title="Mehandi rate card" anchor="mehandi-pricing">
        <div className="flex flex-col items-start gap-5">
          <p className="max-w-2xl text-[17px] leading-relaxed text-sand">
            Quoted per booking — the price depends on the size of the design,
            how much detail it carries and how many hands are being done. Send
            your date and a reference picture for an exact quote, usually the
            same day.
          </p>
          <QuoteCta subject="bridal mehandi" />
        </div>
      </RateCard>
    </article>
  );
}
