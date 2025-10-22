import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  output: "export",
  // basePath: "/battmo.org",
  // assetPrefix: "/battmo.org/public",
};

export default nextConfig;
