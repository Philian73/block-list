import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

type FormPageLayoutProps = {
  formSlot?: ReactNode
  headerSlot?: ReactNode
  title: string
} & ComponentPropsWithoutRef<'div'>

export const FormPageLayout: FC<FormPageLayoutProps> = ({
  className,
  formSlot,
  headerSlot,
  title,
  ...rest
}) => {
  return (
    <div className={clsx('min-h-screen flex flex-col bg-slate-100', className)} {...rest}>
      {headerSlot}
      <main className={'grow flex flex-col pt-24'}>
        <div
          className={
            'rounded-xl border border-slate-300 px-14 py-8 pb-16 w-full max-w-[400px] bg-white self-center'
          }
        >
          <h1 className={'text-2xl mb-6'}>{title}</h1>
          {formSlot}
        </div>
      </main>
    </div>
  )
}
