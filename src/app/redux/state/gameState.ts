import { Dashboard, GamePlayer, GiftResponse } from '@app/models';
import { GameConfig, GameStatus } from '../../models/game';

export interface GameState {
  status: GameStatus;
  players?: GamePlayer[];
  config?: GameConfig;
  gift?: GiftResponse;
  roundDashboards?: Dashboard[];
}

export const initialGameState: GameState = {
  status: GameStatus.pending,
  players: [
    {
      id: "homer",
      name: "Alberto"
    },
    {
      id: "goku",
      name: "Irene"
    },
    {
      id: "homer",
      name: "Iván"
    },
    {
      id: "homer",
      name: "Anna"
    },
    {
      id: "goku",
      name: "GokuGokuGokuGokuGokuGokuGoku"
    }
  ]
};
