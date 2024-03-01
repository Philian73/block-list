import type { ComponentPropsWithoutRef, FC, SVGProps } from 'react'

import { Icons } from '@/shared/assets/icons'
import { clsx } from 'clsx'

type LogoProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  svgProps?: Omit<SVGProps<SVGSVGElement>, 'ref'>
}

export const Logo: FC<LogoProps> = ({ className, svgProps, ...rest }) => {
  return (
    <div className={clsx('flex items-center gap-2 text-xl h-12', className)} {...rest}>
      <Icons.Shield className={'h-full w-max'} {...svgProps} />
      <span>Easy Block</span>
    </div>
  )
}
