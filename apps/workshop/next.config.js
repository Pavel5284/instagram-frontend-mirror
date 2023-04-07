/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['theme.scheme','packages.components.header'],
};

module.exports = nextConfig;
