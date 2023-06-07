import { ComponentProps } from 'react'

type Props = Pick<ComponentProps<'img'>, 'src' | 'alt' | 'className'>

export const ExternalImage = ({ src, className, alt }: Props) => {
  return <img src={src} alt={alt} className={className} />
}
