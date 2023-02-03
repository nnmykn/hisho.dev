/**
 * This file contains the root router of your tRPC-backend
 */
import { contactRouter } from '@backend/routers/contact'
import { publicProcedure, router } from '@backend/trpc'

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),
  contact: contactRouter,
})

export type AppRouter = typeof appRouter
