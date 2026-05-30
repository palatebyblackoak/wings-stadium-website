import { SectionTag } from "./SectionTag";

type Props = {
  tag: string;
  tagTilt?: number;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Optional content rendered above the SectionTag (e.g. a "back" link). */
  eyebrow?: React.ReactNode;
  className?: string;
};

export function PageHeader({
  tag,
  tagTilt = -2,
  title,
  description,
  eyebrow,
  className = "mb-8 sm:mb-10",
}: Props) {
  return (
    <header className={className}>
      {eyebrow && <div className="mb-3 sm:mb-4">{eyebrow}</div>}
      <SectionTag size="md" tilt={tagTilt}>{tag}</SectionTag>
      <h1 className="heading-display text-5xl sm:text-6xl md:text-7xl text-white mt-5 sm:mt-6">
        {title}
      </h1>
      {description && (
        <p className="font-body text-white/80 max-w-2xl mt-3 sm:mt-4 text-base sm:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
