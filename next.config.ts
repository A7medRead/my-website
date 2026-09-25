import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // The site has two root layouts ((en) and (ar)), so unmatched URLs need a global 404.
    globalNotFound: true,
  },
};

export default nextConfig;
