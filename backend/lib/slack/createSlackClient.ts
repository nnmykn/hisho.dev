import { WebClient } from '@slack/web-api'
import { SLACK_BOT_USER_OAUTH_TOKEN } from '@backend/constant'

export const createSlackClient = () => {
  return new WebClient(SLACK_BOT_USER_OAUTH_TOKEN)
}
