import { type ComponentPropsWithoutRef, forwardRef } from 'react'

import { Icons } from '@/shared/assets/icons'
import { clsx } from 'clsx'

type PageSpinnerProps = ComponentPropsWithoutRef<'div'>

export const PageSpinner = forwardRef<HTMLDivElement, PageSpinnerProps>(
  ({ className, ...rest }) => {
    return (
      <div
        className={clsx(
          'fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-slate-100 text-teal-500',
          className
        )}
        {...rest}
      >
        <Icons.Spinner height={96} width={96} />
      </div>
    )
  }
)
