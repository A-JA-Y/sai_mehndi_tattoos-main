"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Plus, X } from "lucide-react";
import { classPrograms, type ClassProgram, waLink } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { WhatsAppIcon } from "@/components/icons";
import TiltCard from "@/components/TiltCard";

export default function ClassesGrid() {
  const [active, setActive] = useState<ClassProgram | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {classPrograms.map((program, i) => (
          <motion.div
            key={program.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: EASE, delay: i * 0.08 }}
          >
          <TiltCard strength={6} className="h-full rounded-2xl">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-coal transition-all duration-300 hover:border-henna/40 hover:shadow-[0_24px_60px_-24px_rgba(168,30,34,0.35)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster={program.poster}
                className="h-full w-full object-cover"
              >
                <source src={`/videos/${program.slug}.mp4`} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-2xl text-cream">{program.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream/75">
                  {program.short}
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap gap-2">
                {program.levels.map((level) => (
                  <span
                    key={level.tier}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-gold uppercase"
                  >
                    {level.tier} · ₹{level.price.toLocaleString("en-IN")}
                    {level.priceUnit}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActive(program)}
                className="group/btn mt-6 inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.25em] text-ink uppercase transition-colors hover:text-henna"
              >
                <Plus className="h-4 w-4" />
                Read more
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
            </div>
          </TiltCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && <ProgramModal program={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}

function ProgramModal({
  program,
  onClose,
}: {
  program: ClassProgram;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-md md:p-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.3, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-ink/10 bg-coal"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-ink/60 text-cream backdrop-blur transition-colors hover:border-gold hover:text-gold"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative aspect-[16/7] overflow-hidden">
          <Image
            src={program.poster}
            alt={program.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
          <h3 className="absolute bottom-6 left-6 font-serif text-3xl text-cream md:text-4xl">
            {program.title}
          </h3>
        </div>

        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
          {program.levels.map((level) => (
            <div
              key={level.tier}
              className="rounded-xl border border-ink/10 bg-cream p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="font-serif text-xl text-henna">{level.tier}</h4>
                <p className="text-lg font-semibold text-ink">
                  ₹{level.price.toLocaleString("en-IN")}
                  <span className="text-xs text-sand">{level.priceUnit}</span>
                </p>
              </div>
              {level.admissionFee && (
                <p className="mt-1 text-[12px] text-sand">
                  + ₹{level.admissionFee.toLocaleString("en-IN")} one-time
                  registration
                </p>
              )}
              <ul className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-ink/85">
                {level.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-henna" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {program.note && (
          <p className="px-6 pb-2 text-[12px] text-sand/80 sm:px-8">
            {program.note}
          </p>
        )}

        <div className="p-6 pt-4 sm:p-8">
          <a
            href={waLink(`Hello! I'd like to know more about the ${program.title} batches.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Ask about batch timings
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
