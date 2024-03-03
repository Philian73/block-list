export const createTab = (url: string) => chrome.tabs.create({ url })

export const setNetRules = async (newRules: NetRule[]) => {
  const oldRules = await chrome.declarativeNetRequest.getDynamicRules()
  const oldRuleIds = oldRules.map(rule => rule.id)

  await chrome.declarativeNetRequest.updateDynamicRules({
    addRules: newRules,
    removeRuleIds: oldRuleIds,
  })
}

export const setBrowserInterval = async (name: string, timeout: number, bg: () => void) => {
  await chrome.alarms.create(name, {
    delayInMinutes: timeout / (1000 * 60),
    periodInMinutes: timeout / (1000 * 60),
  })

  chrome.alarms.onAlarm.addListener(alarm => {
    if (name === alarm.name) {
      bg()
    }
  })
}

export const addInstallListener = (cb: () => Awaited<void>) => {
  chrome.runtime.onInstalled.addListener(async ({ reason }) => {
    if (reason !== 'install') {
      return
    }
    await cb()
  })
}

let currentIcon = ''

export const setIcon = (url: string) => {
  if (url !== currentIcon) {
    currentIcon = url

    return chrome.action.setIcon({ path: chrome.runtime.getURL(url) })
  }
}

export type NetRule = chrome.declarativeNetRequest.Rule
export const NetRuleActionType = chrome.declarativeNetRequest.RuleActionType
export const NetRuleResourceType = chrome.declarativeNetRequest.ResourceType
