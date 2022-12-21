import { createReducer, on } from '@ngrx/store';
import { saveLocalPlayer } from '../actions';
import { initialPlayerState } from '../state';

export const playerReducer = createReducer(
  initialPlayerState,
  on(saveLocalPlayer, (state, { player }) => ({
    ...state,
    id: player.id,
    name: player.name
  }))
);
