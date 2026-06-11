import Reveal from "./Reveal";
import { steps } from "../_data/site";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-coffee py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-copper-bright">
            How we work
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-crema sm:text-5xl">
            Sourced to delivered
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-copper/0 via-copper/50 to-copper/0 lg:block" />

          <ol className="grid gap-8 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} as="li" delay={i * 110} className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-copper/50 bg-coffee font-display text-lg font-bold text-gold">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-crema">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-crema-dim">
                  {s.copy}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
