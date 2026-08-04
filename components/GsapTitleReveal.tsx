"use client";

import { useEffect, useRef } from "react";
import { loadGsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * Curtain-wipe title reveal (GSAP clip-path), used for page H1s.
 * Works with arbitrary ReactNode children (e.g. <em> accent words).
 */
export default function GsapTitleReveal({
  children,
  className,
  delay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;
    let cancelled = false;

    loadGsap().then(({ gsap }) => {
      if (cancelled || !ref.current) return;
      gsap.fromTo(
        ref.current,
        { clipPath: "inset(0 100% 0 0)", x: -14 },
        {
          clipPath: "inset(0 0% 0 0)",
          x: 0,
          duration: 1.1,
          ease: "power4.out",
          delay,
        },
      );
    });

    return () => {
      cancelled = true;
    };
  }, [delay]);

  return (
    <h1 ref={ref} className={cn(className, "will-change-[clip-path,transform]")}>
      {children}
    </h1>
  );
}
