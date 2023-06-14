import { NextResponse } from 'next/server'
import { parse } from 'rss-to-json'
import {
  GetArticleResult,
  ZENN_URL,
  zennContentsSchema,
} from '@/src/app/(basic)/articles/api/constant'

//TODO service
export async function GET(): Promise<NextResponse<GetArticleResult>> {
  try {
    const rss = await parse(`${ZENN_URL}/feed`)
    const parsed = zennContentsSchema.safeParse(rss)
    if (parsed.success) {
      return NextResponse.json(parsed.data)
    }
    return NextResponse.json([])
  } catch {
    return NextResponse.json([])
  }
}
