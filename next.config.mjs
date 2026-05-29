/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    // Old multi-page routes now live as anchors on the single landing page.
    return [
      { source: "/menu", destination: "/#menu", permanent: true },
      { source: "/menu/bar", destination: "/#bar", permanent: true },
      { source: "/specials", destination: "/#specials", permanent: true },
    ];
  },
};

export default nextConfig;
