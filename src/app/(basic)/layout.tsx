import type { ReactNode } from 'react'

import { Footer } from '@/src/app/(basic)/_component/Footer/Footer'
import { Header } from '@/src/app/(basic)/_component/Header/Header'
import { Hero } from '@/src/app/(basic)/_component/Hero/Hero'

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
