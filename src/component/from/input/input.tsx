'use client'

import { ComponentProps, forwardRef } from 'react'

export const Input = forwardRef<
  HTMLInputElement,
  Pick<ComponentProps<'input'>, 'name' | 'onBlur' | 'onChange' | 'type'>
>(({ type, ...props }, ref) => {
  return (
    <input
      className={'block w-full text-primary'}
      ref={ref}
      type={type ?? 'text'}
      {...props}
    />
  )
})
