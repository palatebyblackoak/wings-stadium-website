export const business = {
  name: "The Wings Stadium",
  tagline: "FOOD · FAMILY · FRIENDS",
  positioning:
    "The Wings Stadium is where McAllen watches the game — loud, hungry, and all in.",
  description:
    "A high-energy sports bar built on wings, beer, and game-day experiences. The go-to spot to watch sports, drink with friends, and feel the stadium energy.",
  address: {
    street: "5000 Pecan Blvd",
    city: "McAllen",
    region: "TX",
    postal: "78501",
    country: "US",
    // Approx for 5000 Pecan Blvd, McAllen, TX
    lat: 26.2245,
    lng: -98.2425,
  },
  phone: "(956) 322-5978",
  phoneE164: "+19563225978",
  email: "",
  google: { rating: 4.1, reviewCount: 87, perPerson: "$20–30" },
  social: {
    facebook: "https://www.facebook.com/THEWINGSSPORTSBAR",
    instagram: "https://www.instagram.com/THEWINGSSTADIUM",
    tiktok: "https://www.tiktok.com/@THEWINGSSTADIUM",
  },
  reviewUrl:
    "https://www.google.com/search?q=The+Wings+Stadium+McAllen+TX&hl=en#lrd=0x0:0x0,3",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=The+Wings+Stadium+5000+Pecan+Blvd+McAllen+TX+78501",
  mapEmbedUrl:
    "https://www.google.com/maps?q=The+Wings+Stadium+5000+Pecan+Blvd+McAllen+TX+78501&output=embed",
  services: [
    "Dine-In",
    "To-Go Orders",
    "Full Bar (Beer + Liquor)",
    "Live Sports Viewing",
    "DJ Entertainment",
  ],
} as const;

export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export const hours: Record<DayKey, { label: string; open: string; close: string }> = {
  mon: { label: "Monday", open: "11:00 AM", close: "1:00 AM" },
  tue: { label: "Tuesday", open: "11:00 AM", close: "1:00 AM" },
  wed: { label: "Wednesday", open: "11:00 AM", close: "1:00 AM" },
  thu: { label: "Thursday", open: "11:00 AM", close: "1:00 AM" },
  fri: { label: "Friday", open: "11:00 AM", close: "2:00 AM" },
  sat: { label: "Saturday", open: "11:00 AM", close: "2:00 AM" },
  sun: { label: "Sunday", open: "11:00 AM", close: "1:00 AM" },
};

// Schema.org openingHoursSpecification — close times that cross midnight
// are expressed as next-day times.
export const openingHoursSchema = [
  { day: "Monday",    opens: "11:00", closes: "25:00" },
  { day: "Tuesday",   opens: "11:00", closes: "25:00" },
  { day: "Wednesday", opens: "11:00", closes: "25:00" },
  { day: "Thursday",  opens: "11:00", closes: "25:00" },
  { day: "Friday",    opens: "11:00", closes: "26:00" },
  { day: "Saturday",  opens: "11:00", closes: "26:00" },
  { day: "Sunday",    opens: "11:00", closes: "25:00" },
];
