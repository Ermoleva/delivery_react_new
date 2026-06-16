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
  images: {
    domains: ['localhost', '127.0.0.1'],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
