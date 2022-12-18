import { createAction, props } from '@ngrx/store';

export const SET_PLAYER_NAME = '[Player] Set Player Name';
export const SET_PLAYER_NAME_SUCCESS = '[Player] Set Player Name Success';
export const SET_PLAYER_NAME_FAILURE = '[Player] Set Player Name Failure';

export const setPlayerName = createAction(
  SET_PLAYER_NAME,
  props<{ name: string }>()
);

export const setPlayerNameSuccess = createAction(
  SET_PLAYER_NAME_SUCCESS,
  props<{ name: string }>()
);

export const setPlayerNameFailure = createAction(
  SET_PLAYER_NAME_FAILURE,
  props<{ name: string }>()
);
