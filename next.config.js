/**
 * @returns {import('next').NextConfig}
 * */
const nextConfig = () => {
  const __PROD__ = process.env.NODE_ENV === 'production'

  return {
    poweredByHeader: false,
    trailingSlash: true,
    reactStrictMode: true,
    experimental: {
      appDir: true,
      typedRoutes: true,
      serverActions: true,
    },
  }
}

module.exports = nextConfig()
