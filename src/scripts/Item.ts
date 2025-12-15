import JsonItems from '../assets/spt/3.11.3/SPT_Data/Server/database/templates/items.json' with { type: 'json' };


//interface SPTItemTemplates {}

type SPTItemsBase = Record<string, SPTItem>;

interface SPTItem {
  _id: string;
  _name: string;
  _parent: string;
  _props: Record<string, any>;
  _type: string;
}

//const ENUM_ITEMS = '/src/assets/spt/3.11.3/SPT_Data/Server/database/templates/items.json';

const items = JSON.parse(JSON.stringify(JsonItems)) as SPTItemsBase;



const Ids = [
  '54009119af1c881c07000029',
  '5422acb9af1c889c16000029',
  '543be5664bdc2dd4348b4569',
  '543be5cb4bdc2deb348b4568',
  '543be5dd4bdc2deb348b4569',
  '543be5e94bdc2df1348b4568',
  '543be5f84bdc2dd4348b456a', // Equipment
  '543be6564bdc2df4348b4568', // ThrowWeap
  '543be6674bdc2df1348b4569', // FoodDrink
  '5447a9cd4bdc2dbd208b4567' // weapon_colt_m4a1_556x45
];

const getItem = (k: string) => {
  return items[k] as SPTItem;
}

//console.log(getItem('54009119af1c881c07000029'));

let n: number = 0;
//const arr: string[] = [];


// Functional, for now :)
function mapFromTpls<T>(data: Record<string, SPTItem>): Map<string, SPTItem> {

  const tplMap = new Map<string, SPTItem>();
  Object.keys(data).forEach(val => {
    tplMap.set(val, data[val] as SPTItem);
    if (data[val]) {
      console.log(val, data[val]._name, `, ${data[val]._type}`);
    }
  })
  return tplMap;
}

const mItemsBase = mapFromTpls(items);

console.log(mItemsBase.size);


/* const itemMap = new Map();
Object.keys(items).forEach((id, index) => {
  //arr.push(id);
  //n++;
  itemMap.set(id, items[id]);
}); */



/* 

  "54009119af1c881c07000029": {
    "_id": "54009119af1c881c07000029",
    "_name": "Item",
    "_parent": "",
    "_props": {
      "AnimationVariantsNumber": 0,
      "BackgroundColor": "blue",
      "CanRequireOnRagfair": false,
      "CanSellOnRagfair": true,
      "ConflictingItems": [],
      "Description": "Item",
      "DiscardLimit": -1,
      "DiscardingBlock": false,
      "DropSoundType": "None",
      "ExamineExperience": 10,
      "ExamineTime": 1,
      "ExaminedByDefault": false,
      "ExtraSizeDown": 0,
      "ExtraSizeForceAdd": false,
      "ExtraSizeLeft": 0,
      "ExtraSizeRight": 0,
      "ExtraSizeUp": 0,
      "Height": 1,
      "HideEntrails": false,
      "InsuranceDisabled": false,
      "IsAlwaysAvailableForInsurance": false,
      "IsLockedafterEquip": false,
      "IsSecretExitRequirement": false,
      "IsSpecialSlotOnly": false,
      "IsUnbuyable": false,
      "IsUndiscardable": false,
      "IsUngivable": false,
      "IsUnremovable": false,
      "IsUnsaleable": false,
      "ItemSound": "generic",
      "LootExperience": 20,
      "MergesWithChildren": false,
      "Name": "Item",
      "NotShownInSlot": false,
      "Prefab": {
        "path": "",
        "rcid": ""
      },
      "QuestItem": false,
      "QuestStashMaxCount": 0,
      "RagFairCommissionModifier": 1,
      "RarityPvE": "Common",
      "RepairCost": 0,
      "RepairSpeed": 0,
      "ShortName": "Item",
      "StackMaxSize": 1,
      "StackObjectsCount": 1,
      "Unlootable": false,
      "UnlootableFromSide": [],
      "UnlootableFromSlot": "FirstPrimaryWeapon",
      "UsePrefab": {
        "path": "",
        "rcid": ""
      },
      "Weight": 1,
      "Width": 1
    },
    "_type": "Node"
  },
 */

