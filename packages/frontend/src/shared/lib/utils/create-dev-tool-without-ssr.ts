import { FieldValues } from 'react-hook-form'

import dynamic from 'next/dynamic'

export const createDevTool = <T extends FieldValues>() => {
  return dynamic(
    async () => {
      const mod = await import('@hookform/devtools')

      return mod.DevTool<T>
    },
    {
      ssr: false,
    }
  )
}
