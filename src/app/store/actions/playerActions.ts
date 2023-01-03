import { CreatePlayerResponse, GamePlayerStatus, PlayerBase, PlayerResponse } from '@app/models';
import { createAction, props } from '@ngrx/store';

export const CREATE_PLAYER_NAME = '[Player] Create Player Name';
export const createNewGamePlayer = createAction(
  CREATE_PLAYER_NAME,
  props<{ name: string }>()
);

export const createNewGamePlayerSuccess = createAction(
  `${CREATE_PLAYER_NAME} Success`,
  props<{ playerResponse: CreatePlayerResponse }>()
);

export const createNewGamePlayerFailure = createAction(
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

export const setPlayerAmount = createAction(
  '[Player] Set Amount',
  props<{ amount: number }>()
);

export const playerShopping = createAction(
  '[Player] Start shopping',
  props<{ dashboardAmount: number }>()
);

export const changePlayerStatus = createAction(
  '[Player] Change Status',
  props<{ playerStatus: GamePlayerStatus }>()
);
