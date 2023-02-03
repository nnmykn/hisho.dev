/**
 * @see https://github.com/trpc/next-13/blob/a5762c93c297193253de6f34a8c06e61ac06ff82/%40trpc/next-layout/localStorage.ts
 * This file makes sure that we can get a storage that us unique to the current request context
 */
import type { AsyncLocalStorage } from 'async_hooks'

// https://github.com/vercel/next.js/blob/canary/packages/next/client/components/request-async-storage.ts
export const asyncStorage: AsyncLocalStorage<any> | {} =
  require('next/dist/client/components/request-async-storage').requestAsyncStorage

function throwError(msg: string) {
  throw new Error(msg)
}
export function getRequestStorage<T>(): T {
  if ('getStore' in asyncStorage) {
    return asyncStorage.getStore() ?? throwError("Couldn't get async storage")
  }

  return asyncStorage as T
}
