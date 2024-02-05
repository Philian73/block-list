import { type ComponentType, type ElementType, type ReactNode, forwardRef } from 'react'

import { clsx } from 'clsx'

const buttonVariants = {
  link: 'link',
  outlined: 'outlined',
  primary: 'primary',
  secondary: 'secondary',
} as const

type ButtonProps<T extends ElementType> = PolymorphicComponentPropWithRef<
  T,
  { variant?: keyof typeof buttonVariants }
>

type ButtonComponent = <T extends ElementType = 'button'>(props: ButtonProps<T>) => ReactNode | null

export const Button: ButtonComponent = forwardRef(
  <T extends ElementType = 'button'>(
    { as, className, variant = 'primary', ...rest }: ButtonProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const Component = as ?? 'button'

    const classes = clsx(
      className,
      'px-4 h-10 rounded flex gap-2 items-center justify-center [&:not(:disabled)]:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300',
      {
        [buttonVariants.link]:
          'p-1 text-teal-500 cursor-pointer hover:text-teal-600 active:text-teal-700',
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

// ==============================================================================

if (process.env.NODE_ENV === 'development') {
  const ButtonDev = Button as ComponentType

  ButtonDev.displayName = 'Button'
}

// ==============================================================================
