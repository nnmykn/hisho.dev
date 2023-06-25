import { InternalLink } from '@/src/component/link/internal-link'

export const Header = () => {
  return (
    <header className={'sticky top-0 bg-black/50 z-50 backdrop-blur-md'}>
      <div className={'wrapper py-4'}>
        <InternalLink href={'/'}>Home</InternalLink>
      </div>
    </header>
  )
}
