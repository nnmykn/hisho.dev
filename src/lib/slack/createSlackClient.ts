import { WebClient } from '@slack/web-api'
import { env } from '@/src/constant/env'

export const createSlackClient = () => {
  return new WebClient(env.SLACK_BOT_USER_OAUTH_TOKEN)
}
