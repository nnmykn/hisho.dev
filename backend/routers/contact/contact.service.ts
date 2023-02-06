import type { CreateContactInput } from '@shared/contact/createContact.input'
import { postChatMessage } from '@backend/lib/slack/postChatMessage'
import { sendMail } from '@backend/lib/sendGrid/sendMail'
import {
  FROM_EMAIL,
  SLACK_CONTACT_CHANNEL_CONVERSATION_ID,
  SLACK_USERNAME,
} from '@backend/constant'
import { createMultiLineString } from '@shared/util/createMultiLineString/createMultiLineString'
import type { Context } from '@backend/context'

export class ContactService {
  public static readonly create = async (
    input: CreateContactInput,
    ctx: Context
  ) => {
    try {
      await Promise.all([
        postChatMessage({
          channelId: SLACK_CONTACT_CHANNEL_CONVERSATION_ID,
          message: createMultiLineString(
            `<@${SLACK_USERNAME}>`,
            `name: ${input.name}`,
            `email: ${input.email}`,
            `message: ${input.message}`,
            '',
            '',
            `このチャットは: "${ctx.req.headers.origin}"から送信されました。`
          ),
        }),
        sendMail({
          toEmail: input.email,
          fromEmail: FROM_EMAIL,
          subject: 'お問い合わせありがとうございます',
          message: createMultiLineString(
            'お問い合わせありがとうございます',
            '',
            '',
            '後ほどご連絡いたします',
            '',
            '',
            `このメールは"${ctx.req.headers.origin}"から送信されました。`
          ),
        }),
      ])

      return 'success'
    } catch (e) {
      return 'not success'
    }
  }
}
