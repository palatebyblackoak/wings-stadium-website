import Link from "next/link";
import { business } from "@/data/business";

export function LocationStrip() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
      <div>
        <div className="heading-label text-xs text-yellow-brand">Find Us</div>
        <p className="heading-display text-2xl sm:text-3xl text-white mt-1">
          {business.address.street}, {business.address.city}, {business.address.region}
        </p>
        <p className="font-body text-white/70 mt-1">
          Open today · Mon–Sun · until 1AM (2AM Fri & Sat)
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center font-label uppercase tracking-wider rounded-md bg-heat text-ink px-5 py-3 ring-heat hover:brightness-110 transition"
        >
          Get Directions
        </a>
        <a
          href={`tel:${business.phoneE164}`}
          className="inline-flex items-center justify-center font-label uppercase tracking-wider rounded-md border-2 border-white/80 text-white px-5 py-3 hover:bg-white hover:text-ink transition"
        >
          Call {business.phone}
        </a>
        <Link
          href="/visit"
          className="inline-flex items-center justify-center font-label uppercase tracking-wider rounded-md text-white/70 hover:text-white px-3 py-3"
        >
          Visit page →
        </Link>
      </div>
    </section>
  );
}
