"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { machines } from "../_data/site";

export default function Machines() {
  const [active, setActive] = useState(0);
  const m = machines[active];

  return (
    <section
      id="machines"
      className="scroll-mt-24 border-y border-white/10 bg-coffee-800 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-copper-bright">
            02 — Machines
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-crema sm:text-5xl">
            Engineered for the café floor
          </h2>
          <p className="mt-4 text-crema-dim">
            Built, calibrated and serviced in-house. Select a machine to view its
            spec.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* selector list */}
          <div className="flex flex-col gap-3">
            {machines.map((mc, i) => (
              <button
                key={mc.name}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`cursor-pointer rounded-2xl border p-5 text-left transition-all duration-300 ${
                  active === i
                    ? "border-copper/60 bg-coffee shadow-copper-glow"
                    : "border-white/10 bg-coffee/40 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-crema">
                    {mc.name}
                  </h3>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      active === i ? "bg-gold" : "bg-white/20"
                    }`}
                  />
                </div>
                <p className="mt-1.5 text-sm text-crema-dim">{mc.blurb}</p>
              </button>
            ))}
          </div>

          {/* spec panel — brushed metal + copper plate */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#2a2320] to-[#14100d]">
              {/* machine photo */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
                <Image
                  key={m.image}
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14100d] via-transparent to-transparent" />
              </div>

              <div className="relative p-7">
              {/* brushed sheen */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.05)_50%,transparent_60%)]" />

              {/* copper engraved plate */}
              <div className="relative mb-6 inline-flex flex-col rounded-lg bg-gradient-to-br from-copper-bright to-copper px-5 py-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_8px_20px_-8px_rgba(0,0,0,0.7)]">
                <span className="font-display text-base font-bold uppercase tracking-[0.25em] text-coffee">
                  {m.plate}
                </span>
              </div>

              <h3 className="relative font-display text-2xl font-bold uppercase tracking-wide text-crema">
                {m.name}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-crema-dim">
                {m.blurb}
              </p>

              <dl className="relative mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
                {m.specs.map((s) => (
                  <div key={s.label} className="bg-coffee-800 p-4">
                    <dt className="text-xs uppercase tracking-[0.2em] text-crema-dim">
                      {s.label}
                    </dt>
                    <dd className="mt-1.5 font-display text-lg font-bold text-silver-bright">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="relative mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-crema-dim">
                    Trade price
                  </p>
                  <p className="font-display text-2xl font-bold text-gold">
                    {m.price}
                  </p>
                </div>
                <a
                  href="#quote"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-gold px-5 font-display text-sm font-bold uppercase tracking-wide text-coffee transition-colors hover:bg-copper-bright"
                >
                  Request a demo
                </a>
              </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
