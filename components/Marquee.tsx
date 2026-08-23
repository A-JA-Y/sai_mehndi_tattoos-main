import { cn } from "@/lib/utils";

/**
 * Infinite scrolling text strip. Pure CSS animation, pauses on hover.
 */
export default function Marquee({
  items,
  className,
  itemClassName,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={cn("group overflow-hidden", className)}>
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={i}
            className={cn(
              "flex shrink-0 items-center gap-8 pr-8 font-serif text-2xl tracking-wide whitespace-nowrap md:gap-12 md:pr-12 md:text-3xl",
              itemClassName,
            )}
          >
            {item}
            <span aria-hidden className="text-[17px] opacity-60">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
