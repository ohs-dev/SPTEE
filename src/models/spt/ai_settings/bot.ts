/* namespace models.spt.bot {} */


interface IAiming {
  
}




type BotSkills = {
  Common: CommonSkills;
  Mastering: MasteringSkills;
}

type CommonSkills = {
  AimDrills: MinMax;
  Assault: MinMax;
  CovertMovement: MinMax;
  DMR: MinMax;
  Endurance: MinMax;
  Health: MinMax;
  Immunity: MinMax;
  LMG: MinMax;
  Metabolism: MinMax;
  Pistol: MinMax;
  ProneMovement: MinMax;
  RecoilControl: MinMax;
  SMG: MinMax;
  Shotgun: MinMax;
  Sniper: MinMax;
  Strength: MinMax;
  StressResistance: MinMax;
  Throwing: MinMax;
  Vitality: MinMax;
}

type MasteringSkills = {
  "57": MinMax;
  AK74: MinMax;
  AKM: MinMax;
  AKSU: MinMax;
  APS: MinMax;
  ASH12: MinMax;
  DVL: MinMax;
  GLOCK17: MinMax;
  KS23: MinMax;
  M1A: MinMax;
  M4: MinMax;
  M590: MinMax;
  M870: MinMax;
  MCX: MinMax;
  MDR: MinMax;
  MP133: MinMax;
  MP153: MinMax;
  MP443: MinMax;
  MP5: MinMax;
  MP9: MinMax;
  MPX: MinMax;
  Mk18: MinMax;
  P226: MinMax;
  P90: MinMax;
  PB: MinMax;
  PM: MinMax;
  "PP-91": MinMax;
  PP19: MinMax;
  PPSH: MinMax;
  R11SRASS: MinMax;
  RFB: MinMax;
  "SA-58": MinMax;
  SAIGA: MinMax;
  SKS: MinMax;
  SR25: MinMax;
  SV98: MinMax;
  SVD: MinMax;
  T5000: MinMax;
  TOZ106: MinMax;
  TT: MinMax;
  UMP45: MinMax;
  VECTOR: MinMax;
  VPO101: MinMax;
  VPO_215: MinMax;
  VSS: MinMax;
  m1911: MinMax;
  m9: MinMax;
  mosin: MinMax;
  mp7: MinMax;
  r700: MinMax;
  sr1mp: MinMax;
}

type MinMax = {
  min: number;
  max: number;
}


/* type BotExp = {
  aggressorBonus: {
    easy: number;
    hard: number;
    normal: number;
  };
  level: MinMax;
  reward: {
    easy: number;
    hard: number;
    normal: number;
  };
  standingForKill: {};
  useSimpleAnimator: boolean;
}


type BotGenItems = {
  backpackloot: ItemWeight;
  currency: ItemWeight;
  drink: ItemWeight;
  drugs: ItemWeight;
  food: ItemWeight;
  grenades: ItemWeight;
  healing: ItemWeight;
  magazines: ItemWeight;
  pocketLoot: ItemWeight;
  specialItems: ItemWeight;
  stims: ItemWeight;
  vestLoot: ItemWeight;
}

type ItemWeight = {
  weights: {};
  whitelist?: string[];
}

type BotInventory = {
  ammo: any;
  equipment: BotInvEquipment;
  items: BotInvItems;
  mods: object;
}

type BotInvEquipment = {
  ArmBand: object;
  ArmorVest: object;
  BackPack: object;
  Earpiece: object;
  Eyewear: object;
  FaceCover: object;
  FirstPrimaryWeapon: object;
  Headwear: object;
  Holster: object;
  Pockets: object;
  Scabbard: object;
  SecondPrimaryWeapon: object;
  SecuredContainer?: object;
  TacticalVest: object;
}

type BotInvItems = {
  Backpack: object;
  Pockets: object;
  SecuredContainer: object;
  SpecialLoot?: object;
  TacticalVest: object;
} */

/* Default PMC
 
"BodyParts": [
    {
      "Chest": {
        "max": 85,
        "min": 85
      },
      "Head": {
        "max": 35,
        "min": 35
      },
      "LeftArm": {
        "max": 60,
        "min": 60
      },
      "LeftLeg": {
        "max": 65,
        "min": 65
      },
      "RightArm": {
        "max": 60,
        "min": 60
      },
      "RightLeg": {
        "max": 65,
        "min": 65
      },
      "Stomach": {
        "max": 70,
        "min": 70
      }
    }
  ]*/






