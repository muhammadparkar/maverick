import Link from "next/link";
import Reveal from "./Reveal";
import { pillars } from "../_data/site";

const ICONS: Record<string, React.ReactNode> = {
  beans: (
    <path d="M7 5c5 3 5 11 10 14M10 4C6 8 6 16 4 20" />
  ),
  machines: (
    <path d="M5 4h14v5H5zM8 9v3a4 4 0 0 0 8 0V9M9 20h6M12 16v4" />
  ),
  spice: (
    <path d="M12 3c3 4 5 7 5 10a5 5 0 0 1-10 0c0-3 2-6 5-10zM12 13v6" />
  ),
};

const ACCENT: Record<string, string> = {
  silver: "group-hover:border-ink/30 text-ink",
  copper: "group-hover:border-copper/60 group-hover:shadow-copper-glow text-copper",
  gold: "group-hover:border-teal-bright/60 text-teal-bright",
};

export default function Pillars() {
  return (
    <section className="relative border-y border-ink/10 bg-cream py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-copper">
            Three lines, one standard
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-ink sm:text-5xl">
            Everything the bar needs
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <Link
                href={p.href}
                className={`group flex h-full cursor-pointer flex-col rounded-2xl border border-ink/10 bg-white/60 p-7 shadow-[0_18px_40px_-30px_rgba(28,16,8,0.5)] transition-all duration-300 hover:-translate-y-1 ${ACCENT[p.accent]}`}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-ink/10 bg-cream">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[p.id]}
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-dim">
                  {p.copy}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide">
                  Explore
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
