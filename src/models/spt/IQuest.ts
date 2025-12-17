//import { type IReward } from "./IReward";
import { type QuestStatus } from "../enums/QuestStatus";
// 2025-12-16: moved QuestTypeEnum to local file.
//import { type QuestTypeEnum } from "../enums/QuestType";
// 2025-12-16: moved RewardType to local file.
//import type { RewardType } from "../enums/RewardType";
import type { IItem } from "./IItem";

export type TQuestDict = {
  [id: string]: IQuest;
}

export interface IQuest {
  /** SPT addition - human readable quest name */
  QuestName?: string;
  _id: string;
  //canShowNotificationsInGame: boolean;
  // AvailableForStart: [{..}] | AvailableForFinish: [{..}] | Fail: []
  conditions: IQuestConditionTypes;
  description: string;
  //failMessageText: string;
  name: string;   // not useful
  //note: string;   // not useful
  // the trader who assigns the quest
  traderId: string;
  // map(s) where the quest can be completed
  // [ any | map_id_string ]
  location: string;
  image: string;
  // PickUp | Eliminination | Completion | Discover | WeaponAssembly
  //   | Loyalty | Exploration | Multi | Skill | Merchant | Standing
  type: QuestTypeEnum;
  // always false?
  //isKey: boolean;
  restartable: boolean;
  //instantComplete: boolean;
  // always false
  //secretQuest: boolean;
  //startedMessageText: string;
  //successMessageText: string;
  //acceptPlayerMessage?: string;
  //declinePlayerMessage: string;
  //completePlayerMessage?: string;
  //templateId?: string;
  rewards: IQuestRewards;
  /** Becomes 'AppearStatus' inside client */
  // 0 | 
  status?: string | number;
  KeyQuest?: boolean;
  //changeQuestMessageText: string;
  /** "Pmc" or "Scav" */
  side: string;
  //acceptanceAndFinishingSource: string;
  // eft | arena (maybe?)
  //progressSource: string;
  //rankingModes: string[];
  //gameModes: string[];
  //arenaLocations: string[];
  /** Status of quest to player */
  //sptStatus?: QuestStatus;
}

export interface IQuestConditionTypes {
  Started?: IQuestCondition[];
  AvailableForFinish: IQuestCondition[];
  AvailableForStart: IQuestCondition[];
  Success?: IQuestCondition[];
  Fail: IQuestCondition[];
}

export interface IQuestCondition {
  id: string;
  index?: number;
  // ">="
  compareMethod?: string;
  dynamicLocale: boolean;
  visibilityConditions?: IVisibilityCondition[];
  globalQuestCounterId?: string;
  parentId?: string;
  // item or quest id.  Item ids tend to be in [..] in AvailableForFinish
  target?: string[] | string;
  value?: string | number;
  type?: boolean | string;
  // 4 | 5
  status?: QuestStatus[];
  availableAfter?: number;
  dispersion?: number;
  onlyFoundInRaid?: boolean;
  oneSessionOnly?: boolean;
  isResetOnConditionFailed?: boolean;
  isNecessary?: boolean;
  doNotResetIfCounterCompleted?: boolean;
  dogtagLevel?: number | string;
  traderId?: string;
  maxDurability?: number | string;
  minDurability?: number | string;
  counter?: IQuestConditionCounter;
  plantTime?: number;
  zoneId?: string;
  countInRaid?: boolean;
  completeInSeconds?: number;
  isEncoded?: boolean;
  // Level | 
  conditionType?: string;
}

export interface IQuestConditionCounter {
  id: string;
  conditions: IQuestConditionCounterCondition[];
}

export interface IQuestConditionCounterCondition {
  id: string;
  dynamicLocale?: boolean;
  target?: string[] | string; // TODO: some objects have an array and some are just strings, thanks bsg very cool
  completeInSeconds?: number;
  energy?: IValueCompare;
  exitName?: string;
  hydration?: IValueCompare;
  time?: IValueCompare;
  compareMethod?: string;
  value?: number | string;
  weapon?: string[];
  distance?: ICounterConditionDistance;
  equipmentInclusive?: string[][];
  weaponModsInclusive?: string[][];
  weaponModsExclusive?: string[][];
  enemyEquipmentInclusive?: string[][];
  enemyEquipmentExclusive?: string[][];
  weaponCaliber?: string[];
  savageRole?: string[];
  status?: string[];
  bodyPart?: string[];
  daytime?: IDaytimeCounter;
  // FindItem | HandoverItem
  conditionType?: string;
  enemyHealthEffects?: IEnemyHealthEffect[];
  resetOnSessionEnd?: boolean;
}

export interface IEnemyHealthEffect {
  bodyParts: string[];
  effects: string[];
}

export interface IValueCompare {
  // ">="
  compareMethod: string;
  value: number;
}

export interface ICounterConditionDistance {
  value: number;
  compareMethod: string;
}

export interface IDaytimeCounter {
  from: number;
  to: number;
}

export interface IVisibilityCondition {
  id: string;
  target: string;
  value?: number;
  dynamicLocale?: boolean;
  oneSessionOnly?: boolean;
  conditionType: string;
}

export interface IQuestRewards {
  AvailableForStart?: IReward[];
  AvailableForFinish?: IReward[];
  Started?: IReward[];
  Success?: IReward[];
  Fail?: IReward[];
  FailRestartable?: IReward[];
  Expired?: IReward[];
}

export interface IReward {
  value?: string | number;
  id?: string;
  //illustrationConfig?: any;
  isHidden?: boolean;
  type: RewardType;
  index: number;
  target?: string;
  items?: IItem[];
  loyaltyLevel?: number;
  /** Hideout area id */
  traderId?: string;
  //isEncoded?: boolean;
  //unknown?: boolean;
  findInRaid?: boolean;
  gameMode?: string[];
  /** Game editions whitelisted to get reward */
  //availableInGameEditions?: string[];
  /** Game editions blacklisted from getting reward */
  //notAvailableInGameEditions?: string[];
}

export enum QuestTypeEnum {
  PICKUP = "PickUp",
  ELIMINATION = "Elimination",
  DISCOVER = "Discover",
  COMPLETION = "Completion",
  EXPLORATION = "Exploration",
  LEVELLING = "Levelling",
  EXPERIENCE = "Experience",
  STANDING = "Standing",
  LOYALTY = "Loyalty",
  MERCHANT = "Merchant",
  SKILL = "Skill",
  MULTI = "Multi",
  WEAPON_ASSEMBLY = "WeaponAssembly",
}

export enum RewardType {
  SKILL = "Skill",
  EXPERIENCE = "Experience",
  TRADER_STANDING = "TraderStanding",
  TRADER_UNLOCK = "TraderUnlock",
  ITEM = "Item",
  ASSORTMENT_UNLOCK = "AssortmentUnlock",
  PRODUCTIONS_SCHEME = "ProductionScheme",
  TRADER_STANDING_RESET = "TraderStandingReset",
  TRADER_STANDING_RESTORE = "TraderStandingRestore",
  STASH_ROWS = "StashRows",
  ACHIEVEMENT = "Achievement",
  POCKETS = "Pockets",
  CUSTOMIZATION_DIRECT = "CustomizationDirect",
  CUSTOMIZATION_OFFER = "CustomizationOffer",
  EXTRA_DAILY_QUEST = "ExtraDailyQuest",
}