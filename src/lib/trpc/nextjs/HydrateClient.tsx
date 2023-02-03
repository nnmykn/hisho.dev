'use client'

import { DehydratedState, Hydrate } from '@tanstack/react-query'
import type { DataTransformer } from '@trpc/server'
import { useMemo, ReactNode } from 'react'

/**
 * @see https://github.com/trpc/next-13/blob/a5762c93c297193253de6f34a8c06e61ac06ff82/%40trpc/next-layout/HydrateClient.tsx
 */
export const createHydrateClient = (opts: {
  transformer?: DataTransformer
}) => {
  return function HydrateClient(props: {
    children: ReactNode
    state: DehydratedState
  }) {
    const { state, children } = props

    const transformedState: DehydratedState = useMemo(() => {
      if (opts.transformer) {
        return opts.transformer.deserialize(state)
      }
      return state
    }, [state])
    return <Hydrate state={transformedState}>{children}</Hydrate>
  }
}
