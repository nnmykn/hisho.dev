import { ExternalImage } from '@/src/component/Image/ExternalImage'
import { ZennContent } from '@/src/app/api/article/zenn/route'

type Props = {
  zenn: Pick<ZennContent, 'title' | 'type' | 'publishedAt' | 'url' | 'image'>
}

export const ZennCard = ({ zenn }: Props) => {
  return (
    <article className={'bg-secondary'}>
      <div>{zenn.image && <ExternalImage src={zenn.image.url} />}</div>
    </article>
  )
}
