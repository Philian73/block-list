import { ToggleBlockingButton } from '@/features/toggle-blocking/ui'
import { createTab } from '@/shared/lib/utils'
import { Button, Logo } from '@/shared/ui'

export const HomePage = () => {
  const handleManageExtensionClick = () => createTab(import.meta.env.VITE_ADMIN_URL)

  return (
    <div className={'p-8 flex flex-col gap-3'}>
      <Logo />
      <ToggleBlockingButton />
      <Button onClick={handleManageExtensionClick} variant={'outlined'}>
        Manage extension
      </Button>
    </div>
  )
}
