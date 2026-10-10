import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  output: 'export',        // generates static files in the "out" folder
  images: {
    unoptimized: true,     // the default image optimizer needs a server
  },
  // Only needed if your site lives at username.github.io/repo-name
  basePath: '/MyProfile',
  assetPrefix: '/MyProfile/',
  trailingSlash: true,
};

export default nextConfig;
