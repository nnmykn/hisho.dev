'use client'

import { ComponentProps, forwardRef } from 'react'

export const Input = forwardRef<
  HTMLInputElement,
  Omit<ComponentProps<'input'>, 'className'>
>(({ value, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={'type'}
      value={value ?? ''}
      className={'text-primary block w-full'}
      {...props}
    />
  )
})

Input.displayName = 'Input'
