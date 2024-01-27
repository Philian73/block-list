import type { ReactNode } from 'react'

import { QueryClientProvider } from './query-client-provider'

type ProvidersProps = {
  children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return <QueryClientProvider>{children}</QueryClientProvider>
}
