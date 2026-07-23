import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/api/health",
          destination: `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/health`,
        },
      ],
    };
  },
};

export default nextConfig;
