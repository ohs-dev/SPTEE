export type TLocaleItemDict = {
  [id: string]: TLocaleItem;
}

export type TLocaleTraderDict = {
  [id: string]: TLocaleTrader;
}

export type TLocaleQuestDict = {
  [id: string]: TLocaleQuest;
}

export type TLocaleStringDict = {
  [id: string]: string;
}

export type TLocaleItem = {
  Name?: string;
  ShortName?: string;
  Description?: string;
}

export type TLocaleTrader = {
  Nickname?: string;
  FirstName?: string;
  FullName?: string;
  Location?: string;
  Description?: string;
}

export type TLocaleQuest = {
  name?: string
  acceptPlayerMessage?: string;
  completePlayerMessage?: string;
  declinePlayerMessage?: string;
  description?: string;
  failMessageText?: string;
  successMessageText?: string;
  //successMessage?: string;
  //changeMessageText?: string
}

export type TLocaleString = {
  [id: string]: string;
}