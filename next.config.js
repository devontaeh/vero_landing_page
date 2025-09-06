/** @type {import('next').NextConfig} */
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
};

module.exports = nextConfig;
