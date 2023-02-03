import { z } from 'zod'

export const createContactInput = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

export type CreateContactInput = z.infer<typeof createContactInput>
