import { Injectable } from '@angular/core';
import { GamePlayerStatus } from '@app/models';
import { Store } from '@ngrx/store';
import {
  changePlayerStatus,
  createNewGamePlayer,
  setPlayerAmount,
} from '../actions';
import { selectPlayerFeature } from '../reducers';
import { selectGameGift } from '../selectors/gameSelectors';
import { AppState } from '../state';

@Injectable({
  providedIn: 'root',
})
export class PlayerFacade {
  player$ = this.store.select(selectPlayerFeature);
  gift$ = this.store.select(selectGameGift);

  constructor(private store: Store<AppState>) {}

  createNewGamePlayer(name: string) {
    this.store.dispatch(createNewGamePlayer({ name }));
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

  setPlayerAmount(amount: number) {
    this.store.dispatch(setPlayerAmount({ amount }));
  }
  
}
