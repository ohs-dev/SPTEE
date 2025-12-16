import { type IItem } from "./IItem.js";
//import { DogtagExchangeSide } from "@spt/models/enums/DogtagExchangeSide";
//import { ITraderServiceModel } from "@spt/models/spt/services/ITraderServiceModel";

export type TTraderDict = {
  [id: string]: TTrader;
}

export type TTrader = {
  NickName: string;
  FullName?: string;
  Description?: string;
  Quests?: [id: string];
  base?: ITraderBase;
  assort?: ITraderAssort;
  // found in /configs/trader.json
  updateTime?: TUpdateTime;
}

/* /configs/traders.json (4 space tab-length)
{
  "updateTime": [
    {
      "_name": "prapor",
      "traderId": "54cb50c76803fa8b248b4571",
      "seconds": {
        "min": 7000,
        "max": 13500
      }
    },
    ...
  ],
  ...
  // Also fence refresh settings
}
*/

export type TUpdateTime = {
  seconds: {
    min: number;
    max: number;
  }
}

export enum DogtagExchangeSide {
  USEC = "Usec",
  BEAR = "Bear",
  ANY = "Any",
}

export interface ITrader {
  assort?: ITraderAssort;
  base: ITraderBase;
  //dialogue?: Record<string, string[]>;
  questassort?: Record<string, Record<string, string>>;
  //suits?: ISuit[];
  //services?: ITraderServiceModel[];
}

export interface ITraderBase {
  refreshTraderRagfairOffers: boolean;
  _id: string;
  availableInRaid: boolean;
  avatar: string;
  balance_dol: number;
  balance_eur: number;
  balance_rub: number;
  buyer_up: boolean;
  currency: string;
  customization_seller: boolean;
  discount: number;
  discount_end: number;
  gridHeight: number;
  sell_modifier_for_prohibited_items?: number;
  insurance: ITraderInsurance;
  items_buy: IItemBuyData;
  items_buy_prohibited: IItemBuyData;
  isCanTransferItems?: boolean;
  transferableItems?: IItemBuyData;
  prohibitedTransferableItems?: IItemBuyData;
  location: string;
  loyaltyLevels: ITraderLoyaltyLevel[];
  medic: boolean;
  name: string;
  nextResupply: number;
  nickname: string;
  repair: ITraderRepair;
  sell_category: string[];
  surname: string;
  unlockedByDefault: boolean;
}

export interface IItemBuyData {
  category: string[];
  id_list: string[];
}

export interface ITraderInsurance {
  availability: boolean;
  excluded_category: string[];
  max_return_hour: number;
  max_storage_time: number;
  min_payment: number;
  min_return_hour: number;
}

export interface ITraderLoyaltyLevel {
  buy_price_coef: number;
  exchange_price_coef: number;
  heal_price_coef: number;
  insurance_price_coef: number;
  minLevel: number;
  minSalesSum: number;
  minStanding: number;
  repair_price_coef: number;
}

export interface ITraderRepair {
  availability: boolean;
  currency: string;
  currency_coefficient: number;
  excluded_category: string[];
  /** Doesn't exist in client object */
  excluded_id_list: string[];
  quality: number;
}

export interface ITraderAssort {
  nextResupply: number;
  items: IItem[];
  barter_scheme: Record<string, IBarterScheme[][]>;
  loyal_level_items: Record<string, number>;
}

export interface IBarterScheme {
  count: number;
  _tpl: string;
  onlyFunctional?: boolean;
  sptQuestLocked?: boolean;
  level?: number;
  side?: DogtagExchangeSide;
}

/* export interface ISuit {
  _id: string;
  externalObtain: boolean;
  internalObtain: boolean;
  isHiddenInPVE: boolean;
  tid: string;
  suiteId: string;
  isActive: boolean;
  requirements: ISuitRequirements;
}

export interface ISuitRequirements {
  achievementRequirements: string[];
  loyaltyLevel: number;
  profileLevel: number;
  standing: number;
  skillRequirements: string[];
  questRequirements: string[];
  itemRequirements: ItemRequirement[];
  requiredTid: string;
} */

export interface ItemRequirement {
  count: number;
  _tpl: string;
  id: string;
  onlyFunctional: boolean;
  type: string;
}