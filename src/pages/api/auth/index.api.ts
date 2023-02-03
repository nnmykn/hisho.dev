import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @see https://github.com/vercel/examples/blob/main/edge-middleware/basic-auth-password/pages/api/auth.ts
 */
export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.setHeader('WWW-authenticate', 'Basic realm="Secure Area"')
  res.statusCode = 401
  res.end(`Auth Required.`)
}
