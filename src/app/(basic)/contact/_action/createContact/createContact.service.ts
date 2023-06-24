import { CreateContactInput } from '@/src/app/(basic)/contact/_action/createContact/craeteContact.input'
import { CreateContactResult } from '@/src/app/(basic)/contact/_action/createContact/createContact'
import { env } from '@/src/constant/env'
import { sendMail } from '@/src/lib/sendGrid/sendMail'
import { postChatMessage } from '@/src/lib/slack/postChatMessage'
import { joinWithNewLines } from '@/src/util/joinWithNewLines/joinWithNewLines'

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
