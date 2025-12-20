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

export class DataBuilder {

  _rootPath: string;
  _traderIds: string[] = [
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
  // Templates
  _traderArray: TTrader[];
  _traderDict: TTraderDict;
  _itemTemplates: TItemDict;
  _questTemplates: TQuestDict;
  _priceTemplates: { [id: string]: number };
  _handbookTemplate: THandbookDict;

  // Config
  _botConfig: IBotConfig;
  _pmcConfig: IPmcConfig;
  _questConfig: TQuestDict;
  _ragfairConfig: IRagfairConfig;
  _tradersConfig: ITraderConfig;
  _locationsConfig: ILocationConfig;

  // Locale
  _localeItems: TLocaleItemDict;
  _localeQuests: TLocaleQuestDict;
  _localeTraders: TLocaleTraderDict;
  _localeStrings: TLocaleStringDict;

  constructor(dataPath?: string) {

    // If no path is given use the default set in `app.json`
    if (!dataPath) {
      this._rootPath = NodePath.join(
        __dirname,
        '../../',
        AppConfig.FileDefaults._root
      );
    } else {
      this._rootPath = dataPath;
    }
  }

  async generate() {

    // Load data
    this.loadTraderTemplates()
    this.loadItemTemplates()
    this.loadQuestTemplates()
    this.loadPricesTemplate()
    this.loadHandbook()

    // Load configs
    this.loadBotConfigFile()
    this.loadPmcConfigFile()
    this.loadRagfairConfigFile()
    this.loadTraderConfigFile()
    this.loadLocationConfigFile()
  }

  loadTraderTemplates(path?: string) {

    if (!path) {
      // use default
      path = NodePath.join(
        this._rootPath,
        AppConfig.FileDefaults.Database.Traders._dir
      )
    }

    const traderDict: TTraderDict = {};

    for (const id of this._traderIds) {
      traderDict[id] = {
        _id: id
      };
      const basePath = NodePath.join(path, `${id}/base.json`);
      traderDict[id].base = JSON.parse(fs.readFileSync(basePath, 'utf-8'));

      // Lightkeeper has no assort file, so skip him
      if (id !== ETraders.LIGHTHOUSEKEEPER) {
        const assortPath = NodePath.join(path, `${id}/assort.json`);
        traderDict[id].assort = JSON.parse(fs.readFileSync(assortPath, 'utf-8'));
      }
    }

    this._traderDict = traderDict;
  }

  /** Loads Item Templates */
  loadItemTemplates(path?: string) {
    console.log('Importing items...');

    if (!path) {
      // No path defined, fallback to default
      path = NodePath.join(this._rootPath,
        AppConfig.FileDefaults.Database.Templates._dir,
        AppConfig.FileDefaults.Database.Templates.Items);
    }

    if (!fs.existsSync(path)) {
      console.log(`Could not find items file : (${path})`);
      process.exit(1);
    }

    const itemsData = JSON.parse(fs.readFileSync(path, 'utf-8'));
    const itemBase: TItemDict = {};

    for (const item of Object.keys(itemsData)) {

      if (!itemBase[item]) {
        itemBase[item] = {
          _id: itemsData[item]['_id'],
          _name: itemsData[item]['_name'],
          _parent: itemsData[item]['_parent']
        }
      }
    }

    console.log(`Item Templates found : (${Object.keys(itemBase).length})`);

    console.log('writing ItemTemplates file...');
    fs.writeFileSync('./data/ItemTemplateDict.json', JSON.stringify(itemBase, null, 2), "utf-8");
    console.log('write complete!');

    this._itemTemplates = itemBase;
  }

  /** Loads Quest templates */
  loadQuestTemplates(path?: string) {
    // Quests location: /database/templates/quests.json

    //   Other quests location:  /traders/id_string/questassort.json 
    //     don't make sense because they can be from other traders???  
    //     Maybe they are unlock conditions??

    if (!path) {
      path = NodePath.join(this._rootPath,
        AppConfig.FileDefaults.Database.Templates._dir,
        AppConfig.FileDefaults.Database.Templates.Quests
      );
    }


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

    this._questTemplates = questDict;
  }

  /** Loads price templates */
  loadPricesTemplate(path?: string) {

    if (!path) {
      path = NodePath.join(this._rootPath,
        AppConfig.FileDefaults.Database.Templates._dir,
        AppConfig.FileDefaults.Database.Templates.Prices
      );
    }

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

    this._priceTemplates = priceDict;
  }

  /** Loads handbook info */
  loadHandbook(path?: string) {

    if (!path) {
      path = NodePath.join(this._rootPath,
        AppConfig.FileDefaults.Database.Templates._dir,
        AppConfig.FileDefaults.Database.Templates.Handbook
      );
    }

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

    this._handbookTemplate = handbookDict;
  }

  /* #region Config Files */

  /** Loads configurations for pve bots */
  loadBotConfigFile(path?: string) {

    if (!path) {
      // use default file location
      path = NodePath.join(this._rootPath,
        AppConfig.FileDefaults.Configs._dir,
        AppConfig.FileDefaults.Configs.bot);
    }

    const botCfgData = JSON.parse(fs.readFileSync(path, 'utf-8'));
    const botConfig: IBotConfig = botCfgData;
    console.log(`Loaded Bot config file!`)

    this._botConfig = botConfig;
  }

  /** Loads configurations for SPT player-bots */
  loadPmcConfigFile(path?: string) {

    if (!path) {
      // Set to default file path
      path = NodePath.join(this._rootPath,
        AppConfig.FileDefaults.Configs._dir,
        AppConfig.FileDefaults.Configs.pmc);
    }

    const pmcConfigData = JSON.parse(fs.readFileSync(path, 'utf-8'));
    const pmcConfig: IPmcConfig = pmcConfigData;
    console.log(`Loaded Pmc config file!`);

    return pmcConfig;
  }

  /** Loads flea market configurations */
  loadRagfairConfigFile(path?: string) {

    if (!path) {
      path = NodePath.join(this._rootPath,
        AppConfig.FileDefaults.Configs._dir,
        AppConfig.FileDefaults.Configs.ragfair);
    }

    const ragfairData = JSON.parse(fs.readFileSync(path, 'utf-8'));
    const ragfairConfig: IRagfairConfig = ragfairData;
    console.log(`Loaded Ragfair config file!`);

    this._ragfairConfig = ragfairConfig;
  }

  /** Loads trader configurations */
  loadTraderConfigFile(path?: string) {

    if (!path) {
      path = NodePath.join(this._rootPath,
        AppConfig.FileDefaults.Configs._dir,
        AppConfig.FileDefaults.Configs.trader);
    }

    const traderConfigData = JSON.parse(fs.readFileSync(path, 'utf8'));
    const traderConfig: ITraderConfig = traderConfigData;
    console.log(`Loaded Trader config file!`);

    this._tradersConfig = traderConfig;
  }

  /** Loads map configurations */
  loadLocationConfigFile(path?: string) {

    if (!path) {
      path = NodePath.join(this._rootPath,
        AppConfig.FileDefaults.Configs._dir,
        AppConfig.FileDefaults.Configs.location);
    }

    const locationConfigData = JSON.parse(fs.readFileSync(path, 'utf8'));
    const locationConfig: ILocationConfig = locationConfigData;
    console.log(`Loaded location config file!`);

    this._locationsConfig = locationConfig;
  }

  /* #endregion */

  /** Loads language translations from a locale file. Creates dictionary files in the app `data/` folder named: [
 * `localeItemDict.json`, 
 * `localeTraderDict.json`, 
 * `localeQuestDict.json`, 
 * `localeStringDict.json`
 * ]
 * @param path The file path to the locale file.
 */
  loadLocaleInfo(path?: string) {
    console.log(`Importing locale info...`)

    if (!path) {
      // No locale file defined, fallback to default (english)
      path = NodePath.join(this._rootPath,
        AppConfig.FileDefaults.Database.Locales._dir,
        AppConfig.FileDefaults.Database.Locales.en)
    }

    if (!fs.existsSync(path)) {
      console.log(`Could not find locale data at : (${path})`)
      process.exit(1);
    }

    // Game item translations
    const localeItemDict: TLocaleItemDict = {};
    // Trader translations
    const localeTraderDict: TLocaleTraderDict = {};
    // Quest translations
    const localeQuestDict: TLocaleQuestDict = {};
    // Task/Phrase translations
    const localeStringDict: TLocaleStringDict = {};

    // Sort through file data
    const data = JSON.parse(fs.readFileSync(path, 'utf-8'));
    for (const key of Object.keys(data)) {

      // If key value is empty, skip
      if (data['key'] === '') continue;

      if (key.length > 24) {
        // Key contains compound property names

        const parts = key.split(" ");
        const [id, property] = parts;

        // Skip non-valid ids
        if (id.length !== 24) continue;

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
            localeItemDict[id].Name = data[key];
            break;
          case "ShortName":
            localeItemDict[id].ShortName = data[key];
            break;
          case "Description":
            if (id in this._traderIds) {
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

    // Remove items with no name
    for (const key of Object.keys(localeItemDict)) {
      if (localeItemDict[key].Name === "" || localeItemDict[key].ShortName === "") {
        delete localeItemDict[key];
      }
    }

    // Remove quests with no name
    for (const key of Object.keys(localeQuestDict)) {
      if (localeQuestDict[key].name === "") {
        // remove for missing name
        delete localeQuestDict[key];
      } else if (localeQuestDict[key].successMessageText === undefined) {
        // remove for missing quest parameter
        delete localeQuestDict[key];
      }
    }

    // Remove strings with no value
    for (const key of Object.keys(localeStringDict)) {
      if (localeStringDict[key] === "") {
        delete localeStringDict[key];
      }
    }

    console.log('writing locale files...');

    fs.writeFileSync('./data/localeItemDict.json', JSON.stringify(localeItemDict, null, 2), 'utf-8');
    fs.writeFileSync('./data/localeQuestDict.json', JSON.stringify(localeQuestDict, null, 2), 'utf-8');
    fs.writeFileSync('./data/localeTraderDict.json', JSON.stringify(localeTraderDict, null, 2), 'utf-8');
    fs.writeFileSync('./data/localeStringDict.json', JSON.stringify(localeStringDict, null, 2), 'utf-8');

    console.log(`Locale Items: (${Object.keys(localeItemDict).length})`);
    console.log(`Locale Traders: (${Object.keys(localeTraderDict).length})`);
    console.log(`Locale Quests: (${Object.keys(localeQuestDict).length})`);
    console.log(`Locale Strings: (${Object.keys(localeStringDict).length})`);

    console.log('write complete!');

    // TODO: REMOVE
    //  customisationStorage.json
    //  customization.json
    //  achievements.json
    //  character.json  

    //return localeEntries;
    this._localeItems = localeItemDict;
    this._localeQuests = localeQuestDict;
    this._localeTraders = localeTraderDict;
    this._localeStrings = localeStringDict;
  }

}





// (OPTIONAL) configs/quest.json
//   *  daily quests
//   *  event quests
//   *  message redeem timer
//   *  locationIdMap ( <map_name>: <id_string> )