import { createRequire } from "module";
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["picsum.photos"],
  },
  experimental: {
    serverComponentsExternalPackages: ["firebase-admin"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "node:process": "process",
      };
      config.resolve.fallback = {
        ...config.resolve.fallback,
        process: require.resolve("process/browser"),
      };
    }
    return config;
  },
};

export default nextConfig;

