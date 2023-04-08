/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'theme.scheme',
    'packages.components.header',
    'packages.inputs.input',
    'packages.inputs.button',
    'packages.components.auth-form',
    'packages.components.modal',
  ],
};

module.exports = nextConfig;
