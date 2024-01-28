import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ElementType,
  type ForwardedRef,
  type ReactNode,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

const buttonVariants = {
  link: 'link',
  outlined: 'outlined',
  primary: 'primary',
  secondary: 'secondary',
} as const

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: keyof typeof buttonVariants
} & ComponentPropsWithoutRef<T>

type ButtonPolymorph = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & {
    ref?: ForwardedRef<ElementRef<T>>
  }
) => ReactNode

export const Button: ButtonPolymorph = forwardRef(
  ({ as: Component = 'button', className, variant = 'primary', ...rest }, ref) => {
    const classes = clsx(
      className,
      'px-4 h-10 rounded flex gap-2 items-center justify-center [&:not(:disabled)]:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300',
      {
        [buttonVariants.link]: '',
        [buttonVariants.outlined]:
          'border border-slate-300 [&:not(:disabled)]:hover:bg-slate-400 [&:not(:disabled)]:active:bg-slate-500',
        [buttonVariants.primary]:
          'text-white bg-teal-500 shadow shadow-teal-500/30 [&:not(:disabled)]:hover:bg-teal-600 [&:not(:disabled)]:active:bg-teal-700',
        [buttonVariants.secondary]:
          'text-white bg-rose-500 shadow shadow-rose-500/30 [&:not(:disabled)]:hover:bg-rose-700 [&:not(:disabled)]:active:bg-rose-800',
      }[variant]
    )

    return <Component className={classes} ref={ref} {...rest} />
  }
)
