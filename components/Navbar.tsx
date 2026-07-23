"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site, waLink } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  // Glass background after slight scroll + hide-on-scroll-down
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 140 && y - lastY > 4);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the overlay on navigation & lock body scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        hidden && !open && "-translate-y-full",
      )}
    >
      <div
        className={cn(
          "transition-all duration-500",
          scrolled && !open
            ? "border-b border-cream/8 bg-ink/80 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="container-x flex h-[76px] items-center justify-between">
          <Link
            href="/"
            className="group relative z-50 font-serif text-2xl tracking-wide text-cream"
          >
            Sai{" "}
            <span className="text-henna transition-colors duration-300 group-hover:text-gold">
              Mehndi & Tattoo
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "link-underline text-[12px] font-medium tracking-[0.22em] uppercase transition-colors duration-300",
                    active ? "is-active text-henna" : "text-cream/80 hover:text-cream",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-solid !px-6 !py-2.5 text-[11px]">
              Book Now
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
          >
            <span
              className={cn(
                "h-px w-7 bg-cream transition-all duration-400",
                open && "translate-y-1 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-7 bg-cream transition-all duration-400",
                open && "-translate-y-1 -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-8 pt-32 pb-10 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "group flex items-baseline gap-4 py-1.5 font-serif text-4xl transition-colors",
                        active ? "text-henna" : "text-cream hover:text-henna",
                      )}
                    >
                      <span className="text-xs tracking-[0.3em] text-sand/60">
                        0{i + 1}
                      </span>
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-2 text-sm font-light text-sand"
            >
              <a href={waLink("Hello! I want to book an appointment.")} className="block hover:text-henna">
                {site.phones[0]}
              </a>
              <a href={`mailto:${site.email}`} className="block hover:text-henna">
                {site.email}
              </a>
              <p className="pt-1 text-xs text-sand/60">{site.address}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
