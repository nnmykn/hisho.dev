import {
  GetArticleResult,
  ARTICLE_API_URL,
} from '@/src/app/(basic)/articles/api/route'

export const fetchArticles = async (): Promise<GetArticleResult> => {
  const response = await fetch(ARTICLE_API_URL)
  const json = (await response.json()) as GetArticleResult
  return json
}
