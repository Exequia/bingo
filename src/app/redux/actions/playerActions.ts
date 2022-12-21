import { GamePlayer, PlayerBase } from '@app/models';
import { createAction, props } from '@ngrx/store';

export const CREATE_PLAYER_NAME = '[Player] Create Player Name';
export const createNewGamePlayer = createAction(
  CREATE_PLAYER_NAME,
  props<{ name: string }>()
  );

export const setPlayerNameSuccess = createAction(
  `${CREATE_PLAYER_NAME} Success`,
  props<{ name: string }>()
);

export const setPlayerNameFailure = createAction(
  `${CREATE_PLAYER_NAME} Failure`,
  props<{ name: string }>()
);
  
export const saveLocalPlayer = createAction(
  '[Player] Save Local Player',
  props<{ player: PlayerBase }>()
);

export const addCredit = createAction(
  '[Player] Add Credit to Local Player',
  props<{ credit: number }>()
  );
