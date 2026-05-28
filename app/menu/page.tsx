import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { PhotoSlot } from "@/components/PhotoSlot";
import { SectionTag } from "@/components/SectionTag";
import { foodTeaser } from "@/data/foodTeaser";

export const metadata: Metadata = {
  title: "Menu — Food & Bar",
  description:
    "Wings, burgers, hot dogs, pizza, and bar snacks. Plus a full bar with cocktails, margaritas, drafts, and shots. Pick a side: Food or Bar.",
  openGraph: { title: "Menu — Food & Bar · The Wings Stadium" },
};

export default function MenuHub() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16">
      <header className="mb-10">
        <SectionTag size="md" tilt={-2}>The Menu</SectionTag>
        <h1 className="heading-display text-5xl sm:text-7xl text-white mt-6">
          Pick Your <span className="text-heat">Side</span>
        </h1>
        <p className="font-body text-white/80 max-w-2xl mt-4 text-base sm:text-lg">
          Two menus, one mission. Eat loud, drink loud.
        </p>
      </header>

      {/* TWO PATHS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* FOOD */}
        <article className="relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
          <PhotoSlot
            label="Plate of wings — boneless + traditional"
            filePath="/public/photos/menu-food.jpg"
            aspect="aspect-[16/9]"
          />
          <div className="p-6 sm:p-8 relative">
            <SectionTag size="sm" tilt={-2}>Food</SectionTag>
            <h2 className="heading-display text-3xl sm:text-4xl text-white mt-5">
              The Food Menu
            </h2>
            <p className="font-body text-white/75 mt-3">
              Wings carry the building. Everything else is here to help.
            </p>

            <ul className="mt-5 grid grid-cols-2 gap-2.5">
              {foodTeaser.categories.map((c) => (
                <li
                  key={c.name}
                  className={`rounded-lg border ${
                    c.hero
                      ? "border-yellow-brand/60 bg-yellow-brand/10"
                      : "border-white/10 bg-white/[0.02]"
                  } px-3 py-2`}
                >
                  <div className="font-display text-white text-base">{c.name}</div>
                  <div className="font-body text-xs text-white/60">{c.note}</div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href="/menus/food-menu.pdf" external size="lg">
                View / Download Food Menu (PDF)
              </CTAButton>
              <Link
                href="/specials"
                className="font-display uppercase tracking-wider text-white/70 hover:text-white px-3 py-3"
              >
                See Daily Specials →
              </Link>
            </div>
            <p className="mt-3 font-body text-xs text-white/50">
              Full PDF menu — opens in a new tab. Allergies? Ask your server.
            </p>
          </div>
        </article>

        {/* BAR */}
        <article className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-red-brand/10 to-transparent overflow-hidden">
          <PhotoSlot
            label="Margaritas, drafts, and shots lined up at the bar"
            filePath="/public/photos/menu-bar.jpg"
            aspect="aspect-[16/9]"
          />
          <div className="p-6 sm:p-8 relative">
            <SectionTag size="sm" color="red" tilt={1.5}>Bar</SectionTag>
            <h2 className="heading-display text-3xl sm:text-4xl text-white mt-5">
              The Bar Menu
            </h2>
            <p className="font-body text-white/75 mt-3">
              Home Court Drinks, margaritas, mezcal, drafts, bottles, seltzers,
              and a deep shot list. Full bar, full volume.
            </p>

            <ul className="mt-5 grid grid-cols-2 gap-2.5">
              {[
                "Cocktails",
                "Margaritas",
                "Martinis",
                "Classics",
                "Draft Beer",
                "Bottle Beer",
                "Seltzers",
                "Shots",
              ].map((s) => (
                <li
                  key={s}
                  className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 font-display text-white text-base"
                >
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href="/menu/bar" size="lg">
                Open Bar Menu →
              </CTAButton>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
