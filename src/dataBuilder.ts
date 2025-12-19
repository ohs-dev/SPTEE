import * as fs from 'node:fs';
import { BaseClasses } from './models/enums/BaseClasses';
import { ITemplateItem } from './models/spt/ITemplateItem';
import type { THandbookDict, TItem, TItemDict } from './models/spt/IItemDict';
import type { TLocaleItemDict, TLocaleQuestDict, TLocaleStringDict, TLocaleTraderDict } from './models/spt/ILocale';
import type { TTraderDict, TTrader } from './models/spt/ITraders';
import { TQuestDict } from './models/spt/IQuest';
import { ETraders } from './models/enums/Traders';
import * as NodePath from 'node:path';
import * as AppConfig from '../data/app.json'

/* const TraderIdMap = new Map<string, string>();
TraderIdMap.set("54cb50c76803fa8b248b4571", "Prapor");
TraderIdMap.set("54cb57776803fa99248b456e", "Therapist");
TraderIdMap.set("579dc571d53a0658a154fbec", "Fence");
TraderIdMap.set("58330581ace78e27b8b10cee", "Skier");
TraderIdMap.set("5935c25fb3acc3127c3d8cd9", "Peacekeeper");
TraderIdMap.set("5a7c2eca46aef81a7ca2145d", "Mechanic");
TraderIdMap.set("5ac3b934156ae10c4430e83c", "Ragman");
TraderIdMap.set("5c0647fdd443bc2504c2d371", "Jaeger");
TraderIdMap.set("638f541a29ffd1183d187f57", "Lightkeeper");
TraderIdMap.set("656f0f98d80a697f855d34b1", "BTR Driver");
TraderIdMap.set("6617beeaa9cfa777ca915b7c", "Ref"); */

const TraderIds = [
  ETraders.PRAPOR,
  ETraders.THERAPIST,
  ETraders.FENCE,
  ETraders.JAEGER,
  ETraders.MECHANIC,
  ETraders.RAGMAN,
  ETraders.PEACEKEEPER,
  ETraders.SKIER,
  ETraders.BTR,
  ETraders.LIGHTHOUSEKEEPER,
  ETraders.REF
]

const generateData = async () => {

  console.log('Generating data...')

  // await loadItemTemplates()
  // await loadTraderTemplates()
  // await loadQuestTemplates()
  // await loadCustomizationTemplates()
  // await loadLocationTemplates()
  // await localizeTemplates()

  // (maybe?) await loadModTemplates()

  console.log(`Finished generating data!`);
}

// Loads Template Items
export function loadItemTemplates(itemPath: string) {
  console.log('Importing items...');

  if (!fs.existsSync(itemPath)) {
    console.log(`Could not find items file : (${itemPath})`);
    return null;
  }


  //const itemMap: Map<string, ITemplateItem | unknown> = new Map();
  const itemsData = JSON.parse(fs.readFileSync(itemPath, 'utf-8'));
  const itemBase: TItemDict = {};

  for (const item of Object.keys(itemsData)) {

    //itemMap.set(item, itemsData[item]);

    if (!itemBase[item]) {
      itemBase[item] = {
        _id: itemsData[item]['_id'],
        _name: itemsData[item]['_name'],
        _parent: itemsData[item]['_parent']
      }
    }
  }

  //console.log(`Item Map : (${itemMap.size})`);
  console.log(`Item Base : (${Object.keys(itemBase).length})`);

  console.log('writing ItemTemplates file...');
  fs.writeFileSync('./data/ItemTemplateDict.json', JSON.stringify(itemBase, null, 2), "utf-8");
  console.log('write complete!');

  return itemBase;
}

// Loads English translations for game items
export function loadLocaleInfo(localePath: string) {

  console.log(`Importing locale info...`)

  if (!fs.existsSync(localePath)) {
    console.log(`Could not find locale data at : (${localePath})`)
  }

  // TESTING DATA-TYPES
  //const localeDict: { [id: string]: TLocaleItem } = {};

  const localeItemDict: TLocaleItemDict = {};
  const localeTraderDict: TLocaleTraderDict = {};
  const localeQuestDict: TLocaleQuestDict = {};
  const localeStringDict: TLocaleStringDict = {};

  //const localeIdMap: Map<string, TLocaleItem> = new Map();

  // Sort through file data
  const data = JSON.parse(fs.readFileSync(localePath, 'utf-8'));
  for (const key of Object.keys(data)) {

    // If key value is empty, skip
    if (data['key'] === '') continue;

    if (key.length > 24) {
      // Key contains compound property names

      const parts = key.split(" ");
      const [id, property] = parts;

      // Skip non-valid ids
      if (id.length !== 24) continue;
      //if (id in TraderIdMap) continue;  // Skip trader ids


      // Standardize property names, `Capitalized`
      //const normalizedProperty = property.charAt(0).toUpperCase() + property.slice(1);


      // There are many possible property names in the locale file:
      //
      //   * Items *   :  Name | ShortName | Description.
      //
      //   * Traders * :  FullName | Nickname | FirstName | Location | Description
      //
      //   * Quests *  :  name | acceptPlayerMessage | completePlayerMessage | 
      //                  declinePlayerMessage | failMessageText | successMessageText |
      //                  description
      //
      //   * Task *    :  (none) | 0 | 1 | 2 | 3
      //
      switch (property) {
        case "Name":
          //localeEntries[id].Name = data[key];
          //localeIdMap.get(id).Name = data[key];
          localeItemDict[id].Name = data[key];
          break;
        case "ShortName":
          //localeEntries[id].ShortName = data[key];
          //localeIdMap.get(id).ShortName = data[key];
          localeItemDict[id].ShortName = data[key];
          break;
        case "Description":
          //localeEntries[id].Description = data[key];
          //localeIdMap.get(id).Description = data[key];
          if (id in TraderIds) {
            if (!localeTraderDict[id]) {
              localeTraderDict[id] = {};
            }
            localeTraderDict[id].Description = data[key];
          } else {
            if (!localeItemDict[id]) {
              localeItemDict[id] = {};
            }
            localeItemDict[id].Description = data[key];
          }
          break;
        /** Quest Section */
        case "name":
          if (!localeQuestDict[id]) {
            localeQuestDict[id] = {}
          }
          localeQuestDict[id].name = data[key];
          break;
        case "description":
          if (!localeQuestDict[id]) {
            localeQuestDict[id] = {};
          }
          localeQuestDict[id].description = data[key];
          break;
        case "successMessageText":
          if (!localeQuestDict[id]) {
            localeQuestDict[id] = {}
          }
          localeQuestDict[id].successMessageText = data[key];
          break;
        case "failMessageText":
          if (!localeQuestDict[id]) {
            localeQuestDict[id] = {}
          }
          localeQuestDict[id].failMessageText = data[key];
          break;
        case "acceptPlayerMessage":
          if (!localeQuestDict[id]) {
            localeQuestDict[id] = {};
          }
          localeQuestDict[id].acceptPlayerMessage = data[key];
          break;
        case "completePlayerMessage":
          if (!localeQuestDict[id]) {
            localeQuestDict[id] = {}
          }
          localeQuestDict[id].completePlayerMessage = data[key];
          break;
        case "declinePlayerMessage":
          if (!localeQuestDict[id]) {
            localeQuestDict[id] = {}
          }
          localeQuestDict[id].declinePlayerMessage = data[key];
          break;
        /** Trader Section */
        case "Nickname":
          if (!localeTraderDict[id]) {
            localeTraderDict[id] = {}
          }
          localeTraderDict[id].Nickname = data[key];
          break;
        case "FullName":
          if (!localeTraderDict[id]) {
            localeTraderDict[id] = {}
          }
          localeTraderDict[id].FullName = data[key];
          break;
        case "FirstName":
          if (!localeTraderDict[id]) {
            localeTraderDict[id] = {}
          }
          localeTraderDict[id].FirstName = data[key];
          break;
        case "Location":
          if (!localeTraderDict[id]) {
            localeTraderDict[id] = {}
          }
          localeTraderDict[id].Location = data[key];
          break;
      }
    } else if (key.length === 24) {
      // key is ONLY an id string
      localeStringDict[key] = data[key];
    }
  }

  //console.log(`Locale Dict items: (${Object.keys(localeDict).length})`);
  //console.log(`Locale Items Pre Removal : (${Object.keys(localeEntries).length})`);

  /* for (const keyid of localeIdMap.entries()) {
    if (keyid[1].Name === "" && keyid[1].ShortName === '') {
      localeIdMap.delete(keyid[0]);
    }
  } */

  /* for (const id of Object.keys(localeEntries)) {
    if (localeEntries[id] && !localeEntries[id].Name && !localeEntries[id].ShortName) {
      //console.log(`Removing : (${id}) Name:${localeEntries[id].Name} ShortName:${localeEntries[id].ShortName}`)
      delete localeEntries[id];
    }
  } */

  for (const key of Object.keys(localeItemDict)) {
    if (localeItemDict[key].Name === "" || localeItemDict[key].ShortName === "") {
      delete localeItemDict[key];
    }
  }

  for (const key of Object.keys(localeQuestDict)) {
    if (localeQuestDict[key].name === "") {
      // remove for missing name
      delete localeQuestDict[key];
    } else if (localeQuestDict[key].successMessageText === undefined) {
      // remove for missing quest parameter
      delete localeQuestDict[key];
    }
  }

  for (const key of Object.keys(localeStringDict)) {
    if (localeStringDict[key] === "") {
      delete localeStringDict[key];
    }
  }
  //console.log('localeIdMap size : ', localeIdMap.size);
  //console.log(`localeEntries size : ${Object.keys(localeEntries).length}`);

  console.log('writing locale files...');
  //fs.writeFileSync('./data/localeDict.json', JSON.stringify(localeDict, null, 2), "utf-8");

  fs.writeFileSync('./data/localeItemDict.json', JSON.stringify(localeItemDict, null, 2), 'utf-8');
  fs.writeFileSync('./data/localeQuestDict.json', JSON.stringify(localeQuestDict, null, 2), 'utf-8');
  fs.writeFileSync('./data/localeTraderDict.json', JSON.stringify(localeTraderDict, null, 2), 'utf-8');
  fs.writeFileSync('./data/localeStringDict.json', JSON.stringify(localeStringDict, null, 2), 'utf-8');

  console.log(`Items: (${Object.keys(localeItemDict).length})`);
  console.log(`Traders: (${Object.keys(localeTraderDict).length})`);
  console.log(`Quests: (${Object.keys(localeQuestDict).length})`);
  console.log(`Strings: (${Object.keys(localeStringDict).length})`);

  console.log('write complete!');

  // TODO: REMOVE
  //  customisationStorage.json
  //  customization.json
  //  achievements.json
  //  character.json  

  //return localeEntries;
}

export function loadTraderTemplates() {

  const traders: TTraderDict = {};
  traders[ETraders.PRAPOR] = { nickname: "Prapor", }
  traders[ETraders.THERAPIST] = { nickname: "Therapist", }
  traders[ETraders.FENCE] = { nickname: "Fence", }
  traders[ETraders.SKIER] = { nickname: "Skier", }
  traders[ETraders.PEACEKEEPER] = { nickname: "Peacekeeper", }
  traders[ETraders.MECHANIC] = { nickname: "Mechanic", }
  traders[ETraders.RAGMAN] = { nickname: "Ragman", }
  traders[ETraders.JAEGER] = { nickname: "Jaeger", }
  traders[ETraders.LIGHTHOUSEKEEPER] = { nickname: "Lightkeeper", }
  traders[ETraders.BTR] = { nickname: "BTR Driver", }
  traders[ETraders.REF] = { nickname: "Ref", }

  const t_dir = '../../data/database/traders/';

  const prap_base = `${ETraders.PRAPOR}/base.json`;
  const ther_base = `${ETraders.THERAPIST}/base.json`;
  const mech_base = `${ETraders.MECHANIC}/base.json`;
  const jaeg_base = `${ETraders.JAEGER}/base.json`;
  const ragm_base = `${ETraders.RAGMAN}/base.json`;
  const peac_base = `${ETraders.PEACEKEEPER}/base.json`;
  const fenc_base = `${ETraders.FENCE}/base.json`;
  const btr_base = `${ETraders.BTR}/base.json`;
  const ligh_base = `${ETraders.LIGHTHOUSEKEEPER}/base.json`;
  const skie_base = `${ETraders.SKIER}/base.json`;
  const ref_base = `${ETraders.REF}/base.json`

  traders[ETraders.PRAPOR].base = JSON.parse(fs.readFileSync(NodePath.join(__dirname, t_dir, prap_base), 'utf-8'));
  traders[ETraders.THERAPIST].base = JSON.parse(fs.readFileSync(NodePath.join(__dirname, t_dir, ther_base), 'utf-8'));
  traders[ETraders.MECHANIC].base = JSON.parse(fs.readFileSync(NodePath.join(__dirname, t_dir, mech_base), 'utf-8'));
  traders[ETraders.JAEGER].base = JSON.parse(fs.readFileSync(NodePath.join(__dirname, t_dir, jaeg_base), 'utf-8'));
  traders[ETraders.RAGMAN].base = JSON.parse(fs.readFileSync(NodePath.join(__dirname, t_dir, ragm_base), 'utf-8'));
  traders[ETraders.PEACEKEEPER].base = JSON.parse(fs.readFileSync(NodePath.join(__dirname, t_dir, peac_base), 'utf-8'));
  traders[ETraders.FENCE].base = JSON.parse(fs.readFileSync(NodePath.join(__dirname, t_dir, fenc_base), 'utf-8'));
  traders[ETraders.BTR].base = JSON.parse(fs.readFileSync(NodePath.join(__dirname, t_dir, btr_base), 'utf-8'));
  traders[ETraders.LIGHTHOUSEKEEPER].base = JSON.parse(fs.readFileSync(NodePath.join(__dirname, t_dir, ligh_base), 'utf-8'));
  traders[ETraders.SKIER].base = JSON.parse(fs.readFileSync(NodePath.join(__dirname, t_dir, skie_base), 'utf-8'));
  traders[ETraders.REF].base = JSON.parse(fs.readFileSync(NodePath.join(__dirname, t_dir, ref_base), 'utf-8'));

  return traders;
}

export function loadQuestTemplates(path: string) {
  // Quests location: /database/templates/quests.json

  //   Other quests location:  /traders/id_string/questassort.json 
  //     don't make sense because they can be from other traders???  
  //     Maybe they are unlock conditions??


  if (!fs.existsSync(path)) {
    console.log(`Could not find quest templates file at : (${path})`);
    process.exit(1);
  }

  console.log(`Loading quest templates...`);

  const questData = JSON.parse(fs.readFileSync(path, 'utf-8'));
  const questDict: TQuestDict = {};

  for (const key of Object.keys(questData)) {

    if (key.length !== 24) continue;

    // assign object to quick-lookup dictionary
    questDict[key] = {
      // This is only a partial list of keys, for 
      // faster lookup times
      QuestName: questData[key]['QuestName'],
      _id: questData[key]['_id'],
      conditions: questData[key]['conditions'],
      description: questData[key]['description'],
      image: questData[key]['image'],
      location: questData[key]['location'],
      name: questData[key]['name'],
      restartable: questData[key]['restartable'],
      rewards: questData[key]['rewards'],
      side: questData[key]['side'],
      status: questData[key]['status'],
      traderId: questData[key]['traderId'],
      type: questData[key]['type']
    };

  }

  console.log(`Writing to file: (${Object.keys(questDict).length}) quests...`);
  fs.writeFileSync('./data/QuestTemplateDict.json', JSON.stringify(questDict, null, 2), "utf-8");
  console.log(`Write complete!`);

  return questDict;
}

export function loadPricesTemplate(path: string) {

  if (!fs.existsSync(path)) {
    console.log(`Could not find prices template file: (${path})`);
    process.exit(1);
  }

  console.log(`Loading prices template...`);
  const priceData = JSON.parse(fs.readFileSync(path, 'utf-8'));

  // A list of item ids with price
  const priceDict: { [id: string]: number } = {};

  for (const key of Object.keys(priceData)) {

    // Skip non-valid id strings (if present)
    if (key.length !== 24) continue;
    priceDict[key] = priceData[key];
  }

  console.log(`Prices found: (${Object.keys(priceDict).length})`);

  // No minification needed, prices.json is already
  //   small & efficient.
  return priceDict;
}

export function loadHandbook(path: string) {

  if (!fs.existsSync(path)) {
    console.log(`Could not find handbook file: (${path})`);
    process.exit(1);
  }

  const handbookData = JSON.parse(fs.readFileSync(path, 'utf-8'));
  const handbookItems = handbookData['Items'];
  const handbookDict: THandbookDict = {};

  for (const item of handbookItems) {

    handbookDict[item['Id']] = {
      Id: item['Id'],
      ParentId: item['ParentId'],
      Price: item['Price']
    };
  }

  console.log(`Handbook items: (${Object.keys(handbookDict).length})`);
  fs.writeFileSync('./data/handbookItemsDict.json', JSON.stringify(handbookDict, null, 2));

  return handbookDict;
}


export function loadBotConfigFile(path?: string) {

  if (!path) {
    // use default file location
    path = NodePath.join(__dirname, '../../', AppConfig.FileDefaults.Configs.bot);
  }

  const botCfgData = JSON.parse(fs.readFileSync(path, 'utf-8'));

  const botConfig: IBotConfig = botCfgData;

  console.log(`Loaded Bot Config!`)

  return botConfig;
}