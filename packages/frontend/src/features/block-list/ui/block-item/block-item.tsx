import type { ElementType } from 'react'

import { useRemoveBlockItemMutation } from '@/entities/block-list'
import { AddBlockItemDtoType } from '@/shared/api/generated'
import { Icons } from '@/shared/assets/icons'
import { clsx } from 'clsx'

type BlockItemProps<T extends ElementType> = PolymorphicComponentProp<
  T,
  {
    data: string
    id: number
    type: AddBlockItemDtoType
  }
>

export const BlockItem = <T extends ElementType = 'li'>({
  as,
  className,
  data,
  id,
  type,
  ...rest
}: BlockItemProps<T>) => {
  const Component = as ?? 'li'

  const removeBlockItemMutation = useRemoveBlockItemMutation()

  const handleRemove = () => {
    removeBlockItemMutation.mutate(id)
  }

  return (
    <Component className={clsx('flex gap-2 justify-between', className)} {...rest}>
      <div className={'flex flex-col'}>
        <span className={'text-lg'}>{data}</span>
        <span className={'text-slate-500'}>{type}</span>
      </div>
      <button
        className={
          'p-1 text-rose-500 hover:text-rose-700 active:text-rose-900 enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50'
        }
        disabled={removeBlockItemMutation.isPending}
        onClick={handleRemove}
      >
        <Icons.Delete />
      </button>
    </Component>
  )
}
