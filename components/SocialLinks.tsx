import { Facebook, Instagram, Youtube } from "lucide-react";
import { WhatsAppIcon, XIcon } from "@/components/icons";
import { site, waLink } from "@/lib/data";
import { cn } from "@/lib/utils";

/** One list, so the header and any other surface stay in step with `site.socials`. */
const socials = [
  {
    label: "Instagram",
    href: site.socials.instagram,
    Icon: Instagram,
    size: "h-4 w-4",
  },
  {
    label: "Facebook",
    href: site.socials.facebook,
    Icon: Facebook,
    size: "h-4 w-4",
  },
  {
    label: "YouTube",
    href: site.socials.youtube,
    Icon: Youtube,
    size: "h-4 w-4",
  },
  {
    label: "X (Twitter)",
    href: site.socials.twitter,
    Icon: XIcon,
    size: "h-3.5 w-3.5",
  },
  {
    label: "WhatsApp",
    href: waLink("Hello!"),
    Icon: WhatsAppIcon,
    size: "h-4 w-4",
  },
];

/**
 * The studio's social row. `tone="cream"` is for the henna header bar;
 * `tone="ink"` is for light surfaces.
 */
export default function SocialLinks({
  tone = "cream",
  className,
  iconClassName,
}: {
  tone?: "cream" | "ink";
  className?: string;
  iconClassName?: string;
}) {
  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {socials.map(({ label, href, Icon, size }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "flex items-center justify-center rounded-full transition-all duration-300 active:scale-95",
              tone === "cream"
                ? "text-cream/85 hover:bg-cream/15 hover:text-cream"
                : "border border-ink/15 text-sand hover:border-henna hover:text-henna",
              iconClassName ?? "h-9 w-9",
            )}
          >
            <Icon className={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
