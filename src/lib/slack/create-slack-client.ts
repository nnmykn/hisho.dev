import { env } from '@/constant/env'
import { WebClient } from '@slack/web-api'

export const createSlackClient = () => {
  return new WebClient(env.SLACK_BOT_USER_OAUTH_TOKEN)
}
