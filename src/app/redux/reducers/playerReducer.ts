import { createReducer, on } from '@ngrx/store';
import { setPlayerName } from '../actions';
import { initialPlayerState } from '../state';

export const playerReducer = createReducer(
  initialPlayerState,
  on(setPlayerName, (state, { name }) => ({
    ...state,
    name,
  }))
);
