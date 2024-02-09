import { Icons } from '@/shared/assets/icons'
import { ROUTES } from '@/shared/constants'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link className={'flex items-center gap-2 text-xl h-12'} href={ROUTES.HOME}>
      <Icons.Shield className={'h-full w-max'} />
      <span>Easy Block</span>
    </Link>
  )
}
