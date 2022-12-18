import { GameStatus } from '../../models/game';

export interface PlayerState {
  name?: string;
  amount: number;
}

export const initialPlayerState: PlayerState = {
  amount: 0
};
