import { publicProcedure, router } from '@backend/trpc'
import { createContactInput } from '@shared/contact/createContact.input'
import { ContactService } from '@backend/routers/contact/contact.service'

export const contactRouter = router({
  create: publicProcedure.input(createContactInput).mutation(({ input }) => {
    return ContactService.create(input)
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
