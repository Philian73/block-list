import { queryClient } from '@/shared/api'
import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
} from '@/shared/api/generated'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const keys = {
  addItem: () => [...keys.root(), 'addItem'] as const,
  removeItem: () => [...keys.root(), 'removeItem'] as const,
  root: () => ['blockList'] as unknown[],
}

export const useBlockListQuery = ({ q }: { q?: string }) => {
  return useQuery({
    queryFn: () => blockListControllerGetList({ q }),
    queryKey: keys.root().concat([{ q }]),
  })
}

export const useAddBlockItemMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    mutationKey: keys.addItem(),
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: keys.root() })
    },
  })
}

export const useRemoveBlockItemMutation = () => {
  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    mutationKey: keys.removeItem(),
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: keys.root() })
    },
  })
}
