"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import Mandala from "@/components/Mandala";
import { site } from "@/lib/data";
import { heroSlides as slides } from "@/lib/gallery";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Masked line reveal for the display heading */
function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.75, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function HomeHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      7000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-svh items-end overflow-hidden">
      {/* Cross-fading Ken Burns slides */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.09 }}
            transition={{ duration: 9, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Cinematic gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      {/* Slow-spinning mandala accent */}
      <Mandala className="absolute top-24 right-[-90px] h-[320px] w-[320px] animate-spin-slow text-cream/12 md:right-[4%] md:h-[430px] md:w-[430px]" />

      {/* Side label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="absolute left-7 top-1/2 hidden origin-left -translate-y-1/2 -rotate-90 text-[11px] font-medium tracking-[0.5em] text-cream/80 uppercase xl:block"
      >
        Est. {site.since} · New Delhi
      </motion.p>

      {/* Content */}
      <div className="container-x relative z-10 pt-44 pb-24 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.15 }}
          className="eyebrow"
        >
          <span aria-hidden className="h-px w-10 bg-cream/60" />
          Bridal · Party · Arabic · Tattoo
        </motion.p>

        <h1 className="mt-6 font-serif text-[clamp(3.4rem,9.8vw,8.2rem)] leading-[0.96] font-medium tracking-[-0.01em] text-cream drop-shadow-[0_6px_28px_rgba(0,0,0,0.35)]">
          <Line delay={0.25}>Every hand</Line>
          <Line delay={0.35}>
            tells a <em className="text-cream">story.</em>
          </Line>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.55 }}
          className="mt-7 max-w-lg text-[17px] leading-relaxed text-cream/90 md:text-[18px]"
        >
          Bridal &amp; festive mehandi, tattoos and nail art by{" "}
          <span className="text-cream">{site.artist}</span> — eighteen years of
          artistry, drawn with patience and a personal touch in the heart of
          New Delhi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.72 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <Link href="/contact" className="btn-solid group">
              Book an Appointment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/gallery" className="btn-outline">
              View Gallery
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute right-6 bottom-8 z-10 flex gap-2 md:right-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-1 rounded-full transition-all duration-500",
              i === current ? "w-8 bg-cream" : "w-3 bg-cream/30 hover:bg-cream/60",
            )}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[11px] font-medium tracking-[0.4em] text-cream/80 uppercase">
          Scroll
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-cream/15">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 h-1/2 bg-cream"
          />
        </span>
      </motion.div>
    </section>
  );
}
