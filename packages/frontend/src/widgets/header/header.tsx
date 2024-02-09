import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import { Logo } from './ui/logo/logo'

type HeaderProps = {
  rightContentSlot?: ReactNode
} & ComponentPropsWithoutRef<'header'>

export const Header: FC<HeaderProps> = ({ className, rightContentSlot, ...rest }) => {
  return (
    <header
      className={clsx(
        'px-4 py-5 border-b border-b-slate-300 flex justify-between items-center bg-white',
        className
      )}
      {...rest}
    >
      <Logo />
      {rightContentSlot}
    </header>
  )
}
