import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    SLACK_USERNAME: z.string().min(1),
    SLACK_BOT_USER_OAUTH_TOKEN: z.string().min(1),
    SLACK_CONTACT_CHANNEL_CONVERSATION_ID: z.string().min(1),
    SENDGRID_API_KEY: z.string().min(1),
    FROM_EMAIL: z.string().email(),
    VERCEL_URL: z.string().min(1).catch(''),
    NODE_ENV: z.enum(['development', 'production'] as const),
    LOCAL_ENV: z.enum(['development', 'production'] as const),
  },
  client: {
    NEXT_PUBLIC_NODE_ENV: z.enum(['development', 'production'] as const),
    NEXT_PUBLIC_VERCEL_URL: z.string().min(1).catch(''),
    NEXT_PUBLIC_PORT: z.coerce.number().int().catch(3000),
    NEXT_PUBLIC_LOCAL_ENV: z.enum(['development', 'production'] as const),
  },
  runtimeEnv: {
    VERCEL_URL: process.env['VERCEL_URL'],
    NODE_ENV: process.env['NODE_ENV'],
    LOCAL_ENV: process.env['LOCAL_ENV'],
    SLACK_USERNAME: process.env['SLACK_USERNAME'],
    SLACK_BOT_USER_OAUTH_TOKEN: process.env['SLACK_BOT_USER_OAUTH_TOKEN'],
    SLACK_CONTACT_CHANNEL_CONVERSATION_ID:
      process.env['SLACK_CONTACT_CHANNEL_CONVERSATION_ID'],
    SENDGRID_API_KEY: process.env['SENDGRID_API_KEY'],
    FROM_EMAIL: process.env['FROM_EMAIL'],
    NEXT_PUBLIC_VERCEL_URL: process.env['NEXT_PUBLIC_VERCEL_URL'],
    NEXT_PUBLIC_PORT: process.env['NEXT_PUBLIC_PORT'],
    NEXT_PUBLIC_NODE_ENV: process.env['NODE_ENV'],
    NEXT_PUBLIC_LOCAL_ENV: process.env['NEXT_PUBLIC_LOCAL_ENV'],
  },
})
