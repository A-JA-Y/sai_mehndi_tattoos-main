"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { galleryItems, type GalleryItem } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const categories = ["All", "Bridal", "Arabic", "Festive"] as const;

export default function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<number | null>(null);

  const items = galleryItems.filter(
    (item) => filter === "All" || item.category === filter,
  );

  const step = useCallback(
    (dir: number) => {
      setSelected((s) =>
        s === null ? s : (s + dir + items.length) % items.length,
      );
    },
    [items.length],
  );

  // Keyboard navigation + scroll lock for the lightbox
  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, step]);

  return (
    <>
      {/* Filter pills */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setSelected(null);
            }}
            className={cn(
              "relative rounded-full px-6 py-2.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300",
              filter === cat ? "text-ink" : "text-sand hover:text-cream",
            )}
          >
            {filter === cat && (
              <motion.span
                layoutId="gallery-pill"
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute inset-0 rounded-full bg-henna"
              />
            )}
            <span className="relative">{cat}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.button
              layout
              key={item.src + item.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: EASE }}
              onClick={() => setSelected(i)}
              aria-label={`View ${item.alt}`}
              className="group relative aspect-[3/4] cursor-zoom-in overflow-hidden rounded-xl"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[10px] font-medium tracking-[0.25em] text-cream uppercase">
                  {item.category}
                </span>
                <Expand className="h-4 w-4 text-henna" />
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && items[selected] && (
          <Lightbox
            item={items[selected]}
            index={selected}
            total={items.length}
            onClose={() => setSelected(null)}
            onStep={step}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function Lightbox({
  item,
  index,
  total,
  onClose,
  onStep,
}: {
  item: GalleryItem;
  index: number;
  total: number;
  onClose: () => void;
  onStep: (dir: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-md md:p-10"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-henna hover:text-henna"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onStep(-1);
        }}
        aria-label="Previous image"
        className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-henna hover:text-henna md:left-8"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onStep(1);
        }}
        aria-label="Next image"
        className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-henna hover:text-henna md:right-8"
      >
        <ArrowRight className="h-5 w-5" />
      </button>

      <motion.figure
        key={item.src}
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-full w-full max-w-3xl"
      >
        <div className="relative aspect-[3/4] max-h-[80vh] w-full overflow-hidden rounded-2xl md:aspect-[4/3]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-contain"
            priority
          />
        </div>
        <figcaption className="mt-4 flex items-center justify-between text-xs tracking-[0.2em] text-sand uppercase">
          <span>{item.category}</span>
          <span>
            {index + 1} / {total}
          </span>
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}
