import { Player } from '@app/models';
import { GameConfig, GameStatus } from '../../models/game';

export interface GameState {
  status: GameStatus,
  players?: Player[],
  config?: GameConfig
}

export const initialGameState: GameState = {
  status: GameStatus.pending
};
