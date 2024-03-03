import { authControllerGetSessionInfo } from '@/shared/api/generated'
import { useQuery } from '@tanstack/react-query'

const keys = {
  root: () => ['session'],
}

export const useSessionQuery = () => {
  return useQuery({
    queryFn: authControllerGetSessionInfo,
    queryKey: keys.root(),
  })
}
