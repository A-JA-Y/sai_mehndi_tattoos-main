import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  invert?: boolean; // true when used on cream backgrounds
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
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
      <p
        className={cn(
          "eyebrow",
          centered && "justify-center",
          invert && "text-henna",
        )}
      >
        <span
          aria-hidden
          className={cn("h-px w-8", invert ? "bg-henna/60" : "bg-gold/50")}
        />
        {eyebrow}
        <span
          aria-hidden
          className={cn("h-px w-8", invert ? "bg-henna/60" : "bg-gold/50")}
        />
      </p>
      <h2
        className={cn(
          "mt-4 font-serif text-4xl leading-[1.05] font-medium md:text-5xl lg:text-6xl",
          invert ? "text-ink" : "text-cream",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-[17px]",
            invert ? "text-ink/75" : "text-sand",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
