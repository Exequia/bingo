import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadGamePlayers } from '../entities/game-player.actions';
import { selectAllgamePlayers } from '../entities/game-player.reducer';
import { AppState } from '../state';
import { GamePlayer } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class GamePlayerFacade {
  gamePlayers$ = this.store.select(selectAllgamePlayers);

  constructor(
    private readonly store: Store<AppState>
  ) {}

  loadGamePlayers(gamePlayers: GamePlayer[]) {
    this.store.dispatch(loadGamePlayers({ gamePlayers }));
  }
}
