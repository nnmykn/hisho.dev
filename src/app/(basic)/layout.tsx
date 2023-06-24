import type { ReactNode } from 'react'
import { Header } from '@/src/app/(basic)/_component/Header/Header'
import { Footer } from '@/src/app/(basic)/_component/Footer/Footer'
import { Hero } from '@/src/app/(basic)/_component/Hero/Hero'

type Props = {
  children: ReactNode
}

export default function ({ children }: Props) {
  return (
    <div
      className={
        'grid grid-rows-[auto_auto_1fr_auto] grid-cols-[100%] min-h-[100svh] @container'
      }
    >
      <Header />
      <Hero />
      <main className={'wrapper pt-4 pb-10 @[600px]:pb-20'}>{children}</main>
      <Footer />
    </div>
  )
}
