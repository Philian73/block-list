import type { ReactNode } from 'react'

import { queryClient } from '@/shared/api'
import { QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query'

type QueryClientProviderProps = {
  children: ReactNode
}

export const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
  return <TanStackQueryClientProvider client={queryClient}>{children}</TanStackQueryClientProvider>
}
