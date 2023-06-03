import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'
import * as process from 'process'
export const env = createEnv({
  server: {
    VERCEL_URL: z.string().min(1).catch(''),
    PORT: z.coerce.number().int().catch(3000),
    NODE_ENV: z.enum(['development', 'production', 'test'] as const),
    SLACK_USERNAME: z.string().min(1),
    SLACK_BOT_USER_OAUTH_TOKEN: z.string().min(1),
    SLACK_CONTACT_CHANNEL_CONVERSATION_ID: z.string().min(1),
    SENDGRID_API_KEY: z.string().min(1),
    FROM_EMAIL: z.string().email(),
  },
  client: {},
  runtimeEnv: {
    SLACK_USERNAME: process.env['SLACK_USERNAME'],
    SLACK_BOT_USER_OAUTH_TOKEN: process.env['SLACK_BOT_USER_OAUTH_TOKEN'],
    SLACK_CONTACT_CHANNEL_CONVERSATION_ID:
      process.env['SLACK_CONTACT_CHANNEL_CONVERSATION_ID'],
    SENDGRID_API_KEY: process.env['SENDGRID_API_KEY'],
    FROM_EMAIL: process.env['FROM_EMAIL'],
    VERCEL_URL: process.env['VERCEL_URL'],
    PORT: process.env['PORT'],
    NODE_ENV: process.env['NODE_ENV'],
  },
})
