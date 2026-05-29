import type { ReactNode } from "react";
import { business } from "@/data/business";

const ICONS: Record<"facebook" | "instagram" | "tiktok", ReactNode> = {
  facebook: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12Z" />
    </svg>
  ),
  instagram: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07ZM12 0C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  ),
  tiktok: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.97a8.16 8.16 0 0 0 4.77 1.52V7.04a4.85 4.85 0 0 1-1.84-.35Z" />
    </svg>
  ),
};

const LINKS: Array<{
  key: keyof typeof ICONS;
  label: string;
  href: string;
}> = [
  { key: "facebook", label: "Facebook", href: business.social.facebook },
  { key: "instagram", label: "Instagram", href: business.social.instagram },
  { key: "tiktok", label: "TikTok", href: business.social.tiktok },
];

export function SocialIcons({
  size = 22,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {LINKS.map((l) => (
        <li key={l.key}>
          <a
            href={l.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${l.label} — ${business.name}`}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/80 hover:bg-red-brand hover:text-white transition-colors"
          >
            <span
              aria-hidden
              style={{ width: size, height: size, display: "inline-block" }}
            >
              {ICONS[l.key]}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
