import { z } from 'zod'

export const ZENN_URL = 'https://zenn.dev/hisho' as const

export type Article = {
  title: string
  id: string
  content: string
  excerpt: string
  createdAt: number
  publishedAt: number
  url: string
  author: string
  category: 'zenn'
  image: {
    url: string
    type: string
  } | null
}

export const zennContentsSchema = z
  .object({
    items: z
      .object({
        title: z.string(),
        description: z.string(),
        link: z.string(),
        published: z.number(),
        enclosures: z
          .object({
            url: z.string(),
            type: z.string(),
          })
          .array(),
      })
      .array(),
  })
  .transform<Article[]>((data) => {
    return data.items.map(
      ({ title, link, description, enclosures, published }) => {
        return {
          title,
          // zennの記事からidを取得する
          // https://zenn.dev/{{userName}}/articles/{{id}} -> [{{userName}},'articles',{{id}}] -> {{id}}
          id: link.split('/').at(-1) ?? '',
          excerpt: description.replaceAll('\n', ''),
          // '内容\n内容' -> '内容内容'
          content: description,
          createdAt: published,
          publishedAt: published,
          url: link,
          author: 'hisho',
          category: 'zenn',
          // OG画像
          image: enclosures?.at(0)
            ? {
                url: enclosures.at(0)?.url ?? /* TODO NoImage url */ '',
                type: enclosures.at(0)?.type ?? 'image/png',
              }
            : null,
        }
      }
    )
  })

export type GetArticleResult = Article[]
