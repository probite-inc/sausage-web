import type { NextConfig } from "next";
import { config } from "./src/configs/config.mjs";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: config.isProd ? config.basePath : "",
  images: { unoptimized: true },
};

export default nextConfig;
