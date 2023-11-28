'use client'

import { cn } from '@/util/cn/cn'
import { ComponentProps, forwardRef } from 'react'

export const Input = forwardRef<
  HTMLInputElement,
  Pick<
    ComponentProps<'input'>,
    'name' | 'onBlur' | 'onChange' | 'type' | 'value'
  >
>(({ type = 'text', value = '', ...props }, ref) => {
  return (
    <input
      className={cn(
        'block w-full bg-transparent px-2 py-1 text-white backdrop-blur-md',
        'border-2 border-gray-600 aria-[invalid="true"]:border-red'
      )}
      ref={ref}
      type={type}
      value={value}
      {...props}
    />
  )
})
