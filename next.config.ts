import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  async redirects() {
    return [
      { source: "/why-us", destination: "/about", permanent: true },
      // Locale should not appear in URLs (localePrefix: "never")
      { source: "/en", destination: "/", permanent: false },
      { source: "/sr", destination: "/", permanent: false },
      { source: "/de", destination: "/", permanent: false },
      { source: "/en/:path*", destination: "/:path*", permanent: false },
      { source: "/sr/:path*", destination: "/:path*", permanent: false },
      { source: "/de/:path*", destination: "/:path*", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },
};

export default withNextIntl(nextConfig);
