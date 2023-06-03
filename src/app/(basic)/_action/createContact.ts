'use server'

import { z } from 'zod'

const createContactInputSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type CreateContactInput = typeof createContactInputSchema
export type CreateContactError = z.typeToFlattenedError<
  z.output<CreateContactInput>
>['fieldErrors']

type Result =
  | ({
      success: true
    } & z.output<CreateContactInput>)
  | {
      success: false
      error: CreateContactError
    }

export const createContact = async (
  createContactInput: z.output<CreateContactInput>
): Promise<Result> => {
  const parsedInput = createContactInputSchema.safeParse(createContactInput)
  if (parsedInput.success) {
    return {
      success: true,
      ...parsedInput.data,
    }
  } else {
    return {
      success: false,
      error: parsedInput.error.flatten().fieldErrors,
    }
  }
}
