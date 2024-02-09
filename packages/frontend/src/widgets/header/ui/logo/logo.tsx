import { Icons } from '@/shared/assets/icons'

export const Logo = () => {
  return (
    <a className={'flex items-center gap-2 text-xl h-12'} href={''}>
      <Icons.Shield className={'h-full w-max'} />
      <span>Easy Block</span>
    </a>
  )
}
