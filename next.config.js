/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

let withBundleAnalyzer = null
if (process.env.ANALYZE) {
  withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true
  })
}

module.exports = withBundleAnalyzer ? withBundleAnalyzer(nextConfig) : nextConfig
