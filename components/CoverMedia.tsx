import { cn } from "@/lib/utils";

/**
 * Fills its relative/aspect-ratio parent with an autoplay, muted, looping
 * video. Until real footage exists at `src`, the browser simply keeps
 * showing `poster` — no video-file dependency to break the layout.
 */
export default function CoverMedia({
  src,
  poster,
  alt,
  className,
}: {
  src: string;
  poster: string;
  alt: string;
  className?: string;
}) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-label={alt}
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
