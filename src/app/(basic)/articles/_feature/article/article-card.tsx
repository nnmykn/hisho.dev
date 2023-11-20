import { Article } from '@/app/(basic)/articles/api/constant'
import { ExternalImage } from '@/component/Image/external-image'

type Props = {
  article: Pick<Article, 'category' | 'image' | 'publishedAt' | 'title' | 'url'>
}

export const ArticleCard = ({ article }: Props) => {
  return (
    <article className={'bg-secondary'}>
      <div className={'relative aspect-[1200/630]'}>
        {article.image ? (
          <ExternalImage
            className={'absolute inset-0'}
            height={630}
            src={article.image.url}
            width={1200}
          />
        ) : (
          <div
            className={
              'absolute inset-0 grid place-content-center bg-secondary p-4'
            }
          >
            {article.title}
          </div>
        )}
      </div>
    </article>
  )
}

export const ArticleCardSkeleton = () => {
  return (
    <article className={'bg-secondary'}>
      <div className={'aspect-[1200/630]'} />
    </article>
  )
}
