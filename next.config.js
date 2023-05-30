/** @type {import('next').NextConfig} */
const nextConfig = () => {
  const __PROD__ = process.env.NODE_ENV === 'production'

  return {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    pageExtensions: ['api.ts', 'tsx'],
  }
}

module.exports = nextConfig()
