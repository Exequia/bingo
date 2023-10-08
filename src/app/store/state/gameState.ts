import { Dashboard, GiftResponse, RoundData } from '@app/models';
import { GameConfig, GameStatus, GameStatusEnum } from '../../models/game';

export interface GameState {
  status: GameStatus;
  config?: GameConfig;
  gift?: GiftResponse;
  roundDashboards?: Dashboard[];
  round?: RoundData;
}

export const initialGameState: GameState = {
  status: {
    status: GameStatusEnum.pending,
    currentRound: 1
  }
};
