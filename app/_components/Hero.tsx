"use client";

import Link from "next/link";
import Image from "next/image";
import { company } from "../_data/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* hammered-copper backdrop */}
      <div className="absolute inset-0">
        <Image
          src="/copper-texture.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* warm vignette so copy reads, board-style */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_20%,rgba(22,13,7,0.55),rgba(14,8,4,0.92))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee/90 via-coffee/55 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pt-28 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left — editorial copy */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <Image
              src="/maverick-logo.png"
              alt="Maverick Trading"
              width={908}
              height={275}
              priority
              className="h-16 w-auto drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)] sm:h-20"
            />
          </div>

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/70" />
            <span className="font-display text-xs uppercase tracking-[0.34em] text-gold">
              Wholesale · Est. 1998
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-silver-bright sm:text-6xl">
            Coffee, machines
            <span className="block text-copper-bright">&amp; Turkish spice</span>
            <span className="block text-cream">under one roof</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-crema/85 sm:text-lg">
            {company.tagline} Sourced direct, roasted small-batch and engineered to
            last — supplying cafés, roasters and retailers nationwide.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#coffee"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-gold px-7 font-display text-sm font-bold uppercase tracking-wide text-coffee transition-colors hover:bg-gold-bright"
            >
              Browse the range
            </Link>
            <Link
              href="#quote"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-cream/30 bg-coffee/30 px-7 font-display text-sm font-bold uppercase tracking-wide text-cream backdrop-blur-sm transition-colors hover:border-cream/70 hover:bg-coffee/50"
            >
              Open a trade account
            </Link>
          </div>

          {/* trust row */}
          <dl className="mt-12 flex gap-8 border-t border-cream/15 pt-6">
            {[
              ["22", "Origins"],
              ["640+", "Trade partners"],
              ["48h", "Roast-to-dispatch"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl font-bold text-gold">{v}</dt>
                <dd className="text-xs uppercase tracking-[0.15em] text-crema/70">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right — product plate stack (asymmetric, editorial) */}
        <div className="relative hidden lg:block">
          <div className="relative ml-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl ornate-frame">
            <Image
              src="/featured.jpg"
              alt="Maverick House Blend"
              fill
              sizes="40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-gold">
                Bestseller
              </p>
              <p className="font-display text-xl font-bold uppercase tracking-wide text-cream">
                Maverick House Blend
              </p>
            </div>
          </div>

          {/* floating machine chip */}
          <div className="absolute -left-6 top-8 w-40 overflow-hidden rounded-xl border border-cream/15 shadow-2xl">
            <div className="relative aspect-square">
              <Image src="/machine-1.jpg" alt="Maverick espresso machine" fill sizes="160px" className="object-cover" />
            </div>
          </div>

          {/* copper engraved tag */}
          <div className="copper-plate absolute -bottom-4 left-2 rounded-lg px-5 py-3">
            <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-coffee">
              Maverick Engineered
            </span>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60">
        <svg viewBox="0 0 24 40" className="h-9 w-5 animate-float" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <rect x="1" y="1" width="22" height="38" rx="11" />
          <circle cx="12" cy="11" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      </div>
    </section>
  );
}
