import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "uk"],
  },
};

export default nextConfig;
