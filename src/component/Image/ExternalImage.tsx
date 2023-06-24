import { ComponentProps } from 'react'

type Props = Pick<ComponentProps<'img'>, 'alt' | 'className' | 'src'>

export const ExternalImage = ({ alt, className, src }: Props) => {
  //eslint-disable-next-line @next/next/no-img-element
  return <img alt={alt} className={className} src={src} />
}
