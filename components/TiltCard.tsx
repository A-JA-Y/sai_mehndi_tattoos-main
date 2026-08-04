"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Subtle 3D tilt-on-hover microinteraction. Desktop-only (pointer: fine);
 * inert on touch devices so it never interferes with tap navigation.
 */
export default function TiltCard({
  children,
  className,
  strength = 8,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 300, damping: 22, mass: 0.4 });
  const sry = useSpring(ry, { stiffness: 300, damping: 22, mass: 0.4 });
  const scale = useSpring(1, { stiffness: 300, damping: 20 });
  const glowX = useTransform(sry, [-strength, strength], [0, 100]);
  const glowY = useTransform(srx, [strength, -strength], [0, 100]);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current || !window.matchMedia("(pointer: fine)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * strength * 2);
    rx.set(-py * strength * 2);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => scale.set(1.015)}
      onMouseLeave={reset}
      style={{ rotateX: srx, rotateY: sry, scale, transformPerspective: 900 }}
      className={cn("group relative", className)}
    >
      {children}
      <motion.span
        aria-hidden
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]: number[]) =>
              `radial-gradient(320px circle at ${gx}% ${gy}%, rgba(242,230,169,0.16), transparent 70%)`,
          ),
        }}
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.div>
  );
}
