"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { coffees, type Roast } from "../_data/site";

const FILTERS: (Roast | "All")[] = ["All", "Light", "Medium", "Dark"];

const ROAST_LEVEL: Record<Roast, number> = { Light: 1, Medium: 2, Dark: 3 };

function RoastMeter({ roast }: { roast: Roast }) {
  const level = ROAST_LEVEL[roast];
  return (
    <div className="flex items-center gap-1.5" aria-label={`${roast} roast`}>
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-7 rounded-full ${
            i <= level ? "bg-copper" : "bg-ink/10"
          }`}
        />
      ))}
      <span className="ml-1.5 text-xs uppercase tracking-wide text-ink-dim">
        {roast}
      </span>
    </div>
  );
}

export default function Coffee() {
  const [filter, setFilter] = useState<Roast | "All">("All");
  const list = coffees.filter((c) => filter === "All" || c.roast === filter);

  return (
    <section id="coffee" className="scroll-mt-24 bg-cream py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-copper">
            01 — Coffee beans
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-ink sm:text-5xl">
            Single-origin &amp; signature blends
          </h2>
          <p className="mt-4 text-ink-dim">
            Roasted to spec in small batches. Filter by roast to find the profile
            for your bar.
          </p>
        </Reveal>

        {/* roast filter tabs */}
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by roast">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`cursor-pointer rounded-lg border px-4 py-2 font-display text-sm font-medium uppercase tracking-wide transition-colors ${
                filter === f
                  ? "border-copper bg-copper text-cream"
                  : "border-ink/15 text-ink-dim hover:border-ink/40 hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <article className="group flex h-full cursor-default flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white/70 shadow-[0_18px_40px_-30px_rgba(28,16,8,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-copper/50 hover:shadow-copper-glow">
                <div className="relative aspect-[5/3] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={`${c.name} coffee`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-md bg-cream/90 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-copper backdrop-blur-sm">
                    {c.roast}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink">
                    {c.name}
                  </h3>
                </div>
                <p className="mt-1 text-sm text-copper">{c.origin}</p>

                <div className="mt-4">
                  <RoastMeter roast={c.roast} />
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.notes.map((n) => (
                    <span
                      key={n}
                      className="rounded-md border border-ink/10 bg-cream px-2.5 py-1 text-xs text-ink-dim"
                    >
                      {n}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 text-xs text-ink-dim">
                  <span>{c.process}</span>
                  <span>{c.bag}</span>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="font-display text-xl font-bold text-copper">
                    {c.price}
                  </span>
                  <a
                    href="#quote"
                    className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-cream px-4 text-sm font-medium uppercase tracking-wide text-ink ring-1 ring-ink/15 transition-colors hover:bg-copper hover:text-cream hover:ring-copper"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M6 6h15l-1.5 9h-12zM6 6L5 3H3M9 20a1 1 0 1 0 0-.01M18 20a1 1 0 1 0 0-.01" />
                    </svg>
                    Add to order
                  </a>
                </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
