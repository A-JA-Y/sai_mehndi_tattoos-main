"use client";

import { useEffect, useRef } from "react";
import { loadGsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Scroll-scrubbed parallax (GSAP ScrollTrigger) for background imagery.
 * Children are given extra vertical bleed so the drift never shows edges.
 */
export default function GsapParallax({
  children,
  speed = 0.25,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !wrapperRef.current || !innerRef.current) return;
    let cancelled = false;
    let ctx: ReturnType<typeof import("gsap").gsap.context> | undefined;

    loadGsap().then(({ gsap, ScrollTrigger }) => {
      if (cancelled || !wrapperRef.current || !innerRef.current) return;
      ctx = gsap.context(() => {
        gsap.to(innerRef.current, {
          yPercent: speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });
      ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [speed]);

  return (
    <div ref={wrapperRef} className={className ?? "absolute inset-0 overflow-hidden"}>
      <div ref={innerRef} className="absolute -inset-y-24 inset-x-0">
        {children}
      </div>
    </div>
  );
}
