import '@src/app/app.css'
import { ClientProvider } from '@src/lib/trpc/ClientProvider/ClientProvider'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <ClientProvider>
      <html>
        <head />
        <body className={'bg-primary text-write font-body'}>{children}</body>
      </html>
    </ClientProvider>
  )
}

export default RootLayout
