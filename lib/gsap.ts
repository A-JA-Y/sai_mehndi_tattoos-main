import type { gsap as GsapType } from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

type GsapModule = { gsap: typeof GsapType; ScrollTrigger: typeof ScrollTriggerType };

let cached: GsapModule | null = null;
let pending: Promise<GsapModule> | null = null;

/**
 * Loads GSAP + ScrollTrigger on demand (code-split, client-only) so pages
 * that don't use GSAP never pay for it in their initial bundle.
 */
export function loadGsap(): Promise<GsapModule> {
  if (cached) return Promise.resolve(cached);
  if (pending) return pending;

  pending = Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
    ([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      cached = { gsap, ScrollTrigger };
      return cached;
    },
  );
  return pending;
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
