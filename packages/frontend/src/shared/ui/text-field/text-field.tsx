import { type ComponentProps, type ComponentPropsWithoutRef, forwardRef } from 'react'

import { useId } from '@/shared/lib/utils'
import { clsx } from 'clsx'

type TextFieldProps = {
  errorMessage?: string
  label?: string
  rootProps?: ComponentProps<'div'>
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, errorMessage, id, label, rootProps, ...rest }, ref) => {
    const inputId = useId(id, 'input')

    const classes = {
      input: clsx(
        className,
        'px-2 h-10 rounded border border-slate-300 focus:border-teal-600 outline-none'
      ),
      root: clsx('flex flex-col gap-1', rootProps?.className),
    }

    return (
      <div {...rootProps} className={classes.root}>
        {!!label && (
          <label className={'block'} htmlFor={inputId}>
            {label}
          </label>
        )}

        <input className={classes.input} id={inputId} ref={ref} {...rest} />

        {!!errorMessage && <div className={'text-rose-400'}>{errorMessage}</div>}
      </div>
    )
  }
)
