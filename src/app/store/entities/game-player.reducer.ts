import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as GamePlayerActions from './game-player.actions';
import { GamePlayer } from '@app/models';

export const gamePlayersFeatureKey = 'gamePlayers';
export const selectGamePlayerState = createFeatureSelector<GamePlayerState>(
  gamePlayersFeatureKey
);

export interface GamePlayerState extends EntityState<GamePlayer> {
  // additional entities state properties
}

export const gamePlayeradapter: EntityAdapter<GamePlayer> =
  createEntityAdapter<GamePlayer>();

export const initialState: GamePlayerState = gamePlayeradapter.getInitialState({
  // additional entity state properties
});

export const gamePlayerReducer = createReducer(
  initialState,
  on(GamePlayerActions.addGamePlayer, (state, action) =>
    gamePlayeradapter.addOne(action.gamePlayer, state)
  ),
  on(GamePlayerActions.upsertGamePlayer, (state, action) =>
    gamePlayeradapter.upsertOne(action.gamePlayer, state)
  ),
  on(GamePlayerActions.addGamePlayers, (state, action) =>
    gamePlayeradapter.addMany(action.gamePlayers, state)
  ),
  on(GamePlayerActions.upsertGamePlayers, (state, action) =>
    gamePlayeradapter.upsertMany(action.gamePlayers, state)
  ),
  on(GamePlayerActions.updateGamePlayer, (state, action) =>
    gamePlayeradapter.updateOne(action.gamePlayer, state)
  ),
  on(GamePlayerActions.updateGamePlayers, (state, action) =>
    gamePlayeradapter.updateMany(action.gamePlayers, state)
  ),
  on(GamePlayerActions.deleteGamePlayer, (state, action) =>
    gamePlayeradapter.removeOne(action.id, state)
  ),
  on(GamePlayerActions.deleteGamePlayers, (state, action) =>
    gamePlayeradapter.removeMany(action.ids, state)
  ),
  on(GamePlayerActions.loadGamePlayers, (state, action) =>
    gamePlayeradapter.setAll(action.gamePlayers, state)
  ),
  on(GamePlayerActions.clearGamePlayers, (state) =>
    gamePlayeradapter.removeAll(state)
  )
);

export const {
  selectIds: gamePlayerId,
  selectEntities: gamePlayersEntities,
  selectAll: selectAllgamePlayers,
  selectTotal: gamePlayerTotal,
} = gamePlayeradapter.getSelectors(selectGamePlayerState);
