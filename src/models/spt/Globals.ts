import type { IItem } from './IItem.js';

// Quest map quest items
// #SPT_Data/Server/database/config/location.json - forcedLootSingleSpawnById

export interface IGlobals {
  config: IConfig;
  //LocationInfection: ILocationInfection;
  /* Enemy bot presets */
  bot_presets: IBotPreset[];
  BotWeaponScatterings: IBotWeaponScattering[];
  ItemPresets: Record<string, IPreset>;
}

export interface IConfig {
  AimPunchMagnitude: number;
  WeaponSkillProgressRate: number;
  SkillAtrophy: boolean;
  exp: IExp;
  t_base_looting: number;
  t_base_lockpicking: number;
  armor: IArmor;
  //SessionsToShowHotKeys: number;
  MaxBotsAliveOnMap: number;
  MaxBotsAliveOnMapPvE: number;
  //RunddansSettings: IRunddansSettings;
  SavagePlayCooldown: number;
  SavagePlayCooldownNdaFree: number;
  MarksmanAccuracy: number;
  //SavagePlayCooldownDevelop: number;
  //TODSkyDate: string;
  Mastering: IMastering[];
  GlobalItemPriceModifier: number;
  TradingUnlimitedItems: boolean;
  TradingUnsetPersonalLimitItems: boolean;
  TransitSettings: ITransitSettings;
  /* Unlock all traders max level? */
  MaxLoyaltyLevelForAll: boolean;     // default: false
  GlobalLootChanceModifier: number;
  GlobalLootChanceModifierPvE: number;
  //TimeBeforeDeploy: number;
  //TimeBeforeDeployLocal: number;
  //TradingSetting: number;
  /* Can set dur. for trader weapon purchase */
  TradingSettings: ITradingSettings;
  //ItemsCommonSettings: IItemsCommonSettings;
  LoadTimeSpeedProgress: number;
  BaseLoadTime: number;
  BaseUnloadTime: number;
  BaseCheckTime: number;
  BluntDamageReduceFromSoftArmorMod: number;
  //UncheckOnShot: boolean;
  BotsEnabled: boolean;
  Airdrop: IAirdropGlobalSettings;
  ArmorMaterials: IArmorMaterials;
  KarmaCalculationSettings: IKarmaCalculationSettings;
  /* Additional damage from blacked out limb */
  LegsOverdamage: number;
  /* Additional damage from blacked out limb */
  HandsOverdamage: number;
  /* Additional damage from blacked out limb */
  StomachOverdamage: number;  // default 1.5, or 1.3?
  Health: IHealth;
  //rating: IRating;
  QuestSettings: IQuestSettings;
  RagFair: IRagFair;
  handbook: IHandbook;
  FractureCausedByFalling: IProbability;
  FractureCausedByBulletHit: IProbability;
  WAVE_COEF_LOW: number;
  WAVE_COEF_MID: number;
  WAVE_COEF_HIGH: number;
  WAVE_COEF_HORDE: number;
  Stamina: IStamina;
  StaminaRestoration: IStaminaRestoration;
  StaminaDrain: IStaminaDrain;
  RequirementReferences: IRequirementReferences;
  RestrictionsInRaid: IRestrictionsInRaid[];
  SkillMinEffectiveness: number;
  SkillFatiguePerPoint: number;
  SkillFreshEffectiveness: number;
  SkillFreshPoints: number;
  SkillPointsBeforeFatigue: number;
  SkillFatigueReset: number;
  DiscardLimitsEnabled: boolean;
  //FavoriteItemsSettings: IFavoriteItemsSettings;
  BTRSettings: IBTRSettings;
  //EventType: string[];
  WalkSpeed: Ixyz;
  SprintSpeed: Ixyz;
  SkillEnduranceWeightThreshold: number;
  //TeamSearchingTimeout: number;
  Insurance: IInsurance;
  SkillExpPerLevel: number;           // default: 100 (100xp per level)
  //GameSearchingTimeout: number;
  WallContusionAbsorption: Ixyz;
  //WeaponFastDrawSettings: IWeaponFastDrawSettings;
  SkillsSettings: ISkillsSettings;
  //AzimuthPanelShowsPlayerOrientation: boolean;
  Aiming: IAiming;
  Malfunction: IMalfunction;
  Overheat: IOverheat;
  FenceSettings: IFenceSettings;
  //TestValue: number;
  //Inertia: IInertia;
  Ballistic: IBallistic;
  RepairSettings: IRepairSettings;
}

/* Raid experience multipliers */
export interface IExp {
  heal: IHeal;
  match_end: IMatchEnd;
  kill: IKill;
  level: ILevel;
  loot_attempts: ILootAttempt[];
  expForLevelOneDogtag: number;
  expForLockedDoorOpen: number;
  expForLockedDoorBreach: number;
  triggerMult: number;
}

/* export interface IRunddansSettings {
  accessKeys: string[];
  active: boolean;
  activePVE: boolean;
  applyFrozenEverySec: number;
  consumables: string[];
  drunkImmunitySec: number;
  durability: Ixy;
  fireDistanceToHeat: number;
  grenadeDistanceToBreak: number;
  interactionDistance: number;
  knifeCritChanceToBreak: number;
  locations: string[];
  multitoolRepairSec: number;
  nonExitsLocations: string[];
  rainForFrozen: number;
  repairSec: number;
  secToBreak: Ixy;
  sleighLocations: string[];
} */


export interface ITransitSettings {
  BearPriceMod: number;
  ClearAllPlayerEffectsOnTransit: boolean;
  CoefficientDiscountCharisma: number;
  DeliveryMinPrice: number;
  DeliveryPrice: number;
  ModDeliveryCost: number;
  PercentageOfMissingEnergyRestore: number;
  PercentageOfMissingHealthRestore: number;
  PercentageOfMissingWaterRestore: number;
  RestoreHealthOnDestroyedParts: boolean;
  ScavPriceMod: number;
  UsecPriceMod: number;
  active: boolean;
}

/* Experience mult. for healing/eating/drinking */
export interface IHeal {
  expForHeal: number;
  expForHydration: number;
  expForEnergy: number;
}

export interface IMatchEnd {
  README: string;
  survived_exp_requirement: number;
  survived_seconds_requirement: number;
  survived_exp_reward: number;
  mia_exp_reward: number;
  runner_exp_reward: number;
  leftMult: number;
  miaMult: number;
  survivedMult: number;
  runnerMult: number;
  killedMult: number;
  transit_exp_reward: number;
  /* Multiplier for successive map transits. */
  transit_mult: number[][];
}

/* Multipliers for enemy kills, headshots, bot lvl. */
export interface IKill {
  combo: ICombo[];
  victimLevelExp: number;
  headShotMult: number;
  expOnDamageAllHealth: number;
  /* Default longShotDistance: 100 */
  longShotDistance: number;
  bloodLossToLitre: number;
  botExpOnDamageAllHealth: number;
  botHeadShotMult: number;
  victimBotLevelExp: number;
  pmcExpOnDamageAllHealth: number;
  pmcHeadShotMult: number;
}

/* ??? */
export interface ICombo {
  percent: number;
}

export interface ILevel {
  exp_table: IExpTable[];
  trade_level: number;
  savage_level: number;
  clan_level: number;
  mastering1: number;
  mastering2: number;
}

export interface IExpTable {
  exp: number;
}

export interface ILootAttempt {
  k_exp: number;
}

export interface IArmor {
  class: IClass[];
}

export interface IClass {
  resistance: number;
}

/* Sets xp level to master a weapon @lvl1, 2, 3 */
export interface IMastering {
  Name: string;
  Templates: string[];
  Level2: number;
  Level3: number;
}

export interface IAirdropGlobalSettings {
  AirdropViewType: string;
  ParachuteEndOpenHeight: number;
  ParachuteStartOpenHeight: number;
  PlaneAdditionalDistance: number;
  PlaneAirdropDuration: number;
  PlaneAirdropFlareWait: number;
  PlaneAirdropSmoke: number;
  PlaneMaxFlightHeight: number;
  PlaneMinFlightHeight: number;
  PlaneSpeed: number;
  SmokeActivateHeight: number;
}

export interface IKarmaCalculationSettings {
  defaultPveKarmaValue: number;
  enable: boolean;
  expireDaysAfterLastRaid: number;
  maxKarmaThresholdPercentile: number;
  minKarmaThresholdPercentile: number;
  minSurvivedRaidCount: number;
}

export interface IArmorMaterials {
  UHMWPE: IArmorType;
  Aramid: IArmorType;
  Combined: IArmorType;
  Titan: IArmorType;
  Aluminium: IArmorType;
  ArmoredSteel: IArmorType;
  Ceramic: IArmorType;
  Glass: IArmorType;
}

export interface IArmorType {
  Destructibility: number;
  MinRepairDegradation: number;
  MaxRepairDegradation: number;
  ExplosionDestructibility: number;
  MinRepairKitDegradation: number;
  MaxRepairKitDegradation: number;
}

export interface IHealth {
  Falling: IFalling;
  Effects: IEffects;
  HealPrice: IHealPrice;
  ProfileHealthSettings: IProfileHealthSettings;
}

export interface IFalling {
  DamagePerMeter: number;
  SafeHeight: number;
}

export interface IEffects {
  Existence: IExistence;
  Dehydration: IDehydration;
  BreakPart: IBreakPart;
  //Contusion: IContusion;
  //Disorientation: IDisorientation;
  Exhaustion: IExhaustion;
  //LowEdgeHealth: ILowEdgeHealth;
  //RadExposure: IRadExposure;
  //Stun: IStun;
  //Intoxication: Intoxication;
  Regeneration: IRegeneration;
  Wound: IWound;
  //Berserk: IBerserk;
  //Flash: IFlash;
  MedEffect: IMedEffect;
  Pain: IPain;
  PainKiller: IPainKiller;
  SandingScreen: ISandingScreen;
  MildMusclePain: IMusclePainEffect;
  SevereMusclePain: IMusclePainEffect;
  Stimulator: IStimulator;
  Tremor: ITremor;
  ChronicStaminaFatigue: IChronicStaminaFatigue;
  Fracture: IFracture;
  HeavyBleeding: IHeavyBleeding;
  LightBleeding: ILightBleeding;
  BodyTemperature: IBodyTemperature;
  //ZombieInfection: IZombieInfection;
}

export interface IExistence {
  EnergyLoopTime: number;
  HydrationLoopTime: number;
  EnergyDamage: number;
  HydrationDamage: number;
  DestroyedStomachEnergyTimeFactor: number;
  DestroyedStomachHydrationTimeFactor: number;
}

export interface IDehydration {
  DefaultDelay: number;
  DefaultResidueTime: number;
  BleedingHealth: number;
  BleedingLoopTime: number;
  BleedingLifeTime: number;
  DamageOnStrongDehydration: number;
  StrongDehydrationLoopTime: number;
}

export interface IBreakPart {
  DefaultDelay: number;
  DefaultResidueTime: number;
  HealExperience: number;
  OfflineDurationMin: number;
  OfflineDurationMax: number;
  RemovePrice: number;
  RemovedAfterDeath: boolean;
  BulletHitProbability: IProbability;
  FallingProbability: IProbability;
}


export interface IExhaustion {
  DefaultDelay: number;
  DefaultResidueTime: number;
  Damage: number;
  DamageLoopTime: number;
}

export interface IRegeneration {
  LoopTime: number;
  MinimumHealthPercentage: number;
  Energy: number;
  Hydration: number;
  BodyHealth: IBodyHealth;
  Influences: IInfluences;
}

export interface IBodyHealth {
  Head: IBodyHealthValue;
  Chest: IBodyHealthValue;
  Stomach: IBodyHealthValue;
  LeftArm: IBodyHealthValue;
  RightArm: IBodyHealthValue;
  LeftLeg: IBodyHealthValue;
  RightLeg: IBodyHealthValue;
}

export interface IBodyHealthValue {
  Value: number;
}

export interface IInfluences {
  LightBleeding: IInfluence;
  HeavyBleeding: IInfluence;
  Fracture: IInfluence;
  RadExposure: IInfluence;
  Intoxication: IInfluence;
}

export interface IInfluence {
  HealthSlowDownPercentage: number;
  EnergySlowDownPercentage: number;
  HydrationSlowDownPercentage: number;
}

export interface IWound {
  WorkingTime: number;
  ThresholdMin: number;
  ThresholdMax: number;
}


export interface IMedEffect {
  LoopTime: number;
  StartDelay: number;
  DrinkStartDelay: number;
  FoodStartDelay: number;
  DrugsStartDelay: number;
  MedKitStartDelay: number;
  MedicalStartDelay: number;
  StimulatorStartDelay: number;
}

export interface IPain {
  TremorDelay: number;
  HealExperience: number;
}

export interface IPainKiller {
  Dummy: number;
}

export interface ISandingScreen {
  Dummy: number;
}

export interface IMusclePainEffect {
  GymEffectivity: number;
  OfflineDurationMax: number;
  OfflineDurationMin: number;
  TraumaChance: number;
}

export interface IStimulator {
  BuffLoopTime: number;
  Buffs: IBuffs;
}

export interface IBuffs {
  BuffsSJ1TGLabs: IBuff[];
  BuffsSJ6TGLabs: IBuff[];
  BuffsPropital: IBuff[];
  BuffsZagustin: IBuff[];
  BuffseTGchange: IBuff[];
  BuffsAdrenaline: IBuff[];
  BuffsGoldenStarBalm: IBuff[];
  Buffs_drink_aquamari: IBuff[];
  Buffs_drink_maxenergy: IBuff[];
  Buffs_drink_milk: IBuff[];
  Buffs_drink_tarcola: IBuff[];
  Buffs_drink_hotrod: IBuff[];
  Buffs_drink_juice_army: IBuff[];
  Buffs_drink_water: IBuff[];
  Buffs_food_borodinskiye: IBuff[];
  Buffs_food_condensed_milk: IBuff[];
  Buffs_food_emelya: IBuff[];
  Buffs_food_mayonez: IBuff[];
  Buffs_food_mre: IBuff[];
  Buffs_food_sugar: IBuff[];
  Buffs_drink_vodka: IBuff[];
  Buffs_drink_jack: IBuff[];
  Buffs_drink_moonshine: IBuff[];
  Buffs_drink_purewater: IBuff[];
  Buffs_3bTG: IBuff[];
  Buffs_AHF1M: IBuff[];
  Buffs_L1: IBuff[];
  Buffs_MULE: IBuff[];
  Buffs_Meldonin: IBuff[];
  Buffs_Obdolbos: IBuff[];
  Buffs_P22: IBuff[];
  Buffs_KultistsToxin: IBuff[];
  Buffs_BodyTemperature: IBuff[];
  Buffs_Antidote: IBuff[];
  Buffs_melee_bleed: IBuff[];
  Buffs_melee_blunt: IBuff[];
  Buffs_hultafors: IBuff[];
  Buffs_drink_vodka_BAD: IBuff[];
  Buffs_food_alyonka: IBuff[];
  Buffs_food_slippers: IBuff[];
  Buffs_knife: IBuff[];
  Buffs_EndOfWinterBonfire: IBuff[];
}

export interface IBuff {
  BuffType: string;
  Chance: number;
  Delay: number;
  Duration: number;
  Value: number;
  AbsoluteValue: boolean;
  SkillName: string;
}

export interface ITremor {
  DefaultDelay: number;
  DefaultResidueTime: number;
}

export interface IChronicStaminaFatigue {
  EnergyRate: number;
  WorkingTime: number;
  TicksEvery: number;
  EnergyRatePerStack: number;
}

export interface IFracture {
  DefaultDelay: number;
  DefaultResidueTime: number;
  HealExperience: number;
  OfflineDurationMin: number;
  OfflineDurationMax: number;
  RemovePrice: number;
  RemovedAfterDeath: boolean;
  BulletHitProbability: IProbability;
  FallingProbability: IProbability;
}

export interface IHeavyBleeding {
  DefaultDelay: number;
  DefaultResidueTime: number;
  DamageEnergy: number;
  DamageHealth: number;
  EnergyLoopTime: number;
  HealthLoopTime: number;
  DamageHealthDehydrated: number;
  HealthLoopTimeDehydrated: number;
  LifeTimeDehydrated: number;
  EliteVitalityDuration: number;
  HealExperience: number;
  OfflineDurationMin: number;
  OfflineDurationMax: number;
  RemovePrice: number;
  RemovedAfterDeath: boolean;
  Probability: IProbability;
}

export interface IProbability {
  FunctionType: string;
  K: number;
  B: number;
  Threshold: number;
}

export interface ILightBleeding {
  DefaultDelay: number;
  DefaultResidueTime: number;
  DamageEnergy: number;
  DamageHealth: number;
  EnergyLoopTime: number;
  HealthLoopTime: number;
  DamageHealthDehydrated: number;
  HealthLoopTimeDehydrated: number;
  LifeTimeDehydrated: number;
  EliteVitalityDuration: number;
  HealExperience: number;
  OfflineDurationMin: number;
  OfflineDurationMax: number;
  RemovePrice: number;
  RemovedAfterDeath: boolean;
  Probability: IProbability;
}

export interface IBodyTemperature {
  DefaultBuildUpTime: number;
  DefaultResidueTime: number;
  LoopTime: number;
}

export interface IHealPrice {
  HealthPointPrice: number;
  HydrationPointPrice: number;
  EnergyPointPrice: number;
  TrialLevels: number;
  TrialRaids: number;
}

export interface IProfileHealthSettings {
  BodyPartsSettings: IBodyPartsSettings;
  HealthFactorsSettings: IHealthFactorsSettings;
  DefaultStimulatorBuff: string;
}

export interface IBodyPartsSettings {
  Head: IBodyPartsSetting;
  Chest: IBodyPartsSetting;
  Stomach: IBodyPartsSetting;
  LeftArm: IBodyPartsSetting;
  RightArm: IBodyPartsSetting;
  LeftLeg: IBodyPartsSetting;
  RightLeg: IBodyPartsSetting;
}

export interface IBodyPartsSetting {
  Minimum: number;
  Maximum: number;
  Default: number;
  EnvironmentDamageMultiplier: number;
  OverDamageReceivedMultiplier: number;
}

export interface IHealthFactorsSettings {
  Energy: IHealthFactorSetting;
  Hydration: IHealthFactorSetting;
  Temperature: IHealthFactorSetting;
  Poisoning: IHealthFactorSetting;
  Radiation: IHealthFactorSetting;
}

export interface IHealthFactorSetting {
  Minimum: number;
  Maximum: number;
  Default: number;
}

export interface IRating {
  levelRequired: number;
  limit: number;
  categories: ICategories;
}

export interface ICategories {
  experience: boolean;
  kd: boolean;
  surviveRatio: boolean;
  avgEarnings: boolean;
  pmcKills: boolean;
  raidCount: boolean;
  longestShot: boolean;
  timeOnline: boolean;
  inventoryFullCost: boolean;
  ragFairStanding: boolean;
}

export interface IRagFair {
  enabled: boolean;
  priceStabilizerEnabled: boolean;
  includePveTraderSales: boolean;
  priceStabilizerStartIntervalInHours: number;
  minUserLevel: number;
  communityTax: number;
  communityItemTax: number;
  communityRequirementTax: number;
  offerPriorityCost: number;
  offerDurationTimeInHour: number;
  offerDurationTimeInHourAfterRemove: number;
  priorityTimeModifier: number;
  maxRenewOfferTimeInHour: number;
  renewPricePerHour: number;
  maxActiveOfferCount: IMaxActiveOfferCount[];
  balancerRemovePriceCoefficient: number;
  balancerMinPriceCount: number;
  balancerAveragePriceCoefficient: number;
  delaySinceOfferAdd: number;
  uniqueBuyerTimeoutInDays: number;
  userRatingChangeFrequencyMultiplayer: number;
  RagfairTurnOnTimestamp: number;
  ratingSumForIncrease: number;
  ratingIncreaseCount: number;
  ratingSumForDecrease: number;
  ratingDecreaseCount: number;
  maxSumForIncreaseRatingPerOneSale: number;
  maxSumForDecreaseRatingPerOneSale: number;
  maxSumForRarity: IMaxSumForRarity;
  ChangePriceCoef: number;
  ItemRestrictions: IItemGlobalRestrictions[];
  balancerUserItemSaleCooldownEnabled: boolean;
  balancerUserItemSaleCooldown: number;
  youSellOfferMaxStorageTimeInHour: number;
  yourOfferDidNotSellMaxStorageTimeInHour: number;
  isOnlyFoundInRaidAllowed: boolean;
  sellInOnePiece: number;
}

export interface IItemGlobalRestrictions {
  MaxFlea: number;
  MaxFleaStacked: number;
  TemplateId: string;
}

export interface IMaxActiveOfferCount {
  from: number;
  to: number;
  count: number;
}

export interface IMaxSumForRarity {
  Common: IRarityMaxSum;
  Rare: IRarityMaxSum;
  Superrare: IRarityMaxSum;
  Not_exist: IRarityMaxSum;
}

export interface IRarityMaxSum {
  value: number;
}

export interface IHandbook {
  defaultCategory: string;
}

export interface IStamina {
  Capacity: number;
  SprintDrainRate: number;
  BaseRestorationRate: number;
  BipodAimDrainRateMultiplier: number;
  JumpConsumption: number;
  MountingHorizontalAimDrainRateMultiplier: number;
  MountingVerticalAimDrainRateMultiplier: number;
  GrenadeHighThrow: number;
  GrenadeLowThrow: number;
  AimDrainRate: number;
  AimRangeFinderDrainRate: number;
  OxygenCapacity: number;
  OxygenRestoration: number;
  WalkOverweightLimits: Ixyz;
  BaseOverweightLimits: Ixyz;
  SprintOverweightLimits: Ixyz;
  WalkSpeedOverweightLimits: Ixyz;
  CrouchConsumption: Ixyz;
  WalkConsumption: Ixyz;
  StandupConsumption: Ixyz;
  TransitionSpeed: Ixyz;
  SprintAccelerationLowerLimit: number;
  SprintSpeedLowerLimit: number;
  SprintSensitivityLowerLimit: number;
  AimConsumptionByPose: Ixyz;
  RestorationMultiplierByPose: Ixyz;
  OverweightConsumptionByPose: Ixyz;
  AimingSpeedMultiplier: number;
  WalkVisualEffectMultiplier: number;
  WeaponFastSwitchConsumption: number;
  HandsCapacity: number;
  HandsRestoration: number;
  ProneConsumption: number;
  BaseHoldBreathConsumption: number;
  SoundRadius: Ixyz;
  ExhaustedMeleeSpeed: number;
  FatigueRestorationRate: number;
  FatigueAmountToCreateEffect: number;
  ExhaustedMeleeDamageMultiplier: number;
  FallDamageMultiplier: number;
  SafeHeightOverweight: number;
  SitToStandConsumption: number;
  StaminaExhaustionCausesJiggle: boolean;
  StaminaExhaustionStartsBreathSound: boolean;
  StaminaExhaustionRocksCamera: boolean;
  HoldBreathStaminaMultiplier: Ixyz;
  PoseLevelIncreaseSpeed: Ixyz;
  PoseLevelDecreaseSpeed: Ixyz;
  PoseLevelConsumptionPerNotch: Ixyz;
}

export interface IStaminaRestoration {
  LowerLeftPoint: number;
  LowerRightPoint: number;
  LeftPlatoPoint: number;
  RightPlatoPoint: number;
  RightLimit: number;
  ZeroValue: number;
}

export interface IStaminaDrain {
  LowerLeftPoint: number;
  LowerRightPoint: number;
  LeftPlatoPoint: number;
  RightPlatoPoint: number;
  RightLimit: number;
  ZeroValue: number;
}

export interface IRequirementReferences {
  Alpinist: IAlpinist[];
}

export interface IAlpinist {
  Requirement: string;
  Id: string;
  Count: number;
  RequiredSlot: string;
  RequirementTip: string;
}

export interface IRestrictionsInRaid {
  MaxInLobby: number;
  MaxInRaid: number;
  TemplateId: string;
}

export interface IFavoriteItemsSettings {
  WeaponStandMaxItemsCount: number;
  PlaceOfFameMaxItemsCount: number;
}

export interface IBTRSettings {
  LocationsWithBTR: string[];
  BasePriceTaxi: number;
  AddPriceTaxi: number;
  CleanUpPrice: number;
  DeliveryPrice: number;
  ModDeliveryCost: number;
  BearPriceMod: number;
  UsecPriceMod: number;
  ScavPriceMod: number;
  CoefficientDiscountCharisma: number;
  DeliveryMinPrice: number;
  TaxiMinPrice: number;
  BotCoverMinPrice: number;
  MapsConfigs: Record<string, IBtrMapConfig>;
  DiameterWheel: number;
  HeightWheel: number;
  HeightWheelMaxPosLimit: number;
  HeightWheelMinPosLimit: number;
  SnapToSurfaceWheelsSpeed: number;
  CheckSurfaceForWheelsTimer: number;
  HeightWheelOffset: number;
}

export interface IBtrMapConfig {
  BtrSkin: string;
  CheckSurfaceForWheelsTimer: number;
  DiameterWheel: number;
  HeightWheel: number;
  HeightWheelMaxPosLimit: number;
  HeightWheelMinPosLimit: number;
  HeightWheelOffset: number;
  SnapToSurfaceWheelsSpeed: number;
  SuspensionDamperStiffness: number;
  SuspensionRestLength: number;
  SuspensionSpringStiffness: number;
  SuspensionTravel: number;
  SuspensionWheelRadius: number;
  mapID: string;
  pathsConfigurations: IPathConfig[];
}

export interface IPathConfig {
  active: boolean;
  id: string;
  enterPoint: string;
  exitPoint: string;
  pathPoints: string[];
  once: boolean;
  circle: boolean;
  circleCount: number;
  skinType: string[];
}


export interface IInsurance {
  ChangeForReturnItemsInOfflineRaid: number;
  MaxStorageTimeInHour: number;
  CoefOfSendingMessageTime: number;
  CoefOfHavingMarkOfUnknown: number;
  EditionSendingMessageTime: Record<string, IMessageSendTImeMultipler>;
  OnlyInDeathCase: boolean;
}

export interface IMessageSendTImeMultipler {
  multiplier: number;
}

/* #region Skill Settings */

export interface ISkillsSettings {
  SkillProgressRate: number;
  WeaponSkillProgressRate: number;
  WeaponSkillRecoilBonusPerLevel: number;
  HideoutManagement: IHideoutManagement;
  Crafting: ICrafting;
  Metabolism: IMetabolism;
  MountingErgonomicsBonusPerLevel: number;
  Immunity: Immunity;
  Endurance: IEndurance;
  Strength: IStrength;
  Vitality: IVitality;
  Health: IHealthSkillProgress;
  StressResistance: IStressResistance;
  Throwing: IThrowing;
  RecoilControl: IRecoilControl;
  Pistol: IWeaponSkills;
  Revolver: IWeaponSkills;
  SMG: any[];
  Assault: IWeaponSkills;
  Shotgun: IWeaponSkills;
  Sniper: IWeaponSkills;
  LMG: any[];
  HMG: any[];
  Launcher: any[];
  AttachedLauncher: any[];
  Melee: IMeleeSkill;
  DMR: IWeaponSkills;
  BearAssaultoperations: any[];
  BearAuthority: any[];
  BearAksystems: any[];
  BearHeavycaliber: any[];
  BearRawpower: any[];
  BipodErgonomicsBonusPerLevel: number;
  UsecArsystems: any[];
  UsecDeepweaponmodding_Settings: any[];
  UsecLongrangeoptics_Settings: any[];
  UsecNegotiations: any[];
  UsecTactics: any[];
  BotReload: any[];
  CovertMovement: ICovertMovement;
  FieldMedicine: any[];
  Search: ISearch;
  Sniping: any[];
  ProneMovement: any[];
  FirstAid: any[];
  LightVests: IArmorSkills;
  HeavyVests: IArmorSkills;
  WeaponModding: any[];
  AdvancedModding: any[];
  NightOps: any[];
  SilentOps: any[];
  Lockpicking: any[];
  WeaponTreatment: IWeaponTreatment;
  MagDrills: IMagDrills;
  Freetrading: any[];
  Auctions: any[];
  Cleanoperations: any[];
  Barter: any[];
  Shadowconnections: any[];
  Taskperformance: any[];
  Perception: IPerception;
  Intellect: Intellect;
  Attention: IAttention;
  Charisma: ICharisma;
  Memory: IMemory;
  Surgery: ISurgery;
  AimDrills: IAimDrills;
  BotSound: any[];
  TroubleShooting: ITroubleShooting;
}

export interface IMeleeSkill {
  BuffSettings: IBuffSettings;
}

export interface IArmorSkills {
  BuffMaxCount: number;
  BuffSettings: IBuffSettings;
  Counters: IArmorCounters;
  MoveSpeedPenaltyReductionHVestsReducePerLevel: number;
  RicochetChanceHVestsCurrentDurabilityThreshold: number;
  RicochetChanceHVestsEliteLevel: number;
  RicochetChanceHVestsMaxDurabilityThreshold: number;
  MeleeDamageLVestsReducePerLevel: number;
  MoveSpeedPenaltyReductionLVestsReducePerLevel: number;
  WearAmountRepairLVestsReducePerLevel: number;
  WearChanceRepairLVestsReduceEliteLevel: number;
}

export interface IArmorCounters {
  armorDurability: ISkillCounter;
}

export interface IHideoutManagement {
  SkillPointsPerAreaUpgrade: number;
  SkillPointsPerCraft: number;
  CircleOfCultistsBonusPercent: number;
  ConsumptionReductionPerLevel: number;
  SkillBoostPercent: number;
  SkillPointsRate: ISkillPointsRate;
  EliteSlots: IEliteSlots;
}

export interface ISkillPointsRate {
  Generator: ISkillPointRate;
  AirFilteringUnit: ISkillPointRate;
  WaterCollector: ISkillPointRate;
  SolarPower: ISkillPointRate;
}

export interface ISkillPointRate {
  ResourceSpent: number;
  PointsGained: number;
}

export interface IEliteSlots {
  Generator: IEliteSlot;
  AirFilteringUnit: IEliteSlot;
  WaterCollector: IEliteSlot;
  BitcoinFarm: IEliteSlot;
}

export interface IEliteSlot {
  Slots: number;
  Container: number;
}

export interface ICrafting {
  PointsPerCraftingCycle: number;
  CraftingCycleHours: number;
  PointsPerUniqueCraftCycle: number;
  UniqueCraftsPerCycle: number;
  CraftTimeReductionPerLevel: number;
  ProductionTimeReductionPerLevel: number;
  EliteExtraProductions: number;
  CraftingPointsToInteligence: number;
}

export interface IMetabolism {
  HydrationRecoveryRate: number;
  EnergyRecoveryRate: number;
  IncreasePositiveEffectDurationRate: number;
  DecreaseNegativeEffectDurationRate: number;
  DecreasePoisonDurationRate: number;
}

export interface Immunity {
  ImmunityMiscEffects: number;
  ImmunityPoisonBuff: number;
  ImmunityPainKiller: number;
  HealthNegativeEffect: number;
  StimulatorNegativeBuff: number;
}

export interface IEndurance {
  MovementAction: number;
  SprintAction: number;
  GainPerFatigueStack: number;
  DependentSkillRatios: IDependentSkillRatio[];
  QTELevelMultipliers: Record<string, Record<string, number>>;
}

export interface IStrength {
  DependentSkillRatios: IDependentSkillRatio[];
  SprintActionMin: number;
  SprintActionMax: number;
  MovementActionMin: number;
  MovementActionMax: number;
  PushUpMin: number;
  PushUpMax: number;
  QTELevelMultipliers: IQTELevelMultiplier[];
  FistfightAction: number;
  ThrowAction: number;
}

export interface IDependentSkillRatio {
  Ratio: number;
  SkillId: string;
}

export interface IQTELevelMultiplier {
  Level: number;
  Multiplier: number;
}

export interface IVitality {
  DamageTakenAction: number;
  HealthNegativeEffect: number;
}

export interface IHealthSkillProgress {
  SkillProgress: number;
}

export interface IStressResistance {
  HealthNegativeEffect: number;
  LowHPDuration: number;
}

export interface IThrowing {
  ThrowAction: number;
}

export interface IRecoilControl {
  RecoilAction: number;
  RecoilBonusPerLevel: number;
}

export interface IWeaponSkills {
  WeaponReloadAction: number;
  WeaponShotAction: number;
  WeaponFixAction: number;
  WeaponChamberAction: number;
}

export interface ICovertMovement {
  MovementAction: number;
}

export interface ISearch {
  SearchAction: number;
  FindAction: number;
}

export interface IWeaponTreatment {
  BuffMaxCount: number;
  BuffSettings: IBuffSettings;
  Counters: IWeaponTreatmentCounters;
  DurLossReducePerLevel: number;
  SkillPointsPerRepair: number;
  Filter: any[];
  WearAmountRepairGunsReducePerLevel: number;
  WearChanceRepairGunsReduceEliteLevel: number;
}

export interface IWeaponTreatmentCounters {
  firearmsDurability: ISkillCounter;
}

export interface IBuffSettings {
  CommonBuffChanceLevelBonus: number;
  CommonBuffMinChanceValue: number;
  CurrentDurabilityLossToRemoveBuff?: number;
  MaxDurabilityLossToRemoveBuff?: number;
  RareBuffChanceCoff: number;
  ReceivedDurabilityMaxPercent: number;
}

export interface IMagDrills {
  RaidLoadedAmmoAction: number;
  RaidUnloadedAmmoAction: number;
  MagazineCheckAction: number;
}

export interface IPerception {
  DependentSkillRatios: ISkillRatio[];
  OnlineAction: number;
  UniqueLoot: number;
}

export interface ISkillRatio {
  Ratio: number;
  SkillId: string;
}

export interface Intellect {
  Counters: IIntellectCounters;
  ExamineAction: number;
  SkillProgress: number;
  RepairAction: number;
  WearAmountReducePerLevel: number;
  WearChanceReduceEliteLevel: number;
  RepairPointsCostReduction: number;
}

export interface IIntellectCounters {
  armorDurability: ISkillCounter;
  firearmsDurability: ISkillCounter;
  meleeWeaponDurability: ISkillCounter;
}

export interface ISkillCounter {
  divisor: number;
  points: number;
}

export interface IAttention {
  DependentSkillRatios: ISkillRatio[];
  ExamineWithInstruction: number;
  FindActionFalse: number;
  FindActionTrue: number;
}

export interface ICharisma {
  BonusSettings: IBonusSettings;
  Counters: ICharismaSkillCounters;
  SkillProgressInt: number;
  SkillProgressAtn: number;
  SkillProgressPer: number;
}

export interface ICharismaSkillCounters {
  insuranceCost: ISkillCounter;
  repairCost: ISkillCounter;
  repeatableQuestCompleteCount: ISkillCounter;
  restoredHealthCost: ISkillCounter;
  scavCaseCost: ISkillCounter;
}

export interface IBonusSettings {
  EliteBonusSettings: IEliteBonusSettings;
  LevelBonusSettings: ILevelBonusSettings;
}

export interface IEliteBonusSettings {
  FenceStandingLossDiscount: number;
  RepeatableQuestExtraCount: number;
  ScavCaseDiscount: number;
}

export interface ILevelBonusSettings {
  HealthRestoreDiscount: number;
  HealthRestoreTraderDiscount: number;
  InsuranceDiscount: number;
  InsuranceTraderDiscount: number;
  PaidExitDiscount: number;
  RepeatableQuestChangeDiscount: number;
}

export interface IMemory {
  AnySkillUp: number;
  SkillProgress: number;
}

export interface ISurgery {
  SurgeryAction: number;
  SkillProgress: number;
}

export interface IAimDrills {
  WeaponShotAction: number;
}

export interface ITroubleShooting {
  MalfRepairSpeedBonusPerLevel: number;
  SkillPointsPerMalfFix: number;
  EliteDurabilityChanceReduceMult: number;
  EliteAmmoChanceReduceMult: number;
  EliteMagChanceReduceMult: number;
}
/* #endregion */

export interface IAiming {
  ProceduralIntensityByPose: Ixyz;
  AimProceduralIntensity: number;
  HeavyWeight: number;
  LightWeight: number;
  MaxTimeHeavy: number;
  MinTimeHeavy: number;
  MaxTimeLight: number;
  MinTimeLight: number;
  RecoilScaling: number;
  RecoilDamping: number;
  CameraSnapGlobalMult: number;
  RecoilXIntensityByPose: Ixyz;
  RecoilYIntensityByPose: Ixyz;
  RecoilZIntensityByPose: Ixyz;
  RecoilCrank: boolean;
  RecoilHandDamping: number;
  RecoilConvergenceMult: number;
  RecoilVertBonus: number;
  RecoilBackBonus: number;
}

export interface IMalfunction {
  AmmoMalfChanceMult: number;
  MagazineMalfChanceMult: number;
  MalfRepairHardSlideMult: number;
  MalfRepairOneHandBrokenMult: number;
  MalfRepairTwoHandsBrokenMult: number;
  AllowMalfForBots: boolean;
  ShowGlowAttemptsCount: number;
  OutToIdleSpeedMultForPistol: number;
  IdleToOutSpeedMultOnMalf: number;
  TimeToQuickdrawPistol: number;
  /* Durability range where no malfunctions are possible. 
     (x = lower limit, y = upper limit.)  */
  DurRangeToIgnoreMalfs: Ixyz;    // default x:93, y:100 
  DurFeedWt: number;
  DurMisfireWt: number;
  DurJamWt: number;
  DurSoftSlideWt: number;
  DurHardSlideMinWt: number;
  DurHardSlideMaxWt: number;
  AmmoMisfireWt: number;
  AmmoFeedWt: number;
  AmmoJamWt: number;
  OverheatFeedWt: number;
  OverheatJamWt: number;
  OverheatSoftSlideWt: number;
  OverheatHardSlideMinWt: number;
  OverheatHardSlideMaxWt: number;
}

/* #region Overheat */
export interface IOverheat {
  MinOverheat: number;
  MaxOverheat: number;
  OverheatProblemsStart: number;
  ModHeatFactor: number;
  ModCoolFactor: number;
  MinWearOnOverheat: number;
  MaxWearOnOverheat: number;
  MinWearOnMaxOverheat: number;
  MaxWearOnMaxOverheat: number;
  OverheatWearLimit: number;
  MaxCOIIncreaseMult: number;
  MinMalfChance: number;
  MaxMalfChance: number;
  DurReduceMinMult: number;
  DurReduceMaxMult: number;
  BarrelMoveRndDuration: number;
  BarrelMoveMaxMult: number;
  FireratePitchMult: number;
  FirerateReduceMinMult: number;
  FirerateReduceMaxMult: number;
  FirerateOverheatBorder: number;
  EnableSlideOnMaxOverheat: boolean;
  StartSlideOverheat: number;
  FixSlideOverheat: number;
  AutoshotMinOverheat: number;
  AutoshotChance: number;
  AutoshotPossibilityDuration: number;
  MaxOverheatCoolCoef: number;
}

/* EXAMPLE OVERHEAT SETTING
"Overheat": {
      "AutoshotChance": 0.2,
      "AutoshotMinOverheat": 170,
      "AutoshotPossibilityDuration": 3,
      "BarrelMoveMaxMult": 0,
      "BarrelMoveRndDuration": 1,
      "DurReduceMaxMult": 3,
      "DurReduceMinMult": 1,
      "EnableSlideOnMaxOverheat": true,
      "FirerateOverheatBorder": 140,
      "FireratePitchMult": 0.5,
      "FirerateReduceMaxMult": 1.15,
      "FirerateReduceMinMult": 0.85,
      "FixSlideOverheat": 170,
      "MaxCOIIncreaseMult": 1.5,
      "MaxMalfChance": 9,
      "MaxOverheat": 200,
      "MaxOverheatCoolCoef": 6,
      "MaxWearOnMaxOverheat": 0.7,
      "MaxWearOnOverheat": 0.2,
      "MinMalfChance": 0.5,
      "MinOverheat": 0,
      "MinWearOnMaxOverheat": 0.2,
      "MinWearOnOverheat": 0.1,
      "ModCoolFactor": 1,
      "ModHeatFactor": 1,
      "OverheatProblemsStart": 100,
      "OverheatWearLimit": 0.55,
      "StartSlideOverheat": 200
    } */
/* #endregion */

/* #region Fence Settings */

export interface IFenceSettings {
  FenceId: string;
  Levels: Record<string, IFenceLevel>;
  paidExitStandingNumerator: number;
}

/* Fence rep level range (-7 to +6) */
export interface IFenceLevel {
  ReachOnMarkOnUnknowns: boolean;
  SavageCooldownModifier: number;
  ScavCaseTimeModifier: number;
  PaidExitCostModifier: number;
  BotFollowChance: number;
  ScavEquipmentSpawnChanceModifier: number;
  TransitGridSize: Ixyz;
  PriceModifier: number;
  HostileBosses: boolean;
  HostileScavs: boolean;
  ScavAttackSupport: boolean;
  ExfiltrationPriceModifier: number;
  AvailableExits: number;
  BotApplySilenceChance: number;
  BotGetInCoverChance: number;
  BotHelpChance: number;
  BotSpreadoutChance: number;
  BotStopChance: number;
  PriceModTaxi: number;
  PriceModDelivery: number;
  PriceModCleanUp: number;
  ReactOnMarkOnUnknowns: boolean;
  ReactOnMarkOnUnknownsPVE: boolean;
  DeliveryGridSize: Ixyz;
  CanInteractWithBtr: boolean;
  CircleOfCultistsBonusPercent: number;
}

/* EXAMPLE FENCE REP 6 (MAX LVL)
  "6": {
    "AvailableExits": 6,
    "BotApplySilenceChance": 100,
    "BotFollowChance": 100,
    "BotGetInCoverChance": 100,
    "BotHelpChance": 100,
    "BotSpreadoutChance": 100,
    "BotStopChance": 100,
    "CanInteractWithBtr": true,
    "CircleOfCultistsBonusPercent": 0,
    "DeliveryGridSize": {
      "x": 7,
      "y": 4,
      "z": 0
    },
    "ExfiltrationPriceModifier": 0.3,
    "HostileBosses": false,
    "HostileScavs": false,
    "PaidExitCostModifier": 0.5,
    "PriceModCleanUp": 10000,
    "PriceModDelivery": 2000,
    "PriceModTaxi": 1000,
    "PriceModifier": 0.8,
    "ReactOnMarkOnUnknowns": true,
    "ReactOnMarkOnUnknownsPVE": true,
    "SavageCooldownModifier": 0.4,
    "ScavAttackSupport": true,
    "ScavCaseTimeModifier": 0.5,
    "ScavEquipmentSpawnChanceModifier": 60,
    "TransitGridSize": {
      "x": 5,
      "y": 5,
      "z": 0
    }
  }
*/
/* #endregion */


export interface IBallistic {
  GlobalDamageDegradationCoefficient: number;
}

export interface IRepairSettings {
  ItemEnhancementSettings: IItemEnhancementSettings;
  MinimumLevelToApplyBuff: number;
  RepairStrategies: IRepairStrategies;
  armorClassDivisor: number;
  durabilityPointCostArmor: number;
  durabilityPointCostGuns: number;
}

export interface IItemEnhancementSettings {
  DamageReduction: IPriceModifier;
  MalfunctionProtections: IPriceModifier;
  WeaponSpread: IPriceModifier;
}

export interface IPriceModifier {
  PriceModifier: number;
}

export interface IRepairStrategies {
  Armor: IRepairStrategy;
  Firearms: IRepairStrategy;
}

export interface IRepairStrategy {
  BuffTypes: string[];
  Filter: string[];
}

export interface ITradingSettings {
  BuyRestrictionMaxBonus: Record<string, IBuyRestrictionMaxBonus>;
  BuyoutRestrictions: IBuyoutRestrictions;
}

export interface IBuyRestrictionMaxBonus {
  multiplier: number;
}

export interface IBuyoutRestrictions {
  /* Sets the durability for wepons that traders are willing to buy. */
  MinDurability: number;    // default: 0.6 (60 durability)
  MinFoodDrinkResource: number;
  MinMedsResource: number;
}
/*  EXAMPLE BUYOUTRESTRICTIONS
"BuyoutRestrictions": {
  "MinDurability": 0.6,
  "MinFoodDrinkResource": 0.01,
  "MinMedsResource": 0.01
}
*/

export interface IBotPreset {
  UseThis: boolean;
  /* Name of the bot. Ex: (assault, bossKnight, followerBigPipe, ...) */
  Role: string;
  BotDifficulty: string;
  VisibleAngle: number;
  VisibleDistance: number;
  ScatteringPerMeter: number;
  HearingSense: number;
  SCATTERING_DIST_MODIF: number;
  MAX_AIMING_UPGRADE_BY_TIME: number;
  FIRST_CONTACT_ADD_SEC: number;
  COEF_IF_MOVE: number;
}
/* 
EXAMPLE bot_preset
bot_presets: [
  {
    "BotDifficulty": "easy",
    "COEF_IF_MOVE": 1.3,
    "FIRST_CONTACT_ADD_SEC": 0.45,
    "HearingSense": 0.75,
    "MAX_AIMING_UPGRADE_BY_TIME": 0.85,
    "Role": "assault",
    "SCATTERING_DIST_MODIF": 0.8,
    "ScatteringPerMeter": 0.095,
    "UseThis": true,
    "VisibleAngle": 140,
    "VisibleDistance": 125
  },
  ...
]
*/

export interface IBotWeaponScattering {
  Name: string;
  PriorityScatter1meter: number;
  PriorityScatter10meter: number;
  PriorityScatter100meter: number;
}

/*  A weapon presets list, with attachments.
    (Maybe the user's saved presets?)  
*/
export interface IPreset {
  _id: string;
  /* Default: 'Preset' */
  _type: string;
  _changeWeaponName: boolean;
  /* weapon name eg: ('G28 Preset', 'G28 Patrol', 'SR25_Preset') */
  _name: string;
  _parent: string;
  /* An array of attachment items for the weapon */
  _items: IItem[];
  /** Default presets have this property */
  _encyclopedia?: string;
}

export interface IQuestSettings {
  GlobalRewardRepModifierDailyQuestPvE: number;
  GlobalRewardRepModifierQuestPvE: number;
}

export interface Ixyz {
  x: number;
  y: number;
  z: number;
}

export interface Ixy {
  x: number;
  y: number;
}