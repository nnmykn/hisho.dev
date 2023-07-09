'use client'
import {
  FormControl,
  FormErrorMessage,
  FormField,
  FormItem,
  FormLabel,
  FormProvider,
} from '@/src/component/from/form/form'
import { Input } from '@/src/component/from/input/input'
import { Textarea } from '@/src/component/from/textarea/textarea'
import {
  CreateContactError,
  createContact,
} from '@/src/feature/contact/create-contact/create-contact'
import { useForm } from '@/src/lib/form/use-form/use-form'
import { useState, useTransition } from 'react'
import { z } from 'zod'

const schema = z.object({
  email: z.string(),
  message: z.string(),
  name: z.string(),
})

type Props = Partial<{
  onError: () => void
  onSuccess: () => void
}>
export const CreateContactForm = ({ onError, onSuccess }: Props = {}) => {
  const [isPending, startTransition] = useTransition()
  const form = useForm({
    schema,
  })
  const [errors, setErrors] = useState<CreateContactError | undefined>(
    undefined
  )

  const handleFormSubmit = async (input: z.output<typeof schema>) => {
    try {
      const result = await createContact(input)
      if (result.success) {
        onSuccess?.()
        form.reset()
        setErrors(undefined)
      } else {
        console.log(result.error)
        setErrors(result.error)
        onError?.()
      }
    } catch (e) {
      console.log(e)
      onError?.()
    }
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={(e) =>
          startTransition(() =>
            form.handleSubmit((i) => handleFormSubmit(i))(e)
          )
        }
        className={'grid gap-y-2'}
      >
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel>名前</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormErrorMessage>
                {errors?.name &&
                  errors.name.map((m) => <span key={`email_${m}`}>{m}</span>)}
              </FormErrorMessage>
            </FormItem>
          )}
          control={form.control}
          name={'name'}
        />
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input {...field} type={'email'} />
              </FormControl>
              <FormErrorMessage>
                {errors?.email &&
                  errors.email.map((m) => <span key={`email_${m}`}>{m}</span>)}
              </FormErrorMessage>
            </FormItem>
          )}
          control={form.control}
          name={'email'}
        />
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel>メッセージ</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormErrorMessage>
                {errors?.message &&
                  errors.message.map((m) => (
                    <span key={`message_${m}`}>{m}</span>
                  ))}
              </FormErrorMessage>
            </FormItem>
          )}
          control={form.control}
          name={'message'}
        />
        <button>{isPending ? '送信中' : '送信'}</button>
      </form>
    </FormProvider>
  )
}
