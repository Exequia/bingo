import { GamePlayer } from '@app/models';
import { GameConfig, GameStatus } from '../../models/game';

export interface GameState {
  status: GameStatus;
  players?: GamePlayer[];
  config?: GameConfig;
}

export const initialGameState: GameState = {
  status: GameStatus.pending,
  players: [
    {
      id: "homer",
      name: "Homer"
    },
    {
      id: "goku",
      name: "Goku"
    },
    {
      id: "homer",
      name: "Homer"
    },
    {
      id: "goku",
      name: "GokuGokuGokuGokuGokuGokuGoku"
    },
    {
      id: "homer",
      name: "Homer"
    },
    {
      id: "goku",
      name: "Goku"
    },
    {
      id: "homer",
      name: "Homer"
    },
    {
      id: "goku",
      name: "Goku"
    },
    {
      id: "homer",
      name: "Homer"
    },
    {
      id: "goku",
      name: "Goku"
    },
    {
      id: "homer",
      name: "Homer"
    },
    {
      id: "goku",
      name: "Goku"
    },
    {
      id: "homer",
      name: "Homer"
    },
    {
      id: "goku",
      name: "Goku"
    },
    {
      id: "homer",
      name: "Homer"
    },
    {
      id: "goku",
      name: "Goku"
    },
    {
      id: "homer",
      name: "Homer"
    },
    {
      id: "goku",
      name: "Goku"
    },
    {
      id: "homer",
      name: "Homer"
    },
    {
      id: "goku",
      name: "Goku"
    },
    {
      id: "homer",
      name: "Homer"
    },
    {
      id: "goku",
      name: "Goku"
    },
    {
      id: "homer",
      name: "Homer"
    },
    {
      id: "goku",
      name: "Goku"
    },
  ]
};
