import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FitImage from "@/components/FitImage";
import { WhatsAppIcon } from "@/components/icons";
import {
  NailArtPricingTable,
  TattooPricingTable,
} from "@/components/PricingTables";
import { galleryLink, resolveGallery, waLink, type Service } from "@/lib/data";
import { fillsFrame } from "@/lib/gallery";

const PREVIEW_COUNT = 3;

/** The preview tiles' aspect ratio, kept in step with `aspect-[3/4]` below. */
const PREVIEW_FRAME = 3 / 4;

/** Shared horizontal rhythm — every block in a service card starts on this edge. */
export const CARD_PAD = "px-6 sm:px-8 md:px-10";

/**
 * Three evenly-spaced shots from the same set "Show more" opens, so the previews
 * always match what the visitor lands on. Index-based rather than random so the
 * server and client render identically.
 */
function previewsFor(gallery: NonNullable<Service["gallery"]>) {
  const pool = resolveGallery(gallery).images;
  if (pool.length <= PREVIEW_COUNT) return pool;
  const step = Math.floor(pool.length / PREVIEW_COUNT);
  return Array.from({ length: PREVIEW_COUNT }, (_, i) => pool[i * step]);
}

/** Anchor kept from the old standalone pricing sections so old links still land. */
function rateCardAnchor(slug: string) {
  if (slug === "tattoo-art") return "tattoo-pricing";
  if (slug === "nail-art") return "nail-art-pricing";
  return undefined;
}

/**
 * A peek at the work plus the link through to this service's own gallery
 * filter. Renders edge-to-edge — the caller owns the horizontal padding.
 */
export function ServicePreviews({
  gallery,
  title,
}: {
  gallery: NonNullable<Service["gallery"]>;
  title: string;
}) {
  const previews = previewsFor(gallery);
  if (previews.length === 0) return null;
  const href = galleryLink(gallery);

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 md:gap-5">
        {previews.map((img) => {
          // A tidy row of three matters more here than a perfect fit, so photos
          // close to 3:4 simply fill the tile and only the outliers fall back to
          // being shown whole. Biasing to the top keeps faces in the ones that
          // fill; for the ones shown whole it would just shunt the whole
          // letterbox to the bottom, so they stay centred.
          const fills = fillsFrame(img, PREVIEW_FRAME);
          return (
            <Link
              key={img.src}
              href={href}
              aria-label={`See more ${title} photos`}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-ink/10"
            >
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-108">
                <FitImage
                  src={img.src}
                  alt={img.alt}
                  sizes="(max-width: 768px) 30vw, 22vw"
                  fit={fills ? "cover" : "contain"}
                  position={fills ? "object-top" : undefined}
                />
              </div>
            </Link>
          );
        })}
      </div>
      <Link href={href} className="btn-outline-dark mt-6">
        Show more
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

/** The henna-banded rate card at the foot of a service section. */
export function RateCard({
  title,
  anchor,
  children,
}: {
  title: string;
  anchor?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={anchor} className={anchor ? "scroll-mt-36" : undefined}>
      <div className={`bg-henna py-3.5 ${CARD_PAD}`}>
        <h3 className="text-[13px] font-semibold tracking-[0.25em] text-cream uppercase">
          {title}
        </h3>
      </div>
      <div className={`py-8 md:py-10 ${CARD_PAD}`}>{children}</div>
    </div>
  );
}

/** Mehandi is quoted per booking, so every rate card keeps a way to ask. */
export function QuoteCta({ subject }: { subject: string }) {
  return (
    <a
      href={waLink(`Hello! I'd like a quote for ${subject}.`)}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-solid"
    >
      <WhatsAppIcon className="h-4 w-4" />
      Get a quote
    </a>
  );
}

function RateCardBody({ service }: { service: Service }) {
  if (service.slug === "tattoo-art") return <TattooPricingTable />;
  if (service.slug === "nail-art") return <NailArtPricingTable />;

  if (service.slug === "classes") {
    return (
      <div className="flex flex-col items-start gap-5">
        <p className="max-w-2xl text-[17px] leading-relaxed text-sand">
          Every course runs as a Basic or an Advance batch, each with its own fee
          and duration. The full curriculum and current batch fees are listed
          below.
        </p>
        <Link href="/services#classes-detail" className="btn-outline-dark">
          View curriculum &amp; fees
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  // Mehandi carries no price list — coverage and detail move the number too
  // much to post a figure, so it is quoted per booking.
  return (
    <div className="flex flex-col items-start gap-5">
      <p className="max-w-2xl text-[17px] leading-relaxed text-sand">
        Quoted per booking — the price depends on the size of the design, how
        much detail it carries and how many hands are being done. Send your date
        and a reference picture for an exact quote, usually the same day.
      </p>
      <QuoteCta subject={service.title} />
    </div>
  );
}

export default function ServiceCard({
  service,
  /** Overrides the stored number so sections stay 01, 02, 03… down the page. */
  number,
}: {
  service: Service;
  number?: string;
}) {
  const anchor = rateCardAnchor(service.slug);

  return (
    <article
      id={service.slug}
      className="scroll-mt-36 overflow-hidden rounded-2xl border border-ink/12 bg-coal"
    >
      {/* 1 — About */}
      <div className={`pt-8 pb-7 md:pt-10 ${CARD_PAD}`}>
        <p className="eyebrow text-henna">
          <span aria-hidden className="h-px w-8 bg-henna/50" />
          {number ?? service.number}
        </p>
        <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
          About {service.title}
        </h2>
        <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-sand">
          {service.description}
        </p>
      </div>

      {/* 2 — A peek at the work, straight from the gallery */}
      {service.gallery && (
        <div className={`pb-8 ${CARD_PAD}`}>
          <ServicePreviews gallery={service.gallery} title={service.title} />
        </div>
      )}

      {/* 3 — Rate card */}
      <RateCard title={`${service.title} rate card`} anchor={anchor}>
        <RateCardBody service={service} />
      </RateCard>
    </article>
  );
}
