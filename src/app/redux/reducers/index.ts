import { isDevMode } from '@angular/core';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from '../state/appState';
import { ConfigReducer as configReducer } from './configReducer';
import { gameReducer } from './gameReducer';
import { playerReducer } from './playerReducer';
import { routerReducer } from '@ngrx/router-store';

export const reducers: ActionReducerMap<AppState> = {
  config: configReducer,
  game: gameReducer,
  player: playerReducer,
  router: routerReducer,
};

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [debug] : [];

export const selectConfigFeature = (state: AppState) => state.config;
export const selectGameFeature = (state: AppState) => state.game;
export const selectPlayerFeature = (state: AppState) => state.player;
export const selectRouterFeature = (state: AppState) => state.router;
