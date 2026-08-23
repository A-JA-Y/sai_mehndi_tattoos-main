import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import {
  NailArtPricingTable,
  TattooPricingTable,
} from "@/components/PricingTables";
import { galleryLink, resolveGallery, waLink, type Service } from "@/lib/data";

const PREVIEW_COUNT = 3;

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

  // Mehandi is quoted per booking rather than from a fixed list.
  return (
    <div className="flex flex-col items-start gap-5">
      <p className="max-w-2xl text-[17px] leading-relaxed text-sand">
        Quoted per booking — the price depends on the size of the design, how
        much detail it carries and how many hands are being done. Send your date
        and a reference picture for an exact quote, usually the same day.
      </p>
      <a
        href={waLink(`Hello! I'd like a quote for ${service.title}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-solid"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Get a quote
      </a>
    </div>
  );
}

export default function ServiceCard({ service }: { service: Service }) {
  const previews = service.gallery ? previewsFor(service.gallery) : [];
  const href = service.gallery ? galleryLink(service.gallery) : null;
  const anchor = rateCardAnchor(service.slug);

  return (
    <article
      id={service.slug}
      className="scroll-mt-36 overflow-hidden rounded-2xl border border-ink/12 bg-coal"
    >
      {/* 1 — About */}
      <div className="px-6 pt-8 pb-7 sm:px-8 md:px-10 md:pt-10">
        <p className="eyebrow text-henna">
          <span aria-hidden className="h-px w-8 bg-henna/50" />
          {service.number}
        </p>
        <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
          About {service.title}
        </h2>
        <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-sand">
          {service.description}
        </p>
      </div>

      {/* 2 — A peek at the work, straight from the gallery */}
      {href && previews.length > 0 && (
        <div className="grid grid-cols-3 gap-3 px-6 sm:px-8 md:gap-5 md:px-10">
          {previews.map((img) => (
            <Link
              key={img.src}
              href={href}
              aria-label={`See more ${service.title} photos`}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-ink/10"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 30vw, 22vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
            </Link>
          ))}
        </div>
      )}

      {/* 3 — Straight through to this service's own gallery filter */}
      {href && (
        <div className="px-6 py-7 text-center sm:px-8 md:px-10">
          <Link href={href} className="btn-outline-dark">
            Show more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}

      {/* 4 — Rate card */}
      <div id={anchor} className={anchor ? "scroll-mt-36" : undefined}>
        <div className="bg-henna px-6 py-3.5 sm:px-8 md:px-10">
          <h3 className="text-[13px] font-semibold tracking-[0.25em] text-cream uppercase">
            {service.title} rate card
          </h3>
        </div>
        <div className="px-6 py-8 sm:px-8 md:px-10 md:py-10">
          <RateCardBody service={service} />
        </div>
      </div>
    </article>
  );
}
