import '@/src/app/app.css'
import type { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
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
