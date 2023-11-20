import { env } from '@/constant/env'
import { CreateContactInput } from '@/feature/contact/create-contact/craete-contact.input'
import { CreateContactResult } from '@/feature/contact/create-contact/create-contact'
import { sendMail } from '@/lib/send-grid/send-mail'
import { postChatMessage } from '@/lib/slack/post-chat-message'
import { joinWithNewLines } from '@/util/join-with-new-lines/join-with-new-lines'

export class CreateContactService {
  public static readonly create = async (
    input: CreateContactInput
  ): Promise<CreateContactResult> => {
    const origin = 'https://www.example.com'
    try {
      await Promise.all([
        postChatMessage({
          channelId: env.SLACK_CONTACT_CHANNEL_CONVERSATION_ID,
          message: joinWithNewLines(
            `<@${env.SLACK_USERNAME}>`,
            `name: ${input.name}`,
            `email: ${input.email}`,
            `message: ${input.message}`,
            '',
            '',
            `このチャットは: "${origin}"から送信されました。`
          ),
        }),
        sendMail({
          fromEmail: env.FROM_EMAIL,

          message: joinWithNewLines(
            'お問い合わせありがとうございます',
            '',
            '',
            '後ほどご連絡いたします'
          ),
          subject: 'お問い合わせありがとうございます',
          toEmail: input.email,
        }),
      ])

      return {
        message: 'お問い合わせを受け付けました',
        success: true,
      }
    } catch {
      return {
        error: undefined,
        message: 'お問い合わせの送信に失敗しました',
        success: false,
      }
    }
  }
}
