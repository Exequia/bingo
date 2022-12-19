import { GameStatus } from '@models';
import { createReducer, on } from '@ngrx/store';
import { initConfigurationGame } from '../actions';
import { initialGameState } from '../state/gameState';

export const gameReducer = createReducer(
  initialGameState,
  on(initConfigurationGame, (state, { gameConfig }) => ({
    ...state,
    status: GameStatus.initialized,
    config: gameConfig,
  }))
);
