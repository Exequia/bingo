import { Injectable } from '@angular/core';
import { GameConfig } from '@app/models';
import { Store } from '@ngrx/store';
import { initConfigurationGame, initConfigurationGameSuccess } from '../actions';
import { selectGameConfig, selectGamePlayers } from '../selectors/gameSelectors';
import { AppState } from '../state';

@Injectable({
  providedIn: 'root',
})
export class GameFacade {
  gameConfig$ = this.store.select(selectGameConfig);
  gamePlayers$ = this.store.select(selectGamePlayers);

  constructor(private store: Store<AppState>) {}

  initGameConfig(gameConfig: GameConfig) {
    this.store.dispatch(initConfigurationGame({gameConfig}));
    this.store.dispatch(initConfigurationGameSuccess());
  }
}
