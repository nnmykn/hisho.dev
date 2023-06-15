import Link from 'next/link'
import type { Route } from 'next'
import { ComponentProps } from 'react'

type Props<T extends string> = Pick<
  ComponentProps<'a'>,
  'className' | 'children'
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
