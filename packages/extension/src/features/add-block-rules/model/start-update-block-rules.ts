import { accountControllerGetAccount, authControllerGetSessionInfo } from '@/shared/api/generated'
import { setBrowserInterval, setNetRules } from '@/shared/lib/utils'

import { getBlockListNetRules } from './'

export const startUpdateBlockRules = () => {
  setBrowserInterval('update-block-rules', 5 * 1000, async () => {
    const isAuthenticated = await authControllerGetSessionInfo().then(
      () => true,
      () => false
    )

    if (!isAuthenticated) {
      return await setNetRules([])
    }

    const isBlockingEnabled = await accountControllerGetAccount().then(
      response => response.isBlockingEnabled
    )

    if (!isBlockingEnabled) {
      return await setNetRules([])
    }

    return setNetRules(await getBlockListNetRules())
  })
}
