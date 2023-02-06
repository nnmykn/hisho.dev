import { publicProcedure, router } from '@backend/trpc'
import { createContactInput } from '@shared/contact/createContact.input'
import { postContactChatMessage } from '@backend/lib/slack/postChatMessage'
import { sendMail } from '@backend/lib/sendGrid/sendMail'
import { FROM_EMAIL } from '@backend/constant'
import { createMultiLineString } from '@shared/util/createMultiLineString/createMultiLineString'

export const contactRouter = router({
  create: publicProcedure
    .input(createContactInput)
    .mutation(async ({ input }) => {
      try {
        await Promise.all([
          postContactChatMessage(input),
          sendMail({
            toEmail: input.email,
            fromEmail: FROM_EMAIL,
            subject: 'お問い合わせありがとうございます',
            message: createMultiLineString(
              'お問い合わせありがとうございます',
              '',
              '',
              '後ほどご連絡いたします'
            ),
          }),
        ])

        return 'success'
      } catch (e) {
        return 'not success'
      }
    }),
  get: publicProcedure.query(() => {
    return [
      {
        name: 'hisho',
      },
      {
        name: 'hisho2',
      },
    ]
  }),
})
