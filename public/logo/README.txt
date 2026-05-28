DROP-IN INSTRUCTIONS — LOGO

Replace these two files with the real logo PNGs (or SVGs):

  logo-white-for-dark.png   — primary, used on dark backgrounds (nav, hero, footer)
  logo-black-for-light.png  — used on light backgrounds (if/when needed)

Recommended:
  - Transparent background
  - At least 512px on the long edge for the white-on-dark version
  - PNG or SVG

After dropping in the files, open /components/Logo.tsx and change:
  const USE_IMAGE_LOGO = false;   →   const USE_IMAGE_LOGO = true;
That switches the entire site from the SVG fallback mark to your real logo.
