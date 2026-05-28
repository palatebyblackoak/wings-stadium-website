import type { Metadata } from "next";
import { business } from "@/data/business";
import { HoursTable } from "@/components/HoursTable";
import { GoogleBadge } from "@/components/GoogleBadge";

export const metadata: Metadata = {
  title: "Visit — 5000 Pecan Blvd, McAllen, TX",
  description:
    "Find The Wings Stadium at 5000 Pecan Blvd, McAllen, TX 78501. Hours, directions, and phone — plus how to leave a Google review.",
  openGraph: { title: "Visit · The Wings Stadium" },
};

export default function VisitPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16">
      <header className="mb-10">
        <div className="heading-label text-xs text-yellow-brand">Find Us</div>
        <h1 className="heading-display text-5xl sm:text-7xl text-white mt-1">
          Visit the <span className="text-heat">Stadium</span>
        </h1>
        <p className="font-body text-white/80 max-w-2xl mt-4 text-base sm:text-lg">
          5000 Pecan Blvd, McAllen. Open late every night.
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* MAP */}
        <div className="lg:col-span-3 rounded-2xl border border-white/10 overflow-hidden bg-black">
          <iframe
            src={business.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 420 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Wings Stadium location"
            allowFullScreen
          />
        </div>

        {/* DETAILS */}
        <aside className="lg:col-span-2 space-y-5">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="heading-label text-xs text-yellow-brand">Address</div>
            <address className="not-italic mt-2 heading-display text-2xl text-white">
              {business.address.street}<br />
              {business.address.city}, {business.address.region} {business.address.postal}
            </address>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center font-label uppercase tracking-wider rounded-md bg-heat text-ink px-4 py-3 ring-heat hover:brightness-110 transition"
              >
                Get Directions
              </a>
              <a
                href={`tel:${business.phoneE164}`}
                className="inline-flex items-center justify-center font-label uppercase tracking-wider rounded-md border-2 border-white/80 text-white px-4 py-3 hover:bg-white hover:text-ink transition"
              >
                Call
              </a>
            </div>
            <a
              href={`tel:${business.phoneE164}`}
              className="block mt-3 text-center font-body text-white/80 hover:text-white"
            >
              {business.phone}
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="heading-label text-xs text-yellow-brand">Hours</div>
            <div className="mt-3">
              <HoursTable />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="heading-label text-xs text-yellow-brand">Reviews</div>
            <p className="font-body text-white/80 mt-2 text-sm">
              Loved your visit? It takes 20 seconds and it actually helps.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <GoogleBadge />
              <a
                href={business.reviewUrl}
                target="_blank"
                rel="noreferrer"
                className="font-label uppercase tracking-wider text-yellow-brand hover:text-white"
              >
                Leave a Review →
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="heading-label text-xs text-yellow-brand">Follow</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="text-white/85 hover:text-white" href={business.social.facebook} target="_blank" rel="noreferrer">
                  Facebook · @THEWINGSSPORTSBAR
                </a>
              </li>
              <li>
                <a className="text-white/85 hover:text-white" href={business.social.instagram} target="_blank" rel="noreferrer">
                  Instagram · @THEWINGSSTADIUM
                </a>
              </li>
              <li>
                <a className="text-white/85 hover:text-white" href={business.social.tiktok} target="_blank" rel="noreferrer">
                  TikTok · @THEWINGSSTADIUM
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
        <div className="heading-label text-xs text-yellow-brand">What We Do</div>
        <h2 className="heading-display text-3xl sm:text-4xl text-white mt-1">
          Built for game days and late nights
        </h2>
        <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {business.services.map((s) => (
            <li
              key={s}
              className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 font-label text-sm text-white/90"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
