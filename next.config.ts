import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "notehub-api.goit.study" },
      { protocol: "https", hostname: "ac.goit.global" },
    ],
  },
};

export default nextConfig;
