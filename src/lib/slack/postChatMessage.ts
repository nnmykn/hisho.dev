import { createSlackClient } from '@/src/lib/slack/createSlackClient'

type Params = {
  channelId: string
  message: string
}

export const postChatMessage = ({ channelId, message }: Params) => {
  const client = createSlackClient()
  return client.chat.postMessage({
    channel: channelId,
    text: message,
  })
}
