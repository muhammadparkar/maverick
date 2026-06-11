"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { company } from "../_data/site";

// Decorative floating beans — positioned %, varied size/parallax depth.
const BEANS = [
  { left: "8%", top: "22%", size: 34, depth: 0.25, delay: "0s" },
  { left: "84%", top: "18%", size: 46, depth: 0.4, delay: "1.2s" },
  { left: "72%", top: "64%", size: 28, depth: 0.18, delay: "0.6s" },
  { left: "16%", top: "70%", size: 40, depth: 0.32, delay: "1.8s" },
  { left: "50%", top: "12%", size: 22, depth: 0.15, delay: "0.9s" },
  { left: "92%", top: "48%", size: 30, depth: 0.28, delay: "2.1s" },
];

function Bean({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden>
      <ellipse cx="20" cy="20" rx="13" ry="18" fill="#241b16" transform="rotate(28 20 20)" />
      <path
        d="M14 6 C22 14 22 26 26 34"
        stroke="#4a3022"
        strokeWidth="2.4"
        fill="none"
        transform="rotate(28 20 20)"
      />
    </svg>
  );
}

export default function Hero() {
  const [offset, setOffset] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (raf.current != null) return;
      raf.current = requestAnimationFrame(() => {
        setOffset(window.scrollY);
        raf.current = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-coffee"
    >
      {/* background photo + cinematic overlay */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee/70 via-coffee/85 to-coffee" />
        <div className="absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-copper/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[40vh] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      {/* parallax beans */}
      <div className="pointer-events-none absolute inset-0">
        {BEANS.map((b, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: b.left,
              top: b.top,
              transform: `translateY(${offset * b.depth * -1}px)`,
              animationDelay: b.delay,
              opacity: 0.7,
            }}
          >
            <Bean size={b.size} />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-28 text-center sm:px-8">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-display text-xs uppercase tracking-[0.3em] text-crema-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Wholesale · since 1998
        </p>

        <h1 className="flex justify-center">
          <span className="sr-only">Maverick Trading</span>
          <Image
            src="/maverick-logo.png"
            alt="Maverick Trading"
            width={908}
            height={275}
            priority
            className="h-auto w-full max-w-md drop-shadow-[0_8px_30px_rgba(184,115,51,0.35)] sm:max-w-xl lg:max-w-2xl"
          />
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-crema sm:text-lg">
          {company.tagline} Sourced direct, roasted small-batch and engineered to
          last — for cafés, roasters and retailers.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#coffee"
            className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-gold px-7 font-display text-sm font-bold uppercase tracking-wide text-coffee transition-colors hover:bg-copper-bright sm:w-auto"
          >
            Browse the range
          </Link>
          <Link
            href="#quote"
            className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-silver/40 px-7 font-display text-sm font-bold uppercase tracking-wide text-silver-bright transition-colors hover:border-silver hover:bg-white/5 sm:w-auto"
          >
            Request a quote
          </Link>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-crema-dim">
        <svg viewBox="0 0 24 40" className="h-9 w-5 animate-float" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <rect x="1" y="1" width="22" height="38" rx="11" />
          <circle cx="12" cy="11" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      </div>
    </section>
  );
}
