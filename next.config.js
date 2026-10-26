/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  staticPageGenerationTimeout: 120,
}
module.exports = nextConfig
