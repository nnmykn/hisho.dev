import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'
export const env = createEnv({
  server: {
    VERCEL_URL: z.string().min(1).catch(''),
    PORT: z.coerce.number().int().catch(3000),
    NODE_ENV: z.enum(['development', 'production', 'test'] as const),
  },
  client: {},
  runtimeEnv: {
    VERCEL_URL: process.env['VERCEL_URL'],
    PORT: process.env['PORT'],
    NODE_ENV: process.env['NODE_ENV'],
  },
})
