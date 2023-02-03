import { createTRPCNextLayout } from '@src/lib/trpc/nextjs/createTRPCNextLayout'
import { createContext } from '@backend/context'
import { appRouter } from '@backend/routers/_app'
import superjson from 'superjson'

export const rsc = createTRPCNextLayout({
  router: appRouter,
  transformer: superjson,
  createContext() {
    return createContext
  },
})
