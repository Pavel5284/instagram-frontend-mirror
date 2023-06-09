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
    'packages.rhf.inputs.input',
    'packages.components.information-layout',
    'packages.icons.log-out',
    'packages.icons.home-outline',
    'packages.icons.home',
    'packages.icons.plus-square-outline',
    'packages.icons.plus-square',
    'packages.icons.person-outline',
    'packages.icons.person',
    'packages.icons.trending-up',
    'packages.icons.bookmark-outline',
    'packages.icons.bookmark',
    'packages.icons.arrow-ios-back',
    'packages.icons.arrow-ios-down',
    'packages.icons.arrow-ios-forward',
    'packages.icons.arrow-ios-up',
    'packages.icons.block',
    'packages.icons.calendar',
    'packages.icons.calendar-outline',
    'packages.icons.close',
    'packages.icons.expand',
    'packages.icons.image',
    'packages.icons.image-outline',
    'packages.icons.plus-circle',
    'packages.icons.plus-circle-outline',
    'packages.icons.search',
  ],
};

module.exports = nextConfig;
