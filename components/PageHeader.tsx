import Mandala from "@/components/Mandala";
import Reveal from "@/components/Reveal";
import GsapTitleReveal from "@/components/GsapTitleReveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/8 pt-40 pb-16 md:pt-48 md:pb-24">
      <Mandala className="absolute -top-24 -right-24 h-[380px] w-[380px] animate-spin-slow text-henna/10 md:-top-32 md:-right-16 md:h-[520px] md:w-[520px]" />
      <div
        aria-hidden
        className="absolute top-0 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[100%] bg-henna/6 blur-3xl"
      />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow text-henna">
            <span aria-hidden className="h-px w-8 bg-henna/50" />
            {eyebrow}
          </p>
        </Reveal>
        <GsapTitleReveal
          delay={0.1}
          className="mt-5 max-w-3xl font-serif text-[2.9rem] leading-[1.02] font-medium tracking-[-0.01em] text-ink sm:text-6xl sm:leading-[0.98] md:text-8xl"
        >
          {title}
        </GsapTitleReveal>
        {description && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink/75 md:text-[18px]">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
