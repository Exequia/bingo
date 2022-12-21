import { createReducer, on } from '@ngrx/store';
import { addCredit, saveLocalPlayer } from '../actions';
import { initialPlayerState } from '../state';

export const playerReducer = createReducer(
  initialPlayerState,
  on(saveLocalPlayer, (state, { player }) => ({
    ...state,
    id: player.id,
    name: player.name,
  })),
  on(addCredit, (state, { credit }) => ({
    ...state,
    amount: state.amount || 0 + credit,
  }))
);
