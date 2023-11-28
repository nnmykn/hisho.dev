const __PROD__ = process.env.NODE_ENV === 'production'

/**
 * @type {import('next').NextConfig}
 * */
module.exports = {
  /**
   * @see https://nextjs.org/docs/architecture/nextjs-compiler#remove-react-properties
   */
  compiler: {
    removeConsole: __PROD__
      ? {
          exclude: ['error'],
        }
      : false,
  },
  experimental: {
    typedRoutes: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
}
