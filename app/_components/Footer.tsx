import Link from "next/link";
import Image from "next/image";
import { company, navLinks } from "../_data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-coffee-800">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div>
            <Image
              src="/maverick-logo.png"
              alt="Maverick Trading"
              width={908}
              height={275}
              className="h-11 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-crema-dim">
              {company.tagline}
            </p>
            <p className="mt-4 font-display text-sm uppercase tracking-[0.3em] text-copper-bright">
              {company.motto}
            </p>
          </div>

          {/* nav */}
          <nav aria-label="Footer">
            <h3 className="font-display text-xs uppercase tracking-[0.25em] text-crema-dim">
              Range
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-crema transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#quote"
                  className="text-sm text-crema transition-colors hover:text-gold"
                >
                  Request a quote
                </Link>
              </li>
            </ul>
          </nav>

          {/* contact */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.25em] text-crema-dim">
              Trade desk
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-crema">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-gold"
                >
                  {company.phone}
                </a>
              </li>
              <li className="text-crema-dim">{company.address}</li>
              <li className="text-crema-dim">{company.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-crema-dim">
            © {company.name}. Wholesale only. Demo site.
          </p>
          <p className="font-display text-xs uppercase tracking-[0.25em] text-crema-dim">
            Sourced · Roasted · Engineered · Delivered
          </p>
        </div>
      </div>
    </footer>
  );
}
