'use client'

import { cn } from '@/util/cn/cn'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ComponentProps, forwardRef } from 'react'

type Props = Required<
  Pick<ComponentProps<typeof DialogPrimitive.Content>, 'children'>
> &
  Pick<ComponentProps<typeof DialogPrimitive.Content>, 'className'>
export const DialogContent = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => {
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            'fixed inset-0 z-50',
            'bg-black/50 backdrop-blur-md data-[state=open]:animate-overlayShow'
          )}
        />
        <DialogPrimitive.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
            'focus:outline-none data-[state=open]:animate-contentShow',
            className
          )}
          ref={ref}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    )
  }
)
export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
