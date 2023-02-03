'use client'

import { ComponentProps, forwardRef } from 'react'

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  Pick<ComponentProps<'textarea'>, 'onChange' | 'onBlur' | 'name'>
>(({ ...props }, ref) => {
  return (
    <textarea ref={ref} className={'text-primary block w-full'} {...props} />
  )
})

Textarea.displayName = 'Textarea'
