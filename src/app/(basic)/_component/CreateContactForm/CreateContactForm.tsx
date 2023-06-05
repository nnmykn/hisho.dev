'use client'
import { useForm } from '@/src/lib/form/useForm/useForm'
import { z } from 'zod'
import { Input } from '@/src/component/Form/Input/Input'
import { Textarea } from '@/src/component/Form/Textarea/Textarea'
import {
  createContact,
  CreateContactError,
} from '@/src/app/(basic)/_action/createContact/createContact'
import { useState, useTransition } from 'react'

const schema = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
})
export const CreateContactForm = () => {
  const [isPending, startTransition] = useTransition()
  const { handleSubmit, register, reset } = useForm({
    schema,
  })
  const [errors, setErrors] = useState<CreateContactError | undefined>(
    undefined
  )

  const handleFormSubmit = async (input: z.output<typeof schema>) => {
    try {
      const result = await createContact(input)
      if (result.success) {
        reset()
        setErrors(undefined)
      } else {
        console.log(result.error)
        setErrors(result.error)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form
      onSubmit={(e) =>
        startTransition(() => handleSubmit((i) => handleFormSubmit(i))(e))
      }
      className={'grid gap-y-2'}
    >
      <div>
        <label htmlFor={'name'}>名前</label>
        <Input {...register('name')} />
        {errors?.name &&
          errors.name.map((m) => <span key={`name_${m}`}>{m}</span>)}
      </div>
      <div>
        <label htmlFor={'email'}>メールアドレス</label>
        <Input {...register('email')} type={'email'} />
        {errors?.email &&
          errors.email.map((m) => <span key={`email_${m}`}>{m}</span>)}
      </div>
      <div>
        <label htmlFor={'message'}>メッセージ</label>
        <Textarea {...register('message')} />
        {errors?.message &&
          errors.message.map((m) => <span key={`message_${m}`}>{m}</span>)}
      </div>
      <button>{isPending ? '送信中' : '送信'}</button>
    </form>
  )
}
