export type TItemRef = {
  id: string;
  name: string;
  parent: string;
}

export type TItemRefDict = {
  [id: string]: TItemRef;
}

