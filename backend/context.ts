import type { inferAsyncReturnType } from '@trpc/server'
import type { CreateNextContextOptions } from '@trpc/server/adapters/next'

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(opts: CreateNextContextOptions) {
  // for API-response caching see https://trpc.io/docs/caching

  return {
    req: {
      headers: opts.req.headers,
    },
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
