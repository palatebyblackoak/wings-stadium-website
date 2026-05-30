import type { Metadata } from "next";
import { business } from "@/data/business";
import { HoursTable } from "@/components/HoursTable";
import { SectionTag } from "@/components/SectionTag";
import { PageHeader } from "@/components/PageHeader";
import { SectionBox } from "@/components/SectionBox";

export const metadata: Metadata = {
  title: "Visit — 5000 Pecan Blvd, McAllen, TX",
  description:
    "Find The Wings Stadium at 5000 Pecan Blvd, McAllen, TX 78501. Hours, directions, and phone — plus how to leave a Google review.",
  openGraph: { title: "Visit · The Wings Stadium" },
};

export default function VisitPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-12 sm:pb-16">
      <PageHeader
        tag="Find Us"
        title={<>Visit the <span className="text-heat">Stadium</span></>}
        description="5000 Pecan Blvd, McAllen. Open late every night."
      />

      {/* STOREFRONT */}
      <div className="mb-10 rounded-2xl overflow-hidden ring-heat">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/storefront.jpg"
          alt="The Wings Stadium storefront — 5000 Pecan Blvd, McAllen"
          fetchPriority="high"
          className="w-full aspect-[4/3] sm:aspect-[16/9] object-cover object-center"
        />
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
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
          <SectionBox className="p-6">
            <SectionTag size="sm" tilt={-1.5}>Address</SectionTag>
            <address className="not-italic mt-4 heading-display text-2xl text-white">
              {business.address.street}<br />
              {business.address.city}, {business.address.region} {business.address.postal}
            </address>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center font-display uppercase tracking-wider rounded-md bg-heat text-ink px-4 py-3 ring-heat hover:brightness-110 transition"
              >
                Get Directions
              </a>
              <a
                href={`tel:${business.phoneE164}`}
                className="inline-flex items-center justify-center font-display uppercase tracking-wider rounded-md border-2 border-white/80 text-white px-4 py-3 hover:bg-white hover:text-ink transition"
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
          </SectionBox>

          <SectionBox className="p-6">
            <SectionTag size="sm" color="red" tilt={1.5}>Hours</SectionTag>
            <div className="mt-4">
              <HoursTable />
            </div>
          </SectionBox>

          <SectionBox className="p-6">
            <SectionTag size="sm" tilt={-1.5}>Reviews</SectionTag>
            <p className="font-body text-white/80 mt-4 text-sm">
              Loved your visit? It takes 20 seconds and it actually helps.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={business.reviewUrl}
                target="_blank"
                rel="noreferrer"
                className="font-display uppercase tracking-wider text-yellow-brand hover:text-white"
              >
                Leave a Review →
              </a>
            </div>
          </SectionBox>

          <SectionBox className="p-6">
            <SectionTag size="sm" tilt={1.5}>Follow</SectionTag>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="text-white/85 hover:text-white" href={business.social.facebook} target="_blank" rel="noreferrer">
                  Facebook · {business.socialHandles.facebook}
                </a>
              </li>
              <li>
                <a className="text-white/85 hover:text-white" href={business.social.instagram} target="_blank" rel="noreferrer">
                  Instagram · {business.socialHandles.instagram}
                </a>
              </li>
              <li>
                <a className="text-white/85 hover:text-white" href={business.social.tiktok} target="_blank" rel="noreferrer">
                  TikTok · {business.socialHandles.tiktok}
                </a>
              </li>
            </ul>
          </SectionBox>
        </aside>
      </section>

      <section className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
        <SectionTag size="sm" tilt={-1.5}>What We Do</SectionTag>
        <h2 className="heading-display text-3xl sm:text-4xl text-white mt-5">
          Built for game days and late nights
        </h2>
        <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {business.services.map((s) => (
            <li
              key={s}
              className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 font-display text-base text-white/90"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
