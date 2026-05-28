import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "heat" | "outline" | "ghost";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "heat",
  size = "md",
  external,
  className = "",
}: Props) {
  const sizing = size === "lg" ? "px-7 py-4 text-base sm:text-lg" : "px-5 py-3 text-sm sm:text-base";

  const base =
    "inline-flex items-center justify-center font-label uppercase tracking-wider rounded-md transition-all duration-200 will-change-transform";

  const styles: Record<string, string> = {
    heat:
      "bg-heat text-ink ring-heat hover:translate-y-[-1px] hover:brightness-110 active:translate-y-0",
    outline:
      "border-2 border-white/80 text-white hover:bg-white hover:text-ink",
    ghost:
      "text-white/90 hover:text-white underline-offset-4 hover:underline",
  };

  const cls = `${base} ${sizing} ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
