'use server'

import { z } from 'zod'
import { CreateContactService } from '@/src/app/(basic)/_action/createContact.service'
import {
  CreateContactInput,
  createContactInputSchema,
} from '@/src/app/(basic)/_action/craeteContact.entity'

export type CreateContactError =
  z.typeToFlattenedError<CreateContactInput>['fieldErrors']

export type CreateContactResult =
  | {
      success: true
      message: string
    }
  | {
      success: false
      message: undefined
      error: CreateContactError
    }
  | {
      success: false
      message: string
      error: undefined
    }

export const createContact = async (
  createContactInput: CreateContactInput
): Promise<CreateContactResult> => {
  const parsedInput = createContactInputSchema.safeParse(createContactInput)
  if (parsedInput.success) {
    return await CreateContactService.create(parsedInput.data)
  } else {
    return {
      success: false,
      message: undefined,
      error: parsedInput.error.flatten().fieldErrors,
    }
  }
}
