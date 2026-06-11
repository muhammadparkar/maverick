import Reveal from "./Reveal";
import { partnerCta } from "../_data/site";

/** Full-width parallax band. Fixed background → cinematic scroll feel. */
export default function CtaBand() {
  return (
    <section
      className="relative bg-coffee bg-cover bg-fixed bg-center py-28 sm:py-36"
      style={{ backgroundImage: `url(${partnerCta.bg})` }}
    >
      <div className="absolute inset-0 bg-coffee/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-coffee via-coffee/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">
            {partnerCta.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-wide text-silver-bright sm:text-6xl">
            {partnerCta.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-crema sm:text-lg">
            {partnerCta.copy}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-gold px-7 font-display text-sm font-bold uppercase tracking-wide text-coffee transition-colors hover:bg-copper-bright"
            >
              Open a trade account
            </a>
            <a
              href="#coffee"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-silver/40 px-7 font-display text-sm font-bold uppercase tracking-wide text-silver-bright transition-colors hover:border-silver hover:bg-white/5"
            >
              Browse the range
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
