import { publicProcedure, router } from '@backend/trpc'
import { createContactInput } from '@shared/contact/createContact.input'
import { postContactChatMessage } from '@backend/lib/slack/postChatMessage'

export const contactRouter = router({
  create: publicProcedure
    .input(createContactInput)
    .mutation(async ({ input }) => {
      try {
        await postContactChatMessage(input)
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
