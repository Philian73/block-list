import {
  authControllerGetSessionInfo,
  authControllerSignIn,
  authControllerSignOut,
} from '@/shared/api/generated'
import { ROUTES } from '@/shared/constants'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'

const keys = {
  root: () => ['session'],
  signIn: () => [...keys.root(), 'signIn'],
  signOut: () => [...keys.root(), 'signOut'],
}

export const useSessionQuery = () => {
  return useQuery({
    queryFn: authControllerGetSessionInfo,
    queryKey: keys.root(),
  })
}

export const useSignInMutation = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: authControllerSignIn,
    mutationKey: keys.signIn(),
    onSuccess() {
      router.push(ROUTES.HOME)
      queryClient.removeQueries({ queryKey: keys.root() })
    },
  })
}

export const useSignOutMutation = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: authControllerSignOut,
    mutationKey: keys.signOut(),
    onSuccess() {
      router.push(ROUTES.SIGN_IN)
      queryClient.removeQueries({ queryKey: keys.root() })
    },
  })
}
