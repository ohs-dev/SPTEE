
type ITraderConfig = {
  updateTime: ITraderUpdateTime[]
  updateTimeDefault: number
  tradersResetFromServerStart: boolean
  purchasesAreFoundInRaid: boolean
  traderPriceMultiplier: number
  fence: ITraderFenceConfig
  moddedTraders: {
    clothingService: string[]
  }
}

type ITraderUpdateTime = {
  _name: string
  traderId: string
  seconds: MinMax
}

type ITraderFenceConfig = {
  discountOptions: {
    assortSize: number
    itemPriceMult: number
    presetPriceMult: number
    weaponPresetMinMax: MinMax
    equipmentPresetMinMax: MinMax
  }
  partialRefreshTimeSeconds: number
  partialRefreshChangePercent: number
  assortSize: number
  weaponPresetMinMax: MinMax
  equipmentPresetMinMax: MinMax
  itemPriceMult: number
  presetPriceMult: number
  regenerateAssortsOnRefresh: boolean
  itemTypeLimits: Record<string, number>
  preventDuplicateOffersOfCategory: string[]
  weaponDurabilityPercentMinMax: {
    current: MinMax
    max: MinMax
  }
  chancePlateExistsInArmorPercent: Record<string, number>
  armorMaxDurabilityPercentMinMax: {
    current: MinMax
    max: MinMax
  }
  itemStackSizeOverrideMinMax: Record<string, MinMax>
  itemCategoryRoublePriceLimit: Record<string, number>
  presetSlotsToRemoveChancePercent: Record<string, number>
  ammoMaxPenLimit: number
  blacklistSeasonalItems: boolean
  blacklist: string[]
  coopExtractGift: {
    sendGift: boolean
    messageLocaleIds: string[]
    giftExpiryHours: number
    weaponPresetCount: MinMax
    armorPresetCount: MinMax
    itemCount: MinMax
    weaponCrateCount: MinMax
    itemBlacklist: string[]
    itemTypeWhitelist: string[]
    itemLimits: Record<string, number>
    itemStackLimits: Record<string, MinMax>
    allowBossItems: boolean
    useRewardItemBlacklist: boolean
    blockSeasonalItemsOutOfSeason: boolean
  }
  btrDeliveryExpireHours: number
  playerRepMin: number
  playerRepMax: number
}