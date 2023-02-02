'use client'

import { ComponentProps, forwardRef } from 'react'

export const Input = forwardRef<
  HTMLInputElement,
  Pick<ComponentProps<'input'>, 'onChange' | 'onBlur' | 'name' | 'type'>
>(({ type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={'type'}
      className={'text-primary block w-full'}
      {...props}
    />
  )
})

Input.displayName = 'Input'
