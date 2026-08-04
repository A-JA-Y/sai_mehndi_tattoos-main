import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  /** @deprecated the whole site is a single light theme now; kept for API compatibility */
  invert?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={cn(
        "mb-12 max-w-2xl md:mb-16",
        centered && "mx-auto text-center",
        className,
      )}
    >
      <p className={cn("eyebrow text-henna", centered && "justify-center")}>
        <span aria-hidden className="h-px w-8 bg-henna/60" />
        {eyebrow}
        <span aria-hidden className="h-px w-8 bg-henna/60" />
      </p>
      <h2 className="mt-5 font-serif text-[2.75rem] leading-[1.03] font-medium tracking-[-0.01em] text-ink md:text-6xl lg:text-7xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base leading-relaxed text-ink/75 md:text-[17px]">
          {description}
        </p>
      )}
    </Reveal>
  );
}
