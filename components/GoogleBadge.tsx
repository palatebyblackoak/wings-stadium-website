import { business } from "@/data/business";

export function GoogleBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={business.reviewUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-colors ${className}`}
    >
      <span className="text-yellow-brand">★</span>
      <span className="text-white font-label tracking-wider">
        {business.google.rating} on Google
      </span>
      <span className="text-white/50">·</span>
      <span className="text-white/70">{business.google.reviewCount} reviews</span>
    </a>
  );
}
