import type { PropsWithChildren, ReactElement } from 'react'

import { useSessionQuery } from '@/entities/session'
import { ROUTES } from '@/shared/constants'
import { PageSpinner } from '@/shared/ui'
import { useRouter } from 'next/router'

export const protectedPage = <P = {},>(Component: (props: P) => ReactElement) => {
  return (props: PropsWithChildren<P>) => {
    const router = useRouter()

    const { isError, isLoading } = useSessionQuery()

    if (isLoading) {
      return <PageSpinner />
    }

    if (isError) {
      router.replace(ROUTES.SIGN_IN)
    }

    return <Component {...props} />
  }
}
