import type { Route } from 'next'

import Link from 'next/link'
import { ComponentProps } from 'react'

type Props<T extends string> = Pick<
  ComponentProps<'a'>,
  'children' | 'className'
> & {
  href: Route<T>
}
/**
 * @see https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links
 */
export const InternalLink = <T extends string>({
  children,
  ...props
}: Props<T>) => {
  return <Link {...props}>{children}</Link>
}
