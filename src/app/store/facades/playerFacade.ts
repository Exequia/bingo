import { Injectable } from '@angular/core';
import { CreatePlayerResponse, Dashboard, DashboardRowCellStatus, GamePlayerStatus } from '@app/models';
import { PlayerUtils } from '@app/utils/player/player-utils.service';
import { Store } from '@ngrx/store';
import { changePlayerStatus, createNewGamePlayer, createNewGamePlayerSuccess, setRoundDashboards, updateCellStatus } from '../actions';
import { selectPlayerFeature } from '../reducers';
import { selectGameGift } from '../selectors/gameSelectors';
import { AppState } from '../state';

@Injectable({
  providedIn: 'root'
})
export class PlayerFacade {
  player$ = this.store.select(selectPlayerFeature);
  gift$ = this.store.select(selectGameGift);

  constructor(private readonly store: Store<AppState>, private readonly playerUtils: PlayerUtils) {}

  createNewGamePlayer(name: string) {
    this.store.dispatch(createNewGamePlayer({ name }));
  }

  createNewGamePlayerSuccess(playerResponse: CreatePlayerResponse) {
    this.store.dispatch(createNewGamePlayerSuccess({ playerResponse }));
  }

  setPlayerStatusLazy() {
    this.changePlayerStatus(GamePlayerStatus.lazy);
  }

  setPlayerStatusShopping() {
    this.changePlayerStatus(GamePlayerStatus.shopping);
  }

  setPlayerStatusReady() {
    this.changePlayerStatus(GamePlayerStatus.ready);
  }

  private changePlayerStatus(playerStatus: GamePlayerStatus) {
    this.store.dispatch(changePlayerStatus({ playerStatus }));
  }

  setPlayerDashboard(dashboardsValues: number[][][]) {
    const gameRoundDashboards: Dashboard[] = this.playerUtils.fillDashboards(dashboardsValues);
    this.store.dispatch(setRoundDashboards({ gameRoundDashboards }));
  }

  upadtePlayerDashboard(gameRoundDashboards: Dashboard[]) {
    this.store.dispatch(setRoundDashboards({ gameRoundDashboards }));
  }

  setMatchCell(dashboardIndex: number, rowIndex: number, matchCellIndex: number) {
    // this.store.dispatch(setMatchCell({ dashboardIndex, rowIndex, matchCellIndex }));
    this.store.dispatch(updateCellStatus({ dashboardIndex, rowIndex, matchCellIndex, cellStatus: DashboardRowCellStatus.match }));
    setTimeout(() => {
      this.store.dispatch(updateCellStatus({ dashboardIndex, rowIndex, matchCellIndex, cellStatus: DashboardRowCellStatus.checked }));
    }, 1000);
  }
}
