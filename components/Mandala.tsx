import { cn } from "@/lib/utils";

/**
 * Ornamental henna mandala drawn in SVG. Inherits color via currentColor.
 */
export default function Mandala({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
      className={cn("pointer-events-none select-none", className)}
    >
      <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 6" />
      <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="100" cy="100" r="46" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1 4" />
      {Array.from({ length: 12 }).map((_, i) => (
        <path
          key={`outer-${i}`}
          d="M100 8 C110 30 110 48 100 62 C90 48 90 30 100 8 Z"
          stroke="currentColor"
          strokeWidth="0.9"
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <path
          key={`inner-${i}`}
          d="M100 54 C106 68 106 80 100 90 C94 80 94 68 100 54 Z"
          stroke="currentColor"
          strokeWidth="0.8"
          transform={`rotate(${i * 45 + 15} 100 100)`}
        />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <circle
          key={`dot-${i}`}
          cx="100"
          cy="30"
          r="1.6"
          fill="currentColor"
          transform={`rotate(${i * 45} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="7" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="100" cy="100" r="2.5" fill="currentColor" />
    </svg>
  );
}
