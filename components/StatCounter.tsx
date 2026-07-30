"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { EASE } from "@/lib/motion";

export default function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString("en-IN"));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: EASE });
      return controls.stop;
    }
  }, [inView, count, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-5xl font-medium text-cream md:text-6xl">
        <motion.span>{rounded}</motion.span>
        <span className="text-gold">{suffix}</span>
      </div>
      <p className="mt-2 text-xs font-semibold tracking-[0.28em] text-sand uppercase md:text-[13px]">
        {label}
      </p>
    </div>
  );
}
