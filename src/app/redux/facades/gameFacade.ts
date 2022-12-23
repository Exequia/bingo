import { Injectable } from '@angular/core';
import { URL_GAME, URL_SHOPPING } from '@app/config';
import { GameConfig, GameStatus, GiftResponse } from '@app/models';
import { Store } from '@ngrx/store';
import {
  initConfigurationGame,
  initConfigurationGameSuccess,
  manageGameGift,
  playerShopping,
  saveGameGift,
  setGameStatus,
} from '../actions';
import {
  selectGameConfig,
  selectGamePlayers,
  selectGameStatus,
} from '../selectors/gameSelectors';
import { AppState } from '../state';
import { RouterFacade } from './routerFacade';

@Injectable({
  providedIn: 'root',
})
export class GameFacade {
  gameStatus$ = this.store.select(selectGameStatus);
  gameConfig$ = this.store.select(selectGameConfig);
  gamePlayers$ = this.store.select(selectGamePlayers);

  constructor(
    private readonly store: Store<AppState>,
    private readonly routerFacade: RouterFacade
  ) {}

  setGameStatusInit() {
    this.setGameStatus(GameStatus.initialized);
  }

  setGameStatusShopping() {
    this.setGameStatus(GameStatus.shopping);
    this.routerFacade.navigateTo(`/${URL_GAME}/${URL_SHOPPING}`);
  }

  private setGameStatus(gameStatus: GameStatus) {
    this.store.dispatch(setGameStatus({ gameStatus }));
  }

  initGameConfig(gameConfig: GameConfig) {
    this.store.dispatch(initConfigurationGame({ gameConfig }));
    this.store.dispatch(initConfigurationGameSuccess());
  }

  playerShopping(dashboardAmount: number) {
    this.store.dispatch(playerShopping({ dashboardAmount }));
  }

  manageGameGift(gift: GiftResponse | undefined) {
    this.store.dispatch(manageGameGift({ gift }));
  }
}
