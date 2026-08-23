"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { loadGsap, prefersReducedMotion } from "@/lib/gsap";

export default function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const numRef = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!ref.current) return;

    if (prefersReducedMotion()) {
      setDisplay(value.toLocaleString("en-IN"));
      return;
    }

    let cancelled = false;
    let trigger: { kill: () => void } | undefined;

    loadGsap().then(({ gsap, ScrollTrigger }) => {
      if (cancelled || !ref.current) return;
      const counter = { val: 0 };
      trigger = ScrollTrigger.create({
        trigger: ref.current,
        start: "top bottom-=40",
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            val: value,
            duration: 1.8,
            ease: "power2.out",
            snap: { val: 1 },
            onUpdate: () =>
              setDisplay(Math.round(counter.val).toLocaleString("en-IN")),
            onComplete: () => {
              if (numRef.current) {
                gsap.fromTo(
                  numRef.current,
                  { scale: 1 },
                  { scale: 1.08, duration: 0.14, yoyo: true, repeat: 1, ease: "power1.inOut" },
                );
              }
            },
          });
        },
      });
    });

    return () => {
      cancelled = true;
      trigger?.kill();
    };
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="text-center"
    >
      <div
        ref={numRef}
        className="font-serif text-5xl font-medium text-ink md:text-6xl"
      >
        <span ref={ref}>{display}</span>
        <span className="text-henna">{suffix}</span>
      </div>
      <p className="mt-2 text-[13px] font-semibold tracking-[0.28em] text-sand uppercase md:text-[14px]">
        {label}
      </p>
    </motion.div>
  );
}
