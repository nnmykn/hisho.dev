'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink, loggerLink } from '@trpc/client'
import { ReactNode, useState } from 'react'
import superjson from 'superjson'
import { TRPC_ENDPOINT } from '@src/constant/base'
import { trpc } from '@src/lib/trpc/trpc'

type Props = {
  children: ReactNode
}

/**
 * @see https://github.com/trpc/next-13/blob/main/client/trpcClient.tsx
 */
export const ClientProvider = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url: TRPC_ENDPOINT,
        }),
      ],
      transformer: superjson,
    })
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
