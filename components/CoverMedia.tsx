import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Fills its relative/aspect-ratio parent with an autoplay, muted, looping
 * video. Until real footage exists at `src`, the browser simply keeps
 * showing `poster` — no video-file dependency to break the layout.
 *
 * `fit="cover"` is right whenever the poster's shape is close to the frame's,
 * which is how the cards are set up. `fit="contain"` shows the whole frame over
 * a blurred copy of the poster instead — for footage that must not be cropped.
 */
export default function CoverMedia({
  src,
  poster,
  alt,
  sizes = "(max-width: 768px) 100vw, 33vw",
  fit = "cover",
  className,
}: {
  src: string;
  poster: string;
  alt: string;
  sizes?: string;
  fit?: "cover" | "contain";
  className?: string;
}) {
  return (
    <>
      {fit === "contain" && (
        <Image
          src={poster}
          alt=""
          aria-hidden
          fill
          sizes={sizes}
          className="scale-150 object-cover blur-3xl brightness-[0.72] saturate-75"
        />
      )}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        aria-label={alt}
        className={cn(
          "absolute inset-0 h-full w-full",
          fit === "contain" ? "object-contain" : "object-cover",
          className,
        )}
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
