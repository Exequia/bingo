import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { AppState } from '../state/appState';
import { ConfigReducer } from './configReducer';
import { gameReducer } from './gameReducer';

export const reducers: ActionReducerMap<AppState> = {
  config: ConfigReducer,
  game: gameReducer
};


// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [debug] : [];


export const selectConfig = (state: AppState) => state.config;