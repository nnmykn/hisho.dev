import { publicProcedure, router } from '@backend/trpc'
import { createContactInput } from '@shared/contact/createContact.input'

export const contactRouter = router({
  create: publicProcedure.input(createContactInput).mutation(async () => {
    return 'success'
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
