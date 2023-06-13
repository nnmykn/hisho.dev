import { env } from '@/src/constant/env'

export const NEXT_PUBLIC_FRONTEND_URL =
  env.NEXT_PUBLIC_NODE_ENV === 'production'
    ? (`https://${env.NEXT_PUBLIC_VERCEL_URL}` as const)
    : (`http://localhost:${env.NEXT_PUBLIC_PORT}` as const)
