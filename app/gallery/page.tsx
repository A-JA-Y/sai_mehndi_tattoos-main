import type { Metadata } from "next";
import { Instagram } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A curated look at bridal, Arabic and festive mehndi designs created at Sai Mehndi & Tattoo, New Delhi.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="A Peek Into My Work"
        title={
          <>
            Ink, henna &amp; <em className="text-henna">detail</em>
          </>
        }
        description="Filter by style, tap any piece to view it up close. Every design here was drawn freehand — no stencils, no shortcuts."
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <GalleryGrid />
          </Reveal>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="border-t border-cream/8 bg-coal/60 py-20 md:py-24">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <Reveal>
            <p className="eyebrow justify-center">
              <span aria-hidden className="h-px w-8 bg-henna/60" />
              Fresh work every week
              <span aria-hidden className="h-px w-8 bg-henna/60" />
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium text-cream md:text-5xl">
              See the latest designs on{" "}
              <em className="text-henna">Instagram</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Magnetic className="inline-block">
              <a
                href={site.socials.instagram}
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
