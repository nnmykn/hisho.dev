import {
  GetArticleResult,
  ARTICLE_API_URL,
} from '@/src/app/(basic)/articles/api/constant'

export const fetchArticles = async (): Promise<GetArticleResult> =>
  fetch(ARTICLE_API_URL).then((res) => res.json())
