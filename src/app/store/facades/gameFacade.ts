import { Injectable } from '@angular/core';
import { URL_GAME, URL_SHOPPING } from '@app/config';
import { GameConfig, GameStatus, GiftResponse } from '@app/models';
import { Store } from '@ngrx/store';
import {
  initConfigurationGame,
  initGameConfigSuccess,
  manageGameGift,
  playerShopping,
  saveGameGift,
  setGameConfig,
  setGameStatus as updateGameStatus,
  setGameStatusInit,
} from '../actions';
import { selectGameConfig, selectGameStatus } from '../selectors/gameSelectors';
import { AppState } from '../state';
import { RouterFacade } from './routerFacade';

@Injectable({
  providedIn: 'root',
})
export class GameFacade {
  gameStatus$ = this.store.select(selectGameStatus);
  gameConfig$ = this.store.select(selectGameConfig);

  constructor(
    private readonly store: Store<AppState>,
    private readonly routerFacade: RouterFacade
  ) {}

  setGameStatusInit() {
    this.store.dispatch(setGameStatusInit());
  }

  // setGameStatusShopping() {
  //   this.updateGameStatus(GameStatus.shopping);
  //   this.routerFacade.navigateTo(`/${URL_GAME}/${URL_SHOPPING}`);
  // }

  updateGameStatus(gameStatus: GameStatus) {
    this.store.dispatch(updateGameStatus({ gameStatus }));
  }

  initGameConfig(gameConfig: GameConfig) {
    this.store.dispatch(initConfigurationGame({ gameConfig }));
  }

  setGameConfigSuccess(gameConfig: GameConfig) {
    this.store.dispatch(initGameConfigSuccess({gameConfig}));
  }

  // setGameConfig(gameConfig: GameConfig) {
  //   this.store.dispatch(setGameConfig({ gameConfig }));
  // }

  playerShopping(dashboardAmount: number) {
    this.store.dispatch(playerShopping({ dashboardAmount }));
  }

  manageGameGift(gift: GiftResponse | undefined) {
    this.store.dispatch(manageGameGift({ gift }));
  }
}
