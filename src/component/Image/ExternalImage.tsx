import { ComponentProps } from 'react'

type Props = Pick<ComponentProps<'img'>, 'src' | 'alt' | 'className'>

export const ExternalImage = ({ src, className, alt }: Props) => {
  //eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} />
}
