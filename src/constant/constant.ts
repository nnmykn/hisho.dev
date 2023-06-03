import { env } from '@/src/constant/env'

export const NEXT_PUBLIC_FRONTEND_URL =
  env.NODE_ENV === 'production'
    ? (`https://${env.VERCEL_URL}` as const)
    : (`http://localhost:${env.PORT}` as const)
