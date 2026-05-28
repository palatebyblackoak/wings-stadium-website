import type { Metadata } from "next";
import Link from "next/link";
import { barMenu } from "@/data/barMenu";
import { BarMenuSection } from "@/components/BarMenuSection";
import { HappyHourBanner } from "@/components/HappyHourBanner";
import { SectionTag } from "@/components/SectionTag";

export const metadata: Metadata = {
  title: "Bar Menu — Cocktails, Margaritas, Beer, Shots",
  description:
    "Full bar menu: Home Court Drinks, margaritas, martinis, classics, draft beer, bottles, seltzers, shots, wines. McAllen, TX.",
  openGraph: { title: "Bar Menu · The Wings Stadium" },
};

// Alternate tilt for each section header for the sticker-book feel.
const TILTS = [-2.5, 1.5, -1.5, 2, -2, 1, -2.5, 1.5, -1.5, 2];

export default function BarMenuPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16">
      <header className="mb-8">
        <Link
          href="/menu"
          className="font-display text-xs text-white/60 hover:text-white tracking-widest"
        >
          ← Back to Menu
        </Link>
        <div className="mt-4">
          <SectionTag size="md" tilt={-2}>Full Bar</SectionTag>
        </div>
        <h1 className="heading-display text-5xl sm:text-7xl text-white mt-6">
          The <span className="text-heat">Bar Menu</span>
        </h1>
        <p className="font-body text-white/80 max-w-2xl mt-4">
          Home Court Drinks, margaritas, mezcal moves, draft towers, bottles, and a
          deep shot list. Prices subject to change — ask your server.
        </p>
      </header>

      {/* Quick nav */}
      <nav
        aria-label="Bar menu sections"
        className="mb-10 sticky top-16 z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 bg-ink/85 backdrop-blur border-y border-white/10 overflow-x-auto"
      >
        <ul className="flex gap-2 whitespace-nowrap">
          {barMenu.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-display uppercase tracking-wider text-white/85 hover:bg-yellow-brand hover:text-ink hover:border-yellow-brand transition"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mb-12">
        <HappyHourBanner compact />
      </div>

      <div className="space-y-16">
        {barMenu.map((section, i) => (
          <BarMenuSection key={section.id} section={section} tilt={TILTS[i % TILTS.length]} />
        ))}
      </div>

      <p className="mt-14 font-body text-xs text-white/50 italic max-w-2xl">
        Must be 21+ to consume alcoholic beverages. Drink responsibly. Menu
        items, prices, and availability subject to change.
      </p>
    </div>
  );
}
