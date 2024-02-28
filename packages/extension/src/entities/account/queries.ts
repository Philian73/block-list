import { accountControllerGetAccount, accountControllerPatchAccount } from '@/shared/api/generated'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const keys = {
  root: () => ['account'] as const,
  updateAccount: () => [...keys.root(), 'updateAccount'] as const,
}

export const useAccountQuery = () => {
  return useQuery({
    queryFn: accountControllerGetAccount,
    queryKey: keys.root(),
  })
}

export const useUpdateAccountMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: accountControllerPatchAccount,
    mutationKey: keys.updateAccount(),
    onSuccess(data) {
      queryClient.setQueryData(keys.root(), data)
    },
  })
}
