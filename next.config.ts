import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Set to '' if deploying to user site (yaseenai.github.io repo)
  // Set to '/repo-name' if deploying to project site
  basePath: "",
  trailingSlash: true,
};

export default nextConfig;
