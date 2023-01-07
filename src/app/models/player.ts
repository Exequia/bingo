export interface PlayerBase {
  id?: string;
  name?: string;
  amount?: number;
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
  lazy,
  shopping,
  ready
}

export interface CreatePlayerResponse {
  player: PlayerResponse;
  gift?: GiftResponse;
}

export interface PlayerResponse extends GamePlayer {
  amount?: number;
}

export interface GiftResponse {
  type: GiftResponseType;
  balance: number;
  balanceType: BalanceType;
}

export enum GiftResponseType {
  credit = 'CREDIT'
}
