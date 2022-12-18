import { GameStatus } from '@models';
import { createReducer, on } from '@ngrx/store';
import { initConfigurationGame } from '../actions';
import { initialPlayerState } from '../state';
import { initialGameState } from '../state/gameState';

export const playerReducer = createReducer(
  initialPlayerState
  // initialGameState,
  // on(initConfigurationGame, (state) => ({
  //   ...state,
  //   status: GameStatus.initialized,
  // }))
);
