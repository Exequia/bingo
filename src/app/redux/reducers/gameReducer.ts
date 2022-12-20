import { createReducer, on } from '@ngrx/store';
import { initConfigurationGame, setGameStatus } from '../actions';
import { initialGameState } from '../state/gameState';

export const gameReducer = createReducer(
  initialGameState,
  on(setGameStatus, (state, { gameStatus }) => ({
    ...state,
    status: gameStatus,
  })),
  on(initConfigurationGame, (state, { gameConfig }) => ({
    ...state,
    config: gameConfig,
  }))
);
