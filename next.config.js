/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Development server configuration
  ...(process.env.NODE_ENV === "development" && {
    experimental: {
      serverComponentsExternalPackages: [],
    },
  }),
  // Only use basePath for production builds (GitHub Pages)
  ...(isProd && {
    basePath: "/vero_landing_page",
    assetPrefix: "/vero_landing_page/",
  }),
};

module.exports = nextConfig;
