import { Injectable } from '@angular/core';
import { GameConfig, GameStatus } from '@app/models';
import { Store } from '@ngrx/store';
import {
  initConfigurationGame,
  initConfigurationGameSuccess,
  setGameStatus,
} from '../actions';
import {
  selectGameConfig,
  selectGamePlayers,
  selectGameStatus,
} from '../selectors/gameSelectors';
import { AppState } from '../state';

@Injectable({
  providedIn: 'root',
})
export class GameFacade {
  gameStatus$ = this.store.select(selectGameStatus);
  gameConfig$ = this.store.select(selectGameConfig);
  gamePlayers$ = this.store.select(selectGamePlayers);

  constructor(private store: Store<AppState>) {}

  setGameStatusInit() {
    this.setGameStatus(GameStatus.initialized);
  }

  setGameStatusShopping() {
    this.setGameStatus(GameStatus.shopping);
  }

  private setGameStatus(gameStatus: GameStatus) {
    this.store.dispatch(setGameStatus({ gameStatus }));
  }

  initGameConfig(gameConfig: GameConfig) {
    this.store.dispatch(initConfigurationGame({ gameConfig }));
    this.store.dispatch(initConfigurationGameSuccess());
  }
}
