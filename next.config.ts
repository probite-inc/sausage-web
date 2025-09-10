import type { NextConfig } from "next";
export const config = {
  isProd: true,
  basePath: "/susage-web",
};

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: config.isProd ? config.basePath : "",
};

export default nextConfig;
