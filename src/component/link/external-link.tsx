import { ComponentProps, forwardRef } from 'react'

type Props = Pick<ComponentProps<'a'>, 'children' | 'className' | 'href'>

export const ExternalLink = forwardRef<HTMLAnchorElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <a {...props} ref={ref} rel={'noopener noreferrer'} target={'_blank'}>
        {children}
      </a>
    )
  }
)
