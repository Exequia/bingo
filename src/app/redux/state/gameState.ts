import { GameStatus } from '../../models/game';

export interface GameState {
  status: GameStatus
}

export const initialGameState: GameState = {
  status: GameStatus.pending
};
