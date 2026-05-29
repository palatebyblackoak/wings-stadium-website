import type { Metadata } from "next";
import Link from "next/link";
import { Visit } from "@/components/sections/Visit";

export const metadata: Metadata = {
  title: "Visit — 5000 Pecan Blvd, McAllen, TX",
  description:
    "The Wings Stadium · 5000 Pecan Blvd, McAllen, TX 78501. Hours, directions, phone, and map. Open daily 11AM. Late on Fridays and Saturdays.",
  openGraph: { title: "Visit · The Wings Stadium" },
};

export default function VisitPage() {
  return (
    <div className="pt-16 sm:pt-24 pb-20">
      <Visit />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12">
        <Link
          href="/"
          className="font-label uppercase tracking-wider text-sm text-white/70 hover:text-white"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
