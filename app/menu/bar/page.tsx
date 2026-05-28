import type { Metadata } from "next";
import Link from "next/link";
import { barMenu } from "@/data/barMenu";
import { BarMenuSection } from "@/components/BarMenuSection";
import { HappyHourBanner } from "@/components/HappyHourBanner";

export const metadata: Metadata = {
  title: "Bar Menu — Cocktails, Margaritas, Beer, Shots",
  description:
    "Full bar menu: Home Court Drinks, margaritas, martinis, classics, draft beer, bottles, seltzers, shots, wines. McAllen, TX.",
  openGraph: { title: "Bar Menu · The Wings Stadium" },
};

export default function BarMenuPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16">
      <header className="mb-8">
        <Link
          href="/menu"
          className="font-label text-xs text-white/60 hover:text-white tracking-widest"
        >
          ← Back to Menu
        </Link>
        <div className="mt-3 heading-label text-xs text-yellow-brand">Full Bar</div>
        <h1 className="heading-display text-5xl sm:text-7xl text-white mt-1">
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
        className="mb-10 sticky top-16 z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 bg-ink/80 backdrop-blur border-y border-white/10 overflow-x-auto"
      >
        <ul className="flex gap-2 whitespace-nowrap">
          {barMenu.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-label uppercase tracking-wider text-white/80 hover:bg-white/10 hover:text-white"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mb-10">
        <HappyHourBanner compact />
      </div>

      <div className="space-y-14">
        {barMenu.map((section) => (
          <BarMenuSection key={section.id} section={section} />
        ))}
      </div>

      <p className="mt-14 font-body text-xs text-white/50 italic max-w-2xl">
        Must be 21+ to consume alcoholic beverages. Drink responsibly. Menu
        items, prices, and availability subject to change.
      </p>
    </div>
  );
}
