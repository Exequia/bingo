export interface Player {
  id?: string;
  name?: string;
  amount: number;
}
export interface GamePlayer {
  id: string;
  name: string;
  owner?: boolean;
  position?: number;
}
