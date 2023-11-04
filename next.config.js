/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    appDir: true,
  },
  api: {
    bodyParser: false,
  },
};

module.exports = nextConfig;
