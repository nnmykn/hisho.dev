import { Header } from '@/src/app/(profile)/_component/header/header'
import { ReactElement } from 'react'

type Props = {
  children: ReactElement
}

export default function ({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
