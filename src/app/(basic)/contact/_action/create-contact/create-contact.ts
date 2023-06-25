'use server'

import {
  CreateContactInput,
  createContactInputSchema,
} from '@/src/app/(basic)/contact/_action/create-contact/craete-contact.input'
import { CreateContactService } from '@/src/app/(basic)/contact/_action/create-contact/create-contact.service'
import { z } from 'zod'

export type CreateContactError =
  z.typeToFlattenedError<CreateContactInput>['fieldErrors']

export type CreateContactResult =
  | {
      error: CreateContactError
      message: undefined
      success: false
    }
  | {
      error: undefined
      message: string
      success: false
    }
  | {
      message: string
      success: true
    }

export const createContact = async (
  createContactInput: CreateContactInput
): Promise<CreateContactResult> => {
  const parsedInput = createContactInputSchema.safeParse(createContactInput)
  if (parsedInput.success) {
    return await CreateContactService.create(parsedInput.data)
  } else {
    return {
      error: parsedInput.error.flatten().fieldErrors,
      message: undefined,
      success: false,
    }
  }
}
