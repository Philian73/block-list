import { BlockItemDtoType, blockListControllerGetList } from '@/shared/api/generated'
import { type NetRule, NetRuleActionType, NetRuleResourceType } from '@/shared/lib/utils'

export const getBlockListNetRules = async () => {
  const blockList = await blockListControllerGetList()

  return blockList.items
    .filter(item => item.type === BlockItemDtoType.Website)
    .map(
      (item): NetRule => ({
        action: { type: NetRuleActionType.BLOCK },
        condition: item.data.startsWith('regexp:')
          ? {
              regexFilter: item.data.replace('regexp:', ''),
              resourceTypes: [NetRuleResourceType.MAIN_FRAME],
            }
          : {
              resourceTypes: [NetRuleResourceType.MAIN_FRAME],
              urlFilter: item.data,
            },
        id: item.id,
      })
    )
}
