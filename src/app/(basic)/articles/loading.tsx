import { ArticleCardSkeleton } from '@/src/app/(basic)/articles/_feature/article/article-card'
import { range } from 'lodash'

export default function () {
  return (
    <ul
      className={'grid grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))] gap-3'}
    >
      {range(20).map((_, index) => (
        <li key={`li_ArticleCardSkeleton_${index}`}>
          <ArticleCardSkeleton />
        </li>
      ))}
    </ul>
  )
}
