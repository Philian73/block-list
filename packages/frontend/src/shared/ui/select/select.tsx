import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react'

import { Icons } from '@/shared/assets/icons'
import * as SelectPrimitive from '@radix-ui/react-select'
import { clsx } from 'clsx'

export type SelectOption = {
  disabled?: boolean
  title: string
  value: string
}

type SelectProps = {
  className?: string
  errorMessage?: string
  label?: string
  /** The name of the select. Submitted with its owning form as part of a name/value pair. */
  name?: string
  /** The options to display.
   * {title: string, value: string, disabled?: boolean} */
  options: SelectOption[]
  placeholder?: string
  /**
   * Additional props for customizing the underlying `label` element,
   * which serves as the parent for the Select.
   * Use it for setting `className` or `style`.
   */
  rootProps?: ComponentProps<'label'>
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>

export const Select = forwardRef<ElementRef<typeof SelectPrimitive.Trigger>, SelectProps>(
  ({ className, errorMessage, label, options, placeholder, rootProps, ...rest }, ref) => {
    const scrollIconClasses = 'flex cursor-default items-center justify-center py-1'

    return (
      <label {...rootProps} className={clsx('flex flex-col', rootProps?.className)}>
        {!!label && <span className={'mb-1'}>{label}</span>}

        <SelectPrimitive.Root {...rest}>
          <SelectPrimitive.Trigger
            className={clsx(
              'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
              className
            )}
            ref={ref}
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon asChild className={'h-4 w-4'}>
              <Icons.ArrowDown />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              className={
                'relative z-50 bg-white max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1'
              }
              position={'popper'}
            >
              <SelectPrimitive.ScrollUpButton className={scrollIconClasses}>
                <Icons.ArrowUp />
              </SelectPrimitive.ScrollUpButton>

              <SelectPrimitive.Viewport
                className={
                  'p-1 h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
                }
              >
                {options.map(({ disabled, title, value }) => (
                  <SelectPrimitive.Item
                    className={
                      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground transition-all data-[highlighted]:bg-gray-200 data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
                    }
                    disabled={disabled}
                    key={value}
                    value={value}
                  >
                    <span
                      className={'absolute left-2 flex h-3.5 w-3.5 items-center justify-center'}
                    >
                      <SelectPrimitive.ItemIndicator>
                        <Icons.Check className={'h-4 w-4'} />
                      </SelectPrimitive.ItemIndicator>
                    </span>
                    <SelectPrimitive.ItemText>{title}</SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>

              <SelectPrimitive.ScrollDownButton className={scrollIconClasses}>
                <Icons.ArrowDown />
              </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>

        {!!errorMessage && <div className={'text-rose-400'}>{errorMessage}</div>}
      </label>
    )
  }
)

// ==============================================================================

if (process.env.NODE_ENV === 'development') {
  Select.displayName = SelectPrimitive.Root.displayName
}

// ==============================================================================
