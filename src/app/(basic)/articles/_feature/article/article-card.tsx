import { Article } from '@/src/app/(basic)/articles/api/constant'
import { ExternalImage } from '@/src/component/Image/external-image'

type Props = {
  article: Pick<Article, 'category' | 'image' | 'publishedAt' | 'title' | 'url'>
}

export const ArticleCard = ({ article }: Props) => {
  return (
    <article className={'bg-secondary'}>
      <div>
        {article.image ? (
          <ExternalImage
            className={'aspect-[1200/630]'}
            height={630}
            src={article.image.url}
            width={1200}
          />
        ) : (
          <div
            className={
              'grid aspect-[1200/630] place-content-center bg-secondary'
            }
          >
            no image
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
