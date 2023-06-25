import { ArticleCard } from '@/src/app/(basic)/articles/_feature/article/article-card'
import { fetchArticles } from '@/src/app/(basic)/articles/api/route'
import { ExternalLink } from '@/src/component/link/external-link'

export const dynamic = 'force-dynamic'

export default async function () {
  const articles = await fetchArticles()
  return (
    <div>
      <ul
        className={
          'grid grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))] gap-3'
        }
      >
        {articles.map((article, index) => (
          <li key={`li_${article.id}_${index}`}>
            <ExternalLink
              className={'transition-opacity hover:opacity-80'}
              href={article.url}
            >
              <ArticleCard article={article} />
            </ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
