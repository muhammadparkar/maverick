type WingMarkProps = {
  className?: string;
  title?: string;
};

/**
 * Maverick aviation wing monogram — swept wings with speed lines around a
 * central "M". Inherits `currentColor`; pair with `.metal-text`-style fills via
 * the parent when a chrome look is wanted.
 */
export default function WingMark({
  className = "",
  title = "Maverick",
}: WingMarkProps) {
  return (
    <svg
      viewBox="0 0 240 80"
      role="img"
      aria-label={title}
      className={className}
      fill="currentColor"
    >
      {/* left wing */}
      <g>
        <path d="M104 40 L40 26 L70 33 L36 32 L74 38 Z" />
        <path d="M104 44 L40 54 L70 47 L36 48 L74 42 Z" />
        <path d="M100 34 L8 18 L52 28 L4 24 L60 31 Z" opacity="0.75" />
        <path d="M100 46 L8 62 L52 52 L4 56 L60 49 Z" opacity="0.75" />
      </g>
      {/* right wing (mirror) */}
      <g transform="translate(240,0) scale(-1,1)">
        <path d="M104 40 L40 26 L70 33 L36 32 L74 38 Z" />
        <path d="M104 44 L40 54 L70 47 L36 48 L74 42 Z" />
        <path d="M100 34 L8 18 L52 28 L4 24 L60 31 Z" opacity="0.75" />
        <path d="M100 46 L8 62 L52 52 L4 56 L60 49 Z" opacity="0.75" />
      </g>
      {/* central M shield */}
      <path d="M104 18 H136 L120 62 Z" opacity="0.0" />
      <path d="M106 20 L120 56 L134 20 L128 20 L120 42 L112 20 Z" />
      <path d="M118 16 L122 16 L122 64 L118 64 Z" opacity="0.6" />
    </svg>
  );
}
