"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Expand, Plus, X } from "lucide-react";
import {
  galleryImages,
  type GalleryImage,
  type MehndiStyle,
} from "@/lib/gallery";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 18;

const categories = [
  { key: "all", label: "All" },
  { key: "mehndi", label: "Mehndi" },
  { key: "tattoo", label: "Tattoos" },
  { key: "sketch", label: "Sketches" },
  { key: "nail-art", label: "Nail Art" },
  { key: "event", label: "Events" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

const mehndiStyles: { key: MehndiStyle | "all"; label: string }[] = [
  { key: "all", label: "All Styles" },
  { key: "bridal", label: "Bridal" },
  { key: "arabic", label: "Arabic" },
  { key: "festive", label: "Festive" },
  { key: "minimal", label: "Minimal" },
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState<CategoryKey>("all");
  const [style, setStyle] = useState<MehndiStyle | "all">("all");
  const [shown, setShown] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<number | null>(null);

  const items = galleryImages.filter((item) => {
    if (filter !== "all" && item.category !== filter) return false;
    if (filter === "mehndi" && style !== "all" && item.style !== style)
      return false;
    return true;
  });

  const visible = items.slice(0, shown);
  const remaining = items.length - visible.length;

  const countFor = (key: CategoryKey) =>
    key === "all"
      ? galleryImages.length
      : galleryImages.filter((i) => i.category === key).length;

  const styleCountFor = (key: MehndiStyle | "all") =>
    key === "all"
      ? countFor("mehndi")
      : galleryImages.filter(
          (i) => i.category === "mehndi" && i.style === key,
        ).length;

  const selectFilter = (key: CategoryKey) => {
    setFilter(key);
    setStyle("all");
    setShown(PAGE_SIZE);
    setSelected(null);
  };

  const selectStyle = (key: MehndiStyle | "all") => {
    setStyle(key);
    setShown(PAGE_SIZE);
    setSelected(null);
  };

  const step = useCallback(
    (dir: number) => {
      setSelected((s) =>
        s === null ? s : (s + dir + visible.length) % visible.length,
      );
    },
    [visible.length],
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
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => selectFilter(cat.key)}
            className={cn(
              "relative rounded-full px-5 py-2.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 md:px-6",
              filter === cat.key ? "text-ink" : "text-sand hover:text-cream",
            )}
          >
            {filter === cat.key && (
              <motion.span
                layoutId="gallery-pill"
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute inset-0 rounded-full bg-henna"
              />
            )}
            <span className="relative">
              {cat.label}
              <span className="ml-1.5 text-[9px] opacity-60">
                {countFor(cat.key)}
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Mehndi style sub-filter */}
      <AnimatePresence initial={false}>
        {filter === "mehndi" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              {mehndiStyles.filter((s) => styleCountFor(s.key) > 0).map((s) => (
                <button
                  key={s.key}
                  onClick={() => selectStyle(s.key)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300",
                    style === s.key
                      ? "border-henna/70 text-henna"
                      : "border-cream/15 text-sand hover:border-cream/40 hover:text-cream",
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Count */}
      <p className="mb-8 text-center text-[11px] tracking-[0.25em] text-sand/70 uppercase">
        Showing {visible.length} of {items.length}
      </p>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        <AnimatePresence mode="popLayout">
          {visible.map((item, i) => (
            <motion.button
              layout
              key={item.src}
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
                  {labelFor(item)}
                </span>
                <Expand className="h-4 w-4 text-henna" />
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show more */}
      {remaining > 0 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShown((s) => s + PAGE_SIZE)}
            className="btn-outline"
          >
            <Plus className="h-4 w-4" />
            Show more ({remaining} left)
          </button>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && visible[selected] && (
          <Lightbox
            item={visible[selected]}
            index={selected}
            total={visible.length}
            onClose={() => setSelected(null)}
            onStep={step}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function labelFor(item: GalleryImage) {
  const cat = categories.find((c) => c.key === item.category)?.label ?? "";
  return item.category === "mehndi" && item.style
    ? `${item.style} ${cat}`
    : cat;
}

function Lightbox({
  item,
  index,
  total,
  onClose,
  onStep,
}: {
  item: GalleryImage;
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
          <span>{labelFor(item)}</span>
          <span>
            {index + 1} / {total}
          </span>
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}
