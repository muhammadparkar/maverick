import Image from "next/image";
import Reveal from "./Reveal";
import { galleryImages } from "../_data/site";

// Asymmetric bento gallery — first tile spans larger for an editorial feel.
const SPAN = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "",
  "",
];

export default function Gallery() {
  return (
    <section className="bg-coffee py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-10 max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-copper-bright">
            In the wild
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-crema sm:text-5xl">
            Maverick on the bar
          </h2>
        </Reveal>

        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[200px]">
          {galleryImages.map((g, i) => (
            <Reveal
              key={g.src}
              delay={i * 50}
              className={`group relative overflow-hidden rounded-xl ${SPAN[i] ?? ""}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-coffee/0 transition-colors duration-300 group-hover:bg-coffee/30" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
