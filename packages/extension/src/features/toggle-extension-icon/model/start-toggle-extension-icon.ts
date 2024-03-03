import { accountControllerGetAccount, authControllerGetSessionInfo } from '@/shared/api/generated'
import { setBrowserInterval, setIcon } from '@/shared/lib/utils'

export const startToggleExtensionIcon = () => {
  setBrowserInterval('update-block-rules', 5 * 1000, async () => {
    const isAuthenticated = await authControllerGetSessionInfo().then(
      () => true,
      () => false
    )

    if (!isAuthenticated) {
      return setIcon('/hey.png')
    }

    const isBlockingEnabled = await accountControllerGetAccount().then(
      response => response.isBlockingEnabled
    )

    if (!isBlockingEnabled) {
      return setIcon('/sleaping.png')
    }

    return setIcon('/shield.png')
  })
}
