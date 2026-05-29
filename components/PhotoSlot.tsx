type Props = {
  label: string;
  /** Optional ratio class, e.g. 'aspect-[16/9]'. Defaults to 16/9. */
  aspect?: string;
  /** Position in /public/photos/ once the real photo is dropped in. */
  filePath?: string;
  className?: string;
  /** If a real file is available, set this to its public path. */
  src?: string;
};

// Renders an on-brand placeholder (dark + heat-glow + label) until you drop
// in the real photo. Swap by passing `src="/photos/your-photo.jpg"`.
export function PhotoSlot({
  label,
  aspect = "aspect-[16/9]",
  filePath,
  className = "",
  src,
}: Props) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={label}
        className={`${aspect} w-full object-cover rounded-xl ${className}`}
      />
    );
  }

  return (
    <div
      className={`${aspect} relative w-full rounded-xl overflow-hidden bg-ink ring-heat ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <div className="font-label text-xs sm:text-sm tracking-[0.3em] text-red-brand">
          PHOTO SLOT
        </div>
        <div className="heading-display text-2xl sm:text-3xl text-white mt-2 max-w-md">
          {label}
        </div>
        {filePath && (
          <div className="font-body text-xs text-white/50 mt-3">
            Drop in: <code className="text-red-brand">{filePath}</code>
          </div>
        )}
      </div>
    </div>
  );
}
