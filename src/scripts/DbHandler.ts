import { FileSystem } from './FileSystem.js';

//import { readJSONFile, fileExists } from './utils.js';
import { Utils } from './utils.js'
import { type IBotType } from '../models/spt/IBotType.js';
import type { ILocationBase } from '../models/spt/ILocationBase.js';
import type { ILooseLoot } from '../models/spt/ILooseLoot.js';
import { JsonUtil } from './JsonUtils.js';
import type { IItem, IItemBase } from '../models/spt/IItem.js';
import { ItemTpl } from '../models/enums/ItemTpl.js';

//namespace FileDb {

namespace DbHandler {

  export function mapBaseItems<T>(data: IItemBase): Map<string, IItem> {

    const itemMap = new Map<string, IItem>();
    Object.keys(data).forEach((val, index) => {
      //itemMap.set(val, data[val] as IItem);
    })
    return itemMap;
  }
}

const DIR_BOT_TYPES = './assets/spt/3.11.3/SPT_Data/Server/database/bots/types/';

type JSONPrimitive = string | number | boolean | null | undefined;

type JSONValue = JSONPrimitive | JSONValue[] | {
  [key: string]: JSONValue;
};

type JSONCompatible<T> = unknown extends T ? never : {
  [P in keyof T]:
  T[P] extends JSONValue ? T[P] :
  T[P] extends NotAssignableToJson ? never :
  JSONCompatible<T[P]>;
};

type NotAssignableToJson =
  | bigint
  | symbol
  | Function;

// #region Bot Functions

/*  BotType fields
  appearance: IAppearance;
  chances: IChances;
  difficulty: IDifficulties;
  experience: IExperience;
  firstName: string[];
  generation: IGeneration;
  health: IHealth;
  inventory: IInventory;
  lastName: string[];
  skills: ISkills;
*/

/** Gets bot info from json file.
 * @param name {string}  name of the bot
 * @returns `IBotType`
 */
export function getBotType(path: string, name?: string, version?: string): IBotType | undefined {

  try {

    if (Utils.fileExists(path)) {

      const bot: IBotType = Utils.readJSONFile(path) as IBotType;
      return bot;
    } else {
      throw new Error(`Error: Could not find file containing bot type data:\n
          file path: ${path}`)
    }
    //return undefined;
  } catch (err: Error | any) {
    console.log(`Error in fileDb.js - function getBotTypes(): \n${err.message}`)
  }
}

/** Gets bot details for each bot name in an array.
 * @param names {Array<string>} An array of bot names. Should NOT include file extension (.json)
 * @param path {string} Path to the bot types base folder. Ex: './SPT_Data/Server/database/bots/types/'
 */
export function getAllBotTypes(names: Array<string>, path: string): Array<IBotType> | undefined {

  const bots: Array<IBotType> = [];

  try {

    if (Utils.fileExists(path)) {

      // Loop through all bots in `names` param
      for (let name in names) {

        // Add file extension (.json) if name does not include one
        let fName = (name.includes('.json')) ? name : `${name}.json`
        if (Utils.fileExists(path)) {
          // Add to array
          bots.push(Utils.readJSONFile(path) as IBotType);
        } else {

          throw new Error(`Error: Could not find file path: ${path}`);
        }
      }
      return bots;
    } else {

      throw new Error(`File path is undefined or empty.`);
    }
  } catch (err: Error | any) {
    console.log(`Error in fileDb.js - function getAllBotTypes(): \n${err.message}`)
  }
}

// #endregion

// #region Map Stuff

const DIR_MAP_CUSTOMS = "./assets/spt/SPT_Data/Server/database/locations/bigmap/";
const MAP_GENERIC_FILENAME = "base.json";

/** Loads map specific information for an Escape From Tarkov map.
 * @param name {string} Name of the map
 * @param path {string} Path to the map json file - 'base.json'
 * 
 * @returns `ILocationBase`
*/
export function getMapBase(name: string, path: string): ILocationBase | undefined {
  // file name base.json

  /* #region Map object
  {
    AirdropParameters: [],
    BossLocationSpawn: [],
    BotLocationModifier: {
      AccuracySpeed: {number},
      FogVisibilityDistanceCoef: 0,
      FogVisibilitySpeedCoef: 0,
      GainSight: 1,
      KhorovodChance: 0,
      // Prevent bots spawning freq. in same area?
      LockSpawnCheckRadius: 150,
      LockSpawnCheckRadiusPvE: 150,
      LockSpawnStartTime: 10,
      LockSpawnStartTimePvE: 10,
      // time increment, probably
      LockSpawnStepTime: 50,
      LockSpawnStepTimePvE: 50,
      MarksmanAccuratyCoef: 1,
      // Exfil time? for who or what? 
      MaxExfiltrationTime: 1800, // 30 min
      MinExfiltrationTime: 1200, // 20 min
      // Max amt. bots spawned directly by player actions
      NonWaveSpawnBotsLimitPerPlayer: 10,
      NonWaveSpawnBotsLimitPerPlayerPvE: 10,
      // Rain visibility distance limits
      RainVisibilityDistanceCoef: 0.35,
      RainVisibilitySpeedCoef: 0,
      // map wide bot shot spread (recoil?) modifier
      Scattering: 1,
      // base view distance modifier (clear skies)
      VisibleDistance: 1
    },
    "BotMarksman": 20,
    "BotMax": 25,
    "BotMaxPlayer": 9,
    "BotMaxPvE": 35,
    "BotMaxTimePlayer": 1000,
    "BotNormal": 50,
    "BotStart": 20,
    "BotStartPlayer": 210,
    "BotStop": 1500,
    "Description": "Very Big Map",
    // Time in raid
    "EscapeTimeLimit": 60,
    "EscapeTimeLimitCoop": 45,
    "EscapeTimeLimitPVE": 60,
    // Loot chance - map wide
    "GlobalContainerChanceModifier": 2.5,
    "GlobalLootChanceModifier": 2.4,
    "GlobalLootChanceModifierPvE": 2.9,
    "Id": "bigmap",
    "Insurance": true,
    "MaxBotPerZone": 4,
    // Player PMCs? or Bot PMCs?
    "MaxPlayers": 12,
    "MinPlayers": 10,
    "Name": "Customs",
    // spawn point names
    "OpenZones": "ZoneBrige,ZoneCrossRoad,ZoneDormitory,ZoneGasStation,ZoneFactoryCenter,ZoneFactorySide,ZoneOldAZS,ZoneSnipeBrige,ZoneSnipeTower,ZoneSnipeFactory,ZoneBlockPost,ZoneBlockPostSniper,ZoneBlockPostSniper3,ZoneBlockPost,ZoneTankSquare,ZoneWade,ZoneCustoms",
    // Ground zero type level limit?
    "RequiredPlayerLevelMax": 100,
    "RequiredPlayerLevelMin": 0,
    "ScavMaxPlayersInGroup": 4,
    // spawn point xyz
    "SpawnPointParams": [],
    // Map ID
    "_Id": "56f40101d2720b2a4d8b45d6",
    "exit_access_time": 60,
    "exit_count": 2,
    "exit_time": 1,
    // List of all exits
    exits: [],
    ...
    secretExits: [],
    ...
    transits: [],
    waves: []
  }
    
    
  // Example exit
  {
    // chance exit is available
    "Chance": 70,
    "ChancePVE": 70,
    "Count": 0,
    "CountPVE": 0,
    // player spawn position that can take this exit
    "EntryPoints": "Boiler Tanks",
    "EventAvailable": false,
    // time to exit, in seconds
    "ExfiltrationTime": 8,
    "ExfiltrationTimePVE": 8,
    // player only or scav coop
    "ExfiltrationType": "Individual",
    "Id": "",
    "MaxTime": 0,
    "MaxTimePVE": 0,
    "MinTime": 0,
    "MinTimePVE": 0,
    // Exit name
    "Name": "Smuggler's Boat",
    "PassageRequirement": "None",
    "PlayersCount": 0,
    "PlayersCountPVE": 0,
    "RequirementTip": ""
  },...
    
  // Example wave
  {
    "BotPreset": "hard",
    "BotSide": "Savage",
    "SpawnMode": [
      "pve"
    ],
    "SpawnPoints": "ZoneDormitory",
    "WildSpawnType": "assault",
    "isPlayers": false,
    "number": 2,
    // group size max, min
    "slots_max": 3,
    "slots_min": 1,
    // time until spawn. (-1 == immediately)?
    "time_max": -1,
    "time_min": -1
  },...
  
  // Example secretExit
  {
      "EligibleForPMC": true,
      "EligibleForScav": true,
      "ExfiltrationTime": 15,
      "Id": "675aaab74bca0b001d02f356",
      "Name": "customs_secret_voron_boat"
    }
    
   
   #endregion */

  try {
    if (Utils.fileExists(path)) {
      const map: ILocationBase = Utils.readJSONFile(path) as ILocationBase;
      return map;
    } else {
      throw new Error(`Could not validate map name or path:\n name=(${name})\n path=(${path})`);
    }
  } catch (error: Error | any) {
    console.log(`Error loading map in: fileDb.ts - getMapBase(${name}, ${path})`);
    console.log(error);
    return undefined;
  }
}

/** Gets all loose loot for a specific map in EFT.
 * @param map {string} Map name. Eg: (bigmap, woods, reservbase, etc.)
 * @param path {string} Path to map dir.
 * 
 * @returns `ILooseLoot`
 */
export function getMapLooseLoot(map: string, path: string, fileName?: string): ILooseLoot | undefined {
  try {
    // Use default file name if fileName param is empty
    //    default file name = 'looseLoot.json'
    const fName = (fileName != undefined && fileName != "") ? map : "looseLoot.json";

    if (Utils.fileExists(path) && Utils.fileExists(map)) {

      const looseLoot: ILooseLoot = Utils.readJSONFile(path) as ILooseLoot;
      return looseLoot;
    } else {

      throw new Error(`Could not validate loose loot on map:(${map})`);
    }
  } catch (error: Error | any) {

    console.log(`Error loading map in: fileDb.ts - getMapBase(${map}, ${path})`);
    console.log(error);
    return undefined;
  }
}

// #endregion

// end of namespace
//}

namespace FileImporter {

  export class ImporterUtil {
    fileSystem: FileSystem;
    jsonUtil: JsonUtil;
    constructor(
      //@inject("FileSystem") protected fileSystem: FileSystem,
      //@inject("JsonUtil") protected jsonUtil: JsonUtil,
    ) {
      this.fileSystem = new FileSystem;
      this.jsonUtil = new JsonUtil;
    }

    public async loadAsync<T>(
      filepath: string,
      strippablePath = "",
      onReadCallback: (fileWithPath: string, data: string) => Promise<void> = () => Promise.resolve(),
      onObjectDeserialized: (fileWithPath: string, object: any) => Promise<void> = () => Promise.resolve(),
    ): Promise<T> {
      const result = {} as T;

      const allFiles = await this.fileSystem.getFiles(filepath, true, ["json"], true);
      //const allFiles = fsExtra.readJSON(filepath);

      //const progressWriter = new ProgressWriter(allFiles.length); // Progress bar initialization
      const fileProcessingPromises = allFiles.map(async (file) => {
        try {
          const fileData = await this.fileSystem.read(file);
          await onReadCallback(file, fileData);
          //const fileDeserialized = await this.jsonUtil.deserializeWithCacheCheck<any>(fileData, file, false);
          //await onObjectDeserialized(file, fileDeserialized);
          const strippedFilePath = FileSystem.stripExtension(file).replace(filepath, "");
          //this.placeObject(fileDeserialized, strippedFilePath, result, strippablePath);
        } finally {
          //progressWriter.increment(); // Update progress bar after each file is processed
        }
      });

      await Promise.all(fileProcessingPromises).catch((e) => console.error(e)); // Wait for promises to resolve
      //await this.jsonUtil.writeCache(); // Execute writing of all of the hashes one single time
      return result;
    }

    protected placeObject<T>(fileDeserialized: any, strippedFilePath: string, result: T, strippablePath: string): void {
      const strippedFinalPath = strippedFilePath.replace(strippablePath, "");
      const propertiesToVisit = strippedFinalPath.split("/");

      // Traverse the object structure
      let current = result;

      for (const [index, property] of propertiesToVisit.entries()) {
        // If we're at the last property, set the value
        if (index === propertiesToVisit.length - 1) {

          // implicit any because
          //   string cant be used to index type: unknown
          //current[property] = fileDeserialized;

          // number cant be used to index type: unknown
          //current[index] = fileDeserialized;
        } else {
          // Ensure the property exists as an object and move deeper
          //current[property] = current[property] || {};
          //current = current[property];
        }
      }
    }
  }

}