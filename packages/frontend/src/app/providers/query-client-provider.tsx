import type { ReactNode } from 'react'

import { queryClient } from '@/shared/api'
import { QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type QueryClientProviderProps = {
  children: ReactNode
}

export const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </TanStackQueryClientProvider>
  )
}
