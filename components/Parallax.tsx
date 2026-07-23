"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Scroll-linked parallax wrapper for background imagery.
 * Children are scaled slightly so edges never show while drifting.
 */
export default function Parallax({
  children,
  strength = 60,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={className ?? "absolute inset-0 overflow-hidden"}>
      <motion.div style={{ y }} className="absolute -inset-y-16 inset-x-0">
        {children}
      </motion.div>
    </div>
  );
}
