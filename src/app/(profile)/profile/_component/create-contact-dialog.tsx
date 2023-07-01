'use client'

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/src/component/dialog/dialog'
import { CreateContactForm } from '@/src/feature/contact/create-contact-form/create-contact-form'
import { EnvelopeIcon } from '@/src/icon/envelope'
import { useCallback, useState } from 'react'
import { cn } from '@/src/util/cn/cn'

export const CreateContactDialog = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger
        className={
          'flex items-center gap-1 text-sm text-gray-300 transition-opacity hover:opacity-70 focus:opacity-70'
        }
      >
        <EnvelopeIcon className={'w-6 stroke-2'} />
        <span>hisho.web@gmail.com</span>
      </DialogTrigger>
      <DialogContent className={'w-full max-w-xl px-4'}>
        <div
          className={cn(
            'relative bg-black px-6 py-4',
            'border-8 [border-image-slice:1_!important] [border-image:linear-gradient(to_right,#1e9600,#fff200,#ff0000)_1_0%]'
          )}
        >
          <div
            className={cn(
              'absolute -left-4 -top-4 -z-10',
              'h-[calc(100%+32px)] w-[calc(100%+32px)] bg-[linear-gradient(to_right,#1e9600,#fff200,#ff0000)] blur-md'
            )}
            aria-hidden={true}
          />

          <CreateContactForm onSuccess={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
