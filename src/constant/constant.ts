import { env } from '@/src/constant/env'
import { match } from 'ts-pattern'

export const NEXT_PUBLIC_FRONTEND_URL = match(env.NEXT_PUBLIC_LOCAL_ENV)
  .with(
    'development',
    () => `http://localhost:${env.NEXT_PUBLIC_PORT}` as const
  )
  .with('production', () => `https://${env.NEXT_PUBLIC_VERCEL_URL}` as const)
  .exhaustive()
