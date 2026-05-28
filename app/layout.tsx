import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { business } from "@/data/business";
import { restaurantJsonLd, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.name} — Sports Bar & Restaurant · McAllen, TX`,
    template: `%s · ${business.name}`,
  },
  description: business.positioning,
  applicationName: business.name,
  keywords: [
    "sports bar McAllen",
    "wings McAllen TX",
    "happy hour McAllen",
    "watch the game McAllen",
    "Pecan Blvd sports bar",
    "The Wings Stadium",
  ],
  openGraph: {
    type: "website",
    title: `${business.name} — ${business.tagline}`,
    description: business.positioning,
    siteName: business.name,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — ${business.tagline}`,
    description: business.positioning,
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#202020",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — closest matches to the brand sample sheet. Swap any
            family by updating --font-display / --font-script / --font-label /
            --font-body in app/globals.css. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Caveat:wght@500;700&family=Bowlby+One&family=Open+Sans:wght@400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd()) }}
        />
      </head>
      <body className="min-h-screen bg-ink text-white antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
