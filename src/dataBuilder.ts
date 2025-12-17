import * as fs from 'node:fs';
import { BaseClasses } from './models/enums/BaseClasses';
import { ITemplateItem } from './models/spt/ITemplateItem';
import type { TLocaleDict, TItemRef, TItemRefDict, ILocaleInfo } from './models/spt/IItemRef';
import type { TTraderDict, TTrader } from './models/spt/ITraders';
import { TQuestDict } from './models/spt/IQuest';


const TraderIdMap = new Map<string, string>();
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
TraderIdMap.set("6617beeaa9cfa777ca915b7c", "Ref");


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


  const itemMap: Map<string, ITemplateItem | unknown> = new Map();
  const items = JSON.parse(fs.readFileSync(itemPath, 'utf-8'));
  const itemRefs: TItemRefDict = {};

  for (const item of Object.keys(items)) {

    itemMap.set(item, items[item]);

    if (!itemRefs[item]) {
      itemRefs[item] = {
        id: items[item]['_id'],
        name: items[item]['_name'],
        parent: items[item]['_parent']
      }
    }
  }

  console.log(`Item Map : (${itemMap.size})`);
  console.log(`Item Refs : (${Object.keys(itemRefs).length})`);

  console.log('writing ItemRefs file...');
  fs.writeFileSync('./ItemRefs.json', JSON.stringify(itemRefs, null, 2), "utf-8");
  console.log('write complete!');

  return itemRefs;
}

// Loads English translations for game items
export function loadLocaleInfo(localePath: string) {

  console.log(`Importing locale info...`)

  if (!fs.existsSync(localePath)) {
    console.log(`Could not find locale data at : (${localePath})`)
  }

  const localeIdMap: Map<string, ILocaleInfo> = new Map();
  const localeEntries: TLocaleDict = {};
  const data = JSON.parse(fs.readFileSync(localePath, 'utf-8'));

  // The data in the locale file contains lots of garbage.
  // It has to be sorted for things that are useful to us.
  for (const key of Object.keys(data)) {

    // If key value is empty, skip
    if (data['key'] === '') continue;

    if (key.length > 24) {

      const parts = key.split(" ");
      const [id, property] = parts;

      // Skip non-valid ids
      if (id.length !== 24) continue;
      // Skip trader ids
      if (id in TraderIdMap) continue;

      const normalizedProperty = property.charAt(0).toUpperCase() + property.slice(1);

      if (!localeEntries[id]) {
        localeEntries[id] = {
          Name: "",
          ShortName: "",
          Description: ""
        }
        localeIdMap.set(id, {
          Name: "",
          ShortName: "",
          Description: ""
        });
      }

      switch (normalizedProperty) {
        case "Name":
          localeEntries[id].Name = data[key];
          localeIdMap.set(id, data[key] as ILocaleInfo)
          break;
        case "ShortName":
          localeEntries[id].ShortName = data[key];
          localeIdMap.set(id, data[key] as ILocaleInfo)
          break;
        case "Description":
          localeEntries[id].Description = data[key];
          localeIdMap.set(id, data[key] as ILocaleInfo)
          break;
      }
    }
  }

  console.log(`Locale Items Pre Removal : (${Object.keys(localeEntries).length})`);

  for (const keyid of localeIdMap.entries()) {
    if (keyid[1].Name === "" && keyid[1].ShortName === '') {
      localeIdMap.delete(keyid[0]);
    }
  }

  for (const id of Object.keys(localeEntries)) {
    if (localeEntries[id] && !localeEntries[id].Name && !localeEntries[id].ShortName) {
      //console.log(`Removing : (${id}) Name:${localeEntries[id].Name} ShortName:${localeEntries[id].ShortName}`)
      delete localeEntries[id];
    }
  }

  console.log('localeIdMap size : ', localeIdMap.size);
  console.log(`localeEntries size : ${Object.keys(localeEntries).length}`);

  console.log('writing localeEntries file...');
  fs.writeFileSync('./localeEntries.json', JSON.stringify(localeEntries, null, 2), "utf-8");
  console.log('write complete!');

  // TODO: REMOVE
  //  customisationStorage.json
  //  customization.json
  //  achievements.json
  //  character.json  -  [string_id, string_id, string_id, ...]

  // TODO: SEPARATE
  //  quests.json
  //  items.json
  //  prices.json
  //  

  return localeEntries;
}

export function loadTraderTemplates() {

  const traders: TTraderDict = {};

  traders["54cb50c76803fa8b248b4571"].NickName = "Prapor";
  traders["54cb57776803fa99248b456e"].NickName = "Therapist";
  traders["579dc571d53a0658a154fbec"].NickName = "Fence";
  traders["58330581ace78e27b8b10cee"].NickName = "Skier";
  traders["5935c25fb3acc3127c3d8cd9"].NickName = "Peacekeeper";
  traders["5a7c2eca46aef81a7ca2145d"].NickName = "Mechanic";
  traders["5ac3b934156ae10c4430e83c"].NickName = "Ragman";
  traders["5c0647fdd443bc2504c2d371"].NickName = "Jaeger";
  traders["638f541a29ffd1183d187f57"].NickName = "Lightkeeper";
  traders["656f0f98d80a697f855d34b1"].NickName = "BTR Driver";
  traders["6617beeaa9cfa777ca915b7c"].NickName = "Ref";

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

  console.log(`Writing to file: (${Object.keys(questDict)}) quests...`);
  fs.writeFileSync('./data/QuestTemplateDict.json', JSON.stringify(questDict, null, 2), "utf-8");
  console.log(`Write complete!`);

  return questDict;
}

export function loadPricesTemplate(path: string) {

  if (!fs.existsSync(path)) {
    console.log(`Could not find prices template file: (${path})`);
    process.exit(1);
  }

  const priceData = JSON.parse(fs.readFileSync(path, 'utf-8'));

  // A list of item ids with price
  const priceDict: { [id: string]: number } = {};

  for (const key of Object.keys(priceData)) {

    // Skip non-valid id strings (if present)
    if (key.length !== 24) continue;
    priceDict[key] = priceData[key];
  }

  // No minification needed, prices.json is already
  //   small & efficient.
  return priceDict;
}


export function localizeItems(templateItems: ITemplateItem[], localeItems: ILocaleInfo[]) {

  for (const t_item of templateItems) {
    if (t_item['_id'] in localeItems) {
      // match
    }
  }
}

export function localizeTraders(traderDict: TTraderDict, localeDict: TLocaleDict) {

}

export function localizeQuests(questDict: TQuestDict) {

  for (const key of Object.keys(questDict)) {

  }
}