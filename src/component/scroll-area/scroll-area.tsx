'use client'

import { cn } from '@/util/cn/cn'
import * as _ScrollArea from '@radix-ui/react-scroll-area'
import { ComponentProps, forwardRef } from 'react'

type Props = Pick<ComponentProps<'div'>, 'children' | 'className'> & {
  onScrollPositionChange?: (position: { x: number; y: number }) => void
  viewportRef?: React.ForwardedRef<HTMLDivElement>
}

export const ScrollArea = forwardRef<HTMLDivElement, Props>(
  ({ children, className, onScrollPositionChange, viewportRef }, ref) => {
    return (
      <_ScrollArea.Root className={cn('overflow-hidden', className)} ref={ref}>
        <_ScrollArea.Viewport
          className={'size-full rounded'}
          onScroll={
            typeof onScrollPositionChange === 'function'
              ? ({ currentTarget }) =>
                  onScrollPositionChange({
                    x: currentTarget.scrollLeft,
                    y: currentTarget.scrollTop,
                  })
              : undefined
          }
          ref={viewportRef}
        >
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
              "relative flex-1 cursor-pointer rounded-[10px] bg-red before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-[44px] before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
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
              "relative flex-1 rounded-[10px] bg-red before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-[44px] before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
            }
          />
        </_ScrollArea.Scrollbar>
        <_ScrollArea.Corner className={'bg-green-600'} />
      </_ScrollArea.Root>
    )
  }
)
