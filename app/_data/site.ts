// Single source of truth for Maverick Trading site content.
// Realistic placeholder data — swap freely without touching components.

export const company = {
  name: "Maverick Trading",
  tagline: "Wholesalers of coffee beans, machines & Turkish spice mixes.",
  motto: "Maverick Engineered.",
  email: "trade@maverick-trading.com",
  phone: "+44 20 7946 0820",
  address: "Unit 7, Anatolia Wharf, London E1 9SX",
  hours: "Mon–Fri · 08:00–18:00 GMT",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Coffee", href: "#coffee" },
  { label: "Machines", href: "#machines" },
  { label: "Spice", href: "#spice" },
  { label: "Process", href: "#process" },
];

export type Pillar = {
  id: string;
  href: string;
  title: string;
  copy: string;
  accent: "silver" | "copper" | "gold";
};

export const pillars: Pillar[] = [
  {
    id: "beans",
    href: "#coffee",
    title: "Single-Origin Beans",
    copy: "Specialty green sourced direct from estates, roasted to spec in small batches. Whole bean or ground, 1kg to pallet.",
    accent: "silver",
  },
  {
    id: "machines",
    href: "#machines",
    title: "Engineered Machines",
    copy: "Commercial espresso machines and grinders, built and serviced to last. Copper-clad, café-floor proven.",
    accent: "copper",
  },
  {
    id: "spice",
    href: "#spice",
    title: "Turkish Spice Mixes",
    copy: "Hand-blended Anatolian and Ottoman spice mixes, ground fresh and sealed at origin for depth you can taste.",
    accent: "gold",
  },
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 1200, suffix: "t", label: "Beans roasted / yr" },
  { value: 640, suffix: "+", label: "Partner cafés" },
  { value: 22, suffix: "", label: "Origins sourced" },
  { value: 3500, suffix: "+", label: "Machines shipped" },
];

export type Roast = "Light" | "Medium" | "Dark";

export type Coffee = {
  name: string;
  origin: string;
  roast: Roast;
  notes: string[];
  process: string;
  bag: string;
  image: string;
  price: string;
};

export const coffees: Coffee[] = [
  {
    name: "Single Origin — Yirgacheffe",
    origin: "Ethiopia",
    roast: "Light",
    notes: ["Jasmine", "Bergamot", "Stone fruit"],
    process: "Washed",
    bag: "1kg / 5kg / 25kg",
      image: "/bag-1.jpg",
      price: "£26.00 / kg",
  },
  {
    name: "Maverick House Blend",
    origin: "Brazil · Colombia",
    roast: "Medium",
    notes: ["Milk chocolate", "Hazelnut", "Brown sugar"],
    process: "Pulped natural",
    bag: "1kg / 5kg / 25kg",
      image: "/bag-2.jpg",
      price: "£21.50 / kg",
  },
  {
    name: "Twilight Blend",
    origin: "Sumatra · Guatemala",
    roast: "Dark",
    notes: ["Dark cocoa", "Molasses", "Cedar"],
    process: "Wet-hulled",
    bag: "1kg / 5kg / 25kg",
      image: "/bag-3.jpg",
      price: "£23.00 / kg",
  },
  {
    name: "Antigua Reserve",
    origin: "Guatemala",
    roast: "Medium",
    notes: ["Red apple", "Caramel", "Toffee"],
    process: "Washed",
    bag: "1kg / 5kg",
      image: "/bag-1.jpg",
      price: "£24.50 / kg",
  },
  {
    name: "Sidamo Heirloom",
    origin: "Ethiopia",
    roast: "Light",
    notes: ["Blueberry", "Floral", "Honey"],
    process: "Natural",
    bag: "1kg / 5kg",
      image: "/bag-2.jpg",
      price: "£27.00 / kg",
  },
  {
    name: "Espresso Forte",
    origin: "India · Brazil",
    roast: "Dark",
    notes: ["Bittersweet", "Walnut", "Treacle"],
    process: "Blend",
    bag: "1kg / 5kg / 25kg",
      image: "/bag-3.jpg",
      price: "£20.00 / kg",
  },
];

export type Machine = {
  name: string;
  plate: string;
  blurb: string;
  image: string;
  price: string;
  specs: { label: string; value: string }[];
};

export const machines: Machine[] = [
  {
    name: "Maverick M-3 Tower",
    plate: "Maverick Engineered",
    blurb:
      "Three-group dual-boiler workhorse for high-volume bars. PID-stable, copper-clad, serviceable for a decade.",
    image: "/machine-1.jpg",
    price: "from £6,400",
    specs: [
      { label: "Groups", value: "3 group" },
      { label: "Boiler", value: "Dual · 14L + 5L" },
      { label: "Pressure", value: "9 bar PID" },
      { label: "Power", value: "6.4 kW · 3-phase" },
    ],
  },
  {
    name: "Maverick M-2 Bar",
    plate: "Maverick Engineered",
    blurb:
      "The two-group standard for busy cafés. Pre-infusion control, fast recovery, brushed steel and copper trim.",
    image: "/machine-2.jpg",
    price: "from £4,200",
    specs: [
      { label: "Groups", value: "2 group" },
      { label: "Boiler", value: "11L heat-exchange" },
      { label: "Pressure", value: "9 bar PID" },
      { label: "Power", value: "4.2 kW" },
    ],
  },
  {
    name: "Maverick Mill G1",
    plate: "Maverick Engineered",
    blurb:
      "On-demand flat-burr grinder. 75mm steel burrs, single-dose accuracy, near-silent motor.",
    image: "/machine-3.jpg",
    price: "from £1,150",
    specs: [
      { label: "Burrs", value: "75mm flat steel" },
      { label: "Dosing", value: "On-demand ±0.1g" },
      { label: "Hopper", value: "1.6 kg" },
      { label: "Power", value: "0.6 kW" },
    ],
  },
];

export type Spice = {
  name: string;
  region: string;
  uses: string;
  blend: string[];
  image: string;
  price: string;
};

export const spices: Spice[] = [
  {
    name: "Anatolian Sumac Blend",
    region: "Eastern Anatolia",
    uses: "Grills, salads, kebabs",
    blend: ["Sumac", "Sea salt", "Thyme", "Onion"],
    image: "/spice-1.jpg",
    price: "£9.50 / 250g",
  },
  {
    name: "Ottoman Spice Mix",
    region: "Marmara",
    uses: "Rice, stews, lamb",
    blend: ["Cumin", "Allspice", "Cinnamon", "Black pepper", "Clove"],
    image: "/spice-2.jpg",
    price: "£8.00 / 250g",
  },
  {
    name: "Urfa Chilli Flake",
    region: "Şanlıurfa",
    uses: "Finishing, marinades",
    blend: ["Urfa biber", "Sea salt", "Olive oil"],
    image: "/spice-3.jpg",
    price: "£11.00 / 250g",
  },
  {
    name: "Baharat Seven-Spice",
    region: "Levant",
    uses: "Köfte, soups, roasts",
    blend: ["Coriander", "Cumin", "Cardamom", "Nutmeg", "Paprika"],
    image: "/spice-4.jpg",
    price: "£8.50 / 250g",
  },
];

export type Step = { n: string; title: string; copy: string };

export const steps: Step[] = [
  {
    n: "01",
    title: "Sourced",
    copy: "Direct relationships with estates and co-ops across 22 origins. Cupped, scored, traced.",
  },
  {
    n: "02",
    title: "Roasted",
    copy: "Small-batch roasting to your profile in our London facility. Logged and repeatable.",
  },
  {
    n: "03",
    title: "Engineered",
    copy: "Machines built, calibrated and stress-tested. Spices milled and sealed at origin.",
  },
  {
    n: "04",
    title: "Delivered",
    copy: "Palletised, tracked, on time. Service contracts and re-orders managed end to end.",
  },
];

export const productInterests = [
  "Coffee beans",
  "Espresso machines",
  "Grinders",
  "Spice mixes",
  "Service contract",
];

// Bestseller spotlight
export const featured = {
  badge: "Bestseller · Wholesale",
  name: "Maverick House Blend",
  copy: "Our signature medium roast — milk chocolate, hazelnut and brown sugar. The everyday workhorse on over 400 café bars. Roasted to order, shipped within 48 hours.",
  price: "£21.50 / kg",
  unit: "Min. order 5kg · trade pricing from 25kg",
  image: "/featured.jpg",
  bullets: ["Roasted to order", "48-hour dispatch", "Volume pricing", "Free cupping samples"],
};

// Brand story band
export const story = {
  eyebrow: "Since 1998",
  title: "From the source to your bar",
  copy: [
    "Maverick Trading started as a single roaster on Anatolia Wharf. Today we supply cafés, roasters and retailers across the country with three things done properly — coffee, the machines that brew it, and the spice that surrounds it.",
    "We buy direct, roast small-batch, build our own machines and seal every spice blend at origin. One supplier, one standard, one invoice.",
  ],
  image: "/story.jpg",
  stats: [
    { value: "1998", label: "Established" },
    { value: "22", label: "Origins" },
    { value: "640+", label: "Trade partners" },
  ],
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Switched our three sites to Maverick beans and the M-2 machines last year. Consistency is night and day, and one invoice for everything saves us hours.",
    name: "Aylin Kaya",
    role: "Owner · Kaya Coffee House",
    avatar: "/avatar-2.jpg",
  },
  {
    quote:
      "The trade desk actually knows coffee. Samples arrive fast, the roast profiles are dialled, and service on the grinders has been faultless.",
    name: "Daniel Brooks",
    role: "Head Roaster · Brooks & Co",
    avatar: "/avatar-1.jpg",
  },
  {
    quote:
      "Their Anatolian spice blends sell out every week on our deli counter. Authentic, fresh, and the wholesale margins work.",
    name: "Mehmet Demir",
    role: "Buyer · Demir Fine Foods",
    avatar: "/avatar-3.jpg",
  },
];

// Lifestyle gallery strip
export const galleryImages = [
  { src: "/g1.jpg", alt: "Café interior" },
  { src: "/g2.jpg", alt: "Latte art" },
  { src: "/bazaar.jpg", alt: "Spice market" },
  { src: "/g3.jpg", alt: "Coffee bar" },
  { src: "/g4.jpg", alt: "Fresh espresso" },
  { src: "/g5.jpg", alt: "Spices" },
  { src: "/g6.jpg", alt: "Coffee cup" },
];

// "Trusted by" partner names (text marquee — no fake logos)
export const partners = [
  "Kaya Coffee House",
  "Brooks & Co",
  "Demir Fine Foods",
  "Harbour Roasters",
  "The Daily Grind",
  "Anatolia Deli",
  "Meridian Cafés",
  "Wharf & Bean",
];
