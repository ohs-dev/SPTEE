import { type MinMax } from "../MinMax.js";



export interface IBotType {
  //appearance: IAppearance;
  // Chance bot will have items from specified category
  chances: IChanceType;
  //chances: IChances;
  /* chances: {
    equipment: IChanceEquipment;
    weaponMods: IChanceWeaponMods;
    equipmentMods: IChanceEquipmentMods;
  } */
  /* difficulty: {
    easy: IDifficultySetting;
    normal: IDifficultySetting;
    hard: IDifficultySetting;
    impossible: IDifficultySetting;
  } */
  difficulty: IDifficultyType;
  experience: IExperience;
  firstName: string[];
  // Number of items spawned, by category
  generation: {
    items: IItemGen;
  }
  health: IHealth;

  // Equippable list of gear, ammo, items. (possibly)?
  inventory: IInventory;
  /* inventory: {
    Ammo: IInventoryAmmo;
    equipment: IInventoryEquipment;
    items: IInventoryItems;
    mods: IInventoryMods;
  } */
  //lastName: string[];
  //skills: ISkills;
  skills: IBotTypeSkills;
}

export interface IDifficultyType {
  easy: IDifficultySetting;
  normal: IDifficultySetting;
  hard: IDifficultySetting;
  impossible: IDifficultySetting;
}

export interface IDifficultySetting {
  Aiming: Record<string, string | number | boolean>;
  Boss: Record<string, string | number | boolean>;
  Change: Record<string, string | number | boolean>;
  Core: Record<string, string | number | boolean>;
  Cover: Record<string, string | number | boolean>;
  Grenade: Record<string, string | number | boolean>;
  Hearing: Record<string, string | number | boolean>;
  Lay: Record<string, string | number | boolean>;
  Look: Record<string, string | number | boolean>;
  Mind: Record<string, string | number | boolean | string[]>;
  Move: Record<string, string | number | boolean>;
  Patrol: Record<string, string | number | boolean>;
  Scattering: Record<string, string | number | boolean>;
  Shoot: Record<string, string | number | boolean>;
}

type TDifficultySubcategory = {
  
}

export interface IChanceType {
  equipment: IChanceEquipment;
  weaponMods: IChanceWeaponMods;
  equipmentMods: IChanceEquipmentMods;
}

export interface IHealth {
  BodyParts: IBodyPart[];
  Energy?: MinMax;
  Hydration?: MinMax;
  //Temperature?: MinMax;
}

export interface IBodyPart {
  Chest: MinMax;
  Head: MinMax;
  LeftArm: MinMax;
  LeftLeg: MinMax;
  RightArm: MinMax;
  RightLeg: MinMax;
  Stomach: MinMax;
}

export interface IBotTypeSkills {
  Common: Record<string, MinMax>;
  Mastering: Record<string, MinMax>;
}

/* export interface IAppearance {
  body: Record<string, number>;
  feet: Record<string, number>;
  hands: Record<string, number>;
  head: Record<string, number>;
  voice: Record<string, number>;
} */

/* export interface IChances {
  equipment: IChanceEquipment;
  weaponMods: IChanceWeaponMods;
  equipmentMods: IChanceWeaponMods;
} */

export interface IChanceEquipment {
  ArmBand: number;
  ArmorVest: number;
  Backpack: number;
  Earpiece: number;
  Eyewear: number;
  FaceCover: number;
  FirstPrimaryWeapon: number;
  Headwear: number;
  Holster: number;
  Pockets?: number;
  Scabbard: number;
  SecondPrimaryWeapon: number;
  SecuredContainer?: number;
  TacticalVest: number;
}

export interface IChanceEquipmentMods {
  back_plate: number;
  front_plate: number;
  left_side_plate: number;
  mod_equipment_000: number;
  mod_equipment_001: number;
  mod_equipment_002: number;
  mod_mount: number;
  mod_nvg: number;
  right_side_plate: number;
}

export interface IChanceWeaponMods {
  mod_barrel: number;
  mod_bipod: number;
  mod_catch: number
  mod_charge: number;
  //mod_equipment: number;
  //mod_equipment_000: number;
  //mod_equipment_001: number;
  //mod_equipment_002: number;
  mod_flashlight: number;
  mod_foregrip: number;
  mod_gas_block: number;
  mod_hammer: number;
  mod_handguard: number;
  mod_launcher: number;
  mod_magazine: number;
  mod_mount: number;
  mod_mount_000: number;
  mod_mount_001: number;
  mod_mount_002: number;
  mod_mount_003: number;
  mod_mount_004: number;
  mod_mount_005: number;
  mod_mount_006: number;
  mod_muzzle: number;
  mod_muzzle_000: number;
  mod_muzzle_001: number;
  //mod_nvg: number;
  mod_pistol_grip: number;
  mod_pistol_grip_akms: number;
  mod_pistolgrip: number;
  mod_pistolgrip_000: number;
  mod_reciever: number;
  mod_scope: number;
  mod_scope_000: number;
  mod_scope_001: number;
  mod_scope_002: number;
  mod_scope_003: number;
  mod_sight_front: number;
  mod_sight_rear: number;
  mod_stock: number;
  mod_stock_000: number;
  mod_stock_001: number;
  mod_stock_akms: number;
  mod_stock_axis: number;
  mod_tactical001: number;
  mod_tactical002: number;
  mod_tactical_000: number;
  mod_tactical_001: number;
  mod_tactical_002: number;
  mod_tactical_003: number;
  mod_tactical_2: number;
}

export interface IExperience {
  // key = bot difficulty
  aggressorBonus: Record<string, number>;
  /* aggressorBonus: {
    easy: number;
    hard: number;
    normal: number;
  } */
  level: MinMax;
  // key = bot difficulty
  reward: Record<string, MinMax>; // easy, hard, normal
  // key = bot difficulty
  standingForKill: Record<string, number>;
  useSimpleAnimator: boolean;
}

export interface IItemGen {
  backpackLoot: IItemWeights;
  currency: IItemWeights;
  drink: IItemWeights;
  drugs: IItemWeights;
  food: IItemWeights;
  grenades: IItemWeights;
  healing: IItemWeights;
  magazines: IItemWeights;
  pocketLoot: IItemWeights;
  specialItems: IItemWeights;
  stims: IItemWeights;
  vestLoot: IItemWeights;
}

export interface IItemWeights {
  // key: number of items, value: weighting
  weights: Record<string, number>;
  // Array of item tpls
  whitelist: Record<string, number>;
}

export interface IInventory {
  equipment: IInventoryEquipment;
  Ammo: IInventoryAmmo;
  items: IInventoryItems;
  mods: IInventoryMods;
}

export interface IInventoryEquipment {
  ArmBand: Record<string, number>;
  ArmorVest: Record<string, number>;
  Backpack: Record<string, number>;
  Earpiece: Record<string, number>;
  Eyewear: Record<string, number>;
  FaceCover: Record<string, number>;
  FirstPrimaryWeapon: Record<string, number>;
  Headwear: Record<string, number>;
  Holster: Record<string, number>;
  Pockets: Record<string, number>;
  Scabbard: Record<string, number>;
  SecondPrimaryWeapon: Record<string, number>;
  SecuredContainer: Record<string, number>;
  TacticalVest: Record<string, number>;
}

export interface IInventoryItems {
  Backpack: Record<string, number>;
  Pockets: Record<string, number>;
  SecuredContainer: Record<string, number>;
  SpecialLoot: Record<string, number>;
  TacticalVest: Record<string, number>;
}

export type IInventoryAmmo = Record<string, Record<string, number>>;
export type IInventoryMods = Record<string, Record<string, string[]>>;