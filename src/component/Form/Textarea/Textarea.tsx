'use client'

import { ComponentProps, forwardRef } from 'react'

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  Omit<ComponentProps<'textarea'>, 'className'>
>(({ value, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      value={value ?? ''}
      className={'text-primary block w-full'}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'
