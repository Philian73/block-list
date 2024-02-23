import { Button } from '@/shared/ui'

import { useSignOut } from '../../model'

export const SignOut = () => {
  const { isLoading, signOut } = useSignOut()

  return (
    <Button disabled={isLoading} onClick={signOut} variant={'outlined'}>
      Sign Out
    </Button>
  )
}
