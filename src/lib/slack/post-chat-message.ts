import { createSlackClient } from '@/src/lib/slack/create-slack-client'

type Parameters_ = {
  channelId: string
  message: string
}

export const postChatMessage = ({ channelId, message }: Parameters_) => {
  const client = createSlackClient()
  return client.chat.postMessage({
    channel: channelId,
    text: message,
  })
}
