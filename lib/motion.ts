import { cubicBezier, type Variants } from "framer-motion";

/** Signature luxe easing used across the site */
export const EASE = cubicBezier(0.22, 1, 0.36, 1);

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay: i * 0.08 },
  }),
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
