export type TItemDict = {
  [id: string]: TItem;
}

export type TItem = {
  _id: string;
  _name: string;
  _parent: string;
}

export type THandbookDict = {
  [id: string]: THandbookItem;
}

export type THandbookItem = {
  Id: string;
  ParentId: string;
  Price: number;
}