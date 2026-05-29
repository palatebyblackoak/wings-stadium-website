import { foodTeaser } from "@/data/foodTeaser";

function PhotoPlaceholder({ label, hint }: { label: string; hint: string }) {
  return (
    <div className="aspect-[4/5] rounded-2xl bg-ink ring-1 ring-white/10 overflow-hidden relative flex items-center justify-center text-center p-6">
      <div>
        <div className="font-label text-[10px] tracking-[0.35em] text-red-brand">
          {label}
        </div>
        <p className="font-body text-sm text-white/60 mt-3 max-w-xs">{hint}</p>
      </div>
    </div>
  );
}

export function Food() {
  return (
    <section
      id="menu"
      aria-labelledby="food-heading"
      className="max-w-6xl mx-auto px-4 sm:px-6"
    >
      <header>
        <div className="font-label text-[10px] sm:text-xs tracking-[0.35em] text-red-brand">
          THE FOOD
        </div>
        <h2
          id="food-heading"
          className="heading-stack text-white text-[clamp(40px,8vw,120px)] mt-3"
        >
          Wings carry the building.
        </h2>
        <p className="mt-6 font-body text-base sm:text-lg text-white/80 max-w-2xl">
          Boneless and traditional. Tossed loud, served hot. Plus burgers, hot
          dogs, pizza, and bar snacks built for screens and beers.
        </p>
      </header>

      <ul className="mt-8 flex flex-wrap gap-2 sm:gap-3" aria-label="Menu categories">
        {foodTeaser.categories.map((c) => (
          <li
            key={c.name}
            className={`rounded-full px-4 py-2 font-display text-sm sm:text-base tracking-wider uppercase ${
              c.hero
                ? "bg-red-brand text-white"
                : "border border-white/15 text-white/90 bg-white/[0.03]"
            }`}
          >
            {c.name}
          </li>
        ))}
      </ul>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/menu-food.jpg"
          alt="Chicken sandwich with waffle fries — held in hand"
          className="w-full aspect-[4/5] object-cover rounded-2xl"
          loading="lazy"
        />
        <PhotoPlaceholder
          label="PHOTO SLOT"
          hint="Shared table — wings, drafts, friends mid-cheers. Drop in: /public/photos/food-table.jpg"
        />
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="/menus/food-menu.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center font-label uppercase tracking-wider rounded-md bg-red-brand text-white px-7 py-4 text-base sm:text-lg hover:brightness-110 transition"
        >
          View Food Menu (PDF) →
        </a>
      </div>
    </section>
  );
}
