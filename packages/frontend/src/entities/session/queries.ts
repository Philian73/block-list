import { authControllerGetSessionInfo } from '@/shared/api/generated'
import { useQuery, useQueryClient } from '@tanstack/react-query'

const sessionKey = ['session'] as const

export const useSessionQuery = () => {
  return useQuery({
    queryFn: authControllerGetSessionInfo,
    queryKey: sessionKey,
  })
}

export const useResetSession = () => {
  const queryClient = useQueryClient()

  return () => queryClient.removeQueries()
}
