import {
  GetArticleResult,
  ZENN_URL,
  zennContentsSchema,
} from '@/src/app/(basic)/articles/api/constant'
import { parse } from 'rss-to-json'

export const fetchArticles = async (): Promise<GetArticleResult> => {
  try {
    const rss = await parse(`${ZENN_URL}/feed`)
    return zennContentsSchema.parseAsync(rss)
  } catch (e) {
    throw e
  }
}