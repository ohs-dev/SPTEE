
type IRagfairConfig = {
  runIntervalSeconds: number
  runIntervalValues: {
    inRaid: number
    outOfRaid: number
  }
  sell: {
    fees: boolean
    chance: {
      base: number
      sellMultiplier: number
      maxSellChancePercent: number
      minSellChancePercent: number
    }
    time: MinMax
    expireSeconds: number
  }
  traders: Record<string, boolean>
  dynamic: IRagfairDynamic
  tieredFlea: IRagfairTieredFlea
}

type IRagfairDynamic = {
  purchasesAreFoundInRaid: boolean
  useTraderPriceForOffersIfHigher: boolean
  barter: IRagfairOfferVariables
  pack: IRagfairOfferVariables
  offerAdjustment: {
    adjustPriceWhenBelowHandbookPrice: boolean
    maxPriceDifferenceBelowHandbookPercent: number
    handbookPriceMultiplier: number
    priceThresholdRub: number
  }
  expiredOfferThreshold: number
  offerItemCount: MinMax
  priceRanges: {
    default: MinMax
    preset: MinMax
    pack: MinMax
  }
  ignoreQualityPriceVarianceBlacklist: string[]
  showDefaultPresetsOnly: boolean
  endTimeSeconds: MinMax
  condition: Record<string, IRagfairOfferCondition>
  stackablePercent: MinMax
  nonStackableCount: MinMax
  rating: MinMax
  armor: {
    removeRemovablePlateChance: number
    plateSlotIdToRemovePool: string[]
  }
  itemPriceMultiplier: Record<string, number>
  _currencies: string
  currencies: Record<string, number>
  showAsSingleStack: string[]
  removeSeasonalItemsWhenNotInEvent: boolean
  blacklist: {
    damagedAmmoPacks: boolean
    custom: string[]
    enableBsgList: boolean
    enableQuestList: boolean
    traderItems: boolean
    armorPlate: {
      maxProtectionLevel: number
      ignoreSlots: string[]
    }
    enableCustomItemCategoryList: boolean
    customItemCategoryList: string[]
  }
  unreasonableModPrices: Record<string, IRagfairUnreasonableItem>
  itemPriceOverrideRouble: Record<string, number>
}

type IRagfairOfferVariables = {
  chancePercent: number
  itemCountMin: number
  itemCountMax: number
  priceRangeVariancePercent?: number
  minRoubleCostToBecomeBarter?: number
  makeSingleStackOnly?: boolean
  itemTypeBlacklist?: string[]
  itemTypeWhitelist?: string[]
}

type IRagfairOfferCondition = {
  _name: string
  conditionChance: number
  current: MinMax
  max: MinMax
}

type IRagfairUnreasonableItem = {
  itemType: string
  enabled: boolean
  handbookPriceOverMultiplier: number
  newPriceHandbookMultiplier: number
}

type IRagfairTieredFlea = {
  enabled: boolean
  unlocksTpl: Record<string, number>
  unlocksType: Record<string, number>
  ammoTiersEnabled: boolean
  ammoTplUnlocks: Record<string, number>
}