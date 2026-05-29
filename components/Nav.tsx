import Link from "next/link";
import { Logo } from "./Logo";
import { business } from "@/data/business";

const LINKS = [
  { href: "/#tonight", label: "Tonight" },
  { href: "/#specials", label: "Specials" },
  { href: "/#menu", label: "Menu" },
  { href: "/#visit", label: "Visit" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-ink/80 bg-ink/95 border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
        <Link
          href="/#top"
          className="flex items-center"
          aria-label={`${business.name} — home`}
        >
          <Logo variant="dark" height={36} />
        </Link>

        {/* Desktop — anchor links, no CTA button (decision lives in the
            floating pill bottom-right). */}
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-label text-sm text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile — single high-intent CTA only. No hamburger. */}
        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="md:hidden inline-flex items-center font-label uppercase tracking-wider rounded-md bg-red-brand text-white px-4 py-2 text-sm hover:brightness-110 transition"
        >
          Get Directions
        </a>
      </nav>
    </header>
  );
}
