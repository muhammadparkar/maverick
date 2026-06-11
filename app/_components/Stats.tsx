"use client";

import { useEffect, useState } from "react";
import { useInView } from "./useInView";
import { stats, type Stat } from "../_data/site";

function Counter({ stat }: { stat: Stat }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;

    // Respect reduced motion — snap to final value.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- snap to final value when motion is reduced
      setN(stat.value);
      return;
    }

    const duration = 1400;
    let start: number | null = null;
    let frame = 0;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(Math.round(stat.value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, stat.value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold tracking-tight text-gold sm:text-5xl">
        {n.toLocaleString()}
        <span className="text-copper-bright">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-crema-dim">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      className="relative bg-coffee bg-cover bg-center py-20"
      style={{ backgroundImage: "url(/sacks.jpg)" }}
    >
      <div className="absolute inset-0 bg-coffee/85" />
      <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-10 px-5 sm:px-8 md:grid-cols-4">
        {stats.map((s) => (
          <Counter key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}
