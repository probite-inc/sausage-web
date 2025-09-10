import type { NextConfig } from "next";
export const config = {
  isProd: true,
  basePath: "/suasage-web",
};

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: "/suasage-web",
  images: { unoptimized: true },
};

export default nextConfig;
