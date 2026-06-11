import Image from "next/image";
import Reveal from "./Reveal";
import { testimonials } from "../_data/site";

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
          <path d="M12 2l3 6.5 7 .9-5 4.8 1.3 7L12 17.8 5.4 21.2 6.7 14.2 1.7 9.4l7-.9z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-teal">
            Trade reviews
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-ink sm:text-5xl">
            What the bar says
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white/60 p-7 shadow-[0_18px_40px_-30px_rgba(37,26,18,0.5)]">
                <Stars />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover ring-1 ring-copper/50"
                  />
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-wide text-ink">
                      {t.name}
                    </p>
                    <p className="text-xs text-ink-dim">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
