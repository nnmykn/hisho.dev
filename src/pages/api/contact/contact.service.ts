import { createContactInput } from '@src/pages/api/contact/createContact.input'

export class ContactService {
  public static readonly createContact = async (input: unknown) => {
    const parse = createContactInput.safeParse(input)

    if (!parse.success) {
      return {
        data: undefined,
        error: parse.error.flatten().fieldErrors,
        status: 400,
      }
    } else {
      console.log({ input: parse.data })

      return {
        data: 'success',
        error: undefined,
        status: 200,
      }
    }
  }
}
