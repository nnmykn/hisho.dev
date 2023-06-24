import { Article } from '@/src/app/(basic)/articles/api/constant'
import { ExternalImage } from '@/src/component/Image/ExternalImage'

type Props = {
  article: Pick<Article, 'category' | 'image' | 'publishedAt' | 'title' | 'url'>
}

export const ArticleCard = ({ article }: Props) => {
  return (
    <article className={'bg-secondary'}>
      <div>{article.image && <ExternalImage src={article.image.url} />}</div>
    </article>
  )
}
