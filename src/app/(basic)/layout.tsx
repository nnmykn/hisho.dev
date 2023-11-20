import type { ReactNode } from 'react'

import { Footer } from '@/app/(basic)/_component/footer/footer'
import { Header } from '@/app/(basic)/_component/header/header'
import { Hero } from '@/app/(basic)/_component/hero/hero'

type Props = {
  children: ReactNode
}

export default function ({ children }: Props) {
  return (
    <div
      className={
        'grid min-h-[100svh] grid-cols-[100%] grid-rows-[auto_auto_1fr_auto] @container'
      }
    >
      <Header />
      <Hero />
      <main className={'wrapper pb-10 pt-4 @[600px]:pb-20'}>{children}</main>
      <Footer />
    </div>
  )
}
