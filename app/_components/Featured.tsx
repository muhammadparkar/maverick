import Image from "next/image";
import Reveal from "./Reveal";
import { featured } from "../_data/site";

export default function Featured() {
  return (
    <section className="bg-coffee py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-white/10 bg-coffee-800 lg:grid-cols-2">
            {/* image */}
            <div className="relative min-h-[320px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute left-5 top-5 rounded-full bg-gold px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-coffee">
                {featured.badge}
              </span>
            </div>

            {/* copy */}
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-crema sm:text-4xl">
                {featured.name}
              </h2>
              <p className="mt-4 text-crema-dim">{featured.copy}</p>

              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {featured.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-crema">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="font-display text-3xl font-bold text-gold">
                    {featured.price}
                  </span>
                  <p className="mt-1 text-xs text-crema-dim">{featured.unit}</p>
                </div>
                <a
                  href="#quote"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-gold px-7 font-display text-sm font-bold uppercase tracking-wide text-coffee transition-colors hover:bg-copper-bright"
                >
                  Order &amp; sample
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
