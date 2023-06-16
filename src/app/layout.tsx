import '@/src/app/app.css'
import type { ReactNode } from 'react'
import { Metadata } from 'next'
import { FRONTEND_URL } from '@/src/constant/constant'

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),
  title: {
    default: 'Hisho.dev',
    template: '%s | Hisho.dev',
  },
  description: ``,
  robots: {
    index: false,
    follow: false,
  },
}

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <head />
      <body className={'bg-primary text-write font-body'}>{children}</body>
    </html>
  )
}

export default RootLayout
