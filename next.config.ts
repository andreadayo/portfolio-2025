import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [{ hostname: "cdn.sanity.io" }],
  },
};

export default nextConfig;
