"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { site, waLink } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

function Action({
  href,
  label,
  delay,
  external = false,
  ping = false,
  className,
  children,
}: {
  href: string;
  label: string;
  delay: number;
  external?: boolean;
  ping?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      initial={{ opacity: 0, scale: 0.5, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: EASE }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className={cn(
        "group relative flex items-center justify-center rounded-full",
        className,
      )}
    >
      {ping && (
        <span
          aria-hidden
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.4s]"
        />
      )}
      {children}
      <span className="pointer-events-none absolute right-full mr-3 rounded-full bg-cream px-4 py-2 text-xs font-medium whitespace-nowrap text-ink opacity-0 shadow-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        {label}
      </span>
    </motion.a>
  );
}

export default function FloatingActions() {
  const phoneHref = `tel:${site.phones[0].replace(/\s/g, "")}`;

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-center gap-3 md:right-7 md:bottom-7">
      <Action
        href={`mailto:${site.email}`}
        label="Email us"
        delay={1.7}
        className="h-12 w-12 bg-gold text-ink shadow-[0_10px_30px_-8px_rgba(247,235,171,0.45)]"
      >
        <Mail className="h-5 w-5" />
      </Action>
      <Action
        href={phoneHref}
        label="Call us"
        delay={1.55}
        className="h-12 w-12 bg-henna text-cream shadow-[0_10px_30px_-8px_rgba(167,30,34,0.55)]"
      >
        <Phone className="h-5 w-5" />
      </Action>
      <Action
        href={waLink("Hello! I want to book an appointment.")}
        label="Chat with us"
        delay={1.4}
        external
        ping
        className="h-14 w-14 bg-[#25D366] text-ink shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)]"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </Action>
    </div>
  );
}
