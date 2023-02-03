/** @type {import('next').NextConfig} */
const nextConfig = () => {
  const __PROD__ = process.env.NODE_ENV === 'production'

  return {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    pageExtensions: ['api.ts', 'tsx'],
    async redirects() {
      return __PROD__
        ? [
            {
              source: '/:path((?!404$).*)',
              destination: '/404',
              permanent: true,
            },
          ]
        : []
    },
  }
}

module.exports = nextConfig()
