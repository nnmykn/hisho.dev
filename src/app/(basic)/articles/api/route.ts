import { NextResponse } from 'next/server'
import { parse } from 'rss-to-json'
import { z } from 'zod'
import { NEXT_PUBLIC_FRONTEND_URL } from '@/src/constant/constant'

const ZENN_URL = 'https://zenn.dev/hisho' as const

const zennContentTypes = {
  article: 'article',
  book: 'book',
} as const

const zennContentsSchema = z
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
  .transform((data) => {
    return data.items.map(
      ({ title, link, description, enclosures, published }) => {
        const isBooks = z
          .string()
          .startsWith(`${ZENN_URL}/books/`)
          .safeParse(link)

        return {
          title,
          // zennの記事からidを取得する
          // https://zenn.dev/{{userName}}/articles/{{id}} -> [{{userName}},'articles',{{id}}] -> {{id}}
          id: link.split('/').at(-1) ?? '',
          // '内容\n内容' -> '内容内容'
          description: description.replaceAll('\n', ''),
          publishedAt: published,
          url: link,
          // zennの記事のurlからbookかarticleを判定する 'book' or 'article'
          type: isBooks.success
            ? zennContentTypes.book
            : zennContentTypes.article,
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

export type ZennContent = z.output<typeof zennContentsSchema>[number]
export type GetZennContentsResult = z.output<typeof zennContentsSchema>

export const ZENN_CONTENT_API_URL =
  `${NEXT_PUBLIC_FRONTEND_URL}/articles/api` as const
export async function GET(): Promise<NextResponse<GetZennContentsResult>> {
  try {
    const rss = await parse(`${ZENN_URL}/feed`)
    const parsed = zennContentsSchema.safeParse(rss)
    if (parsed.success) {
      return NextResponse.json(parsed.data)
    }
    throw new Error()
  } catch {
    throw new Error()
  }
}
