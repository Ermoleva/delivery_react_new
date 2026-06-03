const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,

  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;
