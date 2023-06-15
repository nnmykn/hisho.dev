import { fetchArticles } from '@/src/app/(basic)/articles/_feature/article/fetchArticles'
import { ExternalLink } from '@/src/component/Link/ExternalLink'
import { ArticleCard } from '@/src/app/(basic)/articles/_feature/article/ArticleCard'

const Page = async () => {
  const articles = await fetchArticles()
  return (
    <div>
      <ul
        className={
          'grid gap-3 grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))]'
        }
      >
        {articles.map((article, index) => (
          <li key={`li_${article.id}_${index}`}>
            <ExternalLink
              className={'hover:opacity-80 transition-opacity'}
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

export default Page
