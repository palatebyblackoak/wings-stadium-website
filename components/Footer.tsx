import { Logo } from "./Logo";
import { SocialIcons } from "./SocialIcons";
import { business, hours } from "@/data/business";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Logo variant="dark" height={56} />
          <p className="mt-4 text-white/70 text-sm leading-relaxed">
            {business.positioning}
          </p>
        </div>

        <div>
          <div className="heading-label text-yellow-brand text-xs">Visit</div>
          <address className="not-italic text-white/80 text-sm mt-3 leading-relaxed">
            {business.address.street}<br />
            {business.address.city}, {business.address.region} {business.address.postal}
          </address>
          <a
            href={`tel:${business.phoneE164}`}
            className="block mt-3 text-white hover:text-yellow-brand text-sm"
          >
            {business.phone}
          </a>
        </div>

        <div>
          <div className="heading-label text-yellow-brand text-xs">Hours</div>
          <ul className="mt-3 space-y-1 text-sm text-white/80">
            {Object.values(hours).map((d) => (
              <li key={d.label} className="flex justify-between gap-4">
                <span>{d.label.slice(0, 3)}</span>
                <span className="text-white/60">{d.open} – {d.close}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="heading-label text-yellow-brand text-xs">Follow</div>
          <SocialIcons className="mt-3" />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 text-white/40 text-xs">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
