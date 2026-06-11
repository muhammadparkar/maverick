import Image from "next/image";
import Reveal from "./Reveal";
import { services } from "../_data/site";

const ICONS: Record<string, React.ReactNode> = {
  roast: <path d="M12 3c3 4 5 7 5 10a5 5 0 0 1-10 0c0-3 2-6 5-10zM12 13v6" />,
  wrench: <path d="M14 7a4 4 0 0 1-5 5l-5 5 2 2 5-5a4 4 0 0 0 5-5l-2 2-2-2 2-2z" />,
  label: <path d="M3 7h12l5 5-5 5H3zM3 7v10M8 12h.01" />,
  truck: <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7zM7 18a1.5 1.5 0 1 0 0 .01M18 18a1.5 1.5 0 1 0 0 .01" />,
};

export default function Services() {
  return (
    <section className="relative overflow-hidden border-y border-ink/10 bg-cream py-20 text-ink sm:py-28">
      {/* roaster backdrop on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image src="/bg-roaster.jpg" alt="" fill sizes="50vw" className="object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream to-cream/40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-copper">
            More than a supplier
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-ink sm:text-5xl">
            What we do for the trade
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="flex h-full gap-4 rounded-2xl border border-ink/10 bg-white/70 p-6 backdrop-blur-sm transition-colors hover:border-copper/40">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-copper/30 bg-copper/10 text-copper">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[s.icon]}
                  </svg>
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                    {s.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
