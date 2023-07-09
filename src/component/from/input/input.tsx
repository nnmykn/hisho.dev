'use client'

import { cn } from '@/src/util/cn/cn'
import { ComponentProps, forwardRef } from 'react'

export const Input = forwardRef<
  HTMLInputElement,
  Pick<
    ComponentProps<'input'>,
    'name' | 'onBlur' | 'onChange' | 'type' | 'value'
  >
>(({ type, value, ...props }, ref) => {
  return (
    <input
      className={cn(
        'block w-full text-primary',
        'border-2 aria-[invalid="true"]:border-red'
      )}
      ref={ref}
      type={type ?? 'text'}
      value={value ?? ''}
      {...props}
    />
  )
})
