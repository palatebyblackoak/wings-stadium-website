/* Subtle white scribble brush-strokes scattered across a section, echoing
   the printed menu's background texture. Inline SVG so it scales and there
   are no extra requests. */
export function ScribbleBg({
  opacity = 0.06,
  className = "",
}: {
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      style={{ opacity }}
    >
      <g
        fill="none"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M40 60 Q 80 30, 140 50 T 260 40 T 380 60" />
        <path d="M820 100 Q 880 70, 940 90 T 1080 80" />
        <path d="M60 220 L 130 200 L 90 240 L 170 220" />
        <path d="M520 180 Q 600 150, 680 180" />
        <path d="M950 260 Q 1010 230, 1080 260" />
        <path d="M120 380 L 200 350 L 160 400 L 240 370 L 200 420" />
        <path d="M780 420 Q 830 390, 900 420 T 1040 410" />
        <path d="M40 540 Q 110 510, 180 540 T 320 530" />
        <path d="M620 560 L 700 540 L 660 580 L 740 560" />
        <path d="M1000 600 Q 1060 570, 1140 600" />
        <path d="M80 700 Q 160 670, 240 700 T 400 690" />
        <path d="M700 720 L 780 700 L 740 740 L 820 720" />
      </g>
    </svg>
  );
}
