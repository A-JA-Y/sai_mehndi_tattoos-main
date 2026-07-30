import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Mandala from "@/components/Mandala";

export default function NotFound() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      <Mandala className="absolute h-[560px] w-[560px] animate-spin-slow text-henna/10" />
      <div className="relative z-10 text-center">
        <p className="eyebrow justify-center">
          <span aria-hidden className="h-px w-8 bg-gold/50" />
          Page not found
          <span aria-hidden className="h-px w-8 bg-gold/50" />
        </p>
        <h1 className="mt-4 font-serif text-8xl font-medium text-cream md:text-9xl">
          4<span className="text-gold">0</span>4
        </h1>
        <p className="mx-auto mt-4 max-w-xs text-[15px] text-sand">
          This page seems unadorned. Let&apos;s take you back to the beautiful
          part.
        </p>
        <Link href="/" className="btn-solid mt-9">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
