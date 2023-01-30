'use client'

import { useForm } from '@src/lib/form/useForm/useForm'
import { ComponentProps, forwardRef } from 'react'
import { z } from 'zod'
import { Spacer } from '@src/component/Spacer/Spacer'

const Input = forwardRef<
  HTMLInputElement,
  Omit<ComponentProps<'input'>, 'className'>
>(({ value, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={'type'}
      value={value}
      className={'text-primary block w-full'}
      {...props}
    />
  )
})

const schema = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
})

export const ContactForm = () => {
  const { handleSubmit, register } = useForm({
    schema,
  })

  const handleFormSubmit = async ({
    name,
    email,
    message,
  }: z.output<typeof schema>) => {
    try {
      alert(JSON.stringify({ name, email, message }, null, 2))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form
      id={'ContactForm'}
      className={'flex flex-col'}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div>
        <label htmlFor={'name'}>名前</label>
        <Input {...register('name')} />
      </div>
      <Spacer size={3} />
      <div>
        <label htmlFor={'email'}>メールアドレス</label>
        <Input {...register('email')} />
      </div>
      <Spacer size={3} />
      <div className={'flex flex-col'}>
        <label htmlFor={'message'}>メッセージ</label>
        <textarea {...register('message')} />
      </div>
      <Spacer size={10} />
      <button type={'submit'}>送信</button>
    </form>
  )
}
