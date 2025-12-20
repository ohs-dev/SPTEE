
type ILocationConfig = {
  looseLootMultiplier: Record<string, number>
  staticLootMultiplier: Record<string, number>
  customWaves: {
    boss: {}
    normal: {}
  }
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
  minFillLooseMagazinePercent: number
  minFillStaticMagazinePercent: number
  allowDuplicateItemsInStaticContainers: true,
  magazineLootHasAmmoChancePercent: number
  staticMagazineLootHasAmmoChancePercent: number
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
  reduceLootByPercent: boolean
  minDynamicLootPercent: number
  minStaticLootPercent: number
  reducedChancePercent: number
  reductionPercentWeights: Record<string, number>
  adjustWaves: boolean
}