import { Injectable } from '@angular/core';
import { BackService } from '@app/services/back/back.service';
import { Store } from '@ngrx/store';
import { loadGamePlayers } from '../entities/game-player.actions';
import { selectAllgamePlayers } from '../entities/game-player.reducer';
import { AppState } from '../state';
import { gamePlayersMock } from '@app/mocks';

@Injectable({
  providedIn: 'root',
})
export class GamePlayerFacade {
  gamePlayers$ = this.store.select(selectAllgamePlayers);

  constructor(
    private readonly store: Store<AppState>,
    private readonly back: BackService
  ) {}

  loadGamePlayers() {
    this.store.dispatch(loadGamePlayers({ gamePlayers: gamePlayersMock }));
  }
}
