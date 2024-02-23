import { useSignOutMutation } from '@/entities/session'

export const useSignOut = () => {
  const { isPending, mutate } = useSignOutMutation()

  return {
    isLoading: isPending,
    signOut: () => mutate({}),
  }
}
