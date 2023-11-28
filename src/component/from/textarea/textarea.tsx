'use client'

import { cn } from '@/util/cn/cn'
import { ComponentProps, forwardRef } from 'react'

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  Pick<ComponentProps<'textarea'>, 'name' | 'onBlur' | 'onChange' | 'value'>
>(({ value = '', ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'block w-full bg-transparent px-2 py-1 text-white backdrop-blur-md',
        'border-2 border-gray-600 aria-[invalid="true"]:border-red'
      )}
      ref={ref}
      value={value}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'
