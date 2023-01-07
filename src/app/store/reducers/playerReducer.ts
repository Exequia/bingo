import { createReducer, on } from '@ngrx/store';
import { addCredit, changePlayerStatus, removePlayerOwner, saveLocalPlayer, setPlayerAmount, setPlayerOwner } from '../actions';
import { initialPlayerState } from '../state';

export const playerReducer = createReducer(
  initialPlayerState,
  on(saveLocalPlayer, (state, { player }) => ({
    ...state,
    id: player.id,
    name: player.name,
    amount: player.amount
  })),
  on(changePlayerStatus, (state, { playerStatus }) => ({
    ...state,
    status: playerStatus
  })),
  on(addCredit, (state, { credit }) => ({
    ...state,
    amount: state.amount || 0 + credit
  })),
  on(setPlayerAmount, (state, { amount }) => ({
    ...state,
    amount
  })),
  on(setPlayerOwner, state => ({
    ...state,
    owner: true
  })),
  on(removePlayerOwner, state => ({
    ...state,
    owner: false
  }))
);
