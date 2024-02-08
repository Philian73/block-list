import type { AppProps } from 'next/app'

import { Providers } from '@/app/providers'
import { Inter } from 'next/font/google'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
})

export function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </Providers>
  )
}
