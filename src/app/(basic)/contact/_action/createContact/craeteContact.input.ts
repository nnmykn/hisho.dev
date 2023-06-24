import { z } from 'zod'

export const createContactInputSchema = z.object({
  email: z.string().email(),
  message: z.string().min(1).max(500),
  name: z.string().min(1).max(50),
})

export type CreateContactInput = z.output<typeof createContactInputSchema>
