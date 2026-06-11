import Image from "next/image";
import Reveal from "./Reveal";
import { origins } from "../_data/site";

export default function Origins() {
  return (
    <section className="relative bg-coffee py-20 sm:py-28">
      {/* faint plantation backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/bg-origins.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee via-coffee/85 to-coffee" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-copper-bright">
            Where it comes from
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-crema sm:text-5xl">
            Sourced across 22 origins
          </h2>
          <p className="mt-4 text-crema-dim">
            Direct trade relationships, cupped and scored at every harvest. A few
            of the estates and regions behind the range.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {origins.map((o, i) => (
            <Reveal key={o.country} delay={i * 80}>
              <article className="group relative flex h-56 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={o.image}
                  alt={`${o.country} — ${o.region}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee via-coffee/55 to-transparent" />
                <div className="relative mt-auto w-full p-6">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-crema">
                      {o.country}
                    </h3>
                    <span className="text-xs uppercase tracking-wide text-gold">
                      {o.altitude}
                    </span>
                  </div>
                  <p className="text-sm text-copper-bright">{o.region}</p>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm text-crema-dim opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100 motion-reduce:max-h-24 motion-reduce:opacity-100">
                    {o.note}
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
