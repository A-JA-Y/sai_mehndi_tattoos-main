"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, serviceCategories, site, waLink } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  // Denser glass after slight scroll + hide-on-scroll-down
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 160 && y - lastY > 4);
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
        "fixed inset-x-0 top-0 z-50 transition-transform duration-500",
        hidden && !open && "-translate-y-full",
      )}
    >
      <div
        className={cn(
          "transition-colors duration-500",
          open
            ? "bg-henna"
            : scrolled
              ? "border-b border-cream/25 bg-henna shadow-[0_12px_40px_-18px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "bg-henna backdrop-blur-md",
        )}
      >
        {/* Main bar */}
        <div className="container-x flex h-[72px] items-center justify-between">
          <Link
            href="/"
            className="group relative z-50 font-serif text-[24px] tracking-wide text-cream md:text-2xl"
          >
            Sai{" "}
            <span className="text-cream/85 transition-colors duration-300 group-hover:text-cream">
              Mehandi & Tattoo
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
                    "link-underline text-[15px] font-semibold tracking-[0.16em] uppercase transition-colors duration-300",
                    active ? "is-active text-cream" : "text-cream/85 hover:text-cream",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-cream px-6 py-2.5 text-[14px] font-semibold tracking-[0.16em] text-henna uppercase transition-all duration-300 hover:bg-cream/90"
            >
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
                "h-[1.5px] w-7 bg-cream transition-all duration-400",
                open && "translate-y-1 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-[1.5px] w-7 bg-cream transition-all duration-400",
                open && "-translate-y-1 -rotate-45",
              )}
            />
          </button>
        </div>

        {/* Services sub-navbar */}
        <nav
          aria-label="Our services"
          className={cn(
            "border-t border-cream/25 transition-opacity duration-300",
            open && "pointer-events-none opacity-0",
          )}
        >
          <div className="no-scrollbar overflow-x-auto">
            <div className="mx-auto flex h-11 w-max items-center gap-5 px-5 sm:px-8 md:gap-6">
              {serviceCategories.map((category, i) => (
                <Fragment key={category.key}>
                  <Link
                    href={category.href}
                    className="shrink-0 text-[13px] font-semibold tracking-[0.14em] whitespace-nowrap text-cream/85 uppercase transition-colors duration-300 hover:text-cream md:text-[13px]"
                  >
                    {category.label}
                  </Link>
                  {i < serviceCategories.length - 1 && (
                    <span aria-hidden className="shrink-0 text-[10px] text-cream/70">
                      ✦
                    </span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-henna px-8 pt-28 pb-10 lg:hidden"
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
                    transition={{ duration: 0.35, ease: EASE, delay: 0.1 + i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "group flex items-baseline gap-4 py-1.5 font-serif text-4xl transition-colors",
                        active ? "text-cream" : "text-cream/80 hover:text-cream",
                      )}
                    >
                      <span className="text-[13px] tracking-[0.3em] text-cream/85">
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
              transition={{ delay: 0.3, duration: 0.35 }}
              className="space-y-4 pt-8"
            >
              <Link href="/contact" className="btn-on-henna w-full sm:w-auto">
                Book an Appointment
              </Link>
              <div className="space-y-2 text-[17px] text-cream">
                <a
                  href={waLink("Hello! I want to book an appointment.")}
                  className="block underline-offset-4 hover:underline"
                >
                  {site.phones[0]}
                </a>
                <a href={`mailto:${site.email}`} className="block underline-offset-4 hover:underline">
                  {site.email}
                </a>
                <p className="pt-1 text-[13px] text-cream/90">{site.address}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
