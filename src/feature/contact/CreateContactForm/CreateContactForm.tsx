'use client'

import { useForm } from '@src/lib/form/useForm/useForm'
import { z } from 'zod'
import { Spacer } from '@src/component/Spacer/Spacer'
import wretch from 'wretch'
import { Input } from '@src/component/Form/Input/Input'
import { Textarea } from '@src/component/Form/Textarea/Textarea'
import { createContactInput } from '@src/pages/api/contact/createContact.input'

const responseSchema = z.literal('success')

const api = wretch('/api/contact')
  .errorType('json')
  .resolve(async (r) => responseSchema.parse(await r.json()))

export const CreateContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    schema: createContactInput,
  })

  const handleFormSubmit = async ({
    name,
    email,
    message,
  }: z.output<typeof createContactInput>) => {
    try {
      await api.post({
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
        {errors.name && (
          <p className={'text-red text-sm mt-1'}>{errors.name.message}</p>
        )}
      </div>
      <Spacer size={3} />
      <div>
        <label htmlFor={'email'}>メールアドレス</label>
        <Input {...register('email')} />
        {errors.email && (
          <p className={'text-red text-sm mt-1'}>{errors.email.message}</p>
        )}
      </div>
      <Spacer size={3} />
      <div className={'flex flex-col'}>
        <label htmlFor={'message'}>メッセージ</label>
        <Textarea {...register('message')} />
        {errors.message && (
          <p className={'text-red text-sm mt-1'}>{errors.message.message}</p>
        )}
      </div>
      <Spacer size={10} />
      <button type={'submit'}>送信</button>
    </form>
  )
}
