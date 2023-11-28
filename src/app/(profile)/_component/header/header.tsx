import { InternalLink } from '@/component/link/internal-link'

export const Header = () => {
  return (
    <header className={'sticky top-0 z-50 bg-black/50 backdrop-blur-md'}>
      <div className={'wrapper py-4'}>
        <InternalLink href={'/'}>Home</InternalLink>
      </div>
    </header>
  )
}
