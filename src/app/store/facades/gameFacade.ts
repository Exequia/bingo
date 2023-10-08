import { Injectable } from '@angular/core';
import { DashboardRowCell, GameConfig, GameStatus, GiftResponse, RoundData, ShoppingResponse } from '@app/models';
import { Store } from '@ngrx/store';
import {
  initConfigurationGame,
  initGameConfigSuccess,
  manageGameGift,
  playerShopping,
  updateGameStatus,
  setGameStatusInit,
  shoppingRoundSuccess,
  updateGameRoundData,
  updatePlayerDashboards
} from '../actions';
import { selectGameConfig, selectGameStatus, selectRoundDashboards, selectRoundData } from '../selectors/gameSelectors';
import { AppState } from '../state';

@Injectable({
  providedIn: 'root'
})
export class GameFacade {
  gameStatus$ = this.store.select(selectGameStatus);
  gameConfig$ = this.store.select(selectGameConfig);
  roundDashboards$ = this.store.select(selectRoundDashboards);
  roundData$ = this.store.select(selectRoundData);

  constructor(private readonly store: Store<AppState>) {}

  setGameStatusInit() {
    this.store.dispatch(setGameStatusInit());
  }

  updateGameStatus(gameStatus: GameStatus) {
    this.store.dispatch(updateGameStatus({ gameStatus }));
  }

  initGameConfig(gameConfig: GameConfig) {
    this.store.dispatch(initConfigurationGame({ gameConfig }));
  }

  setGameConfigSuccess(gameConfig: GameConfig) {
    this.store.dispatch(initGameConfigSuccess({ gameConfig }));
  }

  playerShopping(dashboardAmount: number) {
    this.store.dispatch(playerShopping({ dashboardAmount }));
  }

  manageGameGift(gift: GiftResponse | undefined) {
    this.store.dispatch(manageGameGift({ gift }));
  }

  shoppingRoundSuccess(shoppingResponse: ShoppingResponse) {
    this.store.dispatch(shoppingRoundSuccess({ shoppingResponse }));
  }

  updateGameRoundData(roundData: RoundData) {
    this.store.dispatch(updateGameRoundData({ roundData }));
  }

  updatePlayerDashboards(newValue: DashboardRowCell) {
    this.store.dispatch(updatePlayerDashboards({ newValue }));
  }
}
