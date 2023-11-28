import type { ReactNode } from 'react'

import '@/app/app.css'
import { FRONTEND_URL } from '@/constant/constant'
import { Metadata } from 'next'

export const metadata: Metadata = {
  description: ``,
  metadataBase: new URL(FRONTEND_URL),
  robots: {
    follow: false,
    index: false,
  },
  title: {
    default: 'Hisho.dev',
    template: '%s | Hisho.dev',
  },
}

type Props = {
  children: ReactNode
}

export default function ({ children }: Props) {
  return (
    <html>
      <head />
      <body className={'bg-primary font-body text-write'}>{children}</body>
    </html>
  )
}
