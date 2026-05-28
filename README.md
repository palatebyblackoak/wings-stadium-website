# The Wings Stadium — Website

The official site for **The Wings Stadium** — McAllen, TX. High-energy sports bar
built on wings, beer, and game-day experiences.

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS**. Deployed to
**Vercel**. No backend, no e-commerce.

---

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

Requires Node 18.18+.

---

## Editing content

All editable content lives in `/data/`. **Touch these files, not the components.**

| File | What's in it |
|---|---|
| `data/business.ts` | Name, address, phone, hours, socials, Google rating, schema fields |
| `data/specials.ts` | Happy Hour + every day Mon–Sun + Teachers Special + Lunch |
| `data/barMenu.ts` | The entire bar menu (cocktails, margaritas, beer, shots, wines) |
| `data/foodTeaser.ts` | Food category teaser shown on the /menu hub |

### Add or change a daily special

Open `data/specials.ts` → `weekly[]` array. Each day has a `specials` array of
`{ text, price?, emphasis? }`. Mark a day's headline item with `emphasis: true`
to highlight it. Add `liveDj: true` to tag the night. Add `highPriority: true`
to give the card the hero treatment (currently used for Wednesday).

The home page's "Tonight at the Stadium" module reads the current day client-side
and pulls from the same array — no extra wiring needed.

---

## Dropping in real assets after launch

### Logo

1. Replace `public/logo/logo-white-for-dark.png` (primary, used on dark) and
   optionally `public/logo/logo-black-for-light.png`.
2. Open `components/Logo.tsx` and flip:
   ```ts
   const USE_IMAGE_LOGO = true;
   ```
That switches the whole site from the SVG fallback mark to your file. See
`public/logo/README.txt` for details.

### Photos

The site renders on-brand styled placeholders wherever a photo goes (dark +
heat-gradient + label). To swap one:

1. Drop your image into `public/photos/`.
2. Find the matching `<PhotoSlot ... />` in the code and pass a `src` prop:

```tsx
<PhotoSlot
  src="/photos/hero.jpg"
  label="Hero shot — wings, drafts, and a game on the wall"
/>
```

Photo slots currently used:
- `/photos/hero.jpg` — homepage hero
- `/photos/catch-every-game.jpg` — homepage "Catch Every Game"
- `/photos/menu-food.jpg` — /menu hub, Food card
- `/photos/menu-bar.jpg` — /menu hub, Bar card

Real footage only — no AI-generated people.

### Food menu PDF

Drop the real menu PDF into `public/menus/food-menu.pdf` (same filename). The
"View / Download Food Menu" button on `/menu` will pick it up automatically.

### Real brand font

The site uses Google Font stand-ins (Bangers / Barlow Condensed / Barlow) as
proxies for the brand's brush/marker display font. When the real font files
arrive:

1. Drop the `.woff2` into `public/fonts/`.
2. Open `app/globals.css` — there's a commented `@font-face` block. Uncomment,
   point at your file, and override `--font-display`. Single-line swap.

---

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, Catch Every Game, Happy Hour banner, Tonight at the Stadium, weekly specials grid, location strip |
| `/menu` | Menu hub — Food (PDF) + Bar (full HTML) paths |
| `/menu/bar` | Full bar menu rendered from `data/barMenu.ts` |
| `/specials` | Full weekly lineup + Happy Hour + $5 apps + Teachers Special + Mix & Match Lunch |
| `/visit` | Map embed, hours, phone, directions, social links, "Leave a Review" |

Per-page metadata + Open Graph + Restaurant/BarOrPub/LocalBusiness JSON-LD live
in `app/layout.tsx` and `lib/schema.ts`. Sitemap and robots are at `app/sitemap.ts`
and `app/robots.ts`. The OG image and favicon are generated programmatically
from `app/opengraph-image.tsx` and `app/icon.tsx`.

---

## Deploy

Auto-deploys on push to `main` via Vercel. To deploy manually:

```bash
vercel --prod
```

Set `NEXT_PUBLIC_SITE_URL` in Vercel project settings to your final domain
once it's pointed (it falls back to the `.vercel.app` URL otherwise — used
for canonical, sitemap, and JSON-LD URLs).

---

## Project structure

```
app/                Next.js routes
  layout.tsx        Root layout + fonts + JSON-LD + Nav/Footer
  page.tsx          Home
  menu/page.tsx     Menu hub
  menu/bar/page.tsx Bar menu
  specials/page.tsx Weekly specials
  visit/page.tsx    Visit / map / hours
  sitemap.ts        SEO sitemap
  robots.ts         robots.txt
  icon.tsx          Favicon (generated)
  opengraph-image.tsx  OG image (generated)
  globals.css       Tailwind + brand CSS vars + utilities

components/         Reusable UI (Nav, Footer, SpecialCard, PhotoSlot, etc.)
data/               Source of truth: business, specials, barMenu, foodTeaser
lib/                Helpers: JSON-LD builder, today-key resolver
public/             Static assets (logo, menus, photos)
```
