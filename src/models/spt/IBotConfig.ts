

type IBotConfig = {
  assaultBrainType: Record<string, IBotBrainType>;
  bosses: string[];
  botNameLengthLimit: number;
  botRolesThatMustHaveUniqueName: string[];
  botRolesWithDogTags: string[];
  chanceAssaultScavHasPlayerScavName: number;
  currencyStackSize: ICurrencyStackSize;
  disableLootOnBotTypes: string[];
  durability: Record<string, IDurability>;
  equipment: Record<string, IBotEquipmentConfig>
  itemSpawnLimits: Record<string, Record<string, number>>
  lootItemResourceRandomization: {
    assault: {
      food: IResourcePercent
      meds: IResourcePercent
    }
  }
  lowProfileGasBlockTpls: string[]
  maxBotCap: Record<string, number>
  playerScavBrainType: Record<string, IBotBrainType>
  presetBatch: Record<string, number>
  revenge: Record<string, string[]>
  secureContainerAmmoStackCount: number;
  showTypeInNickname: boolean;
  walletLoot: {
    chancePercent: number
    currencyWeight: Record<string, number>
    itemCount: MinMax
    stackSizeWeight: Record<string, number>
    walletTplPool: string[]
  }
}

type IBotBrainType = {
  assault?: number;
  bossKilla?: number;
  pmcBot?: number;
}

type ICurrencyStackSize = {
  assault: Record<string, { [id: string]: number }>,
  default: Record<string, { [id: string]: number }>;
}

type IDurability = {
  armor: IDurabilityParams;
  weapon: IDurabilityParams;
}

type IDurabilityParams = {
  maxDelta: number;
  minDelta: number;
  minLimitPercent: number;
  highestMax?: number;
  lowestMax?: number;
}

type IBotEquipmentConfig = {
  // only for pmc
  armorPlateWeighting?: IArmorPlateWeighting[]
  // only for pmc
  blacklist: IBotConfigBlacklist
  faceShieldIsActiveChancePercent?: number;
  filterPlatesByLevel?: boolean;
  forceOnlyArmoredRigWhenNoArmor?: boolean;
  forceStock?: boolean;
  laserIsActiveChancePercent?: number;
  lightIsActiveDayChancePercent?: number;
  lightIsActiveNightChancePercent?: number;
  nvgIsActiveChanceDayPercent?: number;
  nvgIsActiveChanceNightPercent?: number;
  randomisation?: IBotEquipmentRandomisation[];
  weaponModLimits?: IWeaponModLimits;
  weaponSightWhitelist?: Record<string, string[]>
  weaponSlotIdsToMakeRequired?: string[];
  weightingAdjustmentsByBotLevel: IWeightingAdjustments[]
}

type IWeaponModLimits = {
  lightLaserLimit?: number;
  scopeLimit?: number;
}

type IBotEquipmentRandomisation = {
  equipment?: IRandomEquipment;
  equipmentMods?: IRandomEquipmentMods;
  generation?: IGenerationConfig;
  levelRange?: MinMax;
  nighttimeChanges?: INightChanges;
  minimumMagazineSize?: Record<string, number>
  randomisedWeaponModSlots: string[];
  weaponMods: IWeaponMods;
}

type IGenerationConfig = {
  backpackLoot?: IItemWeightAndWhitelist;
  drugs?: IItemWeightAndWhitelist;
  grenades?: IItemWeightAndWhitelist;
  healing?: IItemWeightAndWhitelist;
  magazines?: IItemWeightAndWhitelist;
  pocketLoot?: IItemWeightAndWhitelist;
  stims?: IItemWeightAndWhitelist;
  vestLoot?: IItemWeightAndWhitelist;
}

type IItemWeightAndWhitelist = {
  weights: Record<string, number>
  whitelist: Record<string, number>
}

/* type IItemWeights = {
  [value: string]: number;
}

type IItemWhitelist = {
  [id: string]: number;
} */

type IArmorPlateWeighting = {
  back_plate: Record<string, number>;
  front_plate: Record<string, number>;
  left_side_plate: Record<string, number>;
  right_side_plate: Record<string, number>;
  side_plate: Record<string, number>;
  levelRange: Record<string, number>;
}

type IRandomEquipment = {
  ArmBand?: number;
  Backpack?: number;
  Earpiece?: number;
  Eyewear?: number;
  FaceCover?: number;
  FirstPrimaryWeapon?: number;
  Holster?: number;
  SecondPrimaryWeapon?: number;
}

type IRandomEquipmentMods = {
  back_plate?: number;
  left_side_plate?: number;
  right_side_plate?: number;
  mod_equipment?: number;
  mod_equipment_000?: number;
  mod_equipment_001?: number;
  mod_equipment_002?: number;
  mod_mount?: number;
  mod_nvg?: number;
}

type IWeaponMods = {
  mod_barrel?: number;
  mod_bipod?: number;
  mod_equipment?: number;
  mod_equipment_000?: number;
  mod_equipment_001?: number;
  mod_equipment_002?: number;
  mod_flashlight?: number;
  mod_foregrip?: number;
  mod_handguard?: number;
  mod_launcher?: number;
  mod_magazine?: number;
  mod_mount?: number;
  mod_mount_000?: number;
  mod_mount_001?: number;
  mod_mount_002?: number;
  mod_mount_003?: number;
  mod_mount_004?: number;
  mod_mount_005?: number;
  mod_mount_006?: number;
  mod_muzzle?: number;
  mod_muzzle_000?: number;
  mod_muzzle_001?: number;
  mod_nvg?: number;
  mod_pistol_grip?: number;
  mod_pistol_grip_akms?: number;
  mod_reciever?: number;
  mod_scope?: number;
  mod_scope_000?: number;
  mod_scope_001?: number;
  mod_scope_002?: number;
  mod_scope_003?: number;
  mod_tactical?: number;
  mod_tactical001?: number;
  mod_tactical002?: number;
  mod_tactical_000?: number;
  mod_tactical_001?: number;
  mod_tactical_002?: number;
  mod_tactical_003?: number;
  mod_tactical_2?: number;
}

type INightChanges = {
  equipmentModsModifiers?: {
    mod_nvg?: number;
  }
}

type IBotConfigBlacklist = {
  cartridge?: { [id: string]: string[] }
  equipment?: { [id: string]: string[] }
  levelRange: MinMax
}

type IWeightingAdjustments = {
  ammo?: IAdjustment
  clothing?: IAdjustment
  equipment?: IAdjustment
  levelRange: MinMax
}

type IAdjustment = {
  add: Record<string, { [id: string]: number }>
  edit: Record<string, { [id: string]: number }>
}

type IResourcePercent = {
  chanceMaxResourcePercent: number;
  resourcePercent: number;
}