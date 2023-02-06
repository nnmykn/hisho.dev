import { createSlackClient } from '@backend/lib/slack/createSlackClient'
import {
  SLACK_CONTACT_CHANNEL_CONVERSATION_ID,
  SLACK_USERNAME,
} from '@backend/constant'
import type { CreateContactInput } from '@shared/contact/createContact.input'
import { createMultiLineString } from '@shared/util/createMultiLineString/createMultiLineString'

const createContactMessage = (input: CreateContactInput) =>
  createMultiLineString(
    `<@${SLACK_USERNAME}>`,
    `name: ${input.name}`,
    `email: ${input.email}`,
    `message: ${input.message}`
  )

export const postContactChatMessage = (input: CreateContactInput) => {
  const client = createSlackClient()
  return client.chat.postMessage({
    channel: SLACK_CONTACT_CHANNEL_CONVERSATION_ID,
    text: createContactMessage(input),
  })
}