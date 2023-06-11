import { ExternalImage } from '@/src/component/Image/ExternalImage'
import { Article } from '@/src/app/(basic)/articles/api/route'

type Props = {
  article: Pick<Article, 'title' | 'category' | 'publishedAt' | 'url' | 'image'>
}

export const ArticleCard = ({ article }: Props) => {
  return (
    <article className={'bg-secondary'}>
      <div>{article.image && <ExternalImage src={article.image.url} />}</div>
    </article>
  )
}
