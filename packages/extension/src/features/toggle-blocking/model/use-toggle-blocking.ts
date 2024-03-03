import { useAccountQuery, useUpdateAccountMutation } from '@/entities/account'

export const useToggleBlocking = () => {
  const accountQuery = useAccountQuery()

  const updateAccountMutation = useUpdateAccountMutation()

  const toggleBlocking = () => {
    if (accountQuery.data) {
      updateAccountMutation.mutate({
        isBlockingEnabled: !accountQuery.data?.isBlockingEnabled,
      })
    }
  }

  return {
    isBlockingEnabled: accountQuery.data?.isBlockingEnabled ?? false,
    isLoading: updateAccountMutation.isPending,
    isReady: accountQuery.isSuccess,
    toggleBlocking,
  }
}
