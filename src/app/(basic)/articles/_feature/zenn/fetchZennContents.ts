import {
  GetZennContentsResult,
  ZENN_CONTENT_API_URL,
} from '@/src/app/api/article/zenn/route'

export const fetchZennContents = async (): Promise<GetZennContentsResult> => {
  const response = await fetch(ZENN_CONTENT_API_URL)
  const json = (await response.json()) as GetZennContentsResult
  return json
}
