import Image from "next/image";
import Reveal from "./Reveal";
import { spices } from "../_data/site";

export default function Spices() {
  return (
    <>
    {/* parallax heritage strip */}
    <section
      className="relative flex min-h-[44vh] items-center justify-center bg-cover bg-center text-center"
      style={{ backgroundImage: "url(/bg-spice.jpg)" }}
    >
      <div className="absolute inset-0 bg-coffee/70" />
      <div className="relative mx-auto max-w-3xl px-5">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">
          The Anatolian heritage
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-silver-bright sm:text-6xl">
          Spice with a story
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-crema">
          From the bazaars of Marmara to Eastern Anatolia — sun-dried, stone-milled
          and sealed at source.
        </p>
      </div>
    </section>

    <section id="spice" className="damask scroll-mt-24 py-20 text-sienna sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-copper">
            03 — Turkish spice mixes
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-sienna sm:text-5xl">
            Anatolian &amp; Ottoman blends
          </h2>
          <p className="mt-4 max-w-xl text-[#5c4030]">
            Hand-blended, milled fresh and sealed at origin. Hover a jar to see
            what&apos;s inside.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {spices.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <article className="ornate-frame group relative flex h-full cursor-default flex-col overflow-hidden rounded-2xl border border-gold/30 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-22px_rgba(74,48,34,0.6)]">
                {/* jar lid */}
                <div className="h-3 w-full bg-gradient-to-r from-copper to-copper-bright" />
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`${s.name} spice`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-sienna">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-copper">
                    {s.region}
                  </p>
                  <p className="mt-4 text-sm text-[#5c4030]">
                    <span className="font-semibold">Use:</span> {s.uses}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="font-display text-base font-bold leading-tight text-copper">
                      {s.price}
                    </span>
                    <a
                      href="#quote"
                      className="inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-lg bg-copper px-3.5 text-[11px] font-bold uppercase tracking-wide text-cream transition-colors hover:bg-copper-bright"
                    >
                      Add to order
                    </a>
                  </div>

                  {/* hover-reveal ingredients */}
                  <div className="mt-auto pt-5">
                    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr] motion-reduce:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-copper">
                          In the blend
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {s.blend.map((b) => (
                            <span
                              key={b}
                              className="rounded-md bg-sienna/10 px-2.5 py-1 text-xs text-sienna"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
