import { partners } from "../_data/site";

export default function Partners() {
  const row = [...partners, ...partners];
  return (
    <section className="border-y border-white/10 bg-coffee py-8">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-crema-dim">
        Trusted by cafés &amp; roasters nationwide
      </p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12 px-6 group-hover:[animation-play-state:paused]">
          {row.map((p, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-lg font-bold uppercase tracking-wide text-crema-dim/70"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
