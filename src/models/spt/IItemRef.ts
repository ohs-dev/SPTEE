export type Items = {
  [id: string]: ILocaleInfo
}

export interface ItemRef {
  id: string;
  name: string;
  parent: string;
}

export type ItemRefList = {
  [id: string]: ItemRef;
}

export interface ILocaleInfo {
  Name: string;
  ShortName: string;
  Description: string;
}