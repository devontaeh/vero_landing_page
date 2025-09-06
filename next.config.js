/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/vero_landing_page",
  assetPrefix: "/vero_landing_page/",
  images: {
    unoptimized: true,
  },
  // Development server configuration
  ...(process.env.NODE_ENV === "development" && {
    experimental: {
      serverComponentsExternalPackages: [],
    },
  }),
};

module.exports = nextConfig;
