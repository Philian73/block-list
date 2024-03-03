import { AppRouter } from './app-router'
import { Providers } from './providers'

export const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  )
}
