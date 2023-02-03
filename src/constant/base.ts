import { PORT, VERCEL_URL } from '@src/constant/env'
import { isBrowser } from '@src/util/isBrowser/isBrowser'

export const FRONTEND_URL = isBrowser()
  ? ''
  : VERCEL_URL
  ? (`https://${VERCEL_URL}` as const)
  : (`http://localhost:${PORT}` as const)

export const TRPC_ENDPOINT = `${FRONTEND_URL}/api/trpc` as const
