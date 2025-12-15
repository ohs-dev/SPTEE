import type { MinMax } from "../MinMax.js";
import type { Ixy, Ixyz } from "./Globals.js";

export interface ILocationBase {
  // AccessKeys: string[];
  // AccessKeysPvE: string[];
  AirdropParameters: IAirdropParameter[];
  // Area: number;
  // AveragePlayTime: number;
  AveragePlayerLevel: number;
  // Banners: IBanner[];
  BossLocationSpawn: IBossLocationSpawn[];
  BotAssault: number;
  /** Weighting on how likely a bot will be Easy difficulty */
  BotEasy: number;
  /** Weighting on how likely a bot will be Hard difficulty */
  BotHard: number;
  /** Weighting on how likely a bot will be Impossible difficulty */
  BotImpossible: number;
  BotLocationModifier: IBotLocationModifier;
  BotMarksman: number;
  // Maximum Num bots currently alive/loading/delayed 
  BotMax: number;
  /** Is not used in 33420 */
  // BotMaxPlayer: number;
  /** Is not used in 33420 */
  // BotMaxTimePlayer: number;
  /** Does not even exist in the client in 33420 */
  // BotMaxPvE: number;
  /** Weighting on how likely a bot will be Normal difficulty */
  BotNormal: number;
  /** How many bot slots that need to be open before trying to spawn new bots. */
  BotSpawnCountStep: number;
  /** How often to check if bots are spawn-able. In seconds */
  BotSpawnPeriodCheck: number;
  /** The bot spawn will toggle on and off in intervals of Off(Min/Max) and On(Min/Max) */
  BotSpawnTimeOffMax: number;
  BotSpawnTimeOffMin: number;
  BotSpawnTimeOnMax: number;
  BotSpawnTimeOnMin: number;
  /** How soon bots will be allowed to spawn */
  BotStart: number;
  /** After this long bots will no longer spawn */
  BotStop: number;
  Description: string;
  DisabledForScav: boolean;
  DisabledScavExits: string;
  //Enabled: boolean;
  // EnableCoop: boolean;
  GlobalLootChanceModifier: number;
  GlobalLootChanceModifierPvE: number;
  // HeatmapCellSize: Ixyz;
  // HeatmapLayers: string[];
  GlobalContainerChanceModifier: number;
  // IconX: number;
  // IconY: number;
  // Map name `Shoreline`
  Id: string;
  Insurance: boolean;
  IsSecret: boolean;
  Locked: boolean;
  // Loot:[] is empty for customs? Maybe unused?
  // Loot: ISpawnpointTemplate[];
  // MatchMakerMinPlayersByWaitTime: IMinPlayerWaitTime[];
  // Usually 4 or 5
  MaxBotPerZone: number;
  //MaxDistToFreePoint: number;
  MaxPlayers: number;
  //MinDistToExitPoint: number;
  //MinDistToFreePoint: number;
  //MinMaxBots: IMinMaxBot[];
  MinPlayers: number;
  MaxCoopGroup: number;
  Name: string;
  NonWaveGroupScenario: INonWaveGroupScenario;
  // NewSpawn: boolean;
  // OcculsionCullingEnabled: boolean;
  // OldSpawn: boolean;
  // OpenZones: string;
  // Preview: IPreview;
  // PlayersRequestCount: number;
  RequiredPlayerLevel?: number;
  RequiredPlayerLevelMin?: number;
  RequiredPlayerLevelMax?: number;
  // MinPlayerLvlAccessKeys: number;
  PmcMaxPlayersInGroup: number;
  ScavMaxPlayersInGroup: number;
  // Rules: string;
  // SafeLocation: boolean;
  // Scene: IScene;
  SpawnPointParams: ISpawnPointParam[];
  // UnixDateTime: number;
  _Id: string;
  // areas: Record<string, IAreaLocationSpawn>;
  // doors: any[];
  EscapeTimeLimit: number;
  EscapeTimeLimitCoop: number;
  EscapeTimeLimitPVE: number;
  // Events: ILocationEvents;
  exit_access_time: number;
  // ForceOnlineRaidInPVE: boolean;
  exit_count: number;
  exit_time: number;
  exits: IExit[];
  // filter_ex: string[];
  // limits: ILimit[];
  // matching_min_seconds: number;
  // GenerateLocalLootCache: boolean;
  // maxItemCountInLocation: IMaxItemCountInLocation[];
  // sav_summon_seconds: number;
  // tmp_location_field_remove_me: number;
  transits: ITransit[];
  // users_gather_seconds: number;
  // users_spawn_seconds_n: number;
  // users_spawn_seconds_n2: number;
  // users_summon_seconds: number;
  waves: IWave[];
  secretExits: ISecretExit[];
}

export interface IAreaLocationSpawn {
  center: Ixy;
  infiltrationZone: string;
  orientation: number;
  position: Ixy;
  sides: string[];
  size: Ixy;
}

export interface ISecretExit {
  EligibleForPMC: boolean;
  EligibleForScav: boolean;
  ExfiltrationTime: number;
  Id: string;
  Name: string;
}

export interface ITransit {
  activateAfterSec: string;
  active: boolean;
  name: string;
  conditions: string;
  description: string;
  events: boolean;
  id: number;
  location: string;
  target: string;
  time: number;
}

export interface INonWaveGroupScenario {
  Chance: number;
  Enabled: boolean;
  MaxToBeGroup: number;
  MinToBeGroup: number;
}

/* export interface ILimit extends MinMax {
  items: any[];
} */

export interface IAirdropParameter {
  AirdropPointDeactivateDistance: number;
  MinPlayersCountToSpawnAirdrop: number;
  PlaneAirdropChance: number;
  PlaneAirdropCooldownMax: number;
  PlaneAirdropCooldownMin: number;
  PlaneAirdropEnd: number;
  PlaneAirdropMax: number;
  PlaneAirdropStartMax: number;
  PlaneAirdropStartMin: number;
  //UnsuccessfulTryPenalty: number;
}

export interface IBossLocationSpawn {
  BossChance: number;
  BossDifficult: string;
  BossEscortAmount: string;
  BossEscortDifficult: string;
  BossEscortType: string;
  BossName: string;
  BossPlayer: boolean;
  BossZone: string;
  RandomTimeSpawn: boolean;
  Time: number;
  // TriggerId: string;
  // TriggerName: string;
  Delay?: number;
  DependKarma?: boolean;
  DependKarmaPVE?: boolean;
  ForceSpawn?: boolean;
  IgnoreMaxBots?: boolean;
  Supports?: IBossSupport[];
  sptId?: string;
  SpawnMode: string[];
}

export interface IBossSupport {
  BossEscortAmount: string;
  BossEscortDifficult: string[];
  BossEscortType: string;
}

export interface IBotLocationModifier {
  AccuracySpeed: number;
  // AdditionalHostilitySettings: IAdditionalHostilitySettings[];
  DistToActivate: number;
  DistToActivatePvE: number;
  // DistToPersueAxemanCoef: number;
  DistToSleep: number;
  DistToSleepPvE: number;
  GainSight: number;
  // KhorovodChance: number;
  // MagnetPower: number;
  MarksmanAccuratyCoef: number;
  Scattering: number;
  VisibleDistance: number;
  MaxExfiltrationTime: number;
  MinExfiltrationTime: number;
  FogVisibilityDistanceCoef: number;
  FogVisibilitySpeedCoef: number;
  // LockSpawnCheckRadius: number;
  // LockSpawnCheckRadiusPvE: number;
  // LockSpawnStartTime: number;
  // LockSpawnStartTimePvE: number;
  // LockSpawnStepTime: number;
  // LockSpawnStepTimePvE: number;
  NonWaveSpawnBotsLimitPerPlayer: number;
  NonWaveSpawnBotsLimitPerPlayerPvE: number;
  RainVisibilityDistanceCoef: number;
  RainVisibilitySpeedCoef: number;
}

/* export interface IAdditionalHostilitySettings {
  AlwaysEnemies: string[];
  AlwaysFriends: string[];
  BearEnemyChance: number;
  BearPlayerBehaviour: string;
  BotRole: string;
  ChancedEnemies: IChancedEnemy[];
  Neutral: string[];
  SavagePlayerBehaviour: string;
  SavageEnemyChance?: number;
  UsecEnemyChance: number;
  UsecPlayerBehaviour: string;
  Warn: string[];
} */

export interface IChancedEnemy {
  EnemyChance: number;
  Role: string;
}

export interface IMinMaxBot extends MinMax {
  WildSpawnType: WildSpawnType | string;
}

export interface ISpawnPointParam {
  BotZoneName: string;
  Categories: string[];
  ColliderParams: IColliderParams;
  CorePointId: number;
  DelayToCanSpawnSec: number;
  Id: string;
  Infiltration: string;
  Position: Ixyz;
  Rotation: number;
  Sides: string[];
}

export interface IColliderParams {
  _parent: string;
  _props: IProps;
}

export interface IProps {
  Center: Ixyz;
  Radius: number;
}


// Used in:
//    base.json
//    allExtracts.json
export interface IExit {
  // % Chance out of 100 exit will appear in raid
  Chance: number;
  ChancePVE: number;
  // Number of items required (Eg: roubles for car extracts)
  Count: number;
  CountPVE: number;
  // Map entry points able to access this extract
  EntryPoints: string;
  EventAvailable: boolean;
  // Delay to extract, in seconds
  ExfiltrationTime: number;
  ExfiltrationTimePVE: number;
  // `SharedTimer`
  ExfiltrationType: string;
  RequiredSlot?: string;
  // ID of required items (Eg: roubles)
  Id: string;
  MaxTime: number;
  MaxTimePVE: number;
  MinTime: number;
  MinTimePVE: number;
  // Extract name
  Name: string;
  // Type of requirement. (Eg: `TransferItem`)
  PassageRequirement: string;
  PlayersCount: number;
  PlayersCountPVE: number;
  // Localized language hint text (.../locales/global/*.json)
  RequirementTip: string;
  // `Pmc` / `Scav` / `Coop`
  Side?: string;
}

/* export interface IMaxItemCountInLocation {
  TemplateId: string;
  Value: number;
} */

export interface IWave {
  BotPreset: string;
  BotSide: string;
  SpawnPoints: string;
  //WildSpawnType: WildSpawnType;
  WildSpawnType: string;
  isPlayers: boolean;
  number: number;
  slots_max: number;
  slots_min: number;
  time_max: number;
  time_min: number;
  /** OPTIONAL - Needs to be unique - Used by custom wave service to ensure same wave isnt added multiple times */
  sptId?: string;
  ChanceGroup?: number;
  /** 'pve' and/or 'regular' */
  SpawnMode: string[];
}

export enum WildSpawnType {
  ASSAULT = "assault",
  MARKSMAN = "marksman",
  PMCBOT = "pmcbot",
  BOSSKILLA = "bosskilla",
  BOSSKNIGHT = "bossknight",
}