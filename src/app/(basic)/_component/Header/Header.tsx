import { Logo } from '@/src/icon/Logo/Logo'
import { InternalLink } from '@/src/component/Link/InternalLink'
import { Spacer } from '@/src/component/Spacer/Spacer'

export const Header = () => {
  return (
    <header className={'bg-accent text-primary overflow-hidden'}>
      <div className={'wrapper flex'}>
        <InternalLink
          data-testid={'logoLink'}
          className={
            'w-36 text-primary transform translate-y-1 transition-colors hover:text-opacity-90'
          }
          href={'/'}
        >
          <Logo />
        </InternalLink>
        <Spacer isHorizontal />
        <div className={'flex items-end gap-2'}>
          <InternalLink className={'hover:underline'} href={'/articles'}>
            Articles
          </InternalLink>
          <InternalLink className={'hover:underline'} href={'/contact'}>
            Contact
          </InternalLink>
        </div>
      </div>
    </header>
  )
}
