
type ILocationConfig = {
  // Loose items spawn multiplier
  looseLootMultiplier: Record<string, number>
  // Static spawn multiplier
  staticLootMultiplier: Record<string, number>
  customWaves: {
    // empty
    boss: {}
    // empty
    normal: {}
  }
  // empty
  openZones: {}
  // Quest Item forced spawns
  forcedLootSingleSpawnById: Record<string, string[]>
  splitWaveIntoSingleSpawnsSettings: {
    enabled: boolean
    ignoreMaps: string[]
    waveSizeThreshold: number
  }
  rogueLighthouseSpawnTimeSettings: {
    enabled: boolean
    waitTimeSeconds: number
  },
  fitLootIntoContainerAttempts: number
  addOpenZonesToAllMaps: boolean
  addCustomBotWavesToMaps: boolean
  enableBotTypeLimits: boolean
  // Limit bot amount for specific bot, by map
  botTypeLimits: Record<string,
    {
      type: string
      min: number
      max: number
    }[]>
  containerRandomisationSettings: {
    enabled: boolean
    maps: Record<string, boolean>
    containerTypesToNotRandomise: string[]
    containerGroupMinSizeMultiplier: number
    containerGroupMaxSizeMultiplier: number
  },
  // Ammo amount in loose magazines, minimum
  minFillLooseMagazinePercent: number
  minFillStaticMagazinePercent: number
  allowDuplicateItemsInStaticContainers: true,
  // Chance magazine has ammo, %
  magazineLootHasAmmoChancePercent: number
  staticMagazineLootHasAmmoChancePercent: number
  // empty
  looseLootBlacklist: {},
  scavRaidTimeSettings: {
    settings: {
      trainArrivalDelayObservedSeconds: number
    },
    maps: {
      bigmap: ILocationScavRaidTimes
      factory4_day: ILocationScavRaidTimes
      factory4_night: ILocationScavRaidTimes
      interchange: ILocationScavRaidTimes
      rezervbase: ILocationScavRaidTimes
      laboratory: ILocationScavRaidTimes
      lighthouse: ILocationScavRaidTimes
      shoreline: ILocationScavRaidTimes
      tarkovstreets: ILocationScavRaidTimes
      woods: ILocationScavRaidTimes
      sandbox: ILocationScavRaidTimes
      sandbox_high: ILocationScavRaidTimes
      default: ILocationScavRaidTimes
    }
  }
  equipmentLootSettings: {
    modSpawnChancePercent: Record<string, number>
  }
  reserveRaiderSpawnChanceOverrides: {
    nonTriggered: number
    triggered: number
  },
  tplsToStripChildItemsFrom: string[]
  nonMaps: string[]
}

type ILocationScavRaidTimes = {
  // Reduce loot on map
  reduceLootByPercent: boolean
  minDynamicLootPercent: number
  minStaticLootPercent: number
  reducedChancePercent: number
  reductionPercentWeights: Record<string, number>
  adjustWaves: boolean
}