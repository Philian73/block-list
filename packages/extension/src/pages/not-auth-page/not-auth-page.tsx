import { createTab } from '@/shared/lib/utils'
import { Button, Logo } from '@/shared/ui'

export const NotAuthPage = () => {
  const handleSignInClick = () => createTab(import.meta.env.VITE_ADMIN_SIGN_IN_URL)

  return (
    <div className={'p-8 flex flex-col gap-3'}>
      <Logo />
      <h2 className={'text-2xl'}>You not authorized!</h2>
      <Button onClick={handleSignInClick}>Sign In</Button>
    </div>
  )
}
