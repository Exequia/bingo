export interface PlayerBase {
  id?: string;
  name?: string;
  amount?: number;
  owner?: boolean;
  dashboardPrice?: number;
  dashboardBonusTwoPrice?: number;
  dashboardBonusThreePrice?: number;
}

export interface GamePlayer {
  id: string;
  name: string;
  status?: GamePlayerStatus;
}

export enum BalanceType {
  Add = 'ADD',
  Subtract = 'SUBTRACT'
}

export enum GamePlayerStatus {
  lazy = "LAZY",
  shopping = "SHOPPING",
  ready = "READY"
}

export interface CreatePlayerResponse {
  player: PlayerResponse;
  gift?: GiftResponse;
}

export interface PlayerResponse extends PlayerBase {
}

export interface GiftResponse {
  type: GiftResponseType;
  balance: number;
  balanceType: BalanceType;
}

export enum GiftResponseType {
  credit = 'CREDIT'
}
