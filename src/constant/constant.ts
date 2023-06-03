import { env } from '@/src/constant/env'

export const FRONTEND_URL =
  env.VERCEL_URL === ''
    ? (`https://${env.VERCEL_URL}` as const)
    : (`http://localhost:${env.PORT}` as const)
