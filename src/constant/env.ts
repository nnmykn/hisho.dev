import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_LOCAL_ENV: z.enum(['development', 'production'] as const),
    NEXT_PUBLIC_NODE_ENV: z.enum(['development', 'production'] as const),
    NEXT_PUBLIC_PORT: z.coerce.number().int().catch(3000),
    NEXT_PUBLIC_VERCEL_URL: z.string().min(1).catch(''),
  },
  runtimeEnv: {
    FROM_EMAIL: process.env['FROM_EMAIL'],
    LOCAL_ENV: process.env['LOCAL_ENV'],
    NEXT_PUBLIC_LOCAL_ENV: process.env['NEXT_PUBLIC_LOCAL_ENV'],
    NEXT_PUBLIC_NODE_ENV: process.env['NODE_ENV'],
    NEXT_PUBLIC_PORT: process.env['NEXT_PUBLIC_PORT'],
    NEXT_PUBLIC_VERCEL_URL: process.env['NEXT_PUBLIC_VERCEL_URL'],
    NODE_ENV: process.env['NODE_ENV'],
    SENDGRID_API_KEY: process.env['SENDGRID_API_KEY'],
    SLACK_BOT_USER_OAUTH_TOKEN: process.env['SLACK_BOT_USER_OAUTH_TOKEN'],
    SLACK_CONTACT_CHANNEL_CONVERSATION_ID:
      process.env['SLACK_CONTACT_CHANNEL_CONVERSATION_ID'],
    SLACK_USERNAME: process.env['SLACK_USERNAME'],
    VERCEL_URL: process.env['VERCEL_URL'],
  },
  server: {
    FROM_EMAIL: z.string().email(),
    LOCAL_ENV: z.enum(['development', 'production'] as const),
    NODE_ENV: z.enum(['development', 'production'] as const),
    SENDGRID_API_KEY: z.string().min(1),
    SLACK_BOT_USER_OAUTH_TOKEN: z.string().min(1),
    SLACK_CONTACT_CHANNEL_CONVERSATION_ID: z.string().min(1),
    SLACK_USERNAME: z.string().min(1),
    VERCEL_URL: z.string().min(1).catch(''),
  },
})
