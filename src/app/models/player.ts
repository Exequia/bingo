export interface PlayerBase {
  id?: string;
  name?: string;
  amount?: number;
}
export interface GamePlayer extends PlayerBase {
  owner?: boolean;
  position?: number;
  status?: GamePlayerStatus;
}

export enum BalanceType {
  Add = 'add',
  Subtract = 'subtract',
}

export enum GamePlayerStatus {
  lazy,
  shopping,
  ready,
}

export interface CreatePlayerResponse {
  player: PlayerResponse;
  gift?: GiftResponse;
}

export interface PlayerResponse extends GamePlayer {
}

export interface GiftResponse {
  type: GiftResponseType;
  balance: number;
  balanceType: BalanceType;
}

export enum GiftResponseType {
  credit,
}
