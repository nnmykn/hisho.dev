'use client'

import { ComponentProps, forwardRef } from 'react'

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  Pick<ComponentProps<'textarea'>, 'name' | 'onBlur' | 'onChange'>
>(({ ...props }, ref) => {
  return (
    <textarea className={'block w-full text-primary'} ref={ref} {...props} />
  )
})

Textarea.displayName = 'Textarea'
