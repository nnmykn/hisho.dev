'use client'

import { useForm } from '@src/lib/form/useForm/useForm'
import { Spacer } from '@src/component/Spacer/Spacer'
import { Input } from '@src/component/Form/Input/Input'
import { Textarea } from '@src/component/Form/Textarea/Textarea'
import type { CreateContactInput } from '@shared/contact/createContact.input'
import { trpc } from '@src/lib/trpc/trpc'
import { z } from 'zod'

export const CreateContactForm = () => {
  const createContact = trpc.contact.create.useMutation()
  const serverErrors: Record<keyof CreateContactInput, string[] | undefined> = {
    name: createContact.error?.shape?.data.zodError?.['name'],
    email: createContact.error?.shape?.data.zodError?.['email'],
    message: createContact.error?.shape?.data.zodError?.['message'],
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    schema: z.object({
      name: z.string().min(1000).uuid(),
      email: z.string(),
      message: z.string(),
    }),
  })
  console.log(errors)

  const handleFormSubmit = async ({
    name,
    email,
    message,
  }: CreateContactInput) => {
    try {
      await createContact.mutateAsync({
        name,
        email,
        message,
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form
      id={'CreateContactForm'}
      className={'flex flex-col'}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div>
        <label htmlFor={'name'}>名前</label>
        <Input {...register('name')} />
        {errors.name ? (
          <p className={'text-red text-sm mt-1'}>{errors.name.message}</p>
        ) : serverErrors.name ? (
          serverErrors.name.map((error) => (
            <p key={error} className={'text-red text-sm mt-1'}>
              {error}
            </p>
          ))
        ) : null}
      </div>
      <Spacer size={3} />
      <div>
        <label htmlFor={'email'}>メールアドレス</label>
        <Input {...register('email')} />
        {errors.email ? (
          <p className={'text-red text-sm mt-1'}>{errors.email.message}</p>
        ) : serverErrors.email ? (
          serverErrors.email.map((error) => (
            <p key={error} className={'text-red text-sm mt-1'}>
              {error}
            </p>
          ))
        ) : null}
      </div>
      <Spacer size={3} />
      <div className={'flex flex-col'}>
        <label htmlFor={'message'}>メッセージ</label>
        <Textarea {...register('message')} />
        {errors.message ? (
          <p className={'text-red text-sm mt-1'}>{errors.message.message}</p>
        ) : serverErrors.message ? (
          serverErrors.message.map((error) => (
            <p key={error} className={'text-red text-sm mt-1'}>
              {error}
            </p>
          ))
        ) : null}
      </div>
      <Spacer size={10} />
      <button type={'submit'}>送信</button>
    </form>
  )
}
