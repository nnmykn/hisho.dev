'use client'

import { cn } from '@/src/util/cn/cn'
import { ComponentProps, forwardRef } from 'react'

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  Pick<ComponentProps<'textarea'>, 'name' | 'onBlur' | 'onChange' | 'value'>
>(({ value, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'block w-full text-primary',
        'border-2 aria-[invalid="true"]:border-red'
      )}
      ref={ref}
      value={value ?? ''}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'
