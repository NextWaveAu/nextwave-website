// NextWave.au - Next.js Configuration
// This file configures the Next.js framework for the NextWave website

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['nextwave.au', 'images.unsplash.com'],
  },
  i18n: {
    locales: ['en-AU'],
    defaultLocale: 'en-AU',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
