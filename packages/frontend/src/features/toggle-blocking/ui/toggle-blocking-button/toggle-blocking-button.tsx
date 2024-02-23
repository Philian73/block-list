import type { ComponentPropsWithoutRef, FC } from 'react'

import { Button } from '@/shared/ui'

import { useToggleBlocking } from '../../model'

type ToggleBlockingButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'disabled' | 'onClick'>

export const ToggleBlockingButton: FC<ToggleBlockingButtonProps> = props => {
  const { isBlockingEnabled, isLoading, isReady, toggleBlocking } = useToggleBlocking()

  if (!isReady) {
    return null
  }

  return (
    <Button
      {...props}
      disabled={isLoading}
      onClick={toggleBlocking}
      variant={!isBlockingEnabled ? 'primary' : 'secondary'}
    >
      {`${isBlockingEnabled ? 'Disable' : 'Enable'} Blocking`}
    </Button>
  )
}
