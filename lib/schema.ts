import { business, openingHoursSchema } from "@/data/business";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://wings-stadium-website.vercel.app";

const dayMap: Record<string, string> = {
  Monday: "Mo",
  Tuesday: "Tu",
  Wednesday: "We",
  Thursday: "Th",
  Friday: "Fr",
  Saturday: "Sa",
  Sunday: "Su",
};

function clamp24(t: string) {
  // schema.org spec uses 0–23 hours; we stored 25:00 / 26:00 as a sentinel for
  // next-day close. Convert to 01:00 / 02:00 for the JSON-LD payload.
  const [h, m] = t.split(":").map(Number);
  if (h >= 24) return `${String(h - 24).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  return t;
}

export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "BarOrPub", "LocalBusiness"],
    name: business.name,
    description: business.description,
    url: SITE_URL,
    telephone: business.phoneE164,
    priceRange: business.google.perPerson,
    servesCuisine: ["American", "Bar Food", "Wings"],
    image: [`${SITE_URL}/logo/logo-white-for-dark.png`],
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postal,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.address.lat,
      longitude: business.address.lng,
    },
    openingHoursSpecification: openingHoursSchema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.opens,
      closes: clamp24(h.closes),
    })),
    sameAs: [business.social.facebook, business.social.instagram, business.social.tiktok],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.google.rating,
      reviewCount: business.google.reviewCount,
    },
    hasMenu: `${SITE_URL}/menu`,
    acceptsReservations: false,
  };
}

export const _openingHoursSchemaShort = openingHoursSchema
  .map((h) => `${dayMap[h.day]} ${h.opens}-${clamp24(h.closes)}`)
  .join(", ");
