import { createAction, props } from '@ngrx/store';
import { Languages } from '@models';

export const SET_PLAYER_NAME = '[Player] Set Language'

export const setPlayerName = createAction(
  SET_PLAYER_NAME,
  props<{ language: Languages }>()
);
