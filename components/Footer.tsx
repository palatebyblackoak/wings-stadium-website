import { Logo } from "./Logo";
import { SocialIcons } from "./SocialIcons";
import { business } from "@/data/business";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <Logo variant="dark" height={44} />
          <p className="mt-3 font-body text-xs text-white/60">
            {business.address.street} · {business.address.city},{" "}
            {business.address.region} {business.address.postal} ·{" "}
            <a
              href={`tel:${business.phoneE164}`}
              className="text-white/80 hover:text-white"
            >
              {business.phone}
            </a>
          </p>
          <p className="mt-1 font-body text-xs text-white/55">
            Open daily 11AM. Late on Fri & Sat.
          </p>
        </div>
        <SocialIcons />
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-white/40 text-xs">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
