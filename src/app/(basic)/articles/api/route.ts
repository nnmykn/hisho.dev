import {
  ZENN_URL,
  zennContentsSchema,
} from '@/app/(basic)/articles/api/constant'
import { NextResponse } from 'next/server'
import { parse } from 'rss-to-json'

export async function GET() {
  try {
    const rss = await zennContentsSchema.parseAsync(
      await parse(`${ZENN_URL}/feed`)
    )
    return NextResponse.json(rss)
  } catch {
    return NextResponse.error()
  }
}
