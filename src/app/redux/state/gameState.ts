import { Dashboard, GamePlayer, GiftResponse } from '@app/models';
import { GameConfig, GameStatus } from '../../models/game';

export interface GameState {
  status: GameStatus;
  config?: GameConfig;
  gift?: GiftResponse;
  roundDashboards?: Dashboard[];
}

export const initialGameState: GameState = {
  status: GameStatus.pending,
};
