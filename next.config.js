/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/vero_landing_page" : "",
  assetPrefix: isProd ? "/vero_landing_page/" : "",
};

module.exports = nextConfig;
