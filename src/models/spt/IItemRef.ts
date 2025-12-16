export type TLocaleDict = {
  [id: string]: ILocaleInfo
}

export interface ILocaleInfo {
  Name: string;
  ShortName: string;
  Description: string;
}

export type TItemRef = {
  id: string;
  name: string;
  parent: string;
}

export type TItemRefDict = {
  [id: string]: TItemRef;
}

