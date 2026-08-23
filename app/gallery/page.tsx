import type { Metadata } from "next";
import { Suspense } from "react";
import { Instagram } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import InstagramEmbed from "@/components/InstagramEmbed";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { instagramReels, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "The full portfolio of Sai Mehandi & Tattoo, New Delhi — bridal, Arabic and festive mehandi, tattoos, pencil sketches, nail art and event moments.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="A Peek Into My Work"
        title={
          <>
            Ink, henna &amp; <em className="text-gold">detail</em>
          </>
        }
        description="Mehandi, tattoos, sketches, nail art and moments from events — filter by category, tap any piece to view it up close. Every design here was drawn freehand — no stencils, no shortcuts."
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <Suspense fallback={<GalleryGridFallback />}>
              <GalleryGrid />
            </Suspense>
          </Reveal>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="border-t border-ink/8 bg-coal/60 py-20 md:py-24">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <Reveal>
            <p className="eyebrow text-henna justify-center">
              <span aria-hidden className="h-px w-8 bg-henna/50" />
              Fresh work every week
              <span aria-hidden className="h-px w-8 bg-henna/50" />
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium tracking-[-0.01em] text-ink md:text-6xl">
              See the latest designs on{" "}
              <em className="text-henna">Instagram</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="grid w-full max-w-4xl gap-5 sm:grid-cols-3">
            {instagramReels.map((url) => (
              <div
                key={url}
                className="overflow-hidden rounded-2xl border border-ink/10 bg-cream"
              >
                <InstagramEmbed url={url} />
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.15}>
            <Magnetic className="inline-block">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid"
                aria-label="Open Instagram profile"
              >
                <Instagram className="h-4 w-4" />
                Follow the studio
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function GalleryGridFallback() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="aspect-[3/4] animate-pulse rounded-xl bg-ink/5"
        />
      ))}
    </div>
  );
}
