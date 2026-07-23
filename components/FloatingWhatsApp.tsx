"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons";
import { waLink } from "@/lib/data";
import { EASE } from "@/lib/motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={waLink("Hello! I want to book an appointment.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.5, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6, ease: EASE }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="group fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] md:right-7 md:bottom-7"
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.4s]"
      />
      <WhatsAppIcon className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 rounded-full bg-cream px-4 py-2 text-xs font-medium whitespace-nowrap text-ink opacity-0 shadow-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        Chat with us
      </span>
    </motion.a>
  );
}
