import type { ComponentPropsWithoutRef, FC } from 'react'

import { BlockItem } from '@/features/block-list/ui'
import { Icons } from '@/shared/assets/icons'
import { TextField } from '@/shared/ui'

import { useBlockItems } from '../../model'

type BlockListProps = ComponentPropsWithoutRef<'div'>

export const BlockList: FC<BlockListProps> = props => {
  const { handleInputChange, isLoading, items, q } = useBlockItems()

  const isLoader = isLoading
  const isEmptyText = !isLoading && items.length === 0
  const isItems = items.length > 0

  return (
    <div {...props}>
      <TextField
        label={'Search'}
        onChange={handleInputChange}
        rootProps={{ className: 'mb-2' }}
        value={q}
      />
      <div className={'rounded-xl bg-slate-100/50 px-10 py-6'}>
        {isLoader && <Icons.Spinner className={'text-teal-600 w-10 h-10 mx-auto'} />}

        {isEmptyText && <span className={'text-xl py-1 text-center block'}>List is empty...</span>}

        {isItems && (
          <ul className={'flex flex-col gap-3'}>
            {items.map(item => (
              <BlockItem key={item.id} {...item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
