import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * A photo that never loses a face to its frame.
 *
 * Two modes, because the studio's photos range from 9:16 phone shots to
 * landscape collages and no single frame suits all of them:
 *
 * - `cover` (default) fills the frame edge to edge. Use it where the frame
 *   already follows the image's own aspect ratio — a masonry tile — or where
 *   the two are close enough that the crop is imperceptible (see `fillsFrame`).
 * - `contain` shows the whole photo, filling what is left over with a blurred,
 *   over-scaled copy of itself so the tile still reads as full-bleed instead of
 *   showing bars. Use it for the odd-shaped outliers and for big single images
 *   whose subject must survive intact.
 *
 * Both layers resolve to the same optimized URL, so `contain` is still a single
 * download. Fills its nearest positioned ancestor, which must clip
 * (`overflow-hidden`) or the blurred backdrop bleeds past the frame.
 */
export default function FitImage({
  src,
  alt,
  sizes,
  priority,
  fit = "cover",
  /** Tailwind object-position utility, e.g. "object-top" or "md:object-right". */
  position,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  position?: string;
  className?: string;
}) {
  if (fit === "cover") {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", position, className)}
      />
    );
  }

  return (
    <>
      {/* Soft rather than showy: a heavy blur at low contrast reads as ambient
          colour around the photo, where a lightly-blurred copy reads as a smear. */}
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes={sizes}
        priority={priority}
        className="scale-150 object-cover blur-3xl brightness-[0.72] saturate-75"
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-contain", position, className)}
      />
    </>
  );
}
