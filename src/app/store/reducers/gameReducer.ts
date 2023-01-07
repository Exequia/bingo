import { createReducer, on } from '@ngrx/store';
import { initConfigurationGame, saveGameGift, setGameConfig, setGameStatus, setRoundDashboards } from '../actions';
import { initialGameState } from '../state/gameState';

export const gameReducer = createReducer(
  initialGameState,
  on(setGameStatus, (state, { gameStatus }) => ({
    ...state,
    status: gameStatus,
  })),
  on(setGameConfig, (state, { gameConfig }) => ({
    ...state,
    config: gameConfig,
  })),
  on(saveGameGift, (state, { gift }) => ({
    ...state,
    gift,
  })),
  on(setRoundDashboards, (state, { gameRoundDashboards }) => ({
    ...state,
    roundDashboards: gameRoundDashboards,
  }))
);
