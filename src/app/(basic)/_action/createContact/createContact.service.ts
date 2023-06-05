import { postChatMessage } from '@/src/lib/slack/postChatMessage'
import { env } from '@/src/constant/env'
import { joinWithNewLines } from '@/src/util/joinWithNewLines/joinWithNewLines'
import { sendMail } from '@/src/lib/sendGrid/sendMail'
import { CreateContactResult } from '@/src/app/(basic)/_action/createContact/createContact'
import { CreateContactInput } from '@/src/app/(basic)/_action/createContact/craeteContact.entity'

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
          toEmail: input.email,
          fromEmail: env.FROM_EMAIL,
          subject: 'お問い合わせありがとうございます',
          message: joinWithNewLines(
            'お問い合わせありがとうございます',
            '',
            '',
            '後ほどご連絡いたします'
          ),
        }),
      ])

      return {
        success: true,
        message: 'お問い合わせを受け付けました',
      }
    } catch {
      return {
        success: false,
        message: 'お問い合わせの送信に失敗しました',
        error: undefined,
      }
    }
  }
}
