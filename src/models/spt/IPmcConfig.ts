
type IPmcConfig = {
  gameVersionWeight: Record<string, number>
  accountTypeWeight: Record<string, number>
  vestLoot: ILootList
  pocketLoot: ILootList
  backpackLoot: ILootList
  globalLootBlacklist: string[]
  useDifficultyOverride: boolean
  difficulty: string
  botRelativeLevelDeltaMax: number
  botRelativeLevelDeltaMin: number
  _isUsec: string
  isUsec: number
  _pmcType: string
  pmcType: {
    pmcbear: IPmcBrainTypesByMap
    pmcusec: IPmcBrainTypesByMap
  }
  usecType: string
  bearType: string
  looseWeaponInBackpackChancePercent: number
  weaponHasEnhancementChancePercent: number
  looseWeaponInBackpackLootMinMax: MinMax
  maxBackpackLootTotalRub: IMinMaxLootTotal[]
  lootItemLimitsRub: ILootItemLimits[]
  maxPocketLootTotalRub: number
  maxVestLootTotalRub: number
  hostilitySettings: {
    pmcusec: IHostilitySettings
    pmcbear: IHostilitySettings
  }
  forceHealingItemsIntoSecure: boolean
  addPrefixToSameNamePMCAsPlayerChance: number
  allPMCsHavePlayerNameWithRandomPrefixChance: number
  locationSpecificPmcLevelOverride: Record<string, MinMax>
  addSecureContainerLootFromBotConfig: boolean
  removeExistingPmcWaves: boolean
  customPmcWaves: ICustomPmcWaves
}

type ILootList = {
  whitelist: string[]
  blacklist: string[]
}

type IPmcBrainTypesByMap = {
  factory4_day: IPmcBrainTypes
  factory4_night: IPmcBrainTypes
  bigmap: IPmcBrainTypes
  laboratory: IPmcBrainTypes
  woods: IPmcBrainTypes
  interchange: IPmcBrainTypes
  lighthouse: IPmcBrainTypes
  rezervbase: IPmcBrainTypes
  shoreline: IPmcBrainTypes
  tarkovstreets: IPmcBrainTypes
  sandbox: IPmcBrainTypes
  sandbox_high: IPmcBrainTypes
}

type IPmcBrainTypes = {
  bossKilla?: number
  bossKnight?: number
  bossGluhar?: number
  bossSanitar?: number
  bossTagilla?: number
  bossZryachiy?: number
  bossBoar?: number
  followerGluharAssault?: number
  followerBully?: number
  followerBigPipe?: number
  followerSanitar?: number
  followerKolontayAssault?: number
  followerKolontaySecurity?: number
  assault?: number
  cursedAssault?: number
  exUsec?: number
  arenaFighter?: number
  arenaFighterEvent?: number
  crazyAssaultEvent?: number
  pmcBot?: number
  pmcBEAR?: number
}

type IMinMaxLootTotal = {
  min: number
  max: number
  value: number
}

type ILootItemLimits = {
  min: number
  max: number
  backpack?: MinMax
  pocket?: MinMax
  vest?: MinMax
}

type IHostilitySettings = {
  additionalEnemyTypes: string[]
  additionalFriendlyTypes: string[]
  chancedEnemies: IChancedEnemies[]
  bearEnemyChance: number
  usecEnemyChance: number
  savageEnemyChance: number
  savagePlayerBehavior: string
}

type IChancedEnemies = {
  EnemyChance: number
  Role: string
}

type ICustomPmcWaves = {
  factory4_day: ICustomWave[]
  factory4_night: ICustomWave[]
  bigmap: ICustomWave[]
  woods: ICustomWave[]
  lighthouse: ICustomWave[]
  interchange: ICustomWave[]
  rezervbase: ICustomWave[]
  shoreline: ICustomWave[]
  tarkovstreets: ICustomWave[]
  laboratory: ICustomWave[]
  sandbox: ICustomWave[]
  sandbox_high: ICustomWave[]
}

type ICustomWave = {
  BossChance: number
  BossDifficult: string
  BossEscortAmount?: string
  BossEscortDifficult?: string
  BossEscortType: string
  BossName: string
  BossPlayer?: string
  BossZone: string
  Delay?: number
  IgnoreMaxBots: boolean
  RandomTimeSpawn?: boolean
  SpawnMode: string[]
  Supports?: any
  Time: number
  TriggerId?: string
  TriggerName?: string
}