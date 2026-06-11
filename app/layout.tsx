import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maverick Trading — Wholesale Coffee, Machines & Spice",
  description:
    "Maverick Trading. Wholesalers of single-origin coffee beans, engineered espresso machines and Turkish & Anatolian spice mixes. Maverick Engineered.",
  openGraph: {
    title: "Maverick Trading — Wholesale Coffee, Machines & Spice",
    description:
      "Single-origin coffee beans, engineered espresso machines and Turkish spice mixes for cafés, roasters and retailers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-coffee text-crema">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
