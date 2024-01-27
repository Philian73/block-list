import type { AppProps } from 'next/app'

import { Providers } from '@/app/providers'

export function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}
