import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { GamePlayer } from '@app/models';

export const loadGamePlayers = createAction(
  '[GamePlayer/API] Load GamePlayers',
  props<{ gamePlayers: GamePlayer[] }>()
);

export const addGamePlayer = createAction(
  '[GamePlayer/API] Add GamePlayer',
  props<{ gamePlayer: GamePlayer }>()
);

export const upsertGamePlayer = createAction(
  '[GamePlayer/API] Upsert GamePlayer',
  props<{ gamePlayer: GamePlayer }>()
);

export const addGamePlayers = createAction(
  '[GamePlayer/API] Add GamePlayers',
  props<{ gamePlayers: GamePlayer[] }>()
);

export const upsertGamePlayers = createAction(
  '[GamePlayer/API] Upsert GamePlayers',
  props<{ gamePlayers: GamePlayer[] }>()
);

export const updateGamePlayer = createAction(
  '[GamePlayer/API] Update GamePlayer',
  props<{ gamePlayer: Update<GamePlayer> }>()
);

export const updateGamePlayers = createAction(
  '[GamePlayer/API] Update GamePlayers',
  props<{ gamePlayers: Update<GamePlayer>[] }>()
);

export const deleteGamePlayer = createAction(
  '[GamePlayer/API] Delete GamePlayer',
  props<{ id: string }>()
);

export const deleteGamePlayers = createAction(
  '[GamePlayer/API] Delete GamePlayers',
  props<{ ids: string[] }>()
);

export const clearGamePlayers = createAction(
  '[GamePlayer/API] Clear GamePlayers'
);
