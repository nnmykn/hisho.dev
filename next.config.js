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
    /**
     * @see https://nextjs.org/docs/architecture/nextjs-compiler#remove-react-properties
     */
    compiler: {
      removeConsole: __PROD__
        ? {
            exclude: ['error'],
          }
        : false,
      reactRemoveProperties: __PROD__
        ? { properties: ['^data-testid'] }
        : false,
    },
  }
}

module.exports = nextConfig()
