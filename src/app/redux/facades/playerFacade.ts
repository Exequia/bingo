import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCredit, createNewGamePlayer } from '../actions';
import { selectPlayerFeature } from '../reducers';
import { AppState } from '../state';

@Injectable({
  providedIn: 'root',
})
export class PlayerFacade {
  player$ = this.store.select(selectPlayerFeature);

  constructor(private store: Store<AppState>) {}

  createNewGamePlayer(name: string) {
    this.store.dispatch(createNewGamePlayer({name}));
  }

  addCredit(credit: number) {
    this.store.dispatch(addCredit({credit}));
  }
}
