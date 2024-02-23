import { useForm } from 'react-hook-form'

import { useAddBlockItemMutation } from '@/entities/block-list'
import { AddBlockItemDtoType } from '@/shared/api/generated'
import { valibotResolver } from '@hookform/resolvers/valibot'

import { AddBlockListData, addBlockListSchema } from './'

export const useAddBlockItemForm = () => {
  const { handleSubmit, watch, ...rest } = useForm<AddBlockListData>({
    defaultValues: {
      data: '',
      type: AddBlockItemDtoType.Website,
    },
    resolver: valibotResolver(addBlockListSchema),
  })

  const addBlockItemMutation = useAddBlockItemMutation()

  const type = watch('type')

  return {
    handleSubmit: handleSubmit(data => addBlockItemMutation.mutate(data)),
    isLoading: addBlockItemMutation.isPending,
    type,
    ...rest,
  }
}
