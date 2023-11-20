import { z } from 'zod'

export const ZENN_URL = 'https://zenn.dev/hisho' as const

export const articleSchema = z.object({
  author: z.string(),
  category: z.literal('zenn'),
  content: z.string(),
  createdAt: z.number(),
  excerpt: z.string(),
  id: z.string(),
  image: z
    .object({
      type: z.string(),
      url: z.string(),
    })
    .nullable(),
  publishedAt: z.number(),
  title: z.string(),
  url: z.string(),
})

export const articlesSchema = z.array(articleSchema)

export type Article = z.infer<typeof articleSchema>

export const zennContentsSchema = z
  .object({
    items: z
      .object({
        description: z.string(),
        enclosures: z
          .object({
            type: z.string(),
            url: z.string(),
          })
          .array(),
        link: z.string(),
        published: z.number(),
        title: z.string(),
      })
      .array(),
  })
  .transform<Article[]>((data) => {
    return data.items.map(
      ({ description, enclosures, link, published, title }) => {
        return {
          author: 'hisho',
          // zennの記事からidを取得する
          category: 'zenn',
          // '内容\n内容' -> '内容内容'
          content: description,
          createdAt: published,
          excerpt: description.replaceAll('\n', ''),
          // https://zenn.dev/{{userName}}/articles/{{id}} -> [{{userName}},'articles',{{id}}] -> {{id}}
          id: link.split('/').at(-1) ?? '',
          // OG画像
          image: enclosures?.at(0)
            ? {
                type: enclosures.at(0)?.type ?? 'image/png',
                url: enclosures.at(0)?.url ?? /* TODO NoImage url */ '',
              }
            : null,
          publishedAt: published,
          title,
          url: link,
        }
      }
    )
  })

export type GetArticleResult = Article[]
