import { ArticleCard } from '@/app/(basic)/articles/_feature/article/article-card'
import { articlesSchema } from '@/app/(basic)/articles/api/constant'
import { ExternalLink } from '@/component/link/external-link'
export default async function () {
  const articles = await articlesSchema.parseAsync(
    await fetch('http://localhost:3000/articles/api').then((response) =>
      response.json()
    )
  )

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
