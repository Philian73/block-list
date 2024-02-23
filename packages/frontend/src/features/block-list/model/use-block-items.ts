import { ChangeEvent, useState } from 'react'

import { useBlockListQuery } from '@/entities/block-list'
import { useDebounce } from '@/shared/lib/hooks'

export const useBlockItems = () => {
  const [q, setQ] = useState('')
  const debouncedValue = useDebounce(q)

  const blockListQuery = useBlockListQuery({ q: debouncedValue })

  const items = blockListQuery?.data?.items ?? []

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQ(e.currentTarget.value)
  }

  return {
    handleInputChange,
    isLoading: blockListQuery.isLoading,
    items,
    q,
  }
}
