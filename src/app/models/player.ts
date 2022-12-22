export interface PlayerBase {
  id?: string;
  name?: string;
  amount?: number;
}
export interface GamePlayer extends PlayerBase {
  owner?: boolean;
  position?: number;
}

export enum BalanceType {
  Add = "add",
  Substract = "substract"
}