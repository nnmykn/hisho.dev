import Link from 'next/link'
import { Logo } from '@src/icon/Logo/Logo'

export const Header = () => {
  return (
    <header className={'bg-accent text-primary overflow-hidden'}>
      <div className={'wrapper'}>
        <Link
          className={
            'w-full max-w-sm mx-auto text-primary transform translate-y-1 transition-colors hover:text-opacity-90'
          }
          href={'/'}
        >
          <Logo />
        </Link>
      </div>
    </header>
  )
}
