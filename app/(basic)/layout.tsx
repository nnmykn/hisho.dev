import type { ReactNode } from 'react'
import { Header } from '@src/component/Header/Header'
import { Footer } from '@src/component/Footer/Footer'
import { Hero } from '@app/(basic)/Hero'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div
      className={
        'grid grid-rows-[auto_auto_1fr_auto] min-h-[100svh] @container'
      }
    >
      <Header />
      <Hero />
      <main className={'wrapper pt-4 pb-10 @[600px]:pb-20'}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
