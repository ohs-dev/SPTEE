import { BotCommonNames } from "../models/enums/BotNames.js";
import type { IBodyPart, IBotType, IBotTypeSkills, IDifficultySetting, IDifficultyType } from "../models/spt/IBotType.js";
import type { MinMax } from "../models/MinMax.js";
import { Utils } from "./utils.js";


export class EFTBot {

  // ##  Bot Preset (DO NOT MODIFY)  ##
  // --------------------------------------------------------
  //     All `user` changes should be made to the prototype
  //     rather than the preset, which serves as a static 
  //     reference to the default configuration settings
  protected readonly _botPresetType: IBotType;
  protected readonly _botPresetPath: string;

  // Bot Configurable Settings Data
  private _botPrototype: IBotType;
  private _settings: IBotType;
  private _filename: string;
  private _name: string;
  private _role: string;

  constructor(
    path: string
  ) {
    this._botPresetPath = path;

    // Data 
    this._botPresetType = JSON.parse(Utils.readJSONFile(path)) as IBotType;
    this._botPrototype = structuredClone(this._botPresetType) as IBotType;
    this._settings = this._botPrototype;

    // bot name & role
    this._filename = path.slice(path.lastIndexOf('/'), path.length - 1)
    this._role = this._filename.slice(0, this._filename.lastIndexOf('.'));
    if (this._role in BotCommonNames) {
      this._name = BotCommonNames[this._role as keyof typeof BotCommonNames];
    } else this._name = "Scav";
  }

  public get Name() {
    return this._name;
  }

  public get Role(): string {
    return this._role;
  }

  public get Settings() {
    return this._settings;
  }

  public set Settings(k: IBotType) {
    this._settings = k;
  }


  /** Gets the min/max health for a EFT bot's bodypart
   * 
   * @param part {keyof IBodyPart} One of ('Head','Chest','Stomach','RightArm','LeftArm','RightLeg','LeftLeg')
   * 
   * @returns `{ min: number, max: number }` 
   */
  getBodyPartValue(part: keyof IBodyPart): MinMax {

    if (part != undefined && this._botPrototype.health.BodyParts[0] != undefined) {

      return this._botPrototype.health.BodyParts[0][part]

    } else {
      throw new Error(
        'Body part does not exist or bot has no health value for corresponding limb.');
    }
  }

  /** Sets minimum and maximum health values for a bot's body part.
   * 
   * @param partName {keyof IBodyPart} The name of the body part. (Head, Chest, RightArm, LeftLeg, etc)
   * @param min {number} minimun health the body part can have
   * @param max {number} max health value 
   */
  setBodyPartValue(partName: keyof IBodyPart, min: number, max: number): void {

    if (partName != undefined && this._botPrototype.health.BodyParts[0] != undefined) {

      this._botPrototype.health.BodyParts[0][partName].min = min;
      this._botPrototype.health.BodyParts[0][partName].max = max;
    }
  }

  /** Gets skill info for 'common skills' or 'mastering skills'
   * 
   * @param skillType {keyof IBotTypeSkills} ('Common', 'Mastering')
   * @param skill {string} The name of the sub-skill 
   * @returns the whole group of skills, or one specific skill if `skill?: string` is specified.
   */
  public getSkillType(skillType: keyof IBotTypeSkills, skill?: string): Record<string, MinMax> | MinMax {

    if (skillType === undefined || this._botPrototype.skills[skillType] === undefined) {
      throw new Error('Skill invalid.');
    }

    if (skill !== undefined && skill !== "" && this._botPrototype.skills[skillType][skill] !== undefined) {

      return this._botPrototype.skills[skillType][skill];
    } else {

      return this._botPrototype.skills[skillType];
    }
  }

  public setSkillValue<T extends IBotTypeSkills, K extends keyof T>(skill: T, key: K, value: T[K]): T {
    return { ...skill, [key]: value };
  }

  /*  <T extends UserProfile>: This means T can be any type that extends UserProfile. 
      This gives flexibility if you want to have additional properties in the user profile.
      
      <K extends keyof T>: This ensures that K is a valid key of T. This means you can only pass a 
      key that exists on the profile object.
      
      value: T[K]: This specifies that the value must be of the same type as the property being updated. */

  public updateNormalSettings<T extends IDifficultySetting, K extends keyof T>(setting: T, key: K, value: T[K]): T {
    return { ...setting, [key]: value };
  }


  public getDifficultySetting(diff: keyof IDifficultyType, key: keyof IDifficultySetting) {

    if (key && diff) return this._botPrototype.difficulty[diff][key];
  }

  /** Updates the EFTBot prototype difficulty settings by category
   * 
   * @param diffType {string} A valid key of the difficulty object. 
   *                          {easy, normal, hard, impossible}
   * 
   * @param key {string} A valid setting(key) within the difficulty.
   *                     { Aiming, Boss, Change, Core, Cover, Grenade, 
   *                       Hearing, Lay, Look, Mind, Move, Patrol, 
   *                       Scattering,Shoot }
   * @returns Record<string, string | number | boolean | string[]>
   *           |  Record<string, string | number | boolean>
   * */
  public setDifficultySetting(diffType: keyof IDifficultyType, key: keyof IDifficultySetting) {

    if (!diffType || !key) throw new Error('setDifficultySetting(diffType, key) must include valid params.');

    if (key in this._botPrototype.difficulty[diffType][key]) {

    }
  }


  // END OF CLASS
}


/* 
export interface IDifficultyCategories {
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
  
*/

