'use client'

import { cn } from '@/src/util/cn/cn'
import * as _ScrollArea from '@radix-ui/react-scroll-area'
import { ComponentProps, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & Pick<ComponentProps<'div'>, 'className'>

export const ScrollArea = ({ children, className }: Props) => {
  return (
    <_ScrollArea.Root className={cn('overflow-hidden', className)}>
      <_ScrollArea.Viewport className="h-full w-full rounded">
        {children}
      </_ScrollArea.Viewport>
      <_ScrollArea.Scrollbar
        className={
          'flex touch-none select-none bg-gray-300 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-gray-400 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col'
        }
        orientation={'vertical'}
      >
        <_ScrollArea.Thumb
          className={
            "relative flex-1 cursor-pointer rounded-[10px] bg-red before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
          }
        />
      </_ScrollArea.Scrollbar>
      <_ScrollArea.Scrollbar
        className={
          'flex cursor-pointer touch-none select-none bg-gray-300 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-gray-400 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col'
        }
        orientation={'horizontal'}
      >
        <_ScrollArea.Thumb
          className={
            "relative flex-1 rounded-[10px] bg-red before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
          }
        />
      </_ScrollArea.Scrollbar>
      <_ScrollArea.Corner className={'bg-green-600'} />
    </_ScrollArea.Root>
  )
}
