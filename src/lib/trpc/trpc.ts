import { createTRPCReact } from '@trpc/react-query'
import type { AppRouter } from '@backend/routers/_app'

/**
 * @see https://github.com/trpc/next-13/blob/main/client/trpcClient.tsx
 */
export const trpc = createTRPCReact<AppRouter>({
  unstable_overrides: {
    useMutation: {
      async onSuccess(opts) {
        await opts.originalFn()
        await opts.queryClient.invalidateQueries()
      },
    },
  },
})
