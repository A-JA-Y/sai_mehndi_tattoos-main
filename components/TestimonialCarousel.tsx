"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { reviews } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function TestimonialCarousel() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = useCallback((dir: number) => {
    setIndex(([i]) => [(i + dir + reviews.length) % reviews.length, dir]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6500);
    return () => clearInterval(timer);
  }, [paginate, index]);

  const review = reviews[index];

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 font-serif text-[10rem] leading-none text-henna/15 select-none"
      >
        &ldquo;
      </span>

      <div className="relative min-h-[240px] md:min-h-[210px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.blockquote
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
            transition={{ duration: 0.55, ease: EASE }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) paginate(1);
              else if (info.offset.x > 60) paginate(-1);
            }}
            className="cursor-grab active:cursor-grabbing"
          >
            <div className="mb-6 flex justify-center gap-1.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} aria-hidden>
                  ★
                </span>
              ))}
            </div>
            <p className="font-serif text-2xl leading-snug font-medium text-cream italic md:text-3xl">
              &ldquo;{review.text}&rdquo;
            </p>
            <footer className="mt-7">
              <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">
                {review.name}
              </p>
              <p className="mt-1 text-[13px] tracking-wide text-sand">
                {review.occasion}
              </p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          onClick={() => paginate(-1)}
          aria-label="Previous review"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-all duration-300 hover:border-gold hover:text-gold active:scale-90"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              aria-label={`Go to review ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-400",
                i === index ? "w-7 bg-gold" : "w-1.5 bg-cream/25 hover:bg-cream/50",
              )}
            />
          ))}
        </div>
        <button
          onClick={() => paginate(1)}
          aria-label="Next review"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-all duration-300 hover:border-gold hover:text-gold active:scale-90"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
