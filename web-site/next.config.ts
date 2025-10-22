import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  output: "export",
  basePath: isProd ? "/battmo.org" : "",
  assetPrefix: isProd ? "/battmo.org": "",
};

export default nextConfig;
