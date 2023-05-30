import '@src/app/app.css'
import type { ReactNode } from 'react'

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
