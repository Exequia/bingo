import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectGameFeature } from '../reducers';
import { selectProgressConfig } from '../selectors';
import { selectGameConfig, selectGamePlayers } from '../selectors/gameSelectors';
import { AppState } from '../state';

@Injectable({
  providedIn: 'root',
})
export class GameFacade {
  // game$ = this.store.select(selectGameFeature);
  gameConfig$ = this.store.select(selectGameConfig);
  gamePlayers$ = this.store.select(selectGamePlayers);

  constructor(private store: Store<AppState>) {}
}
